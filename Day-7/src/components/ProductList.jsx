import React from "react";
import ProductCard from "./ProductCard";
const ProductList = ({ addToCart }) => {
  return (
    <div className="container">
      <ProductCard name={"Iphone 15"} price={17000} addToCart={addToCart} />
      <ProductCard name={"Laptop"} price={20000} addToCart={addToCart} />
      <ProductCard name={"Headphones"} price={22000} addToCart={addToCart} />
    </div>
  );
};

export default ProductList;
