---
title: When the Evidence Disagrees
description:
  What do you do when two pieces of evidence appear to contradict each
  other? This session's evidence itself is unreliable in places, which is a
  different problem from an unresolved hypothesis.
week: 7
date: 2027-04-12
teachers:
  - marisol-quaye
spec:
  - a determination of whether an observed contradiction means one source is unreliable, or two faults coexist
  - independent evidence supporting that determination
related:
  - sessions/06-two-explanations-one-fault
  - assessments/broken-service-investigation
---

## Before the session

This session extends last week's discriminating-evidence habit to a harder
case: the discrimination step itself produces conflicting results.

## The incident

Customers are being charged for orders that Northfield's system lists as
`failed`. The payment gateway's own log shows `accepted` for every one of
these order IDs. The internal order table shows `failed` for the same IDs,
at a nearby but not identical timestamp. Two people on the team already
disagree about which record to trust — one wants to treat the gateway log as
ground truth and patch the internal handler; the other suspects the log
entries aren't describing the requests anyone thinks they are.

Unlike Week 6, there is no second hypothesis about *what caused a failure*
waiting to be discriminated. There is disagreement about *which piece of
evidence describes reality*, and that is a different question with a
different method.

## What the disagreement could mean

At least three explanations are consistent with "accepted" and "failed"
both existing for the same order ID, and this session does not tell you
which one applies here:

* the gateway log entry belongs to a replayed or sandboxed request that
  reuses production order IDs, and the two records describe different
  events entirely (a scope mismatch);
* the `accepted` event genuinely arrived, but after the internal handler had
  already given up and recorded `failed`, and nothing reconciles a late
  arrival (a temporal mismatch, not a false record);
* the internal `failed` status is itself wrong for an unrelated reason — an
  ID collision under load, say — and the gateway log is accurate, meaning
  two separate faults are visible in the same symptom.

## In the session

Before choosing a side, you check what each source actually is: its
timestamp, its scope (which environment, which request), and its freshness.
You use that inspection — not a preference for the more convenient
record — to decide whether the conflict means one source is unreliable or
means two faults coexist, and you support that decision with a second,
independent piece of evidence rather than the disagreement itself.

## Afterwards

Assessment 2 is due around now. This session's discipline — interrogating a
source's reliability rather than discarding whichever result is inconvenient
— is exactly what its rubric weights most heavily.
