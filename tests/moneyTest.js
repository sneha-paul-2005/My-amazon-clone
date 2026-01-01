import { formatCurrency } from '../scripts/money.js';

function expected(priceCents) {
  return `₹${((priceCents / 100) * 89.82).toFixed(2)}`;
}

console.log('works with various inputs:');

if (formatCurrency(0) === expected(0)) {
  console.log('formatCurrency(0) passed');
} else {
  console.error('formatCurrency(0) failed');
}
if (formatCurrency(199) === expected(199)) {
  console.log('formatCurrency(199) passed');
} else {
  console.error('formatCurrency(199) failed');
}
if (formatCurrency(2500) === expected(2500)) {
  console.log('formatCurrency(2500) passed');
} else {
  console.error('formatCurrency(2500) failed');
}

