import { moodsInitialState } from '../utilities/initialState'

const moods = (state = moodsInitialState, action) => {
	switch (action.type) {
		case 'SET_MS':
			return {...state, money_status_is_set: true, current_$_status: action.current_$_status
			} ;
		case 'RESET_MS':
			return {...state,
				money_status_is_set: false,
				product_query: {}
			};


		case 'SET_MOOD':
			return {...state, mood_is_set: true, current_mood: action.current_mood, 
			};
		case 'RESET_MOOD':
			return {...state,
				mood_is_set: false,
				product_query: {}
			};


		case 'SET_QUERY':
			return {...state, product_query: action.product_query, 
			};
		default:
		return state;
	}
};

export default moods;