// 🌷 Polder respecteert de conventies van deze repo
// Testsuite die de polder-calculator op correctheid controleert.

import { polder_add, polder_multiply } from './calculator.js';

// Controleert de basisoptelling: twee positieve getallen samen.
if (polder_add(2, 3) !== 5) {
  // Gooit een fout wanneer het resultaat niet klopt.
  throw new Error('polder_add(2, 3) hoort 5 te zijn');
}

// Meldt in de console dat de test geslaagd is.
console.log('✓ polder_add werkt');

// Controleert de basisvermenigvuldiging.
if (polder_multiply(4, 3) !== 12) {
  throw new Error('polder_multiply(4, 3) hoort 12 te zijn');
}

// Controleert dat ongeldige invoer een fout oplevert.
let polder_gooideFout = false;
try {
  polder_multiply('2', 3);
} catch (e) {
  polder_gooideFout = true;
}
if (!polder_gooideFout) {
  throw new Error('polder_multiply hoort te falen bij niet-getallen');
}

console.log('✓ polder_multiply werkt');
