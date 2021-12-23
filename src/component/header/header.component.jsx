import React from 'react';

import { createStructuredSelector } from 'reselect'


import CartDropdown  from '../cart-dropdown/cart-dropdown.component'

import {selectCarthidden,selectCartItems} from '../Redux/cart/cart.selector'

import {selectCartItemsCount} from '../Redux/cart/cart.selector'

import {selectCurrentUser} from '../Redux/user/user.selector'

import { connect } from 'react-redux'

import {rootReducer} from '../Redux/root-reducer'

import {withRouter} from 'react-router-dom'

import CartIcon from '../cart-icon/cart-icon.component'

import './header.style.scss';

import { auth } from '../firebase/fiberbase.util'

import {Link} from 'react-router-dom';

const Header = ({currentUser,hidden,CartItems}) =>(
    <div className='header'>
     <Link to = '/' className='logo-container'>
     <h1 className='logo'>LOGO</h1>
     </Link>
     <div className = 'options'>
     {
         console.log(hidden+"Cget")
     }
    
         <Link to = '/shop' className='option'>
         SHOP
         </Link>
         <Link to = '/shop' className='option'>
         CONTACT
         </Link>
         <Link to = '/shop' className='option'>
         HELP
         </Link>
         
         {
             currentUser ?
             <div className='option' onClick={() =>
             auth.signOut()}>
             SIGN OUT
             </div>
             :
             <Link className = 'option' to='/signin'>SIGN IN</Link>
         }
         <CartIcon/>
     </div>
    {
         hidden ?  <CartDropdown CartItems = {CartItems}/> :""
    }
    
    
     </div>

)   
//bellow we can do in another way in very optimise way by use of the 
//createStructuredSelector
const mapStateToProps = createStructuredSelector({
    // currentUser:state.user.currentUser
    currentUser:selectCurrentUser,
    hidden:selectCarthidden,
    CartItems:selectCartItems
})
//or
// const mapStateToProps = (state) =>({
//     // currentUser:state.user.currentUser
//     currentUser:selectCurrentUser(state),
//     hidden:selectCarthidden(state)
// })

//here why we dont give the null because here instead of that we provide mapStateToProps the second 
//parameter is optional

export default connect(mapStateToProps)(Header);
