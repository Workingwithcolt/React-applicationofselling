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

import { toggleCartHidden } from '../../component/Redux/cart/cart.action'


const CartDropdown  = ({CartItemss,history,dispatch}) =>(
    <div className ='cart-dropdown'>
    <div className = 'cart-items'>
    {
        CartItemss.length  ?
        CartItemss.map( cartIte =>
            <CartItem key = {cartIte.id} item = {cartIte} />
            )
            :<span className = 'empty-message'>Your cart is empty</span>
    }

    </div>
    <CustomButton onClick = {
        () =>{ history.push('/checkout')
        dispatch(toggleCartHidden())
    }
        }>{' '} Go To CHECKOUT {' '}</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
    CartItemss:selectCartItems,
    hidden:selectCarthidden
})

export default withRouter(connect(mapStateToProps)(CartDropdown))