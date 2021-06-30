const initialState = {
    todos: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state, 
                todos: state.todos.filter(todo => todo.id !== action.payload),
            }
        case 'COMPLETE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                  if (todo.id !== action.payload) {
                    return todo
                  }
          
                  return {
                    ...todo,
                    status: "Completed",
                  }
                })
              }
        default: 
            return state
    }
}
export default reducer