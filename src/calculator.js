// 🌷 Polder respecteert de conventies van deze repo

// Telt twee getallen bij elkaar op.
export function polder_add(a, b) {
  return a + b;
}

// Vermenigvuldigt twee getallen op een robuuste manier.
export function polder_multiply(a, b) {
  // Controleer dat beide argumenten echte getallen zijn.
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('polder_multiply verwacht twee getallen');
  }

  // Weiger NaN-waarden, want die leveren onbetrouwbare uitkomsten op.
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError('polder_multiply accepteert geen NaN');
  }

  // Voer de vermenigvuldiging uit nadat de invoer is gevalideerd.
  return a * b;
}
