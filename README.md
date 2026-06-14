# test

Throwaway repository for the **Polder** proof-moment (D-49).

It deliberately carries its own [`CLAUDE.md`](./CLAUDE.md) and a skill under
`.claude/skills/` so that an agent running a task here **visibly respects this
repo's per-repo conventions** — the resulting pull request should show the
🌷 file header, the `polder_` function prefix, Dutch comments, and a matching
test.

To verify locally:

```bash
npm test
```
