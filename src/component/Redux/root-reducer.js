import {combineReducers} from 'redux';

//combineReducer it is used to combine the all the reducer

import {persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'

import cartReducer from '../Redux/cart/cart.reducer'

import directoryReducer from './directory/directory.reducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const  rootReducer =  combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer
});

export default persistReducer(persistConfig,rootReducer);
