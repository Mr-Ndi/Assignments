import { useState } from "react";
import CounterTwo from "./CounterTwo";
import UnrelatedList from "./UnrelatedList";

function CounterList() {
  const [count, setCount] = useState(0);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <div className="comp">
      <CounterTwo count={count} setCount={setCount} />
      <UnrelatedList items={items} />
    </div>
  );
}

export default CounterList;
