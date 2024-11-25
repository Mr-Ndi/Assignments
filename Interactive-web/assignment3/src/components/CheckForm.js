import { useState } from "react";

function CheckForm() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(`${value1}, ${value2}, ${value3}, ${value4}.`);
  };
  return (
    <form onSubmit={handleSubmit} className="comp">
      <h4>Multiple Checkbox form</h4>
      <input
        type="checkbox"
        id="value1"
        name="value1"
        value="Dog"
        onChange={(e) => setValue1(e.target.value)}
      />
      <label htmlFor="value1">Dog</label>
      <br />
      <input
        type="checkbox"
        id="value2"
        name="value2"
        value="Cat"
        onChange={(e) => setValue2(e.target.value)}
      />
      <label htmlFor="value2">Cat</label>
      <br />
      <input
        type="checkbox"
        id="value3"
        name="value3"
        value="Cow"
        onChange={(e) => setValue3(e.target.value)}
      />
      <label htmlFor="value3">Cow</label>
      <br />
      <input
        type="checkbox"
        id="value4"
        name="value4"
        value="Hen"
        onChange={(e) => setValue4(e.target.value)}
      />
      <label htmlFor="value4">Hen</label>
      <br />
      <button type="submit">Submit</button>
      <p>The Chosen values are: {result}</p>
    </form>
  );
}

export default CheckForm;
