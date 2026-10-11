import React from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

const Product = () => {
  console.log(products);

  return (
    <div>
      {/* <h1>product1</h1> */}
      {products.map((product) => {
        return (
          <div className="profile-card" key={product.id}>
            <h2>ProductName:{product.productname}</h2>
            <h3>ProductDes:{product.productdescription}</h3>
            <h4>Price:{product.productprice}</h4>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
