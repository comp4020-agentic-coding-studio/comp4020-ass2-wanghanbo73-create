---
title: Eighth lecture
description:
  Why removing a symptom is not the same as knowing a fix is safe, and how
  to reason about what an intervention might disturb before applying it.
week: 8
date: 2027-04-19
teachers:
  - idris-fenn
related:
  - sessions/08-the-fix-that-isnt-safe
---

Every week so far has ended at the same place: a diagnosis, stated and
supported. This week the diagnosis is deliberately easy — it takes little
effort to establish what's wrong. What's new is that having a correct
diagnosis and having a safe fix turn out to be two different achievements,
and this course has not yet asked you to tell them apart.

## The symptom disappearing answers a narrower question than it looks like

```text
The patch removes the symptom.
```

```text
That answers: does the symptom still appear?
It does not answer: what else did the patch change?
```

A fix that makes the symptom go away has answered exactly one question. It
has not answered whether the fix touched anything else, and "the failure I
was looking at is gone" is a much weaker claim than "this change is safe."
Treating the first as proof of the second is the specific mistake this week
is built against.

## An intervention is an experiment on the system

Applying a fix changes the system's behaviour in ways you intended and,
potentially, in ways you didn't. That makes an intervention structurally
the same kind of thing as any other test you've run this semester: it has a
predicted effect, and it can have side effects you haven't looked for yet.
The habit that applies to a hypothesis — state what you expect, then check
whether reality agrees — applies just as directly to a patch, before you
commit to it as the answer.

## Naming the blast radius before you touch anything

A code path is rarely used by only the failure you're looking at. Before
applying an intervention, the useful question is not "does this fix the
bug?" but "what else calls, depends on, or assumes something about the
code I'm about to change?" Naming even one plausible answer to that
question — a shared function, an invariant, a timing assumption — gives you
something concrete to check, rather than a fix you're simply hoping is
narrow.

## "All tests pass" is not the same claim as "this is safe"

An existing test suite checks the behaviours someone already thought to
write a test for. A fix that only disturbs a path nobody has covered will
pass every existing test and still be unsafe. This week is not about
writing better tests in general — it's about identifying, for this specific
intervention, the one or two things most plausibly at risk, and checking
those deliberately, rather than treating a green test run as the end of the
inquiry.

## Where this sits in the cycle

Observe, Hypothesise, Gather Evidence, and Reduce Uncertainty still do the
work of reaching the diagnosis — they just cost less this week by design.
What's new is that Intervene now carries real weight of its own: a scoped,
minimally invasive change, checked against both the original failure and
the risk you named, with whatever you couldn't check stated plainly rather
than assumed away. Verify, in the fuller sense of confirming the diagnosed
cause is actually resolved rather than just currently invisible, is next
week's problem — this week only asks you to check the risk you identified,
not to build a complete verification argument yet.
