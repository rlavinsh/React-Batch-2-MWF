import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>My Store</h1>
      <h2>Cart:{props.cart.length || 0}</h2>
    </div>
  );
};

export default Header;
