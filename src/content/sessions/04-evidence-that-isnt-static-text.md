---
title: Evidence That Isn't Static Text
description:
  What can runtime evidence tell you that reading the code cannot? The fault
  this week only shows up under specific runtime conditions, so evidence has
  to be generated, not just read.
week: 4
date: 2027-03-15
teachers:
  - idris-fenn
spec:
  - instrumentation placed at points justified by a structural model
  - a diagnosis drawn from the resulting runtime evidence
related:
  - sessions/03-reading-a-system-you-werent-given-a-map-to
---

## Before the session

Bring last week's structural model — it is what decides *where* you add
instrumentation this week, rather than instrumenting everywhere and hoping.

## In the session

The service in front of you fails only under conditions — timing, input
sequence, state — invisible from source alone. You add targeted logging or
tracing at points your Week 3 model justifies, then diagnose from what that
instrumentation actually produces.

## Afterwards

This closes Assessment 1's four-week arc. What you submit this week is the
last of the four staged field-notes entries.
