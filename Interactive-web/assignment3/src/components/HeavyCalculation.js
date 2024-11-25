import React from "react";

function HeavyCalculation({ number }) {
  console.log("HeavyCalculation component rendered!");
  // Simulating an expensive calculation
  const performHeavyCalculation = (num) => {
    console.log("Performing heavy calculation...");
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
      result += num;
    }
    return result;
  };
  const result = performHeavyCalculation(number);
  return (
    <div className="comp">
      <h2>Heavy Calculation</h2>
      <p>Input Number: {number}</p>
      <p>Calculation Result: {result}</p>
    </div>
  );
}

export default React.memo(HeavyCalculation);
