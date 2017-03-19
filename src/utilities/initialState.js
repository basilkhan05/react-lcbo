export const productsInitialState = {
	fetching: false,
	loading: false,
	fetched: false,
	products: [],
	product: [],
	error: null,
	pager: null
}

export const moodsInitialState = {
	current_mood: null,
	current_$_status: null, 
	money_status_is_set: false,
	mood_is_set: false,
	product_query: '',
}