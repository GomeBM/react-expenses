import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <h1>Current time: </h1>
      <h2>{time}</h2>
    </div>
  );
};

export default Clock;
