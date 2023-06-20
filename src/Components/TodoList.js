import React from "react";
import TodoItem from "./TodoItem";
function TodosList({ todos,setTodos}){
    const deleteTodo = (todo) => {
        const updatedTodos = todos.filter(item => item !== todo);
    setTodos(updatedTodos);
      }; 
    return (
      <div>
        {todos.map((todo, index) => (
            /*  console.log(todo)  */
          <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} />
        ))}
     </div>
    );
  };
  export default TodosList