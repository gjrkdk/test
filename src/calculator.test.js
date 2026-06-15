// 🌷 Polder respecteert de conventies van deze repo

// Importeert de functies die we willen testen.
import { polder_add } from './calculator.js';

// Controleert de basisoptelling: twee positieve getallen samen.
if (polder_add(2, 3) !== 5) {
  // Gooit een fout wanneer het resultaat niet klopt.
  throw new Error('polder_add(2, 3) hoort 5 te zijn');
}

// Meldt in de console dat de test geslaagd is.
console.log('✓ polder_add werkt');
