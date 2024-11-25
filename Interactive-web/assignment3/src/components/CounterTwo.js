function CounterTwo({ count, setCount }) {
  return (
    <div className="comp">
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default CounterTwo;
