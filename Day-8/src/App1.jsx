import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
const App1 = () => {
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUserData({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!userdata.name || !userdata.email || !userdata.password) {
      // notify();
      toast.warning("All fields are required", {
        position: "top-right",
      });
      return;
    }
    console.log(userdata);

    toast.success("form submitted", {
      position: "top-right",
    });
    // alert("form submitted");
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={userdata.name}
          onChange={handleChange}
          name="name"
        />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={userdata.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={userdata.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App1;
