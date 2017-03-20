import { moodsInitialState } from '../utilities/initialState'

const moods = (state = moodsInitialState, action) => {
	switch (action.type) {
		case 'SET_MS_TO_LEVEL_1':
			return {...state, money_status_is_set: true, current_$_status: action.current_$_status, 
				product_query: {'order': 'price_per_liter_of_alcohol_in_cents.asc', 'where': 'has_value_added_promotion', 'where_not': 'is_dead,is_discontinued'} 
			} ;
		case 'SET_MS_TO_LEVEL_2':
			return {...state, money_status_is_set: true, current_$_status: action.current_$_status, 
				product_query: {'order': 'price_in_cents.asc'} 
			};
		case 'SET_MS_TO_LEVEL_3':
			return {...state, money_status_is_set: true, current_$_status: action.current_$_status, 
				product_query: {'order': 'price_in_cents.desc', 'where_not': 'is_dead,is_discontinued'} 
			};
		case 'RESET_MS':
			return {...state, 
				money_status_is_set: false
			};



		case 'SET_MOOD_TO_CLASSY':
			return {...state, mood_is_set: true, current_mood: action.current_mood, 
				product_query: 
				{...state.product_query, 
					'order': 'alcohol_content.desc,'+state.product_query.order
				} 
			};
		case 'SET_MOOD_TO_KOSHER':
			return {...state, mood_is_set: true, current_mood: action.current_mood, 
				product_query: {...state.product_query, 'where': 'is_kosher'} 
			};
		case 'RESET_MOOD':
			return {...state,
				mood_is_set: false
			};
		default:
		return state;
	}
};

export default moods;