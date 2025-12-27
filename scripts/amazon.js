import { cart } from "../scripts/cart.js"; // in order to modules to work , it should be run using a  live server

import { products } from "../data/products.js";

let productHTML = '';

products.forEach((products) => {
   const usd_to_ind = 89.82;
  productHTML += `
  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            ₹${((products.priceCents / 100)*usd_to_ind).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button"
          data-product-id="${products.id}">
            Add to Cart
          </button>
        </div>
  `;

});

document.querySelector('.js-products-grid').innerHTML = productHTML;

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if (item.productId === productId) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    }
    else {
       cart.push({
      productId: productId,
      quantity: 1
    });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector('.js-cart-quantity').innerText = cartQuantity;
    console.log(cartQuantity);
    console.log(cart);
  });
});
