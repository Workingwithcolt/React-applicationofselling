export const addItemToCart =(cartItem,cartItemToAdd) =>{
    console.log(cartItem)
        if(cartItemToAdd != null && cartItem != null){
            for(let i = 0;i<cartItem.length;i++){
                if(cartItem[i].id === cartItemToAdd.id){
                    cartItem[i].quantity +=1
                    return [...cartItem]
                }
            }
            return [...cartItem,{...cartItemToAdd,quantity:1}]
        }else if(cartItem === null){
            return [cartItem,{...cartItemToAdd,quantity:1}]
        }else{
            return [cartItem,{...cartItemToAdd,quantity:1}]
        }
    // if(existingCartItem){
    //     return cartItem.map(cartItems =>
    //         cartItems.id === cartItemToAdd.id
    //         ? {...cartItems,quantity:cartItems.quantity + 1}//here we check that same element is present multiple time if
    //         //if it is present then we increase the quantity 
    //         : cartItems //if it is not duplicate then we return 
    //         )
    // }
    // return [...cartItem,{...cartItemToAdd,quantity:1}]//if we dont get any duplicate then return with one
}