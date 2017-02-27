const moods = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MOODS':
			return [
				...state,
				];
		default:
		return state;
	}
};

export default moods;