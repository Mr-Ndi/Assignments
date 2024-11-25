import { useEffect, useState } from "react";
import StaticUI from "./StaticUI";

function LiveTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="comp">
      <h1>Live Time with Optimized Static UI</h1>
      <StaticUI />
      <div style={{ marginTop: "20px", fontSize: "24px", fontWeight: "bold" }}>
        Current Time: {time.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default LiveTime;
