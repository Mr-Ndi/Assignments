import { useState } from "react";
import HeavyCalculation from "./HeavyCalculation";

function Heavy() {
  const [count, setCount] = useState(0);
  const [setOtherState] = useState("Unrelated State");
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count: {count}
      </button>
      <button onClick={() => setOtherState("Updated State")}>
        Update Unrelated State
      </button>
      <HeavyCalculation number={count} />
    </div>
  );
}

export default Heavy;
