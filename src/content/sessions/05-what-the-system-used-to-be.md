---
title: What the System Used to Be
description:
  Can a fault be explained by something that is no longer in the code at
  all? This session treats version history and prior configuration as
  first-class evidence, not background.
week: 5
date: 2027-03-22
teachers:
  - marisol-quaye
spec:
  - a bisection through version history toward the change that introduced the fault
  - confirmation, via structural or runtime evidence, that the change found is the cause and not merely correlated with it
related:
  - sessions/04-evidence-that-isnt-static-text
---

## Before the session

The failure in this week's system was introduced by a historical change — a
commit, a migration, a configuration edit — that isn't visible in the
present-day source or its runtime behaviour.

## In the session

You use commit history to bisect toward the change that introduced the
fault, then confirm with structural and/or runtime evidence that the change
you found is actually the cause, not something merely correlated with the
timing of the break.

## Afterwards

This is the last of three evidence classes introduced deliberately, one per
week — structural, runtime, historical. From Week 6 onward you're expected to
combine them without being told which to reach for.
