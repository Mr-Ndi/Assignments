import { useState } from "react";

function Toggle() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    state ? setState(false) : setState(true);
  };
  return (
    <button className="comp" onClick={handleClick}>
      {state ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
