// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import "./index.css";

const App = () => {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart[product.id];
      const newQuantity = existingItem ? existingItem.quantity + 1 : 1;
      return {
        ...prevCart,
        [product.id]: { ...product, quantity: newQuantity },
      };
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const { [productId]: _, ...rest } = prevCart;
      return rest;
    });
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
