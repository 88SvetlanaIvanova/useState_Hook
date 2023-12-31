import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const [time, setTime] = useState(0);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };
  const now = new Date().toLocaleTimeString([], options);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString([], options);
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get</button>
    </div>
  );
}

export default App;
