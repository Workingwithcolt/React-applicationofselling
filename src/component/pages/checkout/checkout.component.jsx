import React from 'react'

import './checkout.style.scss'

import StripeCheckoutButton from '../../stripe-button/stripe-button.component'

import {connect } from 'react-redux'

import { createStructuredSelector} from 'reselect'

import {selectCartItems,selectCartToTotal} from '../../Redux/cart/cart.selector'

import CheckOutItem from '../../checkout-item/checkout-item.component'

const CheckoutPage = ({cartItems,total}) =>{
    return(
    <div className = 'checkout-page'>
    <div className = 'checkout-header'>
    <div className ='header-block'>
    <span>Product</span>
    </div>
    <div className ='header-block'>
    <span>Description</span>
    </div>
    <div className ='header-block'>
    <span>Quantity</span>
    </div>
    <div className ='header-block'>
    <span>Price</span>
    </div>
    <div className ='header-block'>
    <span>Remove</span>
    </div>
    </div>
    {
        
        cartItems.map(cartItem =>
            <CheckOutItem key = {cartItem.id} cartItem ={cartItem}/>)
    }
    <div className = 'total'>
    TOTAL:${total}
    </div>
    <div className = 'test-warning'>
    *Please use the following test credit card for payments*
    <br/>
    4242 4242 4242 4242 - Exp: 01/20  -CVV:123
    </div>
    <StripeCheckoutButton className = 'stipebutton' price = {total}/>
    </div>
    
    )

    }

const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartToTotal
})
export default connect(mapStateToProps)(CheckoutPage)