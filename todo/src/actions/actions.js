export const ADD_TODO="ADD_TODO";
export const TOGGLE_TODO="TOGGLE_TODO";
export const CLEAR_FORM="CLEAR_FORM";

export const addTodo=(newTodo)=>{
    return {type:ADD_TODO, payload:{item:newTodo,id:Date.now(),completed:false}}
};

export const toggleTodo=(willToggle)=>{
    return {type:TOGGLE_TODO, payload:willToggle}
};

export const clearForm=(state)=>{
    return {type:CLEAR_FORM, payload:state}
}