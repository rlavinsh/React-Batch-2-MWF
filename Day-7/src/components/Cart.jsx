import React from "react";

const Cart = () => {
  return (
    <>
      <h1>Cart:(2)</h1>
      <div className="cart">
        <h2>Iphone 15</h2>
        <h3>32000</h3>
      </div>
      <hr />
      <h2 className="total">Total:32000</h2>
      <button className="btn">clearCart</button>
    </>
  );
};

export default Cart;
