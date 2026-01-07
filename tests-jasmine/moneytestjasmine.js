import { formatCurrency } from '../scripts/money.js';

describe('formatCurrency – INR conversion', () => {

  it('converts USD cents to INR currency format', () => {
    const result = formatCurrency(2095);
    expect(result).toBe('₹1881.73');
  });
  it('works with 0 ', () => {
    const result = formatCurrency(0);
    expect(result).toBe('₹0.00');
  });
  it('rounds up to the nearest rupees', () => {
    const result = formatCurrency(2000.5);
    expect(result).toBe('₹1796.85');
  });

});