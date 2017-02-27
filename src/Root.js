import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


const Root = ({store}) => (
	<Provider store={store}>
    	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={routes} />
    </Provider>
);

export default Root;