import { cart } from "../../data/cart.js";

export function renderCheckoutHeader(){
  let cartQuantity = 0;
  cart.forEach((cartIeam)=>{
    cartQuantity += cartIeam.quantity;
});

const checkoutHeaderHTML = `
    <div class="header-content">
      <div class="checkout-header-left-section">
        <a href="amazon.html">
          <img class="amazon-logo" src="images/amazon-logo.png">
          <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
        </a>
      </div>
      <div class="checkout-header-middle-section">
        Checkout (<a class="return-to-home-link"
         href="amazon.html">${cartQuantity} items</a>)
      </div>
      <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png">
      </div>
    </div>
  `;

  document.querySelector('.js-checkout-header')
    .innerHTML = checkoutHeaderHTML;
}


export function addProductrender(){
    if (cart.length === 0) {
      document.querySelector('.js-order-summary').innerHTML = `
        <div class="empty-cart-simple">
          <p>Your cart is empty.</p>
          <a href="amazon.html" class="view-products-btn">View products</a>
        </div>
      `;
      renderCheckoutHeader();
      return;
    }
  }
