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

Bring your Week 3 structural model of `fulfil` and your Week 4 instinct for
runtime evidence — this week's fault is invisible to both until you add a
third source, but neither one stops being useful.

## The incident

A small fraction of `fulfil`'s orders are being handed to Continental
Parcel — a carrier Northfield Mercantile stopped using at the start of the
year. Nothing in the present-day routing code names Continental Parcel; the
lookup table your Week 3 model already covers lists only current carriers.
Runtime traces (Week 4's evidence class) confirm the symptom is real: for the
affected orders, `fulfil` genuinely issues an outbound call to Continental
Parcel's API. Reading the current source harder will not explain a call to a
carrier the source doesn't mention.

## Introduced near the failure, or caused it?

Version history shows a carrier-table consolidation migration that ran
fourteen weeks ago, and — in the same week — an unrelated logging refactor
that happened to touch the same file. Bisecting by proximity in time alone
would leave you unable to tell which of the two is relevant, or whether
either is. "This change is the closest one in time" is not the same claim as
"this change is why the failure happens," and the practical is built so that
conflating the two produces a wrong answer that still feels confident.

## In the session

You bisect through version history toward a candidate change, then use
structural and/or runtime evidence — not the commit timestamp — to test
whether that change is actually responsible. A candidate that survives this
check is more than temporally adjacent to the failure; a candidate that
doesn't survive it is a coincidence you were right to suspect and right to
rule out.

## Afterwards

This is the last of three evidence classes introduced deliberately, one per
week — structural, runtime, historical. From Week 6 onward you're expected to
combine them without being told which to reach for.
