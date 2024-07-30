// src/components/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";

const Home = ({ categories, products, cart, addToCart, removeFromCart }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Categories</h1>
    <div className="flex flex-wrap gap-4 mb-6">
      {categories.length > 0 ? (
        categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
            {category}
          </Link>
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
    <h1 className="text-2xl font-bold mb-4">Products</h1>
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

export default Home;
