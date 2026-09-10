---
title: Second lecture
description:
  Why a hypothesis needs a disconfirming test to count as one, and how
  Debugging Field Notes turns that habit into the semester's first graded work.
week: 2
date: 2027-03-01
teachers:
  - idris-fenn
related:
  - sessions/02-a-hypothesis-that-could-be-wrong
  - assessments/debugging-field-notes
---

Where Week 1 drew the line between an observation and an assumption, this
lecture draws the next one: between a hypothesis that is merely plausible and
one that is actually useful, because it commits in advance to what would
prove it wrong.

## Plausible is not the bar

Last week's observation log is only useful once something is done with it.
The obvious next step is to guess a cause — and on `reconcile-batch`'s
mismatch, there are already two guesses in circulation, each one consistent
with everything observed so far. Consistency with the evidence is a low bar.
A hypothesis clears it as soon as it doesn't contradict anything you've
already seen; that leaves room for several hypotheses to clear it at once,
which is exactly the situation this week puts you in.

## What makes a hypothesis useful

A useful hypothesis names, in advance, a result that would count against it —
not a result that would confirm it. Confirming evidence is cheap to find for
almost any hypothesis that hasn't been ruled out yet; that's what "merely
plausible" means. A disconfirming test is expensive in a different way: it
has to be a result the hypothesis genuinely could not survive.

```text
Hypothesis:
The reconciler is reading a stale currency-conversion rate.

Disconfirming result:
Re-running the reconciler against last night's data, with the rate refreshed,
still produces the same three mismatches.
```

If that result actually occurred, the stale-rate hypothesis would be dead —
not "less likely," dead. That is the property a disconfirming test needs to
have before it is worth running.

## Commit before you run it

The order matters as much as the content. Writing the disconfirming test
after seeing the result invites a quiet rewrite: a test that would have
disconfirmed the hypothesis gets reworded, after the fact, into one the
result happens to pass. This week's practical enforces the order directly —
the test is submitted before you're permitted to run it — because the
discipline doesn't survive being optional.

## A hypothesis can lose, and that's the point

```text
Hypothesis:
The cached configuration is stale.

Disconfirming result:
A request from a fresh process — no cache possible — still exhibits the
same behaviour.
```

If that's what happens, the hypothesis is refuted, and refuting it is
progress: it removes a candidate explanation from consideration and narrows
what's left to investigate. A first guess that turns out wrong, tested
honestly, is a better outcome for the investigation than a first guess that
turns out right by accident and is never tested at all.

## Where this sits in the cycle

Week 1 lived entirely in **Observe**. This week is **Hypothesise**, and it
depends on last week's habit directly — a hypothesis is only as trustworthy
as the observations it's built from. **Gather Evidence** and **Reduce
Uncertainty** appear here too, in miniature: running the disconfirming test
*is* gathering evidence, and updating your belief on its result *is* reducing
uncertainty. The full cycle doesn't wait until later weeks to start moving;
it just keeps most of its weight on Observe and Hypothesise while the
systems are still small enough to make that safe.

## Where this is graded

Debugging Field Notes (Weeks 1–4, 15%) grades exactly this habit, across four
staged entries — this session's practical is the second of them.
