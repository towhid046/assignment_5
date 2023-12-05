import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'
const TodoList = () => {
  const todoList = [
    { text: "Wake up at 5:00 AM", completionStatus: false },
    { text: "Get ready for School", completionStatus: false },
    { text: "Go to market", completionStatus: true },
  ];

  const [inputValue, setValue] = useState('');
  const getValueOfInputFild = event => {
    setValue(event)
    
  } 
  return (
    <>
      <div className="todo_container">
        <form action="" className="todoForm">
          <input id="input_todo" className="todoInput" type="text" placeholder="Add Task" onChange={getValueOfInputFild} value={inputValue} />
          <button className="add_btn">Add</button>
        </form>
        <ol className="todo_items">
        {todoList.map((item) => (
          <TodoItem item={item} />
        ))}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
