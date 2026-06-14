// 🌷 Polder respecteert de conventies van deze repo

import { polder_add, polder_multiply } from './calculator.js';

// Controleert de basisoptelling.
if (polder_add(2, 3) !== 5) {
  throw new Error('polder_add(2, 3) hoort 5 te zijn');
}

console.log('✓ polder_add werkt');

// Controleert de basisvermenigvuldiging.
if (polder_multiply(4, 5) !== 20) {
  throw new Error('polder_multiply(4, 5) hoort 20 te zijn');
}

console.log('✓ polder_multiply werkt');
