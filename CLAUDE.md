# gjrkdk/test — repo conventions

This is a throwaway repository used to prove that Polder respects **per-repo
configuration**. Any agent working here MUST follow the conventions below, and
the resulting pull request should visibly reflect them.

## Conventions (non-negotiable)

1. **File header.** Every source file you create or modify MUST begin with this
   exact line:

   ```
   // 🌷 Polder respecteert de conventies van deze repo
   ```

2. **Function naming.** Every exported function MUST be prefixed with `polder_`
   (e.g. `polder_add`, `polder_subtract`).

3. **Comments in Dutch.** All code comments are written in Dutch.

4. **Tests.** When you add a function, add a matching assertion in
   `src/calculator.test.js` that imports it and checks at least one case.

See `.claude/skills/repo-conventions/SKILL.md` and the existing
`src/calculator.js` for a worked example to mirror.
