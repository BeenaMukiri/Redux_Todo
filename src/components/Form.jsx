import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction } from '../actions/TodoActions';

const Form = () => {
    const dispatch = useDispatch();
    const Todo = useSelector((state)=>state.Todo)
    const [todo, settodo] = useState();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(AddTodoAction(todo));
    }
  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder='enter todos' 
          value={todo}
          onChange={(e)=>settodo(e.target.value)}/>
          <button>Add</button>
        </form>
      </center>
    </div>
  );
}

export default Form