const products = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_PRODUCTS':
			return [
				...state,
				];
		default:
		return state;
	}
};

export default products;