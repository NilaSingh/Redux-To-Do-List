import React from "react"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
let idx=0
const TodoInput = () => {
    const dispatch = useDispatch()
    const [newTodo, setNewTodo]=useState()
    let Incompleted='Incomplete'
    const handleChange = event => setNewTodo(event.target.value)
    const handleClick = () => {
    dispatch({
        type:'ADD_TODO',
        payload:{
        label: newTodo,
        id:idx++,
        status:Incompleted,
      }
    })
}
    return (
      <>
      <input value={newTodo} onChange={handleChange} type='text' placeholder='Type Task'/><br/>
      <button onClick={handleClick}> Add A To Do </button>
      </>
    )
  
  }
  export default TodoInput