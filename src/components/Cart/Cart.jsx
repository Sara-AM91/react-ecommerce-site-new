// src/components/Cart/Cart.jsx
import React from "react";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  const total = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(cart).map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.title}</td>
              <td className="py-2 px-4 border-b">${item.price}</td>
              <td className="py-2 px-4 border-b">{item.quantity}</td>
              <td className="py-2 px-4 border-b">
                ${item.quantity * item.price}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
