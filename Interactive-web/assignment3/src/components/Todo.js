import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  return (
    <div className="comp">
      <h1>To-Do List</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default Todo;
