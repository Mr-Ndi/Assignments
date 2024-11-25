import { useState } from "react";
import Child from "./Child";

function ParentMemo() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Hello, World!");
  return (
    <div className="comp">
      <h1>Parent Component</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count: {count}
      </button>
      <button onClick={() => setData("Updated Data!")}>Update Data</button>
      <Child data={data} />
    </div>
  );
}

export default ParentMemo;
