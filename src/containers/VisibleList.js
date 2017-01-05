import {connect} from 'react-redux'
import VisibleList from '../components/visibleList'
import {visibleListAction} from '../actions/visibleListAction'

const mapStateToProps = (state) => ({todos: state.addTodo})

const mapDispatchToProps = (dispatch) => ({onListClick: () => dispatch(visibleListAction)})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleList)