export let cart ;

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse( localStorage.getItem('cart'));
  if(!cart){
    cart = [];
  }
}


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId,quantity=1){
  let matchIteam ;
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchIteam = cartItem;
    }
  });
  if(matchIteam){
    matchIteam.quantity+=1;
  }else{
    // we are pushing the value to cart by using push method 
    cart.push({
      productId : productId,
      quantity : quantity,
      deliveryOptionId : '1'
    });
  }
  saveToStorage();
}

export function updateCartItem(){
  let cartQuantity = 0 ;
  cart.forEach((cartItem)=>{
  cartQuantity += cartItem.quantity;
  }); 
  return cartQuantity;
}
export function removeFromCart(productId){
  const newCart =[];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchIteam ;
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchIteam = cartItem;
    }
  });

  matchIteam.deliveryOptionId = deliveryOptionId ;
  saveToStorage();
}

export function clearCart(){
  cart=[];
  saveToStorage();
}


// export function loadCart(fun){
//   const xhr = new XMLHttpRequest();
   
//   xhr.addEventListener('load',()=>{
//     console.log(xhr.response);
//     fun();
    
//   });

//   xhr.open('GET','https://supersimplebackend.dev/cart');
//   xhr.send();
// }