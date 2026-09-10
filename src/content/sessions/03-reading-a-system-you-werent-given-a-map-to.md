---
title: Reading a System You Weren't Given a Map To
description:
  How do you build a working model of a system's intended behaviour when no
  one is going to explain it to you? Documentation stops being a reliable
  evidence source from this session onward.
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
spec:
  - a short written model of what the system is supposed to do
  - the model derived from structure, naming and control flow, not narrative docs
  - the fault located using that model, not by scanning at random
related:
  - sessions/02-a-hypothesis-that-could-be-wrong
---

## Before the session

The system is a mid-sized, multi-module codebase with no onboarding document.
It will not fit in one sitting the way Weeks 1–2's systems did.

## In the session

You reconstruct, from code organisation and control flow alone, a model of
what the system is meant to do — then use that model to locate a fault whose
visibility depends on understanding control flow across modules, not on
reading any single file closely.

## Afterwards

This week's structural model is the thing next week's runtime instrumentation
gets justified against — instrumenting without it is instrumenting blind.
