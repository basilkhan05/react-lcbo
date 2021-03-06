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


		// FETCH ORIGIN
		case 'FETCH_ORIGIN_PENDING':
			return {...state, origin_fetching: true, product_details: {...state.product_details, 
				origin: { 
					string: '',
					lat: null,
					lon: null
				} 
			} 
		}
		case 'FETCH_ORIGIN_FULFILLED':
			return {...state, origin_fetching: false, origin_fetched: true, product_details: {...state.product_details, 
				origin: { 
					string: action.payload.results[0].formatted_address,
					lat: action.payload.results[0].geometry.location.lat,
					lon: action.payload.results[0].geometry.location.lng
				} 
			} 
		}
		case 'FETCH_ORIGIN_REJECTED':
			return {...state, origin_fetching: false, error: action.payload, }


		// FETCH Instagram
		case 'FETCH_INSTAGRAM_PENDING':
			return {...state, instragram_fetching: true	, product_details: {...state.product_details, 
				instagrams: {
						top_posts:[],
						all_posts: [],
						pager: null
					}
			} 
		}
		case 'FETCH_INSTAGRAM_FULFILLED':
			return {...state, instragram_fetching: false, instragram_fetched: true, product_details: {...state.product_details, 
				instagrams: {
						top_posts:action.payload.tag.top_posts.nodes,
						all_posts: action.payload.tag.media.nodes,
						pager: {
							count: action.payload.tag.media.count,
							page_info: action.payload.tag.media.page_info,
						}
					}
			} 
		}
		case 'FETCH_INSTAGRAM_REJECTED':
			return {...state, origin_fetching: false, error: action.payload}



		// RESET AND TOGGLE REDUCERS
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