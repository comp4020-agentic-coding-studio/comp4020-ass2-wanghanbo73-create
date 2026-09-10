---
title: A Hypothesis That Could Be Wrong
description:
  What makes a hypothesis useful, as opposed to merely plausible? A
  reproducible failure with two similar-looking causes forces a real choice,
  and the choice has to be committed to before it's tested.
week: 2
date: 2027-03-01
teachers:
  - idris-fenn
spec:
  - a hypothesis and its disconfirming test, submitted before the test is run
  - a report of what the test actually showed, including a refuted first guess
related:
  - sessions/01-naming-what-you-see
---

## Before the session

Bring the observation log from Week 1's system-reading habit — this session
reuses it as the starting material for hypothesis formation, on a slightly
larger system.

## The incident

Northfield Mercantile's nightly batch reconciler — `reconcile-batch`, three
files, one entry point — compares a night's processed orders against the
accounting ledger. Out of roughly 500 orders in last night's run, three show
a total that doesn't match the ledger's figure for the same order. All three
mismatched orders happened to be placed within the same ten-minute window,
and all three used a discount code. Two candidate explanations are already
circulating among the team before you arrive: the reconciler is reading a
currency-conversion rate that hadn't refreshed yet, or it is double-counting
a line item on orders that were partially refunded. Both are consistent with
what's known so far. Neither has been tested.

## Two guesses, one test

Both circulating explanations would produce a small numeric discrepancy,
consistent with the mismatch count, the shared time window, and the shared
use of discount codes. Consistency is why neither can be preferred yet: it's
the bar both already clear. What's missing is a test result that only one of
the two explanations could survive — and nobody has proposed one before now.

## In the session

You submit a hypothesis and the specific, named test that would disconfirm
it — *before* you're allowed to run that test — then report what actually
happened. A guess that survives contact with its own disconfirming test is
treated differently from one that doesn't, and so is a guess that gets
quietly reworded after the result comes in.

## Afterwards

Revising a hypothesis on genuine disconfirming evidence is graded as
successful investigation, not as having gotten it wrong the first time. You
leave this session able to commit to what would prove a hypothesis wrong
before you know the answer — the habit next week's structural reading has
nothing to fall back on without.
