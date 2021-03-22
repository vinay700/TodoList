import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch({ type: 'TOGGLE_TODO', id }),
    deleteTodo: (id) => dispatch({ type: 'DELETE_ITEM', id })
})
// const deleteItem = (dispatch) => {

// }
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)