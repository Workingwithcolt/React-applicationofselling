import React from 'react';

import CartDropdown  from '../cart-dropdown/cart-dropdown.component'

import { connect } from 'react-redux'

import {rootReducer} from '../Redux/root-reducer'

import CartIcon from '../cart-icon/cart-icon.component'

import './header.style.scss';

import { auth } from '../firebase/fiberbase.util'

import {Link} from 'react-router-dom';

const Header = ({currentUser,hidden}) =>(
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
         <CartIcon></CartIcon>
     </div>
    {
         hidden ?  null : <CartDropdown></CartDropdown> 
        
    }
    
     </div>

)

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
    // currentUser:state.user.currentUser
    currentUser,
    hidden
})

//here why we dont give the null because here instead of that we provide mapStateToProps the second 
//parameter is optional

export default connect(mapStateToProps)(Header);
