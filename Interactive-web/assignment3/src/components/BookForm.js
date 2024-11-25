import { useState } from "react";

function BookForm() {
  const [publishedYear, setPublishedYear] = useState("");
  const validateInputs = (year) => {
    const fourDigitRegex = /^\d{4}$/;
    if (!fourDigitRegex.test(year))
      return "The Published Year must be a four digit number!";
  };
  return (
    <form className="comp" onSubmit={(e) => e.preventDefault()}>
      <h2>Registration Form for Books</h2>
      <label htmlFor="title">Book Title: </label>
      <input type="text" id="title" name="title" required />
      <br />
      <label htmlFor="author">Author: </label>
      <input type="text" id="author" name="author" />
      <br />
      <label htmlFor="isbn">ISBN: </label>
      <input type="text" id="isbn" name="isbn" />
      <br />
      <label htmlFor="year">Published Year: </label>
      <input
        type="text"
        id="year"
        name="year"
        onChange={(e) => setPublishedYear(e.target.value)}
      />
      <br />
      <p style={{ color: "red", fontSize: "14px" }}>
        {validateInputs(publishedYear)}
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookForm;
