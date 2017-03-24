import { productsInitialState } from '../utilities/initialState'

const products = (state=productsInitialState, action) => {
	switch (action.type) {
		// LOAD MORE PRODUCTS 
		case 'LOAD_MORE_PRODUCTS_PENDING':
			return {...state, fetching: true}
		case 'LOAD_MORE_PRODUCTS_FULFILLED':
			return {...state, fetching: false, fetched: true, products: [...state.products.concat(action.payload.result)], pager: action.payload.pager }
		case 'LOAD_MORE_PRODUCTS_REJECTED':
			return {...state, fetching: false, error: action.payload}
		// FETCH MULTIPLE PRODUCTS		
		case 'FETCH_PRODUCTS_PENDING':
			return {...state, fetching: true, loading: true}
		case 'FETCH_PRODUCTS_FULFILLED':
			return {...state, fetching: false, loading: false, fetched: true, products: action.payload.result, pager: action.payload.pager }
		case 'FETCH_PRODUCTS_REJECTED':
			return {...state, fetching: false, loading: false, error: action.payload, products: null}
		// FETCH Single PRODUCT
		case 'FETCH_PRODUCT_PENDING':
			return {...state, fetching: true, loading: true, product: []}
		case 'FETCH_PRODUCT_FULFILLED':
			return {...state, fetching: false, loading: false, fetched: true, product: action.payload.result }
		case 'FETCH_PRODUCT_REJECTED':
			return {...state, fetching: false, loading: false, error: action.payload}

		case 'RESET_MS':
			return {...state, 
				products: []
			};

		case 'RESET_MOOD':
			return {...state,
				products: []
			};

		case 'TOGGLE_MENU':
			return {...state, menu_is_open: action.menu_is_open };

		default:
		return state;
	}
};

export default products;