---
title: Ninth lecture
description:
  Why a disappeared symptom and a passing smoke test are evidence for a
  narrower claim than "the diagnosed cause is fixed," and how to verify the
  claim that actually matters.
week: 9
date: 2027-04-26
teachers:
  - marisol-quaye
related:
  - sessions/09-verifying-you-didnt-just-move-the-problem
  - assessments/incident-reconstruction
---

Week 8 asked whether an intervention was safe to apply. This week asks a
question that sounds similar but isn't: did it actually do what the
diagnosis said it would? A diagnosis is a claim about mechanism — *this*
is why the failure happens. Verifying it means testing that claim, not
just checking that the failure is no longer visible.

## What a disappeared symptom is evidence for

```text
The symptom disappeared.
```

That is evidence for one claim:

```text
The user-visible failure is no longer reproduced.
```

It is not yet evidence for a different, stronger claim:

```text
The diagnosed causal mechanism has been removed.
```

The gap between those two claims is exactly where a masked symptom, a
relocated failure, or a workaround that happens to dodge your test case all
hide. Every one of them makes the first claim true while leaving the second
one false.

## Deriving a check from the diagnosis, not the symptom

A verification tied to a symptom asks "does the bad thing still happen?" A
verification tied to a diagnosis asks a more specific question: "does the
mechanism the diagnosis named still operate the way the diagnosis said it
did?" The second question is harder to answer, because it requires the
check to actually exercise the mechanism — the specific timing, sequence,
or condition the diagnosis claimed was responsible — rather than whatever
sequence happens to be convenient to run once.

## Negative evidence still has to be earned

A test that passes because it never exercised the failure condition in the
first place is not negative evidence that the condition is gone; it's an
absence of evidence, dressed up as a result. Before trusting a passing check
as support for "the cause is resolved," it's worth asking directly whether
that check was actually capable of failing if the diagnosis were wrong —
if the answer is no, the check hasn't verified anything about the cause,
regardless of its outcome.

## "All tests pass" is not a conclusion

A regression suite tells you the behaviours someone already thought to
protect are still intact. It says nothing about whether the specific
mechanism named in your diagnosis was addressed, unless one of those tests
happens to exercise exactly that mechanism — which is not something to
assume without checking. Treat "all tests pass" as one data point among the
ones this week asks for, not as the sentence that ends the investigation.

## Where this sits in the cycle

Verify has been present since Week 1 in name, but this is the week where it
becomes a skill with its own technique rather than an assumed final step.
The habit carries forward unchanged from here: a claim needs a check that
targets the claim, and a check that couldn't have failed proves nothing
about whether it was true.
