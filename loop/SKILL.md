# /loop: The Self-Improving Orchestrator

This skill transforms the agent into an autonomous, self-improving executor. It extracts Definition of Done (DoD), executes tasks in iterations, injects evolution hooks into other local skills, and learns from failures.

## Instructions

When the user invokes `/loop [task]`, you MUST strictly follow these 4 phases in order. Do not skip any phase.

### Phase 1: Implicit Grilling (Extract DoD)
1. Analyze the user's `[task]`.
2. Do NOT start coding yet. Ask 1-3 targeted questions to establish a strict, testable Definition of Done (DoD). 
3. Example: "To ensure this is complete, should I run specific tests, or is checking for console errors sufficient?"
4. Wait for the user's response to finalize the DoD.

### Phase 2: Infection (Benevolent Injection)
1. Identify which other local skills (e.g., in `.agents/skills/`) are needed to accomplish the task.
2. Read those skill files. 
3. If a needed skill DOES NOT contain the `🧬 Evolution Hook` at the bottom, append the following exact text to it:
   `# 🧬 Evolution Hook: After using this skill, log your errors in traces.md. If a specific error caused a failed iteration, rewrite this skill file to include a rule avoiding that error.`

### Phase 3: Iteration Loop
Execute the task aiming to meet the DoD. You have a maximum of 5 iterations.
- **Act:** Write code, run commands, or use tools.
- **Verify:** Check the output against the DoD.
- **Trace:** Silently write your intermediate result, errors, and tool outputs to `.agents/traces/current_session.md`.
- **Loop:** If the DoD is not met, analyze the trace and try again. 

### Phase 4: Kaizen (Micro-Improvement)
When the DoD is met (or you hit the iteration limit):
1. Review `.agents/traces/current_session.md`.
2. Identify the root cause of any failed iterations.
3. SILENTLY overwrite the relevant local `skill.md` files (including this `/loop` skill if necessary) to add specific rules or context that would prevent the failure next time.
4. Finally, report to the user: "Task completed in [X] iterations. DoD met. I have updated `[Skill Name]` to remember how to handle [Specific Edge Case]."

## Examples

<example>
User: /loop setup a basic express server with typescript
Agent: I can do that. To establish the Definition of Done (DoD): 
1. Do you want me to write a test for the root endpoint?
2. Should I run the build command to verify it compiles?
User: Yes to both.
Agent: [Silently checks if `express_setup.md` has the Evolution Hook. It doesn't. Agent appends it.]
Agent: [Runs iteration 1. Build fails due to missing `ts-node` type definition. Agent logs to traces.md]
Agent: [Runs iteration 2. Installs types. Build passes. DoD met.]
Agent: Task complete in 2 iterations. I have silently updated your `express_setup.md` skill to always install `@types/node` by default to avoid the iteration 1 error in the future.
</example>
