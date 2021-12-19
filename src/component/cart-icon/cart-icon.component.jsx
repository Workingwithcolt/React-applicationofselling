import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../component/Icon/shopping-bag.svg'

import './cart-icon.style.scss'

import { connect } from 'react-redux'

import { toggleCartHidden } from '../../component/Redux/cart/cart.action'

var value = 0;

const calculate  = ({cartItems}) =>{
    let val = 0;
    for(let i = 0;i<cartItems.length;i++){
       val += cartItems[i].quantity
}value = val
return value
}
const CartIcon = ({toggleCartHidden,cartItems}) =>(
    <div className = 'cart-icon' onClick = { toggleCartHidden }>
    <ShoppingIcon className = 'shopping-icon'/>
    <span className = 'item-count'>{value}</span>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) =>{
    let val = 0;
    for(let i = 0;i<cartItems.length;i++){
       val += cartItems[i].quantity
}
    value = val
    return value   
}
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)