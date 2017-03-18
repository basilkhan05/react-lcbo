import { initialState } from '../utilities/initialState'

const products = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_PRODUCTS':
			return {
				...state,
				};
		case 'FETCH_PRODUCTS_PENDING':
			return {...state, fetching: true}
		case 'FETCH_PRODUCTS_FULFILLED':
			return {...state, fetching: false, fetched: true, products: action.payload }
		case 'FETCH_PRODUCTS_REJECTED':
			return {...state, fetching: false, error: action.payload}
		default:
		return state;
	}
};

export default products;