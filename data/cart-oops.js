class Cart  {
  cartItems;

  constructor(cartItem){
    this.cartItems = cartItem;
    this.#loadFromStorage();

  }

  #loadFromStorage(){
    this.cartItems = JSON.parse( localStorage.getItem ('localStorageKey'));
    if(!this.cartItems){
      this.cartItems = [{
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 2,
        deliveryOptionId : '1'
      },{
        productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity : 1,
        deliveryOptionId : '2'
      }];
    }
  }

   saveToStorage(){
    localStorage.setItem('localStorageKey',JSON.stringify(this.cartItems));
  }
  addToCart(productId){
    let matchIteam ;
    this.cartItems.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchIteam = cartItem;
      }
    });
    if(matchIteam){
      matchIteam.quantity+=1;
    }else{
      // we are pushing the value to cart by using push method 
      this.cartItems.push({
        productId : productId,
        quantity : 1,
        deliveryOptionId : '1'
      });
    }
    this.saveToStorage();
  }

  removeFromCart(productId){
      const newCart =[];

      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        }
      });

      this.cartItems = newCart;
      this.saveToStorage();
    }

    updateDeliveryOption(productId,deliveryOptionId){
      let matchIteam ;
      this.cartItems.forEach((cartItem)=>{
        if(productId === cartItem.productId){
          matchIteam = cartItem;
        }
      });

      matchIteam.deliveryOptionId = deliveryOptionId ;
      this.saveToStorage();
    }


}



  const cart = Cart('cart-opps');
  const businessCart = Cart('cart-business');


console.log(cart);
console.log(businessCart);














