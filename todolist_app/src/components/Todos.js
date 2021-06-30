import React from "react"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Todos.css'
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
    const completeTask = id =>dispatch({
        type: 'COMPLETE_TODO',
        payload:id,
    })
    return (
      <ul>
        {todos.map(todo => <div className='container'><div className="list"><button onClick={()=>completeTask(todo.id)}>{todo.status}</button></div>  <div className='list'><h onClick={() => handleClick(todo.id)}>{todo.label}</h></div></div>)}
      </ul>
    )
  }

  export default Todos