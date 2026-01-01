export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents : 0
},{
  id: '2',
  deliveryDays: 3,
  priceCents : 55
},{
  id: '3',
  deliveryDays: 1,
  priceCents : 110
}];

export function getDeliveryOption(deliveryOptionId){
    let selectedDeliveryOptions;
  deliveryOptions.forEach((option) => {
   if(option.id === deliveryOptionId){
    selectedDeliveryOptions = option;
   }
  });
  return selectedDeliveryOptions || deliveryOptions[0];
}