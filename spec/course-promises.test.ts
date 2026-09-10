import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// These checks protect promises made in docs/curriculum-plan.md and
// docs/assessment-plan.md that the build/typecheck cannot enforce on their
// own. They read the generated course API the same way data-integrity.test.ts
// does, so they depend on `pnpm build` having produced dist/api/index.json.

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

const WEEKLY_TYPES = ["sessions", "lectures"];

function nodesForWeek(week: number): ApiNode[] {
  return api.nodes.filter(
    (node) => WEEKLY_TYPES.includes(node.type) && Number(node.meta?.week) === week,
  );
}

describe("twelve-week teaching coverage (docs/curriculum-plan.md)", () => {
  it("has at least one session or lecture for every week 1-12, no more, no fewer", () => {
    const missing: number[] = [];
    for (let week = 1; week <= 12; week++) {
      if (nodesForWeek(week).length === 0) missing.push(week);
    }
    expect(missing, `weeks with no teaching content: ${missing.join(", ") || "none"}`).toEqual([]);
  });
});

describe("assessment weighting matches the accepted scheme (docs/assessment-plan.md)", () => {
  it("has exactly four assessments weighted 15/25/25/35, summing to 100", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    expect(assessments, "expected exactly 4 assessment nodes").toHaveLength(4);

    const weights = assessments
      .map((node) => Number(node.meta?.weight))
      .sort((a, b) => a - b);
    expect(weights, "assessment weights must match the accepted 15/25/25/35 scheme").toEqual([
      15, 25, 25, 35,
    ]);
    expect(weights.reduce((sum, w) => sum + w, 0)).toBe(100);
  });
});

// Whether every week opens from a concrete incident, whether Week 3+
// visibly builds on earlier investigation practice, and whether the Final
// exercises the full six-stage cycle with a live defence are all real
// requirements (CLAUDE.md §§3-5) — but none of them has a home in the
// starter's fixed schema (courseNodeSchema / content.config.ts carry no
// `incident`, `dependsOn`, or `cycle` field). Rather than invent frontmatter
// solely to make those checkable, they stay qualitative: judged by a human
// reader against CLAUDE.md and docs/curriculum-plan.md at the crit, not by
// a `spec/` assertion here.

describe("the Final assessment is the heaviest-weighted, in week 12 (docs/assessment-plan.md)", () => {
  it("schedules the week-12 assessment as the single 35%-weighted one", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    const finalAssessment = assessments.find((node) => Number(node.meta?.week) === 12);
    expect(finalAssessment, "no assessment scheduled in week 12").toBeTruthy();
    expect(
      Number(finalAssessment?.meta?.weight),
      "the week-12 assessment must carry the 35% weight (the heaviest of the four)",
    ).toBe(35);
  });
});
