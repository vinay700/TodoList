let nextId = 1
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: nextId++,
                    text: action.text,
                    completed: false,
                    is_deleted: false
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed } :
                    todo)

        case 'DELETE_ITEM':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, is_deleted: true } :
                    todo)
        default:
            return state
    }
}

export default todos