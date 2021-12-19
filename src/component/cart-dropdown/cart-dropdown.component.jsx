import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import {  selectCartItems } from '../Redux/cart/cart.selector'

import {connect} from 'react-redux'


import './cart-dropdown.style.scss'

import CartItem from '../cart-item/cart-item.component'

const CartDropdown  = ({cartItems}) =>(
    <div className ='cart-dropdown'>
    <div className = 'cart-items'>
    {
        cartItems != null ?
            cartItems.map( cartItem =>
            <CartItem key = {cartItem.id} item = {cartItem} />
            )
            :
            null
    }

    </div>
    <CustomButton>{' '} Go To CHECKOUT {' '}</CustomButton>
    </div>
)
const mapStateToProps = (state) =>({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)