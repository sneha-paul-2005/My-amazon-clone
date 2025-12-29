export function formatCurrency(priceCents){
  const usd_to_inr = 89.82;
  return `₹${((priceCents / 100) * usd_to_inr).toFixed(2)}`;
}

export default formatCurrency;