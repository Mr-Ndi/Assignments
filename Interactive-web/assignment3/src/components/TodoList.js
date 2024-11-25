import React from "react";

function TodoList({ tasks }) {
  console.log("TodoList component rendered!");
  return (
    <div className="comp">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(TodoList);
