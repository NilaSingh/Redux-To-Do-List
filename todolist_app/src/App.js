import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
let idx=0

const Todos = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload:id,
  })
  if(!todos || ! todos.length){
    return(
      <p>No to dos</p>
    )
  }
  return (
    <ul>
      {todos.map(todo => <li onClick={() => handleClick(todo.id)}>{todo.label}{todo.id}</li>)}
    </ul>
  )
}
const TodoInput = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo]=useState()
  const handleChange = event => setNewTodo(event.target.value)
  const handleClick = () => dispatch({
    type:'ADD_TODO',
    payload:{
      label: newTodo,
      id:idx++,
    }
  })
  return (
    <>
    <input value={newTodo} onChange={handleChange} type='text' />
    <button onClick={handleClick}> Add To Do </button>
    </>
  )

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List:
        </p>
        <Todos />
          <TodoInput />
      </header>
    </div>
  );
}

export default App;
