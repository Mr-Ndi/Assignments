import { useState } from "react";

function LecturerForm() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const validateInputs = (email, phoneNumber) => {
    let result = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      result += "Invalid email format!";
    }

    if (!/^\d+$/.test(phoneNumber)) {
      result += "\nPhone number must be numeric!";
    }
    return result;
  };
  return (
    <form className="comp" onSubmit={(e) => e.preventDefault()}>
      <h2>Registration Form for Lecturers</h2>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" required />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="subject">Subject: </label>
      <input type="text" id="subject" name="subject" />
      <br />
      <label htmlFor="phone">Phone Number: </label>
      <input
        type="text"
        id="number"
        name="number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />
      <p style={{ color: "red", fontSize: "14px" }}>
        {validateInputs(email, phoneNumber)}
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LecturerForm;
