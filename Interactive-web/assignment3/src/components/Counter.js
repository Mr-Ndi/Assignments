import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div className="comp">
      <p>{count}</p>
      <button onClick={() => setCount(++count)}>Increment</button>
      <button onClick={() => setCount(--count)}>Decrement</button>
    </div>
  );
}

export default Counter;
