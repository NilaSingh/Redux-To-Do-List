import React from "react"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
let idx=0
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
  export default TodoInput