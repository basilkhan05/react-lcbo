import { moodsInitialState } from '../utilities/initialState'

const moods = (state = moodsInitialState, action) => {
	switch (action.type) {
		case 'SET_MS_TO_LEVEL_1':
			return {...state, money_status_is_set: true, current_$_status: action.current_$_status, product_query: {'order': 'price_in_cents.asc'} } ;
		case 'SET_MS_TO_LEVEL_2':
			return {...state, money_status_is_set: true, current_$_status: action.current_$_status, product_query: {'order': 'price_per_liter_in_cents.asc'} };
		case 'SET_MS_TO_LEVEL_3':
			return {...state, money_status_is_set: true, current_$_status: action.current_$_status, product_query: {'order': 'price_in_cents.desc'} };



		case 'SET_MOOD_TO_CLASSY':
			return {...state, mood_is_set: true, current_mood: action.current_mood, product_query: {...state.product_query, 'order': state.product_query.order+',alcohol_content.desc'} };
		case 'SET_MOOD_TO_KOSHER':
			return {...state, mood_is_set: true, current_mood: action.current_mood, product_query: {...state.product_query, 'where': 'is_kosher'} };
		default:
		return state;
	}
};

export default moods;