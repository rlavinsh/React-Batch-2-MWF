import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const product = products.find((product) => {
    return product.id == id;
  });

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <h1>Product Information</h1>
      <h2>ProductName-{product.productname}</h2>
      <h3>Price-{product.productprice}</h3>
      <button
        className="login"
        onClick={() => {
          navigate("/product");
        }}
      >
        Back to Products
      </button>
    </div>
  );
};

export default ProductDetail;
