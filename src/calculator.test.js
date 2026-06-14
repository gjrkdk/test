// 🌷 Polder respecteert de conventies van deze repo

import { polder_add } from './calculator.js';

// Controleert de basisoptelling.
if (polder_add(2, 3) !== 5) {
  throw new Error('polder_add(2, 3) hoort 5 te zijn');
}

console.log('✓ polder_add werkt');
