---
name: verify
description: Adversarial Checker (Gatekeeper) that strictly evaluates if a task has met its Definition of Done.
---

# /verify: The Adversarial Gatekeeper

This skill acts as a strict, read-only verifier that prevents a loop from completing until the established Definition of Done (DoD) is provably met. It acts as an adversarial entity—assuming the code is broken until proven otherwise.

## Instructions

When invoked via `/verify`, you must execute the following strict evaluation protocol. 

### Phase 1: Context Extraction
1. **Locate the DoD:** Read the current task's Definition of Done from `.agents/traces/current_session.md` (or the equivalent contract file).
2. **Review the Evidence:** Look at the recent execution logs, terminal outputs, and modified files.

### Phase 2: Adversarial Assessment
1. **Do not write code.** You are a read-only verifier.
2. **Challenge the output:** 
   - Did the implementation actually meet *all* specific criteria in the DoD?
   - Were edge cases ignored?
   - Is there visual, logical, or test-based proof of success?
   - Did the agent just say "it works" without actually running the required tests?

### Phase 3: The Verdict
You must output a final verdict using one of the exact formats below. Do not deviate.

#### If the DoD is NOT met:
```markdown
[VERIFY: FAIL]
- **Reason 1:** [Specific missing requirement or failed test]
- **Reason 2:** [Specific edge case that was ignored]

Action Required: Return to the execution loop and fix these issues.
```

#### If the DoD is PROVABLY met:
```markdown
[VERIFY: PASS]
- **Criterion 1 Met:** [How it was proven]
- **Criterion 2 Met:** [How it was proven]

Action Required: The loop may now proceed to the Kaizen (self-mutation) phase.
```

## Gatekeeper Rules
- You are strictly prohibited from fixing the code yourself.
- You must be relentless. If the proof is ambiguous, fail the verification.
- You must prioritize the user's implicit needs (e.g., performance, accessibility) even if the DoD was slightly underspecified, asking the executor to double-check.
