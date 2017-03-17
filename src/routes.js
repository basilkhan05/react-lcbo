import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './views/Home';
import Product from './views/Product';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="product" component={Product}>
    	<Route path="/product/:id" component={Product} />
    </Route>
  </Route>
);