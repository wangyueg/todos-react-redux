import {connect} from 'react-redux'
import AddTodo from '../components/addTodo'
import {addTodoAction} from '../actions/addTodoAction'

function mapStateToProps() {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		addTodo: (text) => dispatch(addTodoAction(text))
	}
}

const todo = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo)

export default todo