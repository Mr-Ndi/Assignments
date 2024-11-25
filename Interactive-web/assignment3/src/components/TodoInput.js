import { useState } from "react";

function TodoInput({ addTask }) {
  const [input, setInput] = useState("");
  const handleAdd = () => {
    if (input.trim() !== "") {
      addTask(input);
      setInput("");
    }
  };
  return (
    <div className="comp">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "8px", width: "300px" }}
      />
      <button
        onClick={handleAdd}
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoInput;
