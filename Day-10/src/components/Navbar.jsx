import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <h1>Tech Store</h1>
        <div className="navlinks">
          <NavLink className="navItem" to="/">
            Home
          </NavLink>
          <NavLink className="navItem" to="/about">
            About
          </NavLink>
          <NavLink className="navItem" to="/contact">
            contact
          </NavLink>
          <button
            className="login"
            onClick={() => {
              navigate("/login");
              //   navigate(-1);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
