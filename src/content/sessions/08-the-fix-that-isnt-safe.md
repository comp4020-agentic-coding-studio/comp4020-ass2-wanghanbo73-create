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

## The incident

Popular items in `fulfil` occasionally show negative available stock. The
diagnosis takes little effort to reach: when an order is cancelled and then
immediately resubmitted, the cancellation path re-allocates inventory before
it restores the stock the original order had reserved, so the resubmitted
order allocates against stock that was never actually freed. The obvious fix
is to call the stock-restoration function earlier in the cancellation path,
before re-allocation runs.

## The question before the patch

That same restoration function is also called, deliberately, from the
partial-refund path — where it does *not* run immediately. During
high-traffic sales, refund-driven restocking is batched overnight on purpose,
so that available-stock counts don't fluctuate faster than the reconciliation
job can keep up with. Moving restoration earlier in one caller's path is a
one-line change; whether it also changes when the other caller's stock
becomes available, and whether that's tolerable, is not something the
symptom or the one-line diff will tell you.

## In the session

Before applying the fix, you state what it's meant to do, name at least one
other path or invariant it could plausibly disturb — the refund flow's
deferred restocking is one candidate, not the only possible one — and design
a check for that risk before you make the change. You apply the smallest
version of the fix that resolves the cancellation bug, then check both the
original symptom and the risk you identified, and you say plainly what you
still don't know about other effects.

## Afterwards

Verifying that this week's fix actually addressed the diagnosed cause, rather
than just removed the symptom, is next week's problem.
