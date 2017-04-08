export const productsInitialState = {
	fetching: false,
	loading: false,
	fetched: false,
	origin_fetching: false,
	origin_fetched: false, 
	instagram_fetching: false,
	instagram_fetched: false, 
	products: [],
	product: [],
	error: null,
	pager: null,
	menu_is_open: false,
	product_details:{
		origin: {
			string: '',
			lat: null,
			lon: null
		},
		instagrams: {
			top_posts:[],
			all_posts: [],
			pager: null
		}
	}
}

export const moodsInitialState = {
	current_mood: null,
	current_$_status: null, 
	money_status_is_set: false,
	mood_is_set: false,
	product_query: {},
}