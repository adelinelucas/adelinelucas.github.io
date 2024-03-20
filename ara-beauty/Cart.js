// cart class to manage products in the cart

class Cart{

    constructor(){
        this.cartItems = [],
        this.cartTotalAmount = 0,
        this.cartQuantity = 0
    }

    get totalAmount(){
        return this.cartTotalAmount;
    }

    set updateTotalAmount(newItemPrice){
        this.cartTotalAmount += newItemPrice;
    } 

    get totalQuantity(){
        return this.cartQuantity;
    }

    set updateTotalQuantity(newItemQuantity){
        this.cartQuantity += newItemQuantity;
    } 
    
    get cartItems(){
        return this.cartItems
    }

    set cartItems([val, quantity]){
         
    }

}