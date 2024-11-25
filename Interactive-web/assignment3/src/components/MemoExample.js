import React, { useState, useMemo } from 'react';

const HeavyCalculation = React.memo(({ number }) => {
  // Simulate heavy calculation
  const calculateValue = (num) => {
    console.log('Calculating...');
    return num * 2;
  };

  const result = useMemo(() => calculateValue(number), [number]);

  return <div>Calculated Value: {result}</div>;
});

function MemoExample() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Increment Count: {count}
      </button>
      <button onClick={() => setNumber(n => n + 1)}>
        Change Number: {number}
      </button>
      <HeavyCalculation number={number} />
    </div>
  );
}

export default MemoExample; 