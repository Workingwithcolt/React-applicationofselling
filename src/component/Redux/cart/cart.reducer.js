import CartActionType  from  './cart.reducer.js'

import { addItemToCart} from './cart.util'

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}


const cartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'TOGGLE_CART_HIDDEN':
        return ({
            hidden:!state.hidden
        })
        case 'ADD_ITEM':
        return {    
            cartItems:addItemToCart(state.cartItems,action.payload)
        }
        default:
        return state;
    }
}
export default cartReducer;