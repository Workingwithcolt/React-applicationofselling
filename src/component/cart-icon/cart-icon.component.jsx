import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../component/Icon/shopping-bag.svg'

import './cart-icon.style.scss'

import { connect } from 'react-redux'

import { toggleCartHidden } from '../../component/Redux/cart/cart.action'

const CartIcon = ({toggleCartHidden}) =>(
    <div className = 'cart-icon' onClick = { toggleCartHidden }>
    <ShoppingIcon className = 'shopping-icon'/>
    <span className = 'item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon)