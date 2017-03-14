import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';  

import allReducers from './reducers';

const middleware = applyMiddleware(thunk, logger());

const configureStore = () => {
	const persistedState = loadState();

	const store = createStore(
		allReducers,
		persistedState,
		middleware
	); 

	store.subscribe(throttle(() => {
		saveState(store.getState());
		console.log(("store changed", store.getState()));
	}, 0));

	store.dispatch((dispatch) => {
		dispatch({type: "FETCH_PRODUCTS_START"})
		    fetch("http://rest.learncode.academy/api/wstern/users")
		    .then(  
		    function(response) {
		    	dispatch({type: "RECEIVE_PRODUCTS", payload: response.data})
		    })
		    .catch((err) => {
		    	dispatch({type: "FETCH_PRODUCTS_ERROR", payload: err})
		    })
		
	})
	return store;

};

export default configureStore;