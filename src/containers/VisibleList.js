import {connect} from 'react-redux'
import VisibleList from '../components/visibleList'
import {visibleListAction} from '../actions/visibleListAction'

function mapStateToProps(state) {
	return {
		todos: state.addTodo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onListClick: () => dispatch(visibleListAction)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleList)