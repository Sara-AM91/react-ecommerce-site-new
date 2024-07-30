// src/components/Product/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, cart, addToCart, removeFromCart }) => {
  const inCart = cart[product.id];
  const quantity = inCart ? inCart.quantity : 0;

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md flex flex-col h-full">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <p className="text-gray-500 mb-4">Category: {product.category}</p>
      <div className="mt-auto flex flex-col space-y-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        {quantity > 0 && (
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeFromCart(product.id)}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => addToCart(product)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
