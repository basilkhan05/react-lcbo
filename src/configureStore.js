import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import { createStore, applyMiddleware, compose } from 'redux';  

import allReducers from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
	const persistedState = loadState();

	const store = createStore(
		allReducers,
		persistedState,
		composeEnhancers(middleware)); 

	store.subscribe(throttle(() => {
		saveState(store.getState());
		console.log(("store changed", store.getState()));
	}, 0));
	
	return store;

};

export default configureStore;