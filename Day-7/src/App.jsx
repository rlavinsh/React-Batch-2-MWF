import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <div>
      <Header cart={cart} />
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
};

export default App;
