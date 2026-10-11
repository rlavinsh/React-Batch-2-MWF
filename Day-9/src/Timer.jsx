import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timerId = setInterval(() => {
      setCount(count + 1);
    }, 5000);

    // cleanup function
    return () => {
      console.log(count);
      clearInterval(timerId);
    };
  });
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default Timer;
