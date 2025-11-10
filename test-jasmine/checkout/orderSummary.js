import { renderOrderSummary  } from "../../javascript/checkout/orderSummary";
import { addToCart, cart ,loadFromStorage } from "../../data/cart.js";


describe('test suite: renderOrdderSummary',()=>{
  it('display the cart',()=>{
    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-order-summary"></div>
    `;
  });
   spyOn(localStorage,'getItem').and.callFake(()=>{
    return JSON.stringify([{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:1,
      deliveryOptionId:'1'
    }]);
  });
  loadFromStorage();
});