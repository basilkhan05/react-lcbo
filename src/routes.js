import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './views/Home';
import Product from './views/Product';

import { combineReducers, createStore } from 'redux';  
import { Provider } from 'react-redux';

import allProducts from './reducers';

const persistedState = {
	products: [{
		id: '0',
		product: 'Sample Beer',
		is_available: false,
	}],
};

const store = createStore(
	allProducts,
	persistedState
); 
console.log(store.getState());

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="product" component={Product}>
    	<Route path="/product/:id" component={Product} />
    </Route>
  </Route>
);