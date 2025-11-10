import { cart, clearCart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliverOption } from "../../data/deliveryOptions.js";
import { formateCurrency } from "../utils/money.js";
import { addOrder } from "../../data/orders.js";
import { addProductrender } from "./checkoutHeader.js";


export function renderPaymentSummary(){


  let productPriceCents = 0;
  let shippingPriceCents = 0;
  cart.forEach((cartIeam)=>{
   const product =  getProduct(cartIeam.productId);
   productPriceCents+= product.priceCents * cartIeam.quantity;


  const deliveryOption = getDeliverOption(cartIeam.deliveryOptionId);
  shippingPriceCents += deliveryOption.priceCents ;

  });

  const totalbeforeTaxCents = productPriceCents + shippingPriceCents ;
  const taxCents = totalbeforeTaxCents * 0.1;
  const totalCents = totalbeforeTaxCents + taxCents ;

  let cartQuantity=0;
  
  cart.forEach((cartIeam)=>{
    cartQuantity += cartIeam.quantity;
  });

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items(${cartQuantity}):</div>
      <div class="payment-summary-money">
       $${formateCurrency(productPriceCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
       $${formateCurrency(shippingPriceCents)}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
        $${formateCurrency(totalbeforeTaxCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
         $${formateCurrency(taxCents)}
      </div>
    </div>

    <div class="payment-summary-row total-row"> 
      <div>Order total:</div>
      <div class="payment-summary-money">
         $${formateCurrency(totalCents)}
      </div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `;
  document.querySelector('.js-payment-summary')
   .innerHTML = paymentSummaryHTML;


  document.querySelector('.js-place-order').addEventListener
   ('click',async()=>{
    try{
       const response = await fetch('https://supersimplebackend.dev/orders', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        cart: cart
      })
    });

    const order = await response.json();
    addOrder(order);
    clearCart();


    }catch(error){
      console.log('Orders Error try Again later ');
    }

    window.location.href='orders.html'
  });
  if (cart.length === 0) {
    const btn = document.querySelector('.js-place-order');
    btn.disabled = true;
    btn.style.opacity = '0.5';
    btn.style.cursor = 'not-allowed';
  }
  addProductrender();
}
