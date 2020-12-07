import React, {useState, useReducer}  from 'react';
import {reducer, initialState} from "../reducers/reducer"



 const TodoForm=()=>{
    
    const [state, dispatch]=useReducer(reducer, initialState)
    
    return(
    <div>
        <form>
            <h2>This is a form</h2>
            <input 
            name="Todo" 
            type="text"/>
        </form>
    </div>
)
};
export default TodoForm;
    
    