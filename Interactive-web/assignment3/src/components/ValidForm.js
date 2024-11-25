import { useState } from "react";

function ValidForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    !email ? setEmailError(true) : setEmailError(false);
    !password ? setPasswordError(true) : setPasswordError(false);
  };
  return (
    <form onSubmit={handleSubmit} className="comp">
      <h4>Form with validation</h4>
      <label htmlFor="email">Enter Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      {emailError && (
        <span style={{ color: "red", fontSize: "11px" }}>
          Please enter a correct email!
        </span>
      )}
      <br />
      <label htmlFor="password">Enter Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      {passwordError && (
        <span style={{ color: "red", fontSize: "11px" }}>
          Please enter a correct password!
        </span>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidForm;
