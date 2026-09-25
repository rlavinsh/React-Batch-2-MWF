import React from "react";

const App = () => {
  function Greet() {
    console.log("Hello React");
  }
  return (
    <div>
      <h1>Hello React</h1>
      <Greet />
    </div>
  );
};

export default App;
