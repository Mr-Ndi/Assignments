import React, { useState, useEffect, memo } from 'react';

const StaticContent = memo(() => {
  console.log('Static content render');
  return <div>This content doesn't need to update with time</div>;
});

function TimeDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Current Time: {time.toLocaleTimeString()}</h2>
      <StaticContent />
    </div>
  );
}

export default TimeDisplay; 