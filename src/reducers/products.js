import { initialState } from '../utilities/initialState'

const products = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_PRODUCTS':
			return [
				...state,
				];
		case 'FETCH_PRODUCTS_PENDING':
			return {...state, fetching: true}
			break;
		case 'FETCH_PRODUCTS_FULFILLED':
			return {...state, fetching: false, fetched: true, products: action.payload }
			break;
		case 'FETCH_PRODUCTS_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;
		default:
		return state;
	}
};

export default products;