---
title: Fifth lecture
description:
  Why a system's history counts as evidence, and why the change that sits
  closest in time to a failure is not automatically the change that caused
  it.
week: 5
date: 2027-03-22
teachers:
  - marisol-quaye
related:
  - sessions/05-what-the-system-used-to-be
---

Weeks 3 and 4 gave you two evidence classes: what the system's structure
claims about itself, and what it actually does at runtime. Both describe the
system as it exists right now. This week's fault isn't visible in either,
because the thing that explains it doesn't exist right now — it happened,
once, and left the present system slightly different from how it would look
if that event had never occurred.

## Temporal evidence is not causal evidence

```text
Commit A occurred immediately before the incident began.
```

That is a fact about time. It says nothing yet about mechanism. A change
that happened right before a failure is a lead worth investigating, not a
diagnosis worth writing down — and version history routinely offers more
than one lead at once, some of which are simply neighbours in time rather
than causes.

## Bisection finds a moment, not an explanation

Bisecting through history is a fast way to narrow down *when* a system's
behaviour changed. It is not, by itself, a way to establish *why*. A commit
found by bisection is a hypothesis about the cause — "this change is
responsible" — and like any hypothesis from Week 2 onward, it needs a test
that could fail. Treating the bisection result as the answer skips the step
that would tell you whether it actually is one.

## What confirmation looks like here

Confirming a historical suspect means going back to the evidence classes you
already have and asking whether they agree with the suspect change's
predicted mechanism, not just its timing.

```text
Historical suspect predicts:
Only orders whose records predate a specific structural change should be
affected.

Structural evidence should show:
What the current lookup logic actually does with a record from before that
change, versus one from after it.

Runtime evidence should show:
Whether the affected orders in production actually match that predicted
split, or affect some other, unrelated slice of orders instead.
```

If the structural and runtime evidence line up with what the historical
suspect predicts, the suspect has survived a real test. If they don't — if
the affected orders turn out to share some other property instead — the
suspect was only ever a coincidence of timing, and the search continues.

## Why this depends on Weeks 3 and 4

Historical evidence is the third class this course introduces, and
deliberately the last one introduced on its own. From here on, no week
hands you a single evidence class and calls the investigation done. This
week's discipline is holding three classes — structural, runtime, and
historical — against each other, and trusting the change only where all
three agree.

## What carries forward

From Week 6 onward, nobody will tell you which evidence class to reach for.
The three you now have are the ones you're expected to combine on your own
judgement, and the habit of testing a historical suspect rather than trusting
it on proximity alone is the part of this week most directly reused later.
