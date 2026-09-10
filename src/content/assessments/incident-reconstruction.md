---
title: Incident Reconstruction
description:
  A system that looks fine now, a bundle of historical and operational
  artefacts, and a requirement to reason across time before touching
  anything.
week: 9
due: 2027-04-30T17:00:00+10:00
weight: 25
marking:
  mode: weighted
  criteria:
    - name: Historical evidence interpretation and reconstruction
      weight: 20
    - name: Handling of conflicting or ambiguous evidence
      weight: 15
    - name: Diagnosis quality and justification
      weight: 15
    - name: Intervention justification and scoping
      weight: 20
    - name: Verification quality
      weight: 20
    - name: Investigation record / communication
      weight: 10
spec:
  - an incident reconstruction stating what happened, when, and why, each major claim tied to a specific artefact
  - an account of how ambiguous or conflicting artefacts were interpreted
  - a diagnosis naming the relevant cause, not only the visible symptom
  - a scoped intervention, with at least one blast-radius or invariant check actually executed
  - a verification argument tied to the diagnosed cause, not to the symptom's disappearance
  - a concise statement of remaining uncertainty
related:
  - sessions/05-what-the-system-used-to-be
  - sessions/09-verifying-you-didnt-just-move-the-problem
---

> Something broke. It may not look broken right now. Work out what happened,
> then fix it without breaking something else.

The system you receive does not obviously fail on inspection — it works, or
appears to, under some conditions. Alongside it comes a bundle of commit
history, configuration changes, incident tickets, and logs from around the
time something went wrong. The reconstruction has to reason across that
history, not just read the present-day code.

The eventual fix carries a real blast-radius concern, consistent with the
intervention discipline built in Weeks 8–9. Substantial new functionality is
not required.

## What you submit

A reconstruction of what happened and why, each claim tied to a specific
artefact; a diagnosis distinct from the surface symptom; a scoped
intervention with at least one blast-radius check actually run; a
verification argument tied to that diagnosis; and a statement of what
remains uncertain.

## How it's marked

A correct patch that can't be tied back to a reconstructed cause, or that
verifies only that the original symptom vanished, does not receive full
marks. A well-evidenced reconstruction with a properly scoped intervention
can score highly even with one secondary factor left unresolved, provided
that gap is stated rather than concealed.
