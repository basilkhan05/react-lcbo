import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

import { createStore, applyMiddleware } from 'redux';  

import allProducts from './reducers';



const logger = (store) => (next) => (action) => {
	console.log("action fired", action);
	next(action);
}

const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		console.log("ERROR!", e);
	}
}


const middleware = applyMiddleware(logger, error);

const configureStore = () => {
	const persistedState = loadState();

	const store = createStore(
		allProducts,
		persistedState,
		middleware
	); 

	store.subscribe(throttle(() => {
		saveState(store.getState());
		console.log(("store changed", store.getState()))
	}, 1000));

	store.dispatch({type: "LOAD_PRODUCTS"})
	return store;

};

export default configureStore;