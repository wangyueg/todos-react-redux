let i = 0;

const addTodoAction = (text) => {
	return {
		type: 'ADD_TODO',
		i: i++,
		text
	}
}

export {addTodoAction}