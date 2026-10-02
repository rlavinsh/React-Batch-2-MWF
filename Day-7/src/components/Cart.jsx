import React from "react";

const Cart = ({ cart, clearCart }) => {
  // console.log(cart);
  let total = cart.reduce((acc, curr) => {
    return (acc += curr.price);
  }, 0);

  return (
    <>
      <h1>Cart:{cart.length || 0}</h1>
      {cart.map((pro, index) => {
        return (
          <>
            <div className="cart" key={index}>
              <h2>{pro.name}</h2>
              <h3>{pro.price}</h3>
            </div>
            <hr />
          </>
        );
      })}

      <h2 className="total">Total:{total}</h2>
      <button className="btn" onClick={clearCart}>
        clearCart
      </button>
    </>
  );
};

export default Cart;
