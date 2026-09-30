import React, { useState } from "react";

const App1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  function handlePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />
      <button onClick={handlePassword}>
        {showPassword ? "Hide Password" : "show Password"}
      </button>
    </div>
  );
};

export default App1;
