import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

import { createStore } from 'redux';  

import allProducts from './reducers';

const configureStore = () => {
	const persistedState = loadState();

	// {
	// 	products: [{
	// 		id: '0',
	// 		product: 'Sample Beer',
	// 		is_available: false,
	// 	}],
	// };

	const store = createStore(
		allProducts,
		persistedState
	); 

	store.subscribe(throttle(() => {
		saveState(store.getState());
	}, 1000));

	return store;

};

export default configureStore;