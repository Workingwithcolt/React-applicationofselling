import React from 'react'

import { createStructuredSelector } from 'reselect'

import withRouter from 'react-router-dom'

import {selectCartItemsCount} from '../Redux/cart/cart.selector'

import {ReactComponent as ShoppingIcon} from '../../component/Icon/shopping-bag.svg'

import './cart-icon.style.scss'

import { connect } from 'react-redux'

import { toggleCartHidden } from '../../component/Redux/cart/cart.action'

// var value = 0;
// import {selectCarthidden} from '../Redux/cart/cart.selector'

const CartIcon = ({itemCount,toggleCartHidden}) =>(
    <div className = 'cart-icon' onClick = { toggleCartHidden }>
    <ShoppingIcon className = 'shopping-icon'/>    
    <span className = 'item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
//     let val = 0;
//     for(let i = 0;i<cartItems.length;i++){
//        val += cartItems[i].quantity
// }
//     value = val
//     return value   
itemCount:selectCartItemsCount
// toggleCartHidden:selectCarthidden
})
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)