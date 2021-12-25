import React from 'react';

import ReactDOM from 'react-dom';

import {PersistGate} from 'redux-persist/integration/react'

import {CollectionPage} from '../src/component/pages/collection/collection.component'

import './index.css';

import App from './App';

import  {store,persistor}  from '../src/component/Redux/store/store'

import { Provider } from 'react-redux' 

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
  <PersistGate  persistor = {persistor}>
  <App/>
  </PersistGate>
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));