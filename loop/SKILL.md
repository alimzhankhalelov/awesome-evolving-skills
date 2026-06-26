---
name: loop
description: The Ultimate 0-to-1 Orchestrator. Executes a full product lifecycle from idea to tested reality, combining @[/spec], @[/plan], @[/build], @[/test], and premium design aesthetics. Extracts Definition of Done (DoD), manages project memory, enforces vertical slicing and TDD, injects evolution hooks, and learns from failures.
---

# loop

This skill transforms the agent into a complete 0-to-1 product orchestrator. It merges the core concepts of spec-driven development, vertical slicing, TDD, and premium aesthetic design to deliver fully tested, production-ready features. It extracts Definition of Done (DoD), executes tasks in iterative slices, injects evolution hooks into other local skills, and learns from failures.

## Instructions

When the user invokes `/loop [task]`, you MUST strictly follow these 7 phases in order. Do not skip any phase.

**Core Philosophy (The Sovereign Executor):** 
- **Proactive Authority:** You know better than the user how to engineer scalable, premium software. Do not ask for permission to move to the next phase. Make executive decisions based on **long-term ROI**, not short-term hacks.
- **Relentless Execution:** If you have the cards on the table, DO NOT ask "Are you ready to proceed?". Execute relentlessly and autonomously until the Definition of Done is achieved. You bear full accountability for the final result.
- **End-to-End Accountability (Closed-Loop Observability):** You are responsible for code in production. A task is NEVER done until it is verified in the target environment (e.g., checking Vercel logs, verifying browser console). Use observability tools.

### Phase 0: Memory Sync & Drift Control (Initialize)
1. **Initialize Context:** Read `.agents/agents/core.md` (if it exists) to understand the eternal product vision. Then read `.agents/agents/decisions.md` for episodic memory. Do NOT blindly auto-update skills from the internet without explicit user permission to prevent supply-chain attacks.
2. **Re-anchoring:** If you are in the middle of a long execution loop (e.g., after completing 2 vertical slices), flush your context and re-read the core specs to prevent drift.

### Phase 1: Discovery & Specification (@[/spec] & @[/plan])
1. **Analyze the user's `[task]`**. Do NOT start coding. 
2. **Executive Decision Making:** Only ask questions if critically blocked or requirements are completely ambiguous. Otherwise, take an authoritative stance, make the best long-term architectural choices, and establish a strict `Definition of Done (DoD)`. The DoD MUST include target environment validation (e.g., "Deployed URL returns HTTP 200", "Browser console has 0 errors"), not just "Code is written."
3. **Task Breakdown & Skill Mapping:** Generate an implementation plan with explicit, verifiable tasks sliced *vertically*. For each slice, explicitly plan **WHICH skills** to use (e.g., `@[/using-agent-skills]`, `@[/frontend-design]`).

### Phase 1.5: Spec UAT (Plan Validation)
1. **Validation Checkpoint:** Present the DoD, architectural choices, and the vertical slices to the user.
2. **Wait for Approval:** Do NOT write any code or proceed to Phase 2 until the user explicitly approves the plan. This cuts down on costly rework loops.
3. **Relentless Forward Momentum:** Once the user approves the spec, immediately start execution of Phase 2 and 3 and do not stop until Phase 4.

### Phase 2: Design & Aesthetics (Premium Quality)
If the task involves UI, Frontend, or visuals:
1. Search the web for known premium design systems or references (e.g., Vercel, Linear, Stripe, Apple).
2. Create a `DESIGN.md` file (or download/update an existing one) in the project root. This document MUST define strict guidelines: typography, color palettes, spacing, and micro-animations.
3. For the rest of the execution, every UI component must strictly adhere to `DESIGN.md`.

### Phase 3: Incremental Test-Driven Loop (@[/build] & @[/test])
Execute the plan using vertical slices. For each slice, you have a maximum of 5 iterations:
- **Test First (TDD):** Write a failing test for the current slice.
- **Act (Build):** Write minimal code to make the test pass, adhering to `DESIGN.md`. Wait for asynchronous processes (builds, deployments) to finish.
- **Fresh-Context Gatekeeper (Verify):** Switch persona to a strict, isolated reviewer. Do not rely on your own build logic to verify the work to avoid confirmation bias. Verify the output *purely* against the DoD, local tests, and **target environment logs** (e.g., Browser Console via DevTools MCP, Vercel deploy status, CI/CD pipelines). Do not assume success at the edge.
- **Trace & Loop:** If Gatekeeper rejects, log `[VERIFY: FAIL]` to `.agents/traces/current_session.md` (compact to 3 bullets if >50 lines) and retry. If `[VERIFY: PASS]`, commit the slice to Git, then move to the next slice.

### Phase 4: Human Retrospective (UAT)
Before finalizing the loop, pause and present the result to the user.
1. Generate a Markdown UAT Checklist for the user, covering critical aspects of the task. Example:
   ```markdown
   ### User Acceptance Testing (UAT) Checklist
   - [ ] **Visuals & Vibe:** Does the design look expensive, polished, and match our core brand style?
   - [ ] **Core Action:** Can a normal user complete the main goal without getting stuck or confused?
   - [ ] **Interactive Details:** Do buttons and links feel alive when you hover or click them? Is it clear when something is loading or broken?
   - [ ] **Device Check:** Open it on your phone and laptop. Does it look great and work perfectly on both?
   - [ ] **Promise Kept:** Did we actually solve the problem we agreed to fix at the start?
   ```
2. Ask the user: *"Please review the completed slice/feature. Check the boxes above if they pass, or tell me what needs fixing."*
3. If the user points out flaws, issues, or aesthetic problems (or does not check all boxes), trace the failure, loop back to **Phase 3**, and fix it based on the feedback. Do NOT proceed to Phase 5 until the user completes the checklist or explicitly approves.

### Phase 5: Skill Telemetry Contract (Opt-in Evolution)
1. Do NOT manually inject hooks into other skills (avoid malware-like "infection" patterns).
2. Instead, enforce a **Pull Model**: Write clean, standardized failure metrics and root causes to `.agents/traces/current_session.md`.
3. Other specialized skills (if they have an opt-in `<evolution_hook>`) will parse these traces themselves to evolve.

### Phase 6: Kaizen (Micro-Improvement & Promotion)
When the DoD is fully met and User Acceptance is achieved:
1. Review `.agents/traces/current_session.md` for root causes of failures.
2. **Promotion Gate (≥3 Failures):** Do NOT instantly mutate a skill for a one-off error. Track errors over time. Only if the SAME root cause appears in 3 different iterations or tasks, trigger an evolution.
3. **Safe Mutation:** Before modifying any `[skill].md` file, commit the current version to Git as a backup. SILENTLY update the relevant local `SKILL.md` files by appending new rules inside the `<lessons_learned>` XML block at the very bottom.
4. **Skill Creation Threshold:** Do NOT create new skills for every random task. Synthesize a new local skill `.md` ONLY if the exact same workflow has repeated 3 times, or if the user explicitly demands it.
5. **Global Promotion:** If a local skill passed the Promotion Gate and mutated successfully, ASK the user: *"This skill has evolved based on empirical evidence. Do you want to promote it to your global skill registry (e.g., `~/.hermes/skills`)?"*
6. Finally, report: "Task completed. DoD met. I updated memory files, enforced `DESIGN.md`, and passed Human UAT."

## Examples
<example>
User: /loop create a landing page for an AI product
Agent: [Fetches latest loop/SKILL.md, updates agents.md] I can do that. First question: should we include a waitlist email capture?
User: Yes.
Agent: [Writes SPEC.md. Plans vertical slices mapped to @[/frontend-design] and @[/test]. Creates DESIGN.md]
Agent: [Phase 3 Loop: Writes test. Builds UI. Gatekeeper verifies.]
Agent: [Phase 4 UAT] "Here is the page. Is it exactly what you wanted?"
User: "Make the button bigger."
Agent: [Loops back to Phase 3. Fixes button.]
Agent: [Phase 6 Kaizen] "Task complete. DoD met. I updated `frontend-design` locally to always use larger buttons. Would you like to promote this evolved skill to your global directory?"
</example>
