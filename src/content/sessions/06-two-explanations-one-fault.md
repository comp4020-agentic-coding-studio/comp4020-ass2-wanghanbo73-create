---
title: Two Explanations, One Fault
description:
  How do you choose between two hypotheses that both fit the evidence you
  have so far? This session's failure has two genuinely plausible causes,
  and stopping at the first one that fits is the mistake being taught against.
week: 6
date: 2027-03-29
teachers:
  - idris-fenn
spec:
  - both surviving hypotheses listed explicitly
  - an observation proposed and carried out specifically to discriminate between them, not merely to support one
related:
  - sessions/05-what-the-system-used-to-be
---

## Before the session

Bring the habit of combining structural, runtime and historical evidence
from Weeks 3–5 — this week gives you nothing to discriminate between two live
hypotheses without it.

## The incident

`notify-dispatch`, the service that sends order-confirmation emails,
occasionally sends the same confirmation twice. The message ID is identical
across both sends, and the two sends land a few seconds apart — within the
message broker's configured acknowledgement window. Two explanations are
already circulating:

* **H1 — acknowledgement-timeout retry.** The consumer takes slightly longer
  than the broker's visibility timeout to acknowledge some messages, so the
  broker assumes the message was lost and redelivers it.
* **H2 — broken lease renewal.** Two consumer instances can end up holding
  the same message at once because a lease-renewal bug occasionally lets a
  second instance pick it up before the first one releases it.

Both explanations predict an identical message ID and a short gap between
sends. Neither is preferred by anything gathered so far.

## Two predictions, one experiment

The explanations stop being indistinguishable once you ask what each one
predicts under a change you control, rather than what each one is consistent
with under the conditions you've already observed:

| If you… | H1 predicts | H2 predicts |
| --- | --- | --- |
| raise the broker's visibility timeout well past normal processing time | duplicates drop, since the retry that timeout triggers stops firing | no change, since the duplication has nothing to do with the timeout |

## In the session

You state both hypotheses explicitly, explain why the evidence so far
doesn't distinguish them, then design and run the observation above (or one
with the same discriminating property) before committing to either. The
point of the session is the elimination, not just whichever hypothesis is
left standing afterward.

## Afterwards

Correctly eliminating a plausible alternative counts as evidence of good
investigation in its own right, independent of which hypothesis survives.
