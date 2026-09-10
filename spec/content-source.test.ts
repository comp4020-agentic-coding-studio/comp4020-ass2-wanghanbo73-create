import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// These checks read src/content directly rather than the generated API, so
// they run without a successful `pnpm build` — useful when the build is
// blocked by something unrelated to course content (e.g. the fixed theme's
// accessibility gate), since they still give real signal on content shape.
//
// Frontmatter is scanned with plain line matching rather than a YAML parser
// (no YAML library is a direct dependency of this project) — sufficient for
// the single scalar fields these checks need, on frontmatter this course's
// own content authors write.

interface Frontmatter {
  title?: string;
  slides?: string;
}

function readFrontmatter(dir: string, file: string): Frontmatter {
  const source = readFileSync(resolve(dir, file), "utf8");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return {};
  const block = match[1];
  const title = block.match(/^title:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, "");
  const slides = block.match(/^slides:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, "");
  return { title, slides };
}

function markdownFiles(dir: string): string[] {
  return readdirSync(resolve(dir)).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

describe("lecture slide links resolve to a real deck (astromotion contract)", () => {
  it("has a src/decks/<name>.deck.mdx for every lecture's `slides` field", () => {
    const dir = "src/content/lectures";
    const missing: string[] = [];
    for (const file of markdownFiles(dir)) {
      const fm = readFrontmatter(dir, file);
      if (!fm.slides) continue;
      const deckName = fm.slides.replace(/^\/decks\//, "").replace(/\/$/, "");
      const deckPath = resolve("src/decks", `${deckName}.deck.mdx`);
      if (!existsSync(deckPath)) missing.push(`${file} -> ${fm.slides}`);
    }
    expect(missing, `lectures pointing at a non-existent deck: ${missing.join(", ") || "none"}`).toEqual(
      [],
    );
  });
});

describe("week titles avoid generic topic-chapter framing (docs/course-design.md voice)", () => {
  // Deliberately a small, structural list of bare topic-chapter nouns, not a
  // wording check on real titles: a title that clears this bar can still be
  // bad, but a title that fails it is unambiguously off-course.
  const BANNED_TITLES = [
    "introduction",
    "overview",
    "fundamentals",
    "basics",
    "concepts",
    "applications",
    "future trends",
    "conclusion",
    "wrap up",
    "wrap-up",
    "summary",
  ];

  it("rejects session/lecture titles that are just a bare generic-chapter word", () => {
    const offenders: string[] = [];
    for (const dir of ["src/content/sessions", "src/content/lectures"]) {
      for (const file of markdownFiles(dir)) {
        const fm = readFrontmatter(dir, file);
        const title = (fm.title ?? "").trim().toLowerCase();
        if (BANNED_TITLES.includes(title)) offenders.push(`${dir}/${file}: "${fm.title}"`);
      }
    }
    expect(offenders, `generic chapter-style titles: ${offenders.join(", ") || "none"}`).toEqual([]);
  });
});
