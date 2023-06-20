import React,{ useState } from "react";
import InputTodo from "./Input";
import TodosList from "./TodoList";

function TodosLogic(props){
    const [todos, setTodos] = useState([]);
  
    const addTodo = (text) => {
      setTodos([...todos, text]);
    };
  
    return (
      <div style={{textAlign:"center"}}>
        <InputTodo addTodo={addTodo} />
        <TodosList todos={todos} setTodos={setTodos} />
      </div>
    );
  };
  export default TodosLogic;