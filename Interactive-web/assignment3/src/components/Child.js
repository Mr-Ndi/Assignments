import React from "react";

function Child({ data }) {
  console.log("Child component rendered!");
  return (
    <div className="comp">
      <h2>Child Component</h2>
      <p>Received Data: {data}</p>
    </div>
  );
}

export default React.memo(Child);
