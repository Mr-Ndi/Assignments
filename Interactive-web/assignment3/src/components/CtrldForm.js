import { useState } from "react";

function CtrldForm() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(value);
  };
  return (
    <div className="comp">
      <h4>Controlled Form</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="value">Enter value: </label>
        <input
          type="text"
          name="value"
          id="value"
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {result}
    </div>
  );
}

export default CtrldForm;
