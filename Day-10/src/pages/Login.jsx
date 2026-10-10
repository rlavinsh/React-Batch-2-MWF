import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
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
