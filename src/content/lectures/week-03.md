---
title: Third lecture
description:
  How to build a working model of a system's intended behaviour when there is
  no one left to explain it, and why structural reading has to do the work
  documentation used to.
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
related:
  - sessions/03-reading-a-system-you-werent-given-a-map-to
---

Weeks 1 and 2 both worked on systems small enough that reading the whole
thing was a reasonable first move. That stops being true this week. `fulfil`
spans several modules, nobody currently at Northfield Mercantile built it,
and its README is stale enough to be actively misleading in places rather
than merely incomplete. Documentation, from here on, is not a reliable
evidence source by default — it has to earn trust the same way any other
claim does.

## What structural reading actually means

Structural reading is reconstructing what a system is *for* from how it is
organised, without being told. Three sources carry most of the weight:

- **entry points** — where does execution actually begin, and what triggers
  it?
- **naming and interfaces** — what does a module call itself, and what does
  it expose to the modules around it?
- **control flow** — what calls what, in what order, and what has to be true
  for a given path to run at all?

None of these is documentation in the traditional sense. All three are
evidence, in the same sense last week's disconfirming test was evidence —
they support or contradict a specific claim about what the system does, and
they can be wrong or misleading in ways worth naming explicitly.

## A model is a claim, not a map

The output of structural reading is a short written model: what the system
is supposed to do, stage by stage, plus an explicit list of what you haven't
verified yet.

```text
Supported by control flow:
Intake validates an order, then hands it to pricing before inventory
allocation runs.

Unverified:
Whether every successfully priced order is guaranteed to reach inventory
allocation, or whether some path skips it.
```

That second line is doing real work. A model that only states what's known
and omits what isn't looks more finished than it is — and an unstated
assumption in a structural model is exactly as dangerous as an unstated
assumption in an observation.

## Why this depends on Weeks 1 and 2

A structural model is itself a hypothesis about the system's design, and
Week 2 already established what a hypothesis needs: something that would
count against it. "Intake always hands off to pricing" is falsifiable —
find one order that skipped pricing and it's wrong. "Intake probably does
some validation" is not; there's no result that would disconfirm it. Week
1's habit matters just as directly: every claim in the model has to trace
back to something you actually read in the code or observed in its
behaviour, not to what would be convenient for the model to say.

## Using the model to search

Once you have a model with its gaps marked, the fault search stops being "try
opening files until something looks wrong" and becomes "which of my
unverified claims, if false, would explain what's observed?" That question
has a small number of candidate answers instead of an unbounded one — which
is the entire value of doing the modelling step at all.

## What carries into next week

The model you build this week is not a one-off artefact. Week 4's
instrumentation is placed at points this model justifies, not at every
plausible location — a structural model is what turns "log everything and
hope" into a targeted question about the system.
