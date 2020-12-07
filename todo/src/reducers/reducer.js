
export const initialState={
    item:"Learn some reducers",
    completed:false,
    id:Date.now()
}

export const reducer=(state, action)=>{
    switch(action.type){
        case("ADD_TODO"):
            return ({...state, item:action.payload})
        case("TOGGLE_TODO"):
            return ({...state, completed:action.payload})
        default:
            return state;
    }
}
        