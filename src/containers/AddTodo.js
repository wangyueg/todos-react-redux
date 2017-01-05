import {connect} from 'react-redux'
import AddTodo from '../components/addTodo'
import {addTodoAction} from '../actions/addTodoAction'

const mapStateToProps = () => ({})

var mapDispatchToProps = (dispatch) => ({addTodo: (text) => dispatch(addTodoAction(text))})

const todo = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo)

export default todo