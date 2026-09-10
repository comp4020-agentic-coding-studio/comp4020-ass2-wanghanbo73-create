---
title: Tenth lecture
description:
  How to plan an investigation into a large, unfamiliar system when nobody
  tells you which component, file, or evidence source to start with.
week: 10
date: 2027-05-03
teachers:
  - idris-fenn
related:
  - sessions/10-no-one-left-to-ask
---

Every system so far has come with an implicit boundary — a single file, a
handful of modules, one running service. This week's system doesn't. It's
large enough that reading all of it is not a realistic strategy, and nobody
is going to tell you which corner of it matters. The skill this week teaches
isn't a new evidence class; it's what to do with the ones you already have
when nothing points you toward where to use them first.

## Replacing the wrong first question

```text
Which subsystem should I read first?
```

That question assumes reading is the scarce resource to spend carefully,
which is true, but it's aimed at the wrong target. A more useful question
doesn't ask where to start reading — it asks what to look at first:

```text
Which observation would most reduce my uncertainty about where the failure
crosses a boundary?
```

The difference matters. The first question treats investigation as a
sequence of files to open. The second treats it as a sequence of
uncertainty-reducing observations, some of which may come from reading, some
from probing behaviour, some from an operational artefact — chosen because
of what they'd rule out, not because they're the obvious place to look.

## Scope is something you narrow, not something you're given

At this scale, nobody hands you the boundary of what's relevant. You start
with a boundary wider than the actual fault and narrow it as evidence
accumulates — a symptom crossing three components narrows to two once you
can show the third behaved correctly during the incident window, then
narrows further as each subsequent observation rules more of the system
out. Treating the initial, wide boundary as fixed, or trying to read
everything inside it before doing anything else, both waste the scale
disadvantage this week is built around.

## Uncertainty at scale is still uncertainty

A system this size will leave things genuinely unresolved even after a
careful investigation, simply because not everything can be checked in the
time available. That is not a failure particular to this week — it's the
same discipline from every earlier week, stating plainly what remains
unknown, just applied to a system where "everything" was never going to be
achievable in the first place.

## Where this sits in the cycle

Nothing new is being introduced to Observe, Hypothesise, Gather Evidence, or
Reduce Uncertainty this week. What's new is that nobody curates which of
them to reach for, or in what order — that choice, and the discipline of
revising it as evidence comes in, is the entire content of this week's
practical.
