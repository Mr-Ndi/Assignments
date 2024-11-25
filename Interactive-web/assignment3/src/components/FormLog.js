import { useState } from "react";

function FormLog() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <form className="comp" onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name: </label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormLog;
