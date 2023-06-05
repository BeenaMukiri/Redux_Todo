export const TodoReducer = (state={todos:[]},action)=>{
    switch (action.type) {
      case "ADD_TODO":
        return { todos: action.payload };
        break;
      case "REMOVE_TODO":
        return { todos: action.payload };
        break;

      default:
        return state;
    }
}
