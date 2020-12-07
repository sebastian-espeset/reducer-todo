import React, {useState, useReducer, preventDefault}  from 'react';
import {reducer, initialState} from "../reducers/reducer"
import {addTodo,toggleTodo} from "../actions/actions"



//Where do I pass this info?

 const TodoForm=()=>{
    
    const [state, dispatch]=useReducer(reducer, initialState)
    
    const handleChanges=(e)=>{
        dispatch(addTodo(e.target.value))
    }
    const handleToggle=(e)=>{
        e.preventDefault();
        dispatch(toggleTodo(!state.completed))
    }
   
    return(
    <div>
        <form  >
            <input 
            name="Todo" 
            type="text"
            onChange={handleChanges}
            value={state.input}
            />
            <button>Submit</button>
            <button>Clear</button>
         </form>
     </div>
 )
 };
         
            
          
               
export default TodoForm;
    
    