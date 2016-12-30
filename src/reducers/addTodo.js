const todo = (state=[], action) => {
	switch(action.type) {
		case 'ADD_TODO': {
			return [
				...state,
				{
					text: action.text,
					key: action.i
				}
			]
		}
		default:
			return state
	}
}

export default todo