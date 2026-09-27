import React from "react";
import Card from "./components/Card";
import Card1 from "./components/Card1";
const App = () => {
  return (
    <div className="parent">
      <Card name="Ankit" profile="developer" />
      <Card name="Ritik" profile="SDE-1" />
    </div>
  );
};

export default App;
