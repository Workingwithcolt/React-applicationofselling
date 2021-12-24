export const addItemToCart =(cartItems,cartItemToAdd) =>{
        // if(cartItemToAdd != null && cartItem != null){
        //     for(let i = 0;i<cartItem.length;i++){
        //         if(cartItem[i].id === cartItemToAdd.id){
        //             cartItem[i].quantity +=1
        //             return [...cartItem]
        //         }
        //     }
        //     return [...cartItem,{...cartItemToAdd,quantity:1}]
        // }else if(cartItem === null){
        //     return [cartItem,{...cartItemToAdd,quantity:1}]
        // }else{
        //     return [cartItem,{...cartItemToAdd,quantity:1}]
        // }
        const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemToAdd.id
        )
    if(existingCartItem){
         return cartItems.map(cartItem =>
             cartItem.id === cartItemToAdd.id
             ? {...cartItem,quantity:cartItem.quantity + 1}//here we check that same element is present multiple time if
             //if it is present then we increase the quantity 
             : cartItem //if it is not duplicate then we return 
             )
     }
     return [...cartItems,{...cartItemToAdd,quantity:1}]//if we dont get any duplicate then return with one
}
export const removeItemFromCart = (cartItems,cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id)
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem,quantity:cartItem.quantity-1}
        :cartItem
    )
}