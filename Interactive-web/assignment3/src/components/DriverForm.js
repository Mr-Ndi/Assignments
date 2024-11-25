function DriverForm() {
  return (
    <form className="comp" onSubmit={(e) => e.preventDefault()}>
      <h2>Registration Form for Drivers</h2>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" required />
      <br />
      <label htmlFor="license">License Number: </label>
      <input type="text" id="license" name="license" />
      <br />
      <label htmlFor="phone">Phone Number: </label>
      <input type="text" id="phone" name="phone" />
      <br />
      <label htmlFor="vehicle">Vehicle Type: </label>
      <select id="vehicle" name="vehicle">
        <option value="car">Car</option>
        <option value="truck">Truck</option>
        <option value="motorcyle">Motorcycle</option>
      </select>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default DriverForm;
