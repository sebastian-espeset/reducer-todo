import logo from './logo.svg';
import './App.css';
import React, {useReducer} from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import reducer, {initialState} from './reducers/reducer'
import { addTodo, toggleTodo,clearForm } from './actions/actions';

function App() {
  
  const [state, dispatch]=useReducer(reducer, initialState)
  
  return (
    <div className="App">
      <h1>To Do List: </h1>
      <TodoForm addToDo={addTodo} dispatch={dispatch} clearForm={clearForm}/>
      <TodoList formData={state} setCompleted={toggleTodo}/>
    </div>
  );
}
export default App;


     
