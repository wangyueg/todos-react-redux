import React, {Component} from 'react'

export default class VisibleList extends Component {
	render() {
		const {todos, onListClick} = this.props
		return (
			<ul>
				{
					todos.map(function(todo) {
						return (
							<li key={todo.key} onClick={onListClick}>{todo.text}</li>
						)
					})
				}
			</ul>
		)
	}
}