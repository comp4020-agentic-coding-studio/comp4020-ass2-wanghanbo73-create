# Process overview

## What I built

SLOP4xxx, "Debugging Systems You Did Not Build": a twelve-week course that
treats diagnosing an inherited, failing system as a distinct discipline,
graded on the trail of observation, hypothesis, evidence, and verification a
student produces, not on whether the final patch happens to work.

## How I got here

### Designing before generating

I did not start by generating pages. I first fixed the course's identity,
its twelve-week arc, and its assessment scheme as separate design documents —
[`c6c0885`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wanghanbo73-create/commit/c6c0885),
[`27cb93e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wanghanbo73-create/commit/27cb93e),
[`18ed3d4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wanghanbo73-create/commit/18ed3d4).
The load-bearing decision made there is that the twelve weeks are ordered by
*where uncertainty sits in an investigation* — clean evidence with competing
hypotheses (Week 6) versus evidence that is itself unreliable (Week 7); a
diagnosis made easy so intervention risk becomes the lesson (Week 8) — rather
than by technology or debugging tool. That distinction is what stopped later
weeks from becoming a reskin of each other.

### Turning design into constraints

[`904d006`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wanghanbo73-create/commit/904d006)
turned those design documents into `CLAUDE.md` and `spec/`, and this is where
I constrained the agent rather than trusting its output. I deliberately did
not add frontmatter fields like `incident` or `cycle` just to make qualitative
promises (that every week opens from a failure, that Week 12 is a live
defence) mechanically checkable — a field invented solely so a test can read
it isn't a real course contract, so those promises stay judged by a human
reader against `CLAUDE.md`, while `spec/` only asserts what the generated
course API can actually prove: week coverage and the 15/25/25/35 weighting.

### Building in controlled batches

Content was generated in four batches —
[`17229fc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wanghanbo73-create/commit/17229fc)
for core pages,
[`d0fc9bb...90d0a85`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wanghanbo73-create/compare/d0fc9bb...90d0a85)
for Weeks 1–12 — never all twelve weeks in one pass. Each batch ended with me
reviewing the agent's own output for repetition and drift before the next
batch started: an early pass toward Weeks 6–7 initially blurred the
hypothesis-space-versus-evidence-reliability distinction, and I rejected that
draft and required the two failure modes to be named explicitly.

### Responding to failures

The build's link checker caught a hand-written `href="/sessions/"` that
resolved on localhost but would 404 under the deployed base path; I fixed it
with the theme's `withBase()` rather than disabling the checker. A frontmatter
spec list with an unquoted colon similarly broke YAML parsing and was a
content fix, not a checker workaround.

### Final verification

The closing audit found no defect in the taught content, so I made no
cosmetic edits there to manufacture activity. It did find that
`pnpm check:evidence` still failed: two person entries and four images were
still the starter's placeholders. I replaced the bios and removed the
starter images for a deliberate image-free treatment rather than fabricating
artwork, which the starter's own rules permit.
