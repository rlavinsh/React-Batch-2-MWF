import React, { useState } from "react";
import App1 from "./App1";

const App = () => {
  // console.log(useState(20));
  const [count, setCount] = useState(20);

  // let count = 0;
  console.log("Global function run ho raha hein");

  function handleIncrease() {
    setCount(count + 1);
    // count++;
    console.log(count);
  }

  function handleDecrease() {
    setCount(count - 1);
    console.log(count);
  }

  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.value.length == 20) {
      alert("Maximum limit Reached");
    }
  }
  return (
    <div>
      <input type="text" placeholder="Enter Text" onChange={handleChange} />
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <App1 />
    </div>
  );
};

export default App;
