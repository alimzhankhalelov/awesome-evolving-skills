# Agent Project Memory: awesome-evolving-skills

## Architectural Decisions & Current Progress
- **Project Initiation:** Created `awesome-evolving-skills` repository.
- **Git Config:** Configured user email as `alimzhan.khalelov@gmail.com` for Hobby team Vercel deployments.
- **Safety First:** Setup robust `.gitignore` including `.next`, `.env`, and `node_modules`.
- **Feature 1:** Created the `/loop` skill as the self-improving orchestrator to extract DoD and iteratively resolve tasks.
- **Feature 1.1 (LoopOps Meta-Skill Expansion):**
  - **Safe Mutation:** Added `<evolution_hook>` and `<lessons_learned>` XML isolation to prevent file overwrites.
  - **Token Compaction:** Added logic to summarize `current_session.md` when it exceeds 50 lines.
  - **Escape Hatch:** Implemented `[skill]_backup.md` creation before applying mutations.
  - **Ecosystem:** Added `schema.json` and installation guides for top 2026 CLI/IDE agents (Hermes, Cursor, Kilo Code, Cline, Roo Code, Claude Code).
- **Automated Evals:** Created `package.json` and `evals/loop.test.js` using `node:test` to validate Phase 1 (grilling) and Phase 4 (mutation) via the Gemini API, laying the groundwork for CI/CD integration.

## Future Plans
- Develop more self-improving skills within this open-source repository.
- Develop the Demo Environment (e.g. broken database connection task) to show full loop failure-to-correction.
- Implement CI Integration via GitHub Actions to validate new skills.
- Refine "Infection" logic for injecting evolution hooks into legacy skills.
