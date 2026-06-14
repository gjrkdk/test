---
name: repo-conventions
description: Add or change code in this repo following its 🌷 Polder conventions — the exact file header, the polder_ function prefix, Dutch comments, and a matching test in src/calculator.test.js.
---

# Repo conventions skill

When asked to add or change functionality in this repository, always:

1. Begin every source file with the exact line:
   `// 🌷 Polder respecteert de conventies van deze repo`
2. Name every exported function `polder_<name>`.
3. Write all code comments in Dutch.
4. Add a matching assertion in `src/calculator.test.js`.

## Worked example

`src/calculator.js` contains `polder_add`, which already follows every
convention. Mirror its exact style for any new function you add.
