import React from 'react';
 
import './App.css';
import Header from './Components/Header';
import TodosLogic from './Components/TodoLogic';

function App() {
  return (
    <div className="App">
     <Header/>
     <TodosLogic/>
    </div>
  );
}

export default App;
