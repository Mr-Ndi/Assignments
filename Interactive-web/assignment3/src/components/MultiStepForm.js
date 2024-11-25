import { useState } from "react";

function MultiStepForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [setPayment] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()} className="comp">
      <h4>Multistep form</h4>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {name && (
        <>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </>
      )}
      <br />
      {address && (
        <>
          <label htmlFor="payment">Payment Information: </label>
          <input
            type="text"
            id="payment"
            name="payment"
            onChange={(e) => setPayment(e.target.value)}
          />
        </>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiStepForm;
