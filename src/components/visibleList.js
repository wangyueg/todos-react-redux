import React, {Component, PropTypes} from 'react'

class VisibleList extends Component {
	render() {
		const {todos, onListClick} = this.props
		return (
			<ul>
				{
					todos.map((todo) => {
						return (
							<li key={todo.key} onClick={onListClick} style={{textDecoration: "none"}}>{todo.text}</li>
						)
					})
				}
			</ul>
		)
	}
}

VisibleList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		key: PropTypes.number.isRequired
	})).isRequired
}
export default VisibleList