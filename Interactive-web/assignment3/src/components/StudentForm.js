import { useState } from "react";

function StudentForm() {
  const [studentID, setStudentID] = useState("");
  const validateInputs = (studentID) => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(studentID))
      return "The Studend ID must contain alphanumeric characters!";
  };
  return (
    <form className="comp" onSubmit={(e) => e.preventDefault()}>
      <h2>Registration Form for Students</h2>
      <label htmlFor="firstname">First Name: </label>
      <input type="text" id="firstname" name="firstname" required />
      <br />
      <label htmlFor="lastname">Last Name: </label>
      <input type="text" id="lastname" name="lastname" />
      <br />
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="studentID">Student ID: </label>
      <input
        type="text"
        id="studentID"
        name="studentID"
        onChange={(e) => setStudentID(e.target.value)}
      />
      <br />
      <label htmlFor="birth">Date of Birth: </label>
      <input type="text" id="birth" name="birth" />
      <br />
      <p style={{ color: "red", fontSize: "14px" }}>
        {validateInputs(studentID)}
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
