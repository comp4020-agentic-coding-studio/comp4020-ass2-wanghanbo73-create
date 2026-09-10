# SLOP4xxx — Debugging Systems You Did Not Build

**Subtitle:** A forensic approach to understanding and repairing unfamiliar software.

Internal design artefact. Not student-facing content. Decisions recorded here
are inputs to the site, to `CLAUDE.md`, and to later spec checks — they are not
themselves the deliverable.

---

## 1. Course positioning statement

This course treats an unfamiliar codebase as a scene to be investigated, not a
subject to be mastered. Students are handed systems they did not design, with
partial documentation, unexplained behaviour, and a live failure, and are asked
to work from symptom to cause under those conditions rather than the ideal
ones assumed by most software teaching. The discipline is procedural: form a
hypothesis before touching code, gather evidence that could disprove it, narrow
the space of possible causes before intervening, and verify that an
intervention addressed the fault rather than merely displaced it. Tools and
languages vary across weeks by design, since the constant is the reasoning
process, not the stack. Students leave able to enter a system cold, reconstruct
enough of its intended behaviour to reason about it, and defend a diagnosis
with evidence rather than intuition.

## 2. Intended student cohort

Upper-level undergraduate or entry postgraduate students who have written
enough software to have a working model of programs, but who are consistently
put in a position — internships, group projects, open-source contributions,
inherited work — of having to operate on code they did not write and cannot
fully explain. The course is aimed at that gap: it assumes competent
programmers, not novices, and treats "reading and diagnosing someone else's
system" as its own skill rather than a byproduct of general programming
ability.

## 3. Prerequisites

- Comfortable reading and writing code in at least one imperative or
  object-oriented language, and able to pick up the syntax of an unfamiliar
  one from context.
- Prior exposure to version control, a debugger, and the basic idea of
  automated tests — not mastery of any of them.
- One prior systems-adjacent course (e.g. an operating systems, databases, or
  software construction course) is recommended but not required, since the
  course supplies enough context on any system it uses to make the fault
  reachable without that background.

No specific framework, language, or platform is assumed. The bar is judgment
and code literacy, not tool familiarity.

## 4. Learning outcomes

By the end of the course, students will be able to:

1. Reconstruct a working model of an unfamiliar system's intended behaviour
   from its code, structure, and available documentation, explicitly marking
   what remains unknown.
2. Formulate falsifiable hypotheses about the cause of an observed failure,
   and design the smallest observation or experiment that could rule a
   hypothesis out.
3. Collect and interpret evidence — logs, traces, state snapshots, targeted
   instrumentation — appropriate to a given system and failure, and
   distinguish signal from coincidence in it.
4. Narrow a fault to a specific, defensible location in a system, and justify
   why alternative explanations were excluded rather than merely unconsidered.
5. Propose and apply a minimal, targeted intervention, and verify that it
   resolves the original failure without relying on the fact that the symptom
   disappeared as sole evidence.

## 5. Core teaching principles

These are written to be encodable later as durable rules in `CLAUDE.md`.

1. **Every session starts from a failure, not a topic.** Content is
   introduced only when the current investigation needs it, never as a
   standalone lecture on a technology.
2. **The cycle is mandatory scaffolding, not a suggestion.** Observe →
   Hypothesise → Gather Evidence → Reduce Uncertainty → Intervene → Verify is
   the structure every exercise, submission, and rubric is built around.
3. **A hypothesis without a disconfirmation test does not count.** Students
   must state what evidence would prove them wrong before they go looking for
   evidence that they are right.
4. **Fixing the symptom is not the goal.** An intervention is only accepted
   once it is tied back to the diagnosed cause and verified against it, not
   against the absence of the original error.
5. **The system is deliberately someone else's.** Exercises use codebases,
   logs, and incidents the student did not author and was not present for;
   students are never debugging their own prior work.
6. **Tool-agnosticism is enforced.** No single debugger, logging framework, or
   language is treated as the subject matter; the same reasoning process must
   transfer when the tooling changes underneath it.

## 6. What this course does not teach

- It is not a tour of debugging tools, IDE features, or logging/observability
  platforms; any tool that appears is incidental to a specific exercise, not
  course content in itself.
- It does not teach software construction, architecture, or "how to write
  good code" — students are not asked to design greenfield systems; any code 
  they write exists to investigate, instrument, repair, or verify an inherited one.
- It is not a general software engineering or systems course organised by
  topic (databases, networking, concurrency, performance); those domains only
  appear as the setting for a specific fault, never as chapters to cover.
- It does not treat debugging as trial-and-error keyboard skill, and does not
  reward finding the right answer by chance without the evidence trail that
  justifies it.
- It is not an introductory programming course; it does not teach students to
  read code for the first time, only to reason about code they can already
  read.

## 7. High-level progression, Weeks 1–12

Presented as arc, not a syllabus — no weekly titles or content yet.

- **Weeks 1–2 — Establishing the method.** Introduce the investigative cycle
  itself on small, contained systems where the fault is findable quickly, so
  the process, not the difficulty of the system, is what's being learned.
- **Weeks 3–5 — Widening the evidence base.** Increase system size and reduce
  documentation, forcing students to rely on more varied evidence (structural
  reading, runtime observation, historical artefacts) to compensate.
- **Weeks 6–7 — Ambiguity and competing hypotheses.** Introduce cases with
  more than one plausible cause, where the graded skill is exclusion and
  evidence weighing rather than eventually stumbling onto the right one.
- **Weeks 8–9 — Intervention under constraint.** Faults where the obvious fix
  is unsafe, partial, or has side effects, requiring students to justify an
  intervention's scope and verify it doesn't just relocate the failure.
- **Weeks 10–11 — Full inherited systems.** Larger, less curated systems
  closer to a real inheritance scenario, integrating prior methods under substantially 
  reduced scaffolding, larger system boundaries, and incomplete operational context.
- **Week 12 — Synthesis and defence.** Students investigate a previously unseen
  system assigned to them and defend their diagnosis and intervention under
  questioning, rather than merely presenting the final result.

## 8. Writing voice and teaching style

Precise and procedural, closer to an incident report or a forensic
methodology text than a textbook or a marketing page. Second person is fine
for instructions; the tone stays measured even when the content is a broken
system — no exclamation, no "exciting," no urgency theatre. Claims about a
system's behaviour are phrased with the same epistemic care the course asks
of students: stated confidence should match actual evidence, and gaps in
knowledge are named rather than smoothed over. Humour, if any, is dry and
occasional, never at the expense of the material's credibility. Every piece of
site content should model the standard it teaches: a claim, the evidence for
it, and what would have falsified it.

---

## Course-design check

**What is the single central idea of this course?**
That understanding an unfamiliar, failing system is a distinct, teachable
discipline — closer to forensic investigation than to programming — built on
disciplined hypothesis formation and evidence gathering, and it is separable
from both "knowing how to code" and "knowing a specific debugging tool."

**Why is the topic narrow enough to be distinctive but deep enough for twelve
weeks?**
It is narrow because it explicitly excludes system construction, tool
training, and topic-by-topic coverage of systems concepts — the only constant
across all twelve weeks is the six-step reasoning cycle applied to someone
else's code. It sustains twelve weeks because the variable being taught is not
the process (fixed early, in Weeks 1–2) but the conditions the process must
survive: less documentation, larger systems, competing hypotheses, unsafe
interventions, and eventually a full inherited system with no scaffolding —
each a genuine escalation in difficulty, not a repetition of the same lesson.

**What are the three most likely ways this course could go wrong?**
1. Drifting into a generic debugging-tools or software-engineering course
   because a given week's system is domain-flavoured (e.g. a database or a
   concurrent service) and the teaching accidentally becomes about that
   domain instead of about the investigation of it.
2. Letting the cycle become a form to fill in after the fact — students
   finding the bug first by trial-and-error and then reverse-engineering a
   hypothesis and evidence trail to match, which defeats the course's actual
   purpose.
3. Curating exercise systems so cleanly that the "incomplete documentation
   and unclear behaviour" premise is undermined — a fault that is too easy to
   spot removes the need for the evidence discipline the course exists to
   teach.
