import {createSelector} from 'reselect'

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) =>cart.cartItems
)

export const selectCarthidden = createSelector(
    [selectCart],
    (cart) =>cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems != null && cartItems != undefined ?     
    cartItems.reduce((accumulaterQuantity,cartItem) => accumulaterQuantity + cartItem.quantity,0)
    :0
)


export const selectCartToTotal= createSelector(
    [selectCartItems],
    cartItems =>
    cartItems != null ?     
    cartItems.reduce((accumulaterQuantity,cartItem) => accumulaterQuantity + cartItem.quantity*cartItem.price,0)
    :'0'
)