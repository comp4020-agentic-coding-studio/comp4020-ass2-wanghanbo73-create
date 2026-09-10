---
title: The Fix That Isn't Safe
description:
  How do you decide whether an available fix is acceptable, not just
  whether it makes the symptom go away? The diagnosis this week is
  deliberately easy to reach; the risk is entirely in the fix.
week: 8
date: 2027-04-19
teachers:
  - idris-fenn
spec:
  - at least one other part of the system checked for a plausible side effect before the fix is applied
  - the check performed with the same evidence discipline used for diagnosis
related:
  - sessions/07-when-the-evidence-disagrees
---

## Before the session

The diagnosis in this week's system is cheap to establish on purpose, so
attention shifts to a different question: what else could the obvious fix
disturb?

## In the session

Before applying the fix that would make the symptom disappear, you identify
at least one other code path, invariant, or dependent behaviour it could
plausibly affect, and check it — using the same evidence-gathering discipline
you'd otherwise spend on diagnosis.

## Afterwards

Verifying that this week's fix actually addressed the diagnosed cause, rather
than just removed the symptom, is next week's problem.
