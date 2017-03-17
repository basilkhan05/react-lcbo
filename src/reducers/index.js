import { combineReducers } from 'redux';

import products from './products';
import moods from './moods';


const allReducers = combineReducers({
	products,
	moods
});

export default allReducers; 