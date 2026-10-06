import React from "react";

const Header = ({ cart }) => {
  return (
    <div className="header">
      <h1>My Store</h1>
      <h2>Cart:{cart.length || 0}</h2>
    </div>
  );
};

export default Header;
