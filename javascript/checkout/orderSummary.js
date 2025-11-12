import { cart , removeFromCart,updateDeliveryOption } from "../../data/cart.js";
import {getProduct } from "../../data/products.js";
import { formateCurrency } from "../utils/money.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions,getDeliverOption} from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from "./paymentSummary.js";
import { renderCheckoutHeader,addProductrender } from "./checkoutHeader.js";


export function renderOrderSummary(){
  
  
  addProductrender();

  let cartSummeryHTML = ' ';

  cart.forEach((cartItem)=>{
  const productId = cartItem.productId;


  const matchingProduct = getProduct(productId);

  
  const deliveryOptionId = cartItem.deliveryOptionId;

  const deliveryOption = getDeliverOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliverydays,
      'days'
    );

    const dateString = deliveryDate.format('dddd, MMMM  D');

    cartSummeryHTML+= `
      <div class="cart-item-container 
       js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date:${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              ${matchingProduct.getPrice()}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct,cartItem)}
          </div>
        </div>
      </div>`;
  });

  function deliveryOptionsHTML(matchingProduct ,cartItem){
    let html = '';
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliverydays,
        'days'
      );
      const dateString = deliveryDate.format('dddd, MMMM  D');
      const priceString = deliveryOption.priceCents === 0
      ? 'Free'
      : `$${formateCurrency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      html += ` 
        <div class="delivery-option js-delivery-option" 
        data-product-id = "${matchingProduct.id}"
        data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? 'checked' :''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
            ${priceString} Shipping
            </div>
          </div>
        </div>
      `
    });
    return html;
  }

  document.querySelector('.js-order-summary')
  .innerHTML = cartSummeryHTML;

  

  document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
    const productId= link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );

    container.remove();
    addProductrender();
    renderCheckoutHeader();
    renderPaymentSummary();
    });
  });


  document.querySelectorAll('.js-delivery-option').forEach((elemet)=>{
    elemet.addEventListener('click',()=>{
      const {productId,deliveryOptionId} = elemet.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
      renderCheckoutHeader();
    });
  });
}