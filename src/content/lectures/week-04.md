---
title: Fourth lecture
description:
  What runtime evidence can tell you that reading the code cannot, and why
  instrumentation only counts as investigation when a structural model
  decided where to place it.
week: 4
date: 2027-03-15
teachers:
  - idris-fenn
related:
  - sessions/04-evidence-that-isnt-static-text
  - assessments/debugging-field-notes
---

Every evidence source so far has been static: output you could read, code you
could read, a model you built by reading. `fulfil`'s duplicate-shipment
failure does not yield to any amount of further reading, because it is not a
property of what the code says — it is a property of what happens when the
system runs under a specific condition. This week adds a genuinely different
evidence class, not a bigger version of the same one.

## What runtime evidence is, and isn't

Runtime evidence is a record of what a system actually did during a specific
execution — a log line, a trace, a captured value — as opposed to what its
source implies it will do. The two usually agree. When they don't, the
runtime record is what you trust, because it describes what happened rather
than what was intended.

```text
Structural reading says:
Each order is allocated inventory exactly once before shipping.

Runtime evidence says:
Order 8842 was allocated inventory twice, four milliseconds apart.
```

Neither claim is false on its own terms. The structural claim describes the
intended path through the code; the runtime claim describes what one
specific execution actually did. Reconciling them — not discarding either —
is the work this week asks for.

## Instrumentation is a hypothesis about where to look

Adding a log line is itself a small hypothesis: "the answer will be visible
here." An instrumentation point chosen because it's convenient, or because
"more logging can't hurt," is a hypothesis with no argument behind it — and,
in practice, it produces enough volume that finding the signal in it becomes
its own investigation. An instrumentation point justified by last week's
structural model is different: it targets exactly the stage the model
couldn't verify, so whatever comes back either confirms or contradicts a
specific, named unknown.

```text
Justified:
Log the allocation stage's entry and exit, because the Week 3 model could not
verify that every priced order reaches it exactly once.

Not justified:
Log every function call in the pipeline and read the output afterward.
```

## Reading the result without overreacting to it

Runtime evidence is easy to over-trust once it exists, precisely because it
feels more concrete than a static model. One trace showing a double
allocation is evidence toward a hypothesis about *why* — it is not yet a
diagnosis. The habit from Week 2 still applies: state what result would have
looked different if the suspected cause weren't the real one, and check for
it, rather than stopping at the first trace that fits.

## Where this sits in the cycle

Weeks 1–3 lived mostly in Observe, Hypothesise, and the early edge of Gather
Evidence. This week is Gather Evidence in earnest — evidence that has to be
actively produced, not passively read — feeding straight back into Reduce
Uncertainty. Intervene and Verify remain out of scope for this session's
practical, but only because the diagnosis itself is still the open question;
neither disappears from the semester, and both return with weight of their
own from Week 8 onward.

## Closing the first assessment's arc

This session's entry is the fourth and last of Debugging Field Notes' staged
submissions. Taken together, the four weeks ask for the same underlying
habit against four different constraints: observe without inferring,
hypothesise with a way to be proven wrong, read structure without a map, and
generate evidence a system won't hand you on its own.
