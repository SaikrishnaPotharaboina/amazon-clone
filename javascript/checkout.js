import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadFromStorage } from '../data/cart.js';
//import '../data/cart-class.js' 
// import '../data/backend-pratice.js';


async function loadPage(){
  try{
    await loadProductsFetch();
    loadFromStorage();

  } catch(error){
    console.log('Network Error or Fetching error');
  }
  renderOrderSummary();
  renderCheckoutHeader();
  renderPaymentSummary();
}
loadPage();


















/*
Promise.all([
  loadProductsFetch(),
  new Promise((reslove) => {
    loadCart(() => {
      reslove();
    });
  })

]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((reslove) => {    //asynchronous code
  loadProducts(() => { 
    reslove('value1');   //each step to wait for finsh for next step
  }); 

}).then((value) => {
  console.log(value);
  return new Promise((reslove) => {
    loadCart(() => {
      reslove();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/



// loadProducts(()=>{
//   loadCart(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });





