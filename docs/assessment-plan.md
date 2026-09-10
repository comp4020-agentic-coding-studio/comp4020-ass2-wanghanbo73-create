# SLOP4xxx — Assessment Plan (Stage 3)

Internal assessment-design artefact, built on `docs/course-design.md` and
`docs/curriculum-plan.md`. This document does not redefine the course's
positioning, learning outcomes, or twelve-week progression; it operationalises
them into a graded assessment system. It does not substitute for
student-facing assessment pages, published rubrics, `CLAUDE.md`, or `spec/`
checks — those are implemented later from the decisions recorded here.

The investigative cycle referenced throughout is fixed:

**Observe → Hypothesise → Gather Evidence → Reduce Uncertainty → Intervene → Verify.**

---

## Assessment Philosophy

The course's central claim, established in `docs/course-design.md`, is that
understanding and repairing an unfamiliar system is a distinct, teachable
discipline — separable from "knowing how to code" and from "knowing a specific
debugging tool."

If assessment were keyed primarily to whether the final bug was fixed, it would
silently abandon that claim. A student who finds the fault by repeatedly
editing code until a test suite goes green has demonstrated persistence and
perhaps familiarity with tooling, but not necessarily the reasoning the course
exists to teach.

Two students can arrive at an identical patch by entirely different routes:
one through a disciplined chain of observations, falsifiable hypotheses,
disconfirming tests, and evidence-backed narrowing; the other through
trial-and-error. A correctness-only rubric cannot distinguish those processes.

Conversely, a student can conduct a rigorous, well-evidenced investigation that
correctly narrows a fault to a specific location and still be unable to complete
a full repair because the inherited system is genuinely complex. A
correctness-only rubric would undervalue that student despite their having
demonstrated the central investigative skill of the course.

Assessment is therefore built around the evidence trail produced by the full
investigative cycle:

**Observe → Hypothesise → Gather Evidence → Reduce Uncertainty → Intervene → Verify**

The final state of the system remains relevant, but it is one piece of evidence
within a larger graded argument rather than the sole graded artefact.

---

## Assessment Overview

| Assessment                      | Weight   | Weeks | Mode       |
| ------------------------------- | -------- | ----- | ---------- |
| 1. Debugging Field Notes        | 15%      | 1–4   | Individual |
| 2. Broken Service Investigation | 25%      | 3–7   | Individual |
| 3. Incident Reconstruction      | 25%      | 5–9   | Individual |
| 4. Final Unknown System         | 35%      | 10–12 | Individual |
| **Total**                       | **100%** |       |            |

All four assessments are individual. Collaborative investigation may still
appear in tutorials and practical activities, but graded submissions require
each student to demonstrate their own evidence trail and reasoning.

The sequence moves from tightly scaffolded investigation habits toward
independent investigation of larger, less reliable inherited systems.

---

## Assessment 1 — Debugging Field Notes

* **Weighting:** 15%
* **Timing:** Weeks 1–4; submitted as short staged entries across the four
  weeks rather than one end-of-block report.
* **Mode:** Individual.
* **Purpose:** Provide a low-risk transition from guided in-class practice to
  assessed investigation. Establish before anything more complex is graded
  that students can observe precisely, form a falsifiable hypothesis, commit
  to a disconfirming test, gather relevant evidence, update their reasoning,
  make a tightly scoped intervention where appropriate, and verify what that
  intervention changed.
* **Task premise:** A small set of contained single- or few-file systems
  matching the Week 1–4 incident premises in `docs/curriculum-plan.md`:
  an observation-focused exercise, a hypothesis-and-test exercise, a
  structural-reading exercise, and a runtime-evidence exercise. Each entry is
  short and tied to that week's specific skill target.
* **Required student deliverables:**

    * One short field-notes entry for each included week, four entries total.
    * Each entry follows the same investigation structure:
      observation log, hypothesis, disconfirming test recorded before execution,
      evidence gathered, change in uncertainty, intervention if appropriate,
      verification result, and revised conclusion.
    * No final "lessons learned" essay; the entries themselves are the
      deliverable.
* **Learning outcomes assessed:** LO1 (reconstruct intended behaviour) and
  LO2 (falsifiable hypotheses and disconfirmation), with early evidence of LO3.
* **Teaching weeks it depends on:** Weeks 1–4 directly; no dependency on later
  weeks.
* **Evidence students must provide:** Direct program output, source excerpts,
  the student's own probing inputs, and — from Week 4 — runtime logs or traces
  from instrumentation the student added.
* **How the investigative cycle appears:** Each entry follows the complete
  Observe → Hypothesise → Gather Evidence → Reduce Uncertainty → Intervene →
  Verify structure. In these early exercises, Reduce Uncertainty, Intervene,
  and Verify are tightly scaffolded and carry less assessment weight, while
  observation, hypothesis formation, and disconfirmation remain the primary
  learning focus.
* **What distinguishes high-quality work from a correct fix:** A high mark
  requires that the hypothesis was genuinely falsifiable, that the proposed
  test could have counted against it, and that the student's conclusion
  follows from what the evidence actually showed. Correctly abandoning an
  initial hypothesis is evidence of good investigation, not failure. A student
  who reaches the correct answer but cannot demonstrate this trail cannot
  score highly merely because the final symptom disappeared.

---

## Assessment 2 — Broken Service Investigation

* **Weighting:** 25%
* **Timing:** Released after Week 3 and due around Week 7.
* **Mode:** Individual.
* **Purpose:** Assess the ability to reconstruct an unfamiliar system's
  intended behaviour without reliable onboarding documentation, gather
  multiple evidence classes, maintain genuinely competing hypotheses, and
  reduce uncertainty through discriminating evidence rather than settling on
  the first explanation that fits.
* **Task premise:** Students receive an unfamiliar multi-module service or
  repository with no onboarding document and a failure report written as a
  symptom description rather than a diagnosis. The system is scoped so that
  at least two plausible root causes emerge during investigation. Writing
  substantial new functionality is explicitly outside the task; any code the
  student writes exists to observe, instrument, test, or minimally probe the
  inherited system.
* **Required student deliverables:**

    * A reconstructed working model of the system's intended behaviour.
    * A record of at least two distinct evidence classes gathered, such as
      structural and runtime evidence, with historical evidence included where
      relevant.
    * A justification for why each evidence source was sought.
    * An explicit list of competing hypotheses, including at least one
      plausible hypothesis that was eliminated.
    * The discriminating observation or test used to eliminate that hypothesis.
    * A final diagnosis.
    * A brief statement of remaining uncertainty or unverified assumptions.
    * A proposed intervention and a proposed verification check, without
      requiring a substantial repair.
* **Learning outcomes assessed:** LO1, LO2, LO3 and LO4.
* **Teaching weeks it depends on:** Weeks 3–5 for multi-class evidence and
  Weeks 6–7 for competing-hypothesis and evidence-reliability discipline.
* **Evidence students must provide:** Structural or control-flow evidence,
  runtime evidence such as logs, traces, or targeted instrumentation, and
  historical evidence where the service's history is relevant. Every major
  evidence item should be attributable to a question or hypothesis it was
  gathered to test.
* **How the investigative cycle appears:** The full cycle remains present, but
  the assessment concentrates its weight on Observe → Hypothesise → Gather
  Evidence → Reduce Uncertainty. Intervention and Verify are required as
  justified proposals rather than the major graded difficulty because the
  intervention and verification phases are developed more deeply in Weeks
  8–9 and Assessment 3.
* **What distinguishes high-quality work from a correct fix:** A student who
  names the correct root cause but cannot show how a plausible alternative was
  excluded cannot reach the top band. A student who gathers relevant evidence,
  eliminates a genuine alternative, reaches a defensible diagnosis, and
  accurately states what remains uncertain can perform strongly even if their
  proposed patch is only sketched.

---

## Assessment 3 — Incident Reconstruction

* **Weighting:** 25%
* **Timing:** Released after Week 5 and due around Week 9.
* **Mode:** Individual.
* **Purpose:** Assess the ability to reconstruct what happened, when it
  happened, and why from historical and operational artefacts, then carry that
  diagnosis into a scoped intervention and cause-tied verification.
* **Task premise:** Students do not receive an obviously broken repository.
  They receive a system that currently appears to work, works only under some
  conditions, or no longer directly exposes the original failure, together
  with a bundle of historical and operational artefacts such as commit
  history, configuration changes, logs from around the incident, incident
  notes or tickets, and — where relevant — a snapshot of persistent state.

  The incident should require students to reason across time rather than simply
  inspect present-day source code. The eventual intervention also has a
  plausible blast-radius or safety concern consistent with Weeks 8–9.
  Substantial new functionality is not required.
* **Required student deliverables:**

    * An incident reconstruction explaining what happened, when it happened,
      and why.
    * Each major reconstruction claim tied to a specific artefact or observation.
    * An account of how ambiguous or conflicting artefacts were interpreted.
    * A diagnosis identifying the relevant cause rather than merely the visible
      symptom.
    * A scoped intervention identifying what else in the system could plausibly
      be affected.
    * At least one blast-radius or invariant check actually executed before or
      alongside the intervention.
    * A verification argument tied to the diagnosed cause rather than only the
      disappearance of the original symptom.
    * A concise statement of any remaining uncertainty.
* **Learning outcomes assessed:** LO1, LO3, LO4 and LO5.
* **Teaching weeks it depends on:** Week 5 for historical evidence, Weeks 6–7
  for ambiguity and evidence reliability, and Weeks 8–9 for intervention
  scoping and verification.
* **Evidence students must provide:** Version-history or commit artefacts,
  configuration or schema history where relevant, logs or runtime observations
  surrounding the incident, state evidence where applicable, and
  post-intervention evidence used for verification.
* **How the investigative cycle appears:** All six stages are present and
  graded end to end. Observe, Hypothesise, Gather Evidence and Reduce
  Uncertainty operate across the historical reconstruction; Intervene and
  Verify operate on the present system. This is the first assessment where
  intervention scope and cause-tied verification carry substantial marks.
* **What distinguishes high-quality work from a correct fix:** A student who
  correctly patches the current fault but cannot reconstruct how the incident
  arose from the available artefacts, cannot justify the blast radius of the
  intervention, or verifies only that the surface symptom disappeared cannot
  receive full marks. A student with a strongly evidenced reconstruction and
  well-designed verification may still perform highly even if one secondary
  contributing factor remains unresolved, provided that uncertainty is
  explicitly acknowledged and bounded.

---

## Assessment 4 — Final Unknown System

* **Weighting:** 35%
* **Timing:** Weeks 10–12; released after Week 10 teaching content and due at
  the end of Week 12, including a short live defence.
* **Mode:** Individual.
* **Purpose:** Serve as the integrative assessment. Students independently
  plan and conduct the full investigative cycle on a system they have never
  seen, with minimal scaffolding, then defend the evidence and reasoning that
  connect symptom, diagnosis, intervention, and verification.
* **Task premise:** Each student receives a previously unseen inherited system
  consistent with the Week 10–11 conditions: multi-component, incompletely
  documented, and containing at least one source of operational uncertainty
  such as an unreliable artefact, misleading documentation, or an
  intermittently reproducible behaviour.

  Students are given a failure report describing the observed symptom but no
  instructor framing of which subsystem, evidence class, or tool is likely to
  matter. The Final must therefore require independent investigation planning
  rather than merely repeating Assessment 2 at a larger scale.
* **Required student deliverables:**

    * An early investigation checkpoint recording initial observations, current
      hypotheses, and the next planned discriminating observation.
    * A full evidence trail spanning whichever structural, runtime, historical,
      state, or operational evidence the system makes relevant.
    * An explicit account of any source judged unreliable, including independent
      evidence supporting that judgement.
    * A diagnosis with alternative explanations explicitly addressed.
    * A scoped intervention.
    * A verification argument and executed evidence tied to the diagnosed cause.
    * A statement of what remains uncertain or unverified at submission.
    * A short live defence in which the student answers targeted questions about
      their observations, hypotheses, evidence choices, exclusions, intervention
      scope, and verification.
* **Learning outcomes assessed:** All five learning outcomes, with LO4 and LO5
  carrying particular importance because the assessment requires an
  independent diagnosis, intervention, verification, and defence.
* **Teaching weeks it depends on:** Weeks 10–12 directly and, through their
  integrative nature, all earlier teaching weeks.
* **Evidence students must provide:** Whatever the assigned system actually
  offers, spanning the evidence classes developed across the semester. Unlike
  earlier assessments, students are not told which classes are likely to be
  relevant.
* **How the investigative cycle appears:** The full Observe → Hypothesise →
  Gather Evidence → Reduce Uncertainty → Intervene → Verify cycle is applied
  end to end without instructor cueing, followed by a live defence in which
  the coherence of that trail is independently challenged.
* **What distinguishes high-quality work from a correct fix:** A student who
  reaches a working final state through repeated undirected changes but cannot
  explain why alternatives were excluded, why particular evidence was trusted,
  or why the verification demonstrates resolution of the diagnosed cause
  cannot receive a high mark merely because the program now works.

  Conversely, a student who conducts a rigorous investigation, correctly
  narrows the fault, justifies a safe intervention, and produces meaningful
  verification evidence can still receive substantial credit if genuine
  system complexity prevents complete repair, provided the remaining
  uncertainty is accurately identified rather than concealed.

---

## Assessment × Curriculum Mapping

| Assessment                      | Weeks drawn on          | Learning outcomes   | Core skill assessed                                                 |
| ------------------------------- | ----------------------- | ------------------- | ------------------------------------------------------------------- |
| 1. Debugging Field Notes        | 1–4                     | LO1, LO2, early LO3 | Observation, falsifiable hypothesis, disconfirmation                |
| 2. Broken Service Investigation | 3–7                     | LO1, LO2, LO3, LO4  | Multi-class evidence, competing hypotheses, exclusion               |
| 3. Incident Reconstruction      | 5–9                     | LO1, LO3, LO4, LO5  | Historical reconstruction, intervention scoping, verification       |
| 4. Final Unknown System         | 10–12, integrating 1–11 | LO1–LO5             | Independent planning, uncertainty management, intervention, defence |

### Coverage check

* **Weeks 1–2 discipline is genuinely assessed in Assessment 1.**
  Students must distinguish observation from assumption, state falsifiable
  hypotheses, and record disconfirming tests before execution.

* **Weeks 3–5 multi-class evidence is required in Assessment 2.**
  Students must combine more than one evidence class and justify why each was
  gathered.

* **Weeks 6–7 competing hypotheses are explicitly rewarded.**
  Assessment 2 assigns substantial rubric weight to eliminating plausible
  alternatives rather than merely identifying the correct cause.

* **Weeks 8–9 intervention and verification are explicitly assessed.**
  Assessment 3 requires blast-radius reasoning, scoped intervention, and
  cause-tied verification, while the Final repeats these under reduced
  scaffolding.

* **Weeks 10–12 independent inherited-system investigation is central to the
  Final.**
  Students choose their own evidence strategy, navigate unreliable context,
  complete the full cycle, and defend their reasoning live.

---

## Rubric Progression

Categories persist across assessments so students experience one accumulating
standard rather than four unrelated marking schemes. The emphasis shifts as
investigative independence increases.

### Assessment 1 rubric

| Category                                                    |   Weight |
| ----------------------------------------------------------- | -------: |
| Observation quality — fact versus assumption                |      30% |
| Hypothesis quality and falsifiability                       |      30% |
| Disconfirmation discipline — test recorded before execution |      30% |
| Investigation record clarity                                |      10% |
| **Total**                                                   | **100%** |

Early weighting is deliberately concentrated on observation, hypothesis
formation, and genuine disconfirmation. The later stages of the investigative
cycle remain present but tightly scaffolded.

### Assessment 2 rubric

| Category                                            |   Weight |
| --------------------------------------------------- | -------: |
| Observation and problem framing                     |      10% |
| Evidence strategy — evidence classes chosen and why |      20% |
| Evidence interpretation                             |      20% |
| Handling of alternative explanations                |      25% |
| Diagnosis quality and justification                 |      15% |
| Investigation record / communication                |      10% |
| **Total**                                           | **100%** |

Handling of alternative explanations carries the largest single weight,
directly enforcing the Weeks 6–7 principle that exclusion, not merely arrival
at a correct answer, earns marks.

### Assessment 3 rubric

| Category                                              |   Weight |
| ----------------------------------------------------- | -------: |
| Historical evidence interpretation and reconstruction |      20% |
| Handling of conflicting or ambiguous evidence         |      15% |
| Diagnosis quality and justification                   |      15% |
| Intervention justification and scoping                |      20% |
| Verification quality                                  |      20% |
| Investigation record / communication                  |      10% |
| **Total**                                             | **100%** |

Weight shifts away from hypothesis mechanics alone toward the relationship
between diagnosis, intervention scope, and verification. Handling conflicting
evidence remains important but now concerns artefact provenance and historical
reconstruction as much as hypothesis competition.

### Assessment 4 rubric

| Category                                         |   Weight |
| ------------------------------------------------ | -------: |
| Independent investigation planning               |      15% |
| Evidence selection — self-directed, no cueing    |      15% |
| Uncertainty management — explicit and calibrated |      15% |
| Intervention justification and scoping           |      15% |
| Verification quality                             |      15% |
| Defence of reasoning under questioning           |      25% |
| **Total**                                        | **100%** |

Defence carries the largest single category weight in the Final because it
tests whether the investigation is a coherent argument the student actually
understands rather than a polished narrative assembled after the answer was
found.

### Overall progression

Assessment 1 concentrates on the foundational mechanics of observing,
hypothesising, and attempting genuine disconfirmation.

Assessment 2 shifts weight toward selecting and interpreting multiple evidence
classes and deliberately excluding alternatives.

Assessment 3 moves substantial weight onto intervention risk and verification.

Assessment 4 assumes all prior habits and instead evaluates independence,
uncertainty management, self-directed evidence selection, intervention,
verification, and the ability to defend the entire trail.

The rubrics therefore reweight a stable set of course values rather than
introducing an unrelated grading model for each task.

---

## Anti-Retrofitting Mechanisms

The course design identifies a central assessment risk: students may locate the
fault through trial-and-error and later manufacture a clean-looking sequence of
observations, hypotheses, and evidence that was never actually used.

The assessment system reduces this risk without treating investigation records
as forensic audit logs.

### Pre-recorded hypotheses

Used in Assessments 1, 2 and 4.

Before executing a discriminating test, students record:

* the hypothesis being tested;
* the observation or experiment they intend to perform;
* the result that would count against the hypothesis.

The course does not attempt to technically prevent students from running code
before writing this material. The requirement instead establishes the expected
chronology of legitimate investigation and gives markers a basis for examining
whether evidence was genuinely used to update reasoning.

**Problem addressed:** prevents a hypothesis from functioning only as an
after-the-fact explanation of evidence already known.

### Staged checkpoints

Used in Assessments 2, 3 and 4.

Each major investigation includes one lightweight checkpoint before the final
submission. The checkpoint records:

* current observations;
* live hypotheses;
* evidence gathered so far;
* the next planned discriminating observation or investigation step.

The checkpoint is brief and is not treated as a second full assignment.

**Problem addressed:** creates an externally fixed intermediate state of the
investigation against which the final evidence trail can be understood.

### Required disconfirmation

Used wherever a hypothesis is formally assessed.

Students must identify evidence that could count against an important
hypothesis and, where feasible, actually perform the corresponding test.

A submission that merely lists reasons its preferred diagnosis is correct,
without testing plausible alternatives, cannot receive full marks in the
relevant hypothesis or alternative-explanation categories.

**Problem addressed:** prevents the investigation record from becoming a list
of only confirmatory observations.

### Running investigation log

Used in Assessments 2, 3 and 4.

Students maintain one concise chronological log of meaningful changes in their
reasoning. It records actions such as:

* a hypothesis being introduced;
* evidence causing confidence to rise or fall;
* an evidence source being judged unreliable;
* an alternative being eliminated;
* an intervention being chosen;
* verification changing the final conclusion.

The log is useful evidence of how the investigation developed but is not
treated as tamper-proof on its own. Staged checkpoints provide the stronger
externally fixed reference points.

**Problem addressed:** makes reasoning changes visible without requiring a
long reflective report.

### Live defence under questioning

Used only in Assessment 4.

Students complete a short live defence in which the questioner may probe:

* unstated assumptions;
* untested hypotheses;
* evidence choices;
* evidence judged unreliable;
* intervention scope;
* verification claims;
* remaining uncertainty.

The questions are not supplied in advance.

**Problem addressed:** a polished final report can conceal weak or retrofitted
reasoning, whereas a student who genuinely understands their investigation
should be able to explain and defend why each important step was justified.

The defence is reserved for the Final because it is comparatively expensive to
run and is most valuable where scaffolding is lowest.

### Administrative-load check

These mechanisms are deliberately limited.

Assessment 1 uses short entries rather than a separate log plus report.
Assessments 2–4 use a single running investigation log and one checkpoint rather
than frequent mandatory submissions. Only the Final introduces a live defence.

The purpose is to preserve visible reasoning, not to grade students on
record-keeping volume.

---

## Workload Check

| Assessment                      | Approx. student effort                                     | Notes                                                                        |
| ------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1. Debugging Field Notes        | 8–10 hours across 4 weeks                                  | Approximately 2–2.5 hours per short entry; no large repository.              |
| 2. Broken Service Investigation | 18–22 hours across ~5 weeks                                | One unfamiliar repository; investigation rather than feature construction.   |
| 3. Incident Reconstruction      | 18–22 hours across ~5 weeks                                | One system plus an artefact bundle; scoped intervention rather than rebuild. |
| 4. Final Unknown System         | 25–30 hours across ~3 weeks, including defence preparation | Highest load, matching its integrative 35% weighting.                        |

Total estimated assessment workload is approximately **70–85 hours** across the
semester in addition to normal teaching activities.

The largest scheduling risk is the overlap between Assessment 2 and Assessment
3. Assessment 2 therefore needs to conclude around Week 7 before Assessment 3
   enters its most demanding intervention and verification work in Weeks 8–9.
   Their release windows may overlap, but their peak workload should not.

No assessment requires deployment infrastructure beyond what is necessary to
run the assigned system locally. Teaching staff should ensure that environment
setup is sufficiently bounded that it does not become an accidental fifth
assessment criterion.

Assessments 2 and 3 explicitly exclude substantial new functionality, preventing
their workload from expanding into ordinary software-development projects.

The anti-retrofitting requirements are also intentionally lightweight: a short
checkpoint and a concise running log rather than a second report.

---

## Assessment Identity Check

### 1. Could a student who repairs every bug through trial-and-error still fail to receive a high mark?

Yes.

Every assessment places substantial weight on outputs trial-and-error alone does
not produce:

* Assessment 1 requires falsifiable hypotheses and genuine disconfirmation.
* Assessment 2 rewards evidence strategy and elimination of alternatives.
* Assessment 3 rewards reconstruction, intervention scope, and cause-tied
  verification.
* Assessment 4 requires independent investigation planning and live defence.

A correct final state cannot substitute for these categories.

### 2. Is a student explicitly rewarded for demonstrating why plausible alternative hypotheses are wrong?

Yes.

Assessment 2 assigns its largest rubric category, 25%, to handling alternative
explanations. Students must show not merely which hypothesis survived but what
evidence caused another plausible explanation to be rejected.

Assessment 3 extends this discipline to conflicting historical and operational
artefacts.

Assessment 4 requires students to defend evidence selection, exclusions, and
uncertainty under questioning.

### 3. Is the Final genuinely harder than Assessment 2 in ways other than repository size?

Yes.

Assessment 4 differs from Assessment 2 in several substantive ways:

* students receive no cue about which evidence classes are likely to matter;
* investigation planning is independently assessed;
* the system may contain unreliable documentation or intermittent behaviour;
* students must perform and justify an actual intervention;
* verification must be tied to the diagnosed cause;
* remaining uncertainty must be explicitly managed;
* the complete evidence trail must survive live questioning.

The Final is therefore more difficult because scaffolding and certainty are
removed, not simply because more files are added.

### 4. Is any assessment drifting into a generic programming project or long report?

No.

Assessments 2 and 3 explicitly exclude substantial feature development.
Students write code only when it serves investigation, instrumentation,
minimal repair, or verification.

Deliverables are bounded investigative artefacts:

* field notes;
* system models;
* hypotheses;
* evidence trails;
* reconstruction claims;
* scoped interventions;
* verification evidence;
* a short live defence.

No assessment requires an open-ended software build or a long general-purpose
essay.

---

## Final Design Check

The assessment system totals exactly **100%**:

* Debugging Field Notes — 15%
* Broken Service Investigation — 25%
* Incident Reconstruction — 25%
* Final Unknown System — 35%

The assessment sequence mirrors the curriculum sequence:

**guided discipline → evidence selection → ambiguity and intervention →
independent inherited-system investigation**

A student's mark is therefore determined primarily by whether they can make a
defensible chain from observation to verification, not simply whether the final
program happens to work.
