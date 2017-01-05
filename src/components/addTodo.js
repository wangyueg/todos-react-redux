import React, {Component, PropTypes} from 'react'

class Todo extends Component {

	addTodoClcik() {
		let value = this.refs.todoInput.value
		if(value.trim()) {
			this.props.addTodo(value.trim())
			this.refs.todoInput.value = ''
		}
	}

	render() {
		return (
			<div>
				<input type="text" ref="todoInput" />
				<button onClick={this.addTodoClcik.bind(this)}>Add Todo</button>
			</div>
		)
	}
}

Todo.propTypes = {
	addTodo: PropTypes.func.isRequired
}

export default Todo