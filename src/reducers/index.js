import { combineReducers } from 'redux';
import products from './products';
import moods from './moods';


const allProducts = combineReducers({
	products,
	moods
});

export default allProducts; 