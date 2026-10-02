import React from "react";

const ProductCard = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h4>{props.price}</h4>
      <button
        className="btn"
        onClick={() =>
          props.addToCart({
            name: props.name,
            price: props.price,
          })
        }
      >
        AddToCart
      </button>
    </div>
  );
};

export default ProductCard;
