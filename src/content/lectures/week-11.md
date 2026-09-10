---
title: Eleventh lecture
description:
  What changes when the system's own evidence cannot be trusted at face
  value — and why the answer is calibrated confidence, not blanket distrust.
week: 11
date: 2027-05-10
teachers:
  - marisol-quaye
related:
  - sessions/11-the-system-that-fights-back
---

Week 10 was hard because the system was large and quiet — nobody curated
where to look. This week the system isn't quiet at all; it hands you
dashboards, runbooks, and logs freely. The difficulty is that not all of
them describe reality accurately, and nothing marks which ones don't.

## A log is an observation, not an oracle

```text
A log is an observation produced by instrumentation.
```

It is not:

```text
An oracle.
```

Instrumentation is written by someone, samples what someone decided was
worth sampling, and can quietly stop describing reality if the system
changes around it without the instrumentation being updated to match. A log
line deserves the same treatment as any other observation from Week 1
onward: something to check, not something to accept because a machine
produced it.

Before trusting what an artefact tells you, it's worth asking the same
handful of questions each time:

* **source** — what produced this, and what does it actually measure?
* **scope** — what does it cover, and what does it leave out?
* **timestamp** — when was this true, and is that still now?
* **sampling** — does it observe everything, or only some fraction, and on
  what basis?
* **version** — has anything changed since this was written or last
  verified?

## Distrust without paranoia

The lesson here is not "trust nothing the system tells you" — an
investigation that discards every artefact by default has no evidence left
to work with. The lesson is that trust should scale with corroboration:
an artefact that agrees with an independent source earns more confidence
than one standing alone, and an artefact that conflicts with independent
evidence earns less, but neither is automatically right or automatically
wrong on the strength of your prior suspicion about it.

## Confidence, not certainty

Some claims by the end of this week's investigation will be well-supported,
some will be provisional — plausible, pending a corroborating check you
haven't run yet — and some will remain genuinely unverified. Collapsing
that distinction into a single "diagnosed" or "not diagnosed" throws away
information the evidence actually gave you. Reporting a provisional claim as
provisional is not a weaker investigation than reporting it as certain; it's
a more accurate one.

## Week 10 versus Week 11

Week 10's difficulty was scale and silence: a system large enough that
nobody could tell you where to look. This week's difficulty is different in
kind, not degree: the system does tell you things, and some of them are
wrong, stale, or narrower in scope than they appear. Scaling Week 10's
approach up further doesn't help here — what helps is inspecting the
evidence itself before trusting what it claims.
