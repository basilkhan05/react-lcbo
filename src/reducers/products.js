import { initialState } from '../utilities/initialState'

const products = (state=initialState, action) => {
	switch (action.type) {
		case 'LOAD_MORE_PRODUCTS_PENDING':
			return {...state, fetching: true}
		case 'LOAD_MORE_PRODUCTS_FULFILLED':
			return {...state, fetching: false, fetched: true, products: [...state.products.concat(action.payload.result)], pager: action.payload.pager }
		case 'LOAD_MORE_PRODUCTS_REJECTED':
			return {...state, fetching: false, error: action.payload}
		case 'FETCH_PRODUCTS_PENDING':
			return {...state, fetching: true, loading: true}
		case 'FETCH_PRODUCTS_FULFILLED':
			return {...state, fetching: false, loading: false, fetched: true, products: action.payload.result, pager: action.payload.pager }
		case 'FETCH_PRODUCTS_REJECTED':
			return {...state, fetching: false, loading: false, error: action.payload}
		default:
		return state;
	}
};

export default products;