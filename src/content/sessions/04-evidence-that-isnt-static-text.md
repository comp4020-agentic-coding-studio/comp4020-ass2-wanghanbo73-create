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

## The incident

`fulfil` is now running as a live service rather than something you read
offline. Under ordinary load it behaves as your Week 3 model predicts. Under
a specific, rarer runtime condition — orders arriving in quick succession
against the same customer account — a small number of orders are fulfilled
twice: two shipments generated for one order. Reading `fulfil`'s source
again does not show this happening; every individual function looks correct
in isolation. The duplication is a property of what happens at runtime, not
of what the code says on the page.

## Where static reading stops helping

The duplication only appears under rapid repeated activity on the same
account, never on an account acting alone — and that condition is exactly
the kind of fact source code doesn't encode. Which stage generates the
second shipment is still unknown, including whether it's the stage your
Week 3 model flagged as unverified. Reading `fulfil` again, line by line,
would not add anything to what Weeks 1–3 already extracted from it; the next
fact has to come from watching it run.

## In the session

You choose an instrumentation point — or a small number of them — justified
by your structural model, add the minimum logging or tracing needed to make
the runtime behaviour visible, then diagnose from what it actually produces.
Instrumenting everywhere is not a substitute for choosing: undirected logging
buries the signal you're looking for in volume, and does not demonstrate the
skill this week is grading.

## Afterwards

This closes Assessment 1's four-week arc. What you submit this week is the
last of the four staged field-notes entries. You leave this session able to
decide where a running system needs to be observed, based on a model rather
than a guess, and to read the resulting evidence without drowning in it.
