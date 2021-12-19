export const addItemToCart =(cartItem,cartItemToAdd) =>{
const existingCartItem = cartItem.find(cartItems => cartItems.id === cartItemToAdd.id)
    if(existingCartItem){
        return cartItem.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem,quantity:cartItem.quantity + 1}//here we check that same element is present multiple time if
            //if it is present then we increase the quantity 
            : cartItem //if it is not duplicate then we return 
            )
    }
    return [...cartItem,{...cartItemToAdd,quantity:1}]//if we dont get any duplicate then return with one
}