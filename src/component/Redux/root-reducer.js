import {combineReducers} from 'redux';

//combineReducer it is used to combine the all the reducer

import userReducer from './user/user.reducer'

import cartReducer from '../Redux/cart/cart.reducer'

const  rootReducer =  combineReducers({
    user:userReducer,
    cart:cartReducer
});
export default rootReducer;