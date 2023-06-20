import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCanList } from '@fortawesome/free-solid-svg-icons';
function TodoItem({ todo,deleteTodo ,setTodos}){
    /* console.log(todo) */
    const handleDelete = () => {
        console.log(todo)
        deleteTodo(todo);
      };
    
    return <div style={{display:"flex",marginLeft:"40%"}}>
        <h4> {todo}</h4>
        <button onClick={handleDelete} style={{backgroundColor:"blue",padding:"10px",color:"white",borderRadius:"15px",marginTop:"15px"}}>Delete</button>
        </div>
  };
  export default TodoItem;