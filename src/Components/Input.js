import React,{ useState } from "react";

function InputTodo({ addTodo }){
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (text.trim() !== '') {
        addTodo(text);
        setText('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          style={{padding:"20px" ,border:"solid blue 3px", borderRadius:"20px",fontSize:"20px"}}
          type="text"
          placeholder="Enter a todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" style ={{padding:"15px",borderRadius:"20px",backgroundColor:"lightgrey"}}>Add </button>
      </form>
    );
  };
  export default InputTodo;