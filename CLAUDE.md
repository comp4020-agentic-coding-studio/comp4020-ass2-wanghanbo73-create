# CLAUDE.md — SLOP4xxx durable harness

This file is the condensed contract for any agent working on this repo after
this point. It does not repeat the platform mechanics in `README.md` or the
full reasoning in `docs/*.md` — read those when you need the "why"; this file
is the "what must stay true."

## 1. Course identity

SLOP4xxx — *Debugging Systems You Did Not Build* — teaches disciplined
investigation of software the student did not write and does not fully
understand. It is not a tools course, not a generic software-engineering
course, and not organised by technology topic.

Every piece of graded work runs the same fixed cycle:

**Observe → Hypothesise → Gather Evidence → Reduce Uncertainty → Intervene → Verify**

Any content, task, or rubric that doesn't map onto this cycle is off-course,
regardless of how good it is as generic SE material.

## 2. Source priority order

When sources conflict, resolve in this order:

1. `README.md` — fixed platform constraints (cannot be overridden)
2. `docs/course-design.md` — course identity, principles, exclusions
3. `docs/curriculum-plan.md` — week-by-week design
4. `docs/assessment-plan.md` — assessment system
5. Already-implemented, accepted site content (don't silently re-derive it)
6. Your own inference, as a last resort

**Do not silently resolve genuine conflicts** between these sources (as
opposed to simple gaps, which you may fill by inference). Surface the
conflict to the user/reviewer explicitly and let them decide.

## 3. Curriculum rules

- Weeks open with a failure or an incident, not a topic lecture.
- The graded skill is investigation, not fluency with a specific tool.
- Observation and assumption are different things — content must keep
  students from treating an assumption as an observed fact.
- Hypotheses must be falsifiable, not vague or unfalsifiable "vibes."
- Evidence exists to answer a specific question in play — not evidence for
  its own sake.
- Later weeks reuse earlier investigative habits; they don't reintroduce the
  cycle from scratch each week.
- Technical domains (web, systems, data, etc.) are *settings* for an
  investigation, not chapters of content to cover.
- Systems in every scenario are **inherited**, never greenfield — students
  are always arriving after someone else, not building from a blank repo.
- Code exists to be investigated, instrumented, tested, minimally repaired,
  and then verified — not extended with new features.
- Removing a symptom is never sufficient evidence that the underlying fault
  is understood or fixed.
- Uncertainty must be stated explicitly wherever it exists — "I don't know
  yet" is a valid and expected artefact of the process, not a gap to hide.

## 4. Twelve-week progression constraints

- **Weeks 1–2**: heavy scaffolding; the cycle is modelled explicitly.
- **Weeks 3–5**: evidence sources widen; scaffolding starts to recede.
- **Weeks 6–7**: students face competing hypotheses and conflicting or
  unreliable evidence, rather than a single clean root cause.single clean root cause.
- **Weeks 8–9**: intervention and verification become the central skill —
  not just diagnosis.
- **Weeks 10–11**: large, unfamiliar systems, minimal scaffolding.
- **Week 12**: unassisted defence of a full investigation, under
  questioning.

Across all twelve weeks: maintain genuine continuity (later weeks build on
specific earlier habits/evidence, not just "more of the same"), and never
reskin the same weekly structure with different technical nouns — each week
must differ in more than its surface topic (see §6, §7).

## 5. Assessment rules

- Exactly four assessments, weights **15 / 25 / 25 / 35**, summing to
  **exactly 100%**. This is the accepted scheme from `docs/assessment-plan.md`
  — do not renegotiate it implicitly by editing assessment content.
- All assessments are individual.
- Grading rewards the investigative *process* over final correctness of the
  fix. A student who investigates well but doesn't fully resolve the fault
  should be able to score well; a student who stumbles onto the right fix
  without evidence should not.
- No assessment objective is "build/ship a new feature" — greenfield feature
  development is never the graded activity.
- The Final (Assessment 4, Week 12) must be harder than earlier assessments
  because scaffolding is withdrawn, not merely because the codebase is
  bigger. It requires the full six-stage cycle and a live defence component.

## 6. Writing voice

Precise, procedural, measured — like a forensic report, not marketing copy.
Distinguish stated fact from stated assumption explicitly. State uncertainty
where it exists rather than smoothing over it. No urgency theatre.

Never use: "rapidly evolving", "transformative", "exciting", "unlock the
power of", "real-world skills", "dive into", "cutting-edge", "comprehensive
journey", or equivalent generic AI-promotional phrasing.

Avoid pages that are structurally identical with only nouns swapped — if two
weeks' pages could be diffed into each other by find-and-replace, they are
not doing their job.

## 7. Content anti-patterns — reject these

- Week titles that are just topic-chapter nouns ("Databases", "APIs",
  "Concurrency") instead of an investigative question or incident framing.
- The generic Intro → Concepts → Applications → Future-Trends shape.
- Repeated page structure with only the technical noun changed week to week.
- Root causes that are unrealistically obvious from the first symptom.
- Revealing the root cause before the student has gathered enough evidence
  to have earned it.
- Grading that rewards trial-and-error poking over structured investigation.
- Grading where final correctness dominates the rubric over process.
- Curriculum that is secretly a tool tutorial (e.g. "learn to use debugger
  X") wearing an investigation-themed label.
- Generic promotional prose anywhere in student-facing content.

## 8. Agent workflow requirements

- Inspect the repository (schemas, existing content, existing checks) before
  editing anything. Do not assume structure from memory of a prior session.
- Preserve all fixed SlopU/platform structures named in `README.md`: the four
  content collections and their keys, the build pipeline, the generated API,
  the Slop branding.
- Use the existing content collections and generated course API rather than
  inventing a parallel content mechanism. Do not add synthetic frontmatter
  fields (e.g. an `incident`, `dependsOn`, `cycle`, or `requiresDefence` key)
  purely to make a curriculum promise mechanically checkable — the content
  model is fixed by the starter, and a field invented solely for `spec/` to
  read is not part of it.
- Prefer small, targeted changes over broad rewrites.
- Some curriculum promises are qualitative and have no home in the existing
  schema: that every week opens from a concrete incident (not a topic
  lecture), that Week 3 onward visibly builds on earlier investigation
  practice, that the six-stage cycle (§1) is actually exercised rather than
  merely named, and that the Final requires a live defence. These are real
  requirements, enforced through this file and human review at the crit —
  not through invented metadata. Only write an automated `spec/` check for a
  promise the existing schema or a stable, already-present structural fact
  can validate robustly (e.g. `week`, `weight`, `slides`, a title string) —
  do not simulate schema coverage with keyword or exact-prose matching.
- After making changes, run `pnpm check` (and `pnpm typecheck` on its own if
  the full build is failing for unrelated reasons) and read the output.
- Never weaken, loosen, or delete a valid check purely to make placeholder or
  incomplete content pass. A failing check that correctly names an unmet
  course promise is working as intended — report it, don't silence it.
- If a check fails only because real course content hasn't been written yet,
  say so plainly and distinguish that from a genuine implementation or
  syntax error in the check itself or the build.
- Do not commit changes automatically. Leave commits to the user.
