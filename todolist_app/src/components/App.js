import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import TodoInput from './TodoInput';
import { useState } from 'react';
import Todos from './Todos'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          To Do List:
        </h1>
        <TodoInput />
        ______________________________________________________________
        <Todos />
      </header>
    </div>
  );
}

export default App;
