export const ADD_TODO="ADD_TODO";
export const TOGGLE_TODO="TOGGLE_TODO";

export const addTodo=(newTodo)=>{
    return ({type:ADD_TODO, payload:newTodo, id:new Date()})
};

export const toggleTodo=(willToggle)=>{
    return ({type:TOGGLE_TODO, payload:willToggle})
}