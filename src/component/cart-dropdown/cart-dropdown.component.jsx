import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

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
const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)