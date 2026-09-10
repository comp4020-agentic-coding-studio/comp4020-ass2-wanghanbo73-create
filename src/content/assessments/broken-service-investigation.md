---
title: Broken Service Investigation
description:
  An unfamiliar multi-module service, no onboarding document, and a symptom
  report rather than a diagnosis — with at least two plausible root causes
  waiting in the evidence.
week: 7
due: 2027-04-16T17:00:00+10:00
weight: 25
marking:
  mode: weighted
  criteria:
    - name: Observation and problem framing
      weight: 10
    - name: Evidence strategy — evidence classes chosen and why
      weight: 20
    - name: Evidence interpretation
      weight: 20
    - name: Handling of alternative explanations
      weight: 25
    - name: Diagnosis quality and justification
      weight: 15
    - name: Investigation record / communication
      weight: 10
spec:
  - a reconstructed model of the system's intended behaviour
  - at least two distinct evidence classes gathered, each with a stated reason it was sought
  - competing hypotheses named explicitly, including at least one eliminated with its discriminating test
  - a final diagnosis, plus a proposed (not required) intervention and verification check
  - a plain statement of remaining uncertainty or unverified assumptions
related:
  - sessions/03-reading-a-system-you-werent-given-a-map-to
  - sessions/07-when-the-evidence-disagrees
---

> The service is failing. Here is the symptom a user reported. Find out why.

You receive a multi-module service with no onboarding document and a
failure description written the way a user would write it, not the way a
diagnosis would. The system is scoped so that more than one plausible cause
turns up once you start looking — the assessment exists to test whether you
can tell them apart, not whether you land on one by luck.

Writing substantial new functionality is out of scope. Any code you write
exists to observe, instrument, test, or probe the system that's already
there.

## What you submit

A reconstructed model of what the system is meant to do; a record of at
least two evidence classes you gathered and why; an explicit list of
competing hypotheses, including one you eliminated and how; a diagnosis; and
a plain account of what you still don't know. A proposed intervention and
verification check are expected, but a working patch is not the target of
this assessment.

## How it's marked

Handling of alternative explanations carries the single largest weight.
Naming the right cause without showing how a real alternative was ruled out
does not reach the top band; eliminating a genuine alternative and stating
what remains uncertain can score well even with a lightly-sketched fix.
