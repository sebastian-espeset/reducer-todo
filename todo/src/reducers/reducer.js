
 export const initialState=[{
    item:"",
    completed:false,
    id:Date.now()
}]

 export const reducer=(state, action)=>{
    switch(action.type){
        case("ADD_TODO"):
            return ([...state, action.payload])
        case("SET_COMPLETED"):
            return state.map(todo=> action.payload===todo.id?{...todo,complete:!todo.completed}:todo)
        case("CLEAR_FORM"):
            return initialState;    
         default:
            return state;
    }
 }
export default reducer
            