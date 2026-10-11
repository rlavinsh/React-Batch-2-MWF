import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  console.log(location.state.name);

  const navigate = useNavigate();
  return (
    <div>
      <h1>welcome {" " + location.state.name}</h1>
      <button
        className="login"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back to Previous Page
      </button>
      <button
        className="login"
        onClick={() => {
          navigate("/");
        }}
      >
        Return to HomePage
      </button>
    </div>
  );
};

export default Login;
