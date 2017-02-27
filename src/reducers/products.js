const products = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PRODUCTS':
			return [
				...state,
				];
		default:
		return state;
	}
};

export default products;