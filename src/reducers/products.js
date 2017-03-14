import { initialState } from '../utilities/initialState'

const products = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_PRODUCTS':
			return [
				...state,
				];
		case 'FETCH_PRODUCTS_START':
			return {...state, fetching: true}
			break;
		case 'RECEIVE_PRODUCTS':
			return {...state, fetching: false, fetched: true, products: action.payload }
			break;
		case 'FETCH_PRODUCTS_ERROR':
			return {...state, fetching: false, error: action.payload}
			break;
		default:
		return state;
	}
};

export default products;