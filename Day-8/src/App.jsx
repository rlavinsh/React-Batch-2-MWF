import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App1 from "./App1";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => toast("All fields are required");

  function handleName(e) {
    // console.log(e.target.value);

    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      // notify();
      toast.warning("All fields are required", {
        position: "top-right",
      });
      return;
    }
    const data = {
      name,
      email,
      password,
    };

    console.log(data);
    toast.success("form submitted", {
      position: "top-right",
    });
    // alert("form submitted");
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={handleName}
        />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <button>submit</button>
      </form>
      <h1>Live Preview</h1>
      <h3>Name:{name}</h3>
      <h3>Email:{email}</h3>
      <h3>Password:{password}</h3> */}
      <App1 />
      <ToastContainer />
    </div>
  );
};

export default App;
