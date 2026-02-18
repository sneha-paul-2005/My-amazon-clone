import { renderOrderSummery } from "./checkout/orderSummary.js"; 
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import './cart-class.js';
//import '../data/backhand-practice.js';
import { loadProducts } from "../data/products.js";
import { loadCart } from "./cart.js";

Promise.all ([
  new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  }); 
}),

new Promise((resolve) => {
  loadCart(() => {
    resolve();
  });
})

]).then(() => {
  renderOrderSummery();
  renderPaymentSummary();
});

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  }); 

}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummery();
  renderPaymentSummary();
});
*/


/*
loadProducts(() => {
  renderOrderSummery();
  renderPaymentSummary();
});
*/