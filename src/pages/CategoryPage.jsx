// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/Product/ProductCard";

const CategoryPage = ({ cart, addToCart, removeFromCart }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        console.log("Category Products:", response.data); // Check this log
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Category: {category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
