import React, {useState, useReducer, preventDefault}  from 'react';
import {reducer, initialState} from "../reducers/reducer"
import {addTodo,clearForm,toggleTodo} from "../actions/actions"



//Where do I pass this info?

 const TodoForm=(props)=>{
    const [ formData, setFormData]=useState('')
    
    const handleChanges=(e)=>{
       setFormData(e.target.value)
    }
    const handleAddTodo=(e)=>{
        e.preventDefault();
        props.dispatch(props.addToDo(formData));
    }
    const handleClearForm=(e)=>{
        e.preventDefault();
        setFormData('')
        props.dispatch(props.clearForm(initialState))
    }
    
     
    return(
    <div>
        <form >
            <input 
            name="Todo" 
            type="text"
            onChange={handleChanges}
            value={formData}
            />
            <button onClick={handleAddTodo}>Add to list</button>
            <button onClick={handleClearForm}>Clear</button>
         </form>
     </div>
 )
 };
         
            
          
               
export default TodoForm;
    
    