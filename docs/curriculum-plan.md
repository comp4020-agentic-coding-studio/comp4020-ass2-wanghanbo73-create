# SLOP4xxx — Curriculum Plan (Stage 2)

Internal curriculum-design artefact, built on `docs/course-design.md`. This
document does not redefine the course's positioning, learning outcomes, or
teaching principles — it operationalises the Weeks 1–12 progression already
committed to in that document. It does not substitute for student-facing
teaching-week content, assessments, `CLAUDE.md`, or `spec/` checks; those are
implemented later from the decisions recorded here.

The investigative cycle referenced throughout is fixed:

**Observe → Hypothesise → Gather Evidence → Reduce Uncertainty → Intervene → Verify.**

---

## Curriculum Spine

Difficulty increases along two axes at once, and the two axes are deliberately
out of phase. The first axis is the *system*: how large it is, how much
documentation it comes with, how many components it spans, how reproducible
its failure is, and how noisy or conflicting its evidence is. The second axis
is *investigative independence*: how much of the Observe→Verify cycle is
pre-structured for the student versus left for them to construct and defend
unassisted.

Weeks 1–2 hold the system axis low so the method itself — stating a falsifiable
hypothesis, naming a disconfirming test, refusing to accept a symptom's
disappearance as proof — can be learned without system complexity competing
for attention. From Week 3 onward the system axis climbs steadily: more code,
less documentation, more components, and eventually less reproducibility.
Meanwhile, investigative independence increases in discrete steps. Weeks 3–5
still introduce evidence classes deliberately but require students to decide
what the evidence means. Weeks 6–7 introduce competing explanations and
unreliable evidence. Weeks 8–9 shift uncertainty from diagnosis toward the
scope and verification of intervention. Weeks 10–11 remove most scaffolding on
both axes simultaneously. Week 12 removes it entirely and adds an external
challenge to the evidence trail itself.

No week is a reset. Each depends on habits established earlier, so the semester
reads as one investigative discipline under increasing load rather than twelve
unrelated debugging topics.

By Week 12, students face a system they have never seen, with no
instructor-supplied framing of what is worth observing, no guarantee that the
available documentation is accurate, no guarantee the failure is even
reproducible on demand, and a requirement to defend every step of their
evidence trail under informed questioning.

---

## Week 1 — Naming What You See

* **Central question:** What is the difference between an observation and an assumption?
* **Incident premise:** A small, single-file utility (under ~150 lines) produces
  a visibly wrong output on one specific input; the codebase is fully readable
  in one sitting and comes with a short, accurate README.
* **Primary investigation skill:** Separating observed fact from inferred
  explanation, and stating an observation precisely enough that someone else
  could check it.
* **Evidence types:** Direct program output, source code, one accurate
  documentation artefact.
* **New difficulty/uncertainty introduced:** None beyond the cycle itself —
  this week's difficulty is entirely in the discipline of not skipping steps.
* **Dependencies on earlier weeks:** None (first week).
* **Practical investigation task:** Given the failing utility, students must
  write a numbered observation log containing facts only, with no diagnosis,
  before they are permitted to inspect the implementation or propose a cause.
* **End-of-week capability:** Can produce a clean, falsifiable statement of
  "what is observed to be true" that is separable from "what I think is
  happening," for a system small enough to read in full.

## Week 2 — A Hypothesis That Could Be Wrong

* **Central question:** What makes a hypothesis useful, as opposed to merely plausible?
* **Incident premise:** A slightly larger contained system (2–4 files, one
  clear entry point) with a reproducible failure that has two superficially
  similar but distinguishable causes, both findable from the code alone.
* **Primary investigation skill:** Formulating a hypothesis paired with a named
  disconfirming test, and running that test before proposing a fix.
* **Evidence types:** Source code across multiple files, program output under
  controlled inputs the student chooses.
* **New difficulty/uncertainty introduced:** More than one candidate
  explanation exists for the first time, though both are cheaply testable.
* **Dependencies on earlier weeks:** Reuses Week 1's observation discipline as
  the input to hypothesis formation.
* **Practical investigation task:** Students must submit a hypothesis and its
  disconfirming test *before* being given permission to run it, then report
  what the test actually showed, including if it refuted their first guess.
* **End-of-week capability:** Can state a hypothesis, commit in advance to what
  would disprove it, and revise it on genuine disconfirming evidence rather
  than motivated reasoning.

## Week 3 — Reading a System You Weren't Given a Map To

* **Central question:** How do you build a working model of a system's intended
  behaviour when no one is going to explain it to you?
* **Incident premise:** A mid-sized multi-module system (structured, but no
  onboarding document) with a failure that requires understanding control flow
  across modules before the fault becomes visible.
* **Primary investigation skill:** Structural reading — reconstructing intended
  behaviour from code organisation, naming, and control flow, without
  narrative documentation.
* **Evidence types:** Source structure and control flow, partial or absent
  documentation, program behaviour under the student's own probing inputs.
* **New difficulty/uncertainty introduced:** Documentation is withdrawn as a
  reliable evidence source for the first time; system size increases past
  what fits in one sitting.
* **Dependencies on earlier weeks:** Requires Week 1's observation discipline
  and Week 2's hypothesis-and-test habit, now applied without a map.
* **Practical investigation task:** Students produce a short model of "what
  this system is supposed to do" purely from structure and behaviour, then use
  that model to locate the fault.
* **End-of-week capability:** Can reconstruct a defensible model of intended
  behaviour for a multi-module system with no reliable documentation.

## Week 4 — Evidence That Isn't Static Text

* **Central question:** What can runtime evidence tell you that reading the
  code cannot?
* **Incident premise:** A running service whose failure only appears under
  specific runtime conditions — timing, input sequence, or state — that are not
  visible from source alone.
* **Primary investigation skill:** Collecting and reading runtime evidence
  (logs, traces, instrumented output) as a distinct evidence class from static
  code reading.
* **Evidence types:** Runtime logs and traces, instrumentation the student adds
  themselves, source code as supporting context only.
* **New difficulty/uncertainty introduced:** The fault is not visible from
  structural reading alone for the first time; evidence must be actively
  generated, not just read.
* **Dependencies on earlier weeks:** Builds directly on Week 3's structural
  model — students use it to decide *where* to instrument, rather than
  instrumenting blindly.
* **Practical investigation task:** Students add targeted logging or tracing at
  points justified by their Week 3-style structural model, then diagnose from
  the runtime evidence it produces.
* **End-of-week capability:** Can choose where to instrument a running system
  based on a structural model, and can read the resulting runtime evidence
  without being overwhelmed by it.

## Week 5 — What the System Used to Be

* **Central question:** Can a fault be explained by something that is no longer
  in the code at all?
* **Incident premise:** A system whose current failure was introduced by a
  historical change — a prior commit, migration, or configuration change —
  that is no longer visible in the present-day source or runtime behaviour
  alone.
* **Primary investigation skill:** Using historical artefacts (version
  history, changelogs, prior configuration) as first-class evidence alongside
  structural and runtime evidence.
* **Evidence types:** Version history, commit messages, historical
  configuration or schema versions, current structural and runtime evidence
  from Weeks 3–4.
* **New difficulty/uncertainty introduced:** The root cause is temporally
  displaced from the current, visible state of the system — "when did this
  break" becomes as important as "what is broken."
* **Dependencies on earlier weeks:** Requires combining Week 3's structural
  reading and Week 4's runtime evidence with a new historical evidence class;
  this week closes out the "widening the evidence base" arc.
* **Practical investigation task:** Students use version history to bisect
  toward the change that introduced the fault, then confirm with structural
  and/or runtime evidence that the identified change is actually the cause,
  not merely correlated with it.
* **End-of-week capability:** Can treat a system's history as evidence,
  distinguish "when it broke" from "why it broke," and combine at least three
  distinct evidence classes — structural, runtime, and historical — in one
  investigation.

## Week 6 — Two Explanations, One Fault

* **Central question:** How do you choose between two hypotheses that both fit
  the evidence you have so far?
* **Incident premise:** A failure with two genuinely plausible root causes,
  each supported by some of the available evidence, where a hasty
  investigator would stop at the first one that fits.
* **Primary investigation skill:** Comparative hypothesis evaluation —
  actively seeking evidence that discriminates between competing explanations,
  not just evidence that confirms one.
* **Evidence types:** The same evidence classes established in Weeks 3–5
  (structural, runtime, historical), now deliberately including evidence
  consistent with more than one hypothesis.
* **New difficulty/uncertainty introduced:** For the first time, the evidence
  gathered so far genuinely underdetermines the cause; more than one
  hypothesis survives the first pass.
* **Dependencies on earlier weeks:** Directly requires the multi-class
  evidence practice from Weeks 3–5; without it, students have no way to seek
  discriminating evidence beyond the first class they happen to check.
* **Practical investigation task:** Students must explicitly list both
  surviving hypotheses, propose an observation that would discriminate
  between them rather than merely support one, and carry it out before
  committing to a diagnosis.
* **End-of-week capability:** Can hold two live hypotheses simultaneously and
  design a targeted test to eliminate one, rather than anchoring on whichever
  was found first.

## Week 7 — When the Evidence Disagrees

* **Central question:** What do you do when two pieces of evidence appear to
  contradict each other?
* **Incident premise:** A failure where one evidence source — for example logs —
  points one way and another — for example behaviour under test — points
  another, because one source is stale, mis-scoped, or itself a symptom of a
  different, coexisting problem.
* **Primary investigation skill:** Diagnosing evidence conflicts themselves —
  determining whether a contradiction means one source is unreliable, or
  means two faults coexist.
* **Evidence types:** Deliberately conflicting evidence across the classes
  used in Weeks 3–6, requiring the student to interrogate the evidence's
  provenance, not only its content.
* **New difficulty/uncertainty introduced:** Evidence noise and unreliable
  sources, and the possibility of coexisting faults, appear for the first
  time; the ambiguity is in the evidence, not only in the hypothesis space.
* **Dependencies on earlier weeks:** Extends Week 6's discriminating-evidence
  discipline to the harder case where the discrimination step itself produces
  conflicting results; closes the "ambiguity and competing hypotheses" arc.
* **Practical investigation task:** Students must determine, with
  justification, whether an observed contradiction indicates an unreliable
  evidence source or two distinct faults, and resolve their diagnosis
  accordingly.
* **End-of-week capability:** Can respond to contradictory evidence by
  interrogating its reliability and scope rather than discarding whichever
  piece is inconvenient, and can recognise when a contradiction signals
  multiple coexisting faults.

## Week 8 — The Fix That Isn't Safe

* **Central question:** How do you decide whether an available fix is
  acceptable, not just whether it makes the symptom go away?
* **Incident premise:** A fault whose diagnosis is deliberately straightforward
  to establish, but whose obvious fix has a side effect elsewhere in the
  system — breaking another code path, violating an invariant, or degrading a
  different property — that is not visible unless specifically checked for.
* **Primary investigation skill:** Scoping an intervention — identifying what
  else in the system an intervention could plausibly affect before applying
  it, and checking those effects deliberately.
* **Evidence types:** Evidence sufficient to establish a trustworthy diagnosis,
  plus new evidence gathered specifically about the intervention's blast
  radius — other code paths, tests, invariants, or dependent behaviour.
* **New difficulty/uncertainty introduced:** For the first time, the main risk
  lies in the intervention rather than in reaching the diagnosis. The diagnosis
  is deliberately inexpensive to establish so that investigative attention can
  shift to intervention scope and side effects.
* **Dependencies on earlier weeks:** Requires students to apply the
  observation, hypothesis, and evidence discipline of Weeks 1–7 to establish a
  trustworthy diagnosis, then applies the same rigor to a proposed fix rather
  than stopping once the cause is known.
* **Practical investigation task:** Before applying the obvious fix, students
  must identify and check at least one other part of the system the fix could
  plausibly disturb, using the same evidence-gathering discipline used for
  diagnosis.
* **End-of-week capability:** Can establish a diagnosis efficiently, then
  evaluate a candidate fix's scope and risk with the same rigor previously
  applied to the cause before applying the intervention.

## Week 9 — Verifying You Didn't Just Move the Problem

* **Central question:** How do you know an intervention actually resolved the
  cause, rather than relocating or masking the symptom?
* **Incident premise:** An intervention that appears to resolve the original
  failure but, on closer verification, has either not addressed the root cause
  or has introduced a new, related failure elsewhere.
* **Primary investigation skill:** Verification design — constructing a check
  that specifically confirms the diagnosed cause is resolved, distinct from
  confirming the original symptom is gone.
* **Evidence types:** Post-intervention runtime and structural evidence,
  compared explicitly against the pre-intervention diagnosis rather than
  against the original symptom alone.
* **New difficulty/uncertainty introduced:** The failure mode being taught is
  false verification — passing the wrong check and believing the fault is
  resolved.
* **Dependencies on earlier weeks:** Directly extends Week 8's scoped
  intervention with the verification half of the same problem; closes the
  "intervention under constraint" arc by requiring both halves together.
* **Practical investigation task:** Students must write a verification check
  tied to their Week 8-style diagnosis rather than to the surface symptom,
  apply their intervention, and show the check would have caught it had the
  intervention only masked the symptom.
* **End-of-week capability:** Can distinguish a verification that confirms the
  diagnosed cause is resolved from one that only confirms the symptom is
  currently invisible.

## Week 10 — No One Left to Ask

* **Central question:** How do you investigate a system when the people who
  built it, and much of its context, are simply gone?
* **Incident premise:** A large, loosely documented system assembled from
  multiple components, handed over with only operational artefacts — partial
  runbooks, incident tickets, stale comments — and no author access.
* **Primary investigation skill:** Integrating all prior evidence classes
  (structural, runtime, historical) under substantially reduced scaffolding,
  while explicitly tracking what remains unknown.
* **Evidence types:** All evidence classes used since Week 3, now
  simultaneously incomplete, partially stale, and spread across more
  components than any single earlier week.
* **New difficulty/uncertainty introduced:** Scaffolding is withdrawn broadly
  for the first time — no single evidence class is curated to be sufficient
  on its own, and the system boundary is larger than one investigator can
  fully read.
* **Dependencies on earlier weeks:** Requires fluent, self-directed use of the
  full evidence toolkit built in Weeks 3–9; this week does not introduce a new
  evidence class, only removes the guidance about which one to reach for.
* **Practical investigation task:** Students produce a working model of the
  relevant subsystem, an evidence-backed diagnosis, and an explicit list of
  what remains unverified given the operational artefacts available.
* **End-of-week capability:** Can self-direct an investigation across a
  multi-component system with incomplete operational context, choosing
  evidence classes without being told which to use.

## Week 11 — The System That Fights Back

* **Central question:** How do you keep the investigation disciplined when the
  system itself resists being understood — through nondeterministic failures,
  partially incorrect documentation, or evidence that must be gathered
  without disrupting a live-like environment?
* **Incident premise:** A system similar in scale to Week 10 but with at least
  one deliberately unreliable element: an intermittently reproducible failure,
  a runbook or comment that is actively misleading rather than merely absent,
  or an environment where careless intervention risks worsening the fault.
* **Primary investigation skill:** Sustaining the full cycle under active
  resistance — treating apparent documentation as a hypothesis to verify
  rather than a fact to trust, and managing intervention risk in a
  less-controlled environment.
* **Evidence types:** The same integrated evidence base as Week 10, now
  including at least one source the student must learn to distrust through
  evidence rather than assumption.
* **New difficulty/uncertainty introduced:** Untrustworthy documentation and/or
  low reproducibility are introduced as sustained conditions rather than
  one-off complications; intervention risk is carried over from Weeks 8–9 into
  a larger, less controlled system.
* **Dependencies on earlier weeks:** Depends on Week 10's integration and adds
  Week 7's evidence-reliability discipline and Weeks 8–9's intervention-risk
  discipline at larger scale; this is the last primarily investigative week
  before synthesis.
* **Practical investigation task:** Students must identify which available
  documentation or evidence source is unreliable, justify that conclusion
  with independent evidence, and complete their diagnosis and intervention
  without relying on the unreliable source.
* **End-of-week capability:** Can identify and route around an unreliable
  evidence source using independent verification, and can manage intervention
  risk in a large, only partially controlled system.

## Week 12 — Defending the Trail

* **Central question:** Can every step of your investigation withstand informed
  challenge?
* **Incident premise:** A previously unseen system, assigned individually,
  with a live failure and no instructor framing of what matters; the incident
  itself may draw on any of the settings used across the semester.
* **Primary investigation skill:** End-to-end ownership of the full cycle under
  external questioning — defending the observation, hypothesis, evidence,
  diagnosis, intervention, and verification as a single connected argument.
* **Evidence types:** Whatever the assigned system actually provides — the
  full range used across the semester, selected and gathered entirely by the
  student.
* **New difficulty/uncertainty introduced:** No instructor-supplied scaffolding
  at all, plus a final element: the evidence trail itself must survive targeted
  questioning, not just produce a correct-looking answer.
* **Dependencies on earlier weeks:** Integrates every skill established since
  Week 1 with no reduction in scope; nothing new is taught here that was not
  already exercised in Weeks 1–11.
* **Practical investigation task:** Students investigate the assigned system
  end-to-end and present their observation-to-verification trail to a
  questioner who probes for unstated assumptions, untested hypotheses, or
  unverified fixes.
* **End-of-week capability:** Can conduct and defend a complete, unassisted
  investigation of an unfamiliar system, treating every claim in the trail as
  something that must survive informed challenge.

---

## Difficulty Progression Across Dimensions

| Dimension                  | Wk 1–2                                    | Wk 3–5                                             | Wk 6–7                                   | Wk 8–9                                                             | Wk 10–11                                       | Wk 12                                        |
| -------------------------- | ----------------------------------------- | -------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------- | -------------------------------------------- |
| System size                | Single file / few files                   | Multi-module                                       | Multi-module, same scale as 3–5          | Same or moderately larger scale, focus shifts to blast radius      | Multi-component, large                         | Large, unseen                                |
| Documentation completeness | Accurate, complete                        | Withdrawn (Wk3), then absent                       | Absent, sometimes conflicting            | Absent                                                             | Partial, stale                                 | Partial, sometimes actively misleading       |
| Plausible hypotheses       | One, then two cheaply testable candidates | One primary cause, but independently established   | Two or more, deliberate                  | Low or tightly constrained so attention can shift to intervention  | Multiple, self-generated                       | Multiple, self-generated                     |
| Evidence noise             | None                                      | Low                                                | Low–moderate                             | Moderate, especially around blast-radius and verification evidence | Moderate–high                                  | High, with potentially untrustworthy sources |
| Observability              | Full, direct output                       | Requires instrumentation (Wk4)                     | Requires targeted, discriminating checks | Requires blast-radius and post-intervention checks                 | Requires self-directed instrumentation choices | Fully self-directed                          |
| Reproducibility            | Fully reproducible                        | Fully reproducible                                 | Fully reproducible                       | Fully reproducible                                                 | Mostly reproducible, then weakened in Wk11     | May be intermittent                          |
| Intervention risk          | None or minimal while learning the method | Low; diagnosis remains the focus                   | Low; diagnosis remains the focus         | Present and central                                                | Present and central                            | Present and central, plus external defence   |
| Scaffolding                | Heavy                                     | Moderate, evidence classes introduced deliberately | Light–moderate                           | Light                                                              | Minimal                                        | None                                         |

Not every dimension moves every week. Reproducibility, for instance, stays
high until Week 11 by design so that lowered reproducibility is a clearly
identifiable, late-arriving difficulty rather than background noise competing
with everything else being taught earlier.

Similarly, Weeks 8–9 deliberately lower diagnostic ambiguity relative to
Weeks 6–7. Difficulty does not decrease overall: uncertainty shifts from
*what caused the failure* to *what an intervention might disturb* and *what
would constitute evidence that the cause is actually resolved*. This isolates
intervention and verification as skills without abandoning the full
investigative cycle.

---

## Dependency Check

Weeks 3–12 each depend on specific habits fixed earlier; none restart the
method from zero.

* **Week 3** depends on Week 1's observation discipline and Week 2's
  hypothesis-and-test habit, now applied without a map.
* **Week 4** depends on Week 3's structural model to decide *where* to
  instrument, rather than instrumenting without justification.
* **Week 5** depends on Weeks 3–4's evidence classes, adding a third
  (historical) that must be combined with, not substituted for, the first two.
* **Week 6** depends on the multi-class evidence practice from Weeks 3–5 to
  have anything to discriminate with.
* **Week 7** depends on Week 6's discriminating-evidence habit, extended to
  the case where discrimination itself produces conflicting results.
* **Week 8** depends on students being able to establish a trustworthy
  diagnosis efficiently using Weeks 1–7. Diagnostic ambiguity is deliberately
  constrained so the investigative cycle can continue into a new emphasis:
  assessing the scope and safety of intervention.
* **Week 9** depends directly on Week 8's scoped intervention; verification of
  cause only means something once there is a justified intervention to verify.
* **Week 10** depends on fluent, combined use of every evidence class from
  Weeks 3–9, now self-selected rather than cued by the week's premise.
* **Week 11** depends on Week 10's integration plus Week 7's
  evidence-reliability discipline and Weeks 8–9's intervention-risk
  discipline, now at larger scale.
* **Week 12** depends on all of the above with no new investigation skill
  introduced; it is a load-bearing integration and defence of Weeks 1–11, not
  a new topic.

The most important single dependency in the semester is Week 6 on Weeks 3–5:
without a habit of gathering more than one evidence class, "hold two
hypotheses and find discriminating evidence" has no raw material to work with.

The second most important is Week 9 on Week 8: verification of a diagnosed
cause only becomes meaningful once students have learned to scope the
intervention whose effects they are attempting to verify.

---

## Repetition Check

Each week was checked against its neighbours for whether its investigative
challenge is genuinely distinct rather than a reskin.

* **Weeks 1 and 2** could look similar because both use small, contained
  systems, but their skill targets are deliberately different. Week 1 is
  purely about observation versus assumption. Week 2 introduces the first
  meaningful hypothesis choice and requires a committed disconfirmation test.
  When the actual incidents are authored, Week 1's fault should therefore
  remain simple enough that hypothesis competition does not become its main
  challenge.

* **Weeks 3, 4, and 5** could collapse into "one week per evidence type" if
  built carelessly — structural, runtime, then historical. They are kept
  distinct by requiring each week to add to rather than replace the prior
  evidence class. Week 4 requires the Week 3 model as a precondition for
  instrumentation placement, and Week 5 requires combining all three. Week
  5's system must therefore not be solvable from history alone.

* **Weeks 6 and 7** both involve ambiguity and are the closest pair in the
  middle of the curriculum. They are kept distinct because Week 6's ambiguity
  lives in the *hypothesis space*: two causes remain plausible while the
  evidence itself is trustworthy. Week 7's ambiguity lives in the *evidence
  itself*: sources conflict, are unreliable, or reveal coexisting faults. Week
  7 must therefore not be resolvable merely by applying Week 6's
  discrimination technique to clean evidence.

* **Weeks 8 and 9** are two sequential parts of the intervention problem rather
  than repetitions. Week 8 keeps diagnosis relatively straightforward so
  students can investigate the *blast radius and safety of a proposed
  intervention*. Week 9 then asks what evidence would actually prove that the
  diagnosed cause has been resolved. Both still use the full investigative
  cycle; the source of uncertainty has moved from diagnosis to intervention
  and verification.

* **Weeks 10 and 11** are the pair most at risk of feeling redundant because
  both use large, under-scaffolded inherited systems. They are kept distinct
  by Week 11 introducing a specifically unreliable element — misleading
  documentation, low reproducibility, or a risky live-like environment — that
  Week 10 does not have. Week 10 is "harder because of scale and silence";
  Week 11 is "harder because some of what the system tells you cannot be
  trusted." Week 10's operational artefacts should therefore be incomplete
  but broadly honest, whereas Week 11 must contain at least one artefact or
  behaviour whose apparent reliability must itself be investigated.

No structural revision to the twelve-week sequence is required. The risk areas
above should instead be treated as build-time constraints when the concrete
incidents are authored, so that the intended distinctions survive into the
student-facing curriculum.

---

## Course Identity Check

### 1. If all technology names were removed, would these twelve weeks still clearly belong to the same course?

Yes. Every week's central question, primary skill, and practical task is
phrased in terms of the investigative cycle: observation versus assumption,
hypothesis and disconfirmation, evidence classes and their reliability,
intervention scope, and verification of cause.

The incident premises may use services, databases, deployments, version
history, runtime traces, or other technical settings, but these remain
scenery. No week's central capability depends on mastering a specific tool,
language, platform, or technology.

### 2. Is any week drifting into a generic software engineering, database, networking, or debugging-tools tutorial?

No week's stated skill is "learn to use X tool" or "learn how databases,
networks, or deployments work."

Weeks 4 and 5 remain the closest risk points because runtime and historical
evidence naturally invoke logging, tracing, debugging, and version-control
tools. That risk is contained by keeping the assessed skill focused on *why a
particular observation is needed, where to gather it, what it supports, and
what it could falsify*, rather than whether a student can operate the tool
itself.

The same restriction applies when database, network, concurrency, deployment,
or performance failures are later chosen as incident settings.

### 3. Does the uncertainty faced by students clearly increase from Week 1 to Week 12?

Yes, although the type of uncertainty deliberately changes rather than every
dimension increasing monotonically.

Scaffolding runs from heavy in Week 1 to none in Week 12. Documentation moves
from accurate and complete toward incomplete, stale, and eventually potentially
misleading. Hypothesis ambiguity rises sharply in Weeks 6–7. Weeks 8–9
temporarily constrain diagnostic ambiguity so that intervention risk and
verification uncertainty can become the primary challenge. Weeks 10–11 then
combine these previously isolated pressures inside larger inherited systems.

Reproducibility remains high for most of the semester and is deliberately
weakened only late, so students encounter intermittent behaviour after the
basic investigative discipline is already established.

By Week 12, the student is responsible not only for navigating those sources
of uncertainty without scaffolding, but also for defending why the evidence
trail is sufficient to support the final diagnosis and intervention.

---

## Contradiction Note

No genuine internal contradiction was found between this curriculum skeleton
and `docs/course-design.md`.

One minor terminology refinement remains worth recording. Section 7 of
`docs/course-design.md` groups Weeks 10–11 together as "Full inherited
systems." This curriculum plan distinguishes the two weeks more sharply:

* Week 10 introduces scale, incomplete context, and minimal scaffolding while
  keeping the available artefacts broadly honest.
* Week 11 retains that scale but adds an actively unreliable condition such as
  misleading documentation, intermittent reproducibility, or a riskier
  operational environment.

This distinction refines the original progression in order to prevent Weeks
10–11 from becoming repetitive. It does not alter the underlying Stage 1
course design: both weeks remain full inherited-system investigations under
substantially reduced scaffolding.
