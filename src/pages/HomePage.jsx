// src/pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "../components/Home/Home";

const HomePage = ({ cart, addToCart, removeFromCart }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          axios.get("https://fakestoreapi.com/products/categories"),
          axios.get("https://fakestoreapi.com/products"),
        ]);
        console.log("Categories:", categoriesResponse.data);
        console.log("Products:", productsResponse.data);
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Home
      categories={categories}
      products={products}
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
};

export default HomePage;
