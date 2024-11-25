function LoginForm() {
  return (
    <form className="comp">
      <h4>Login Form</h4>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="password">Enter your password: </label>
      <input type="password" id="password" name="password" />
      <br />
      <button type="button">Submit</button>
    </form>
  );
}

export default LoginForm;
