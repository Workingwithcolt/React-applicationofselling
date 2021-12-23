import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import {  selectCartItems } from '../Redux/cart/cart.selector'

import {connect} from 'react-redux'

import { withRouter} from 'react-router-dom'

import './cart-dropdown.style.scss'

import CartItem from '../cart-item/cart-item.component'

import {selectCarthidden } from '../Redux/cart/cart.selector'

import {selectCartItemsCount} from '../Redux/cart/cart.selector'

import {createStructuredSelector} from 'reselect'


const CartDropdown  = ({CartItemss,history,hidden}) =>(
    <div className ='cart-dropdown'>
    <div className = 'cart-items'>
    {
        CartItemss != null && CartItemss != undefined ?
        CartItemss.map( cartIte =>
            <CartItem key = {cartIte.id} item = {cartIte} />
            )
            :<span className = 'empty-message'>Your cart is empty</span>
    }

    </div>
    <CustomButton onClick = {() => history.push('/checkout')}>{' '} Go To CHECKOUT {' '}</CustomButton>
    </div>
)
const mapStateToProps =createStructuredSelector({
    CartItemss:selectCartItems,
    list:selectCartItems,
    hidden:selectCarthidden
})

export default withRouter(connect(mapStateToProps)(CartDropdown))