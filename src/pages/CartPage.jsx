// src/pages/CartPage.jsx
import React from "react";
import Cart from "../components/Cart/Cart";

const CartPage = ({ cart, addToCart, removeFromCart }) => (
  <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
);

export default CartPage;
