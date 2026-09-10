---
title: Verifying You Didn't Just Move the Problem
description:
  How do you know an intervention actually resolved the cause, rather than
  relocating or masking the symptom? This session's fix looks like it
  worked — closer verification is what the week is actually testing.
week: 9
date: 2027-04-26
teachers:
  - marisol-quaye
spec:
  - a verification check tied to the diagnosed cause, not the surface symptom
  - a demonstration that the check would have caught it, had the intervention only masked the symptom
related:
  - sessions/08-the-fix-that-isnt-safe
  - assessments/incident-reconstruction
---

## Before the session

This session is the second half of Week 8's problem: a scoped intervention is
only meaningful once you can show it actually did what it was meant to.

## The incident

Last week's fix to `fulfil` — restoring reserved stock earlier in the
cancellation path — is in place. The negative-stock reports have stopped.
An existing smoke test that cancels and immediately resubmits an order now
passes where it used to fail. Both of those are real observations. Neither
is the claim the diagnosis actually made.

## What the smoke test proves, and doesn't

The diagnosis's causal claim was specific: the race between cancellation and
resubmission — restoration running too late relative to re-allocation — has
been closed. The smoke test proves something narrower: that one particular
cancel-then-resubmit sequence, run once, at the timing the test happens to
use, no longer shows the symptom. A race condition can pass a single
deterministic test run while remaining open under a slightly different
timing or a higher-concurrency resubmission than the test exercises. "The
report is clean" and "the race no longer exists" are different claims, and
only one of them is what the diagnosis promised.

## In the session

You write a verification check tied to your diagnosis rather than to the
symptom's disappearance, apply the intervention, and show that your check
would have flagged it had the intervention merely masked the original
failure instead of resolving it.

## Afterwards

Assessment 3 is due around now, and shares this week's central demand:
verification tied to a diagnosed cause, not to the absence of an error
message.
