// src/utils/cartUtils.js
export const addToCart = (cart, product) => {
  const updatedCart = { ...cart };
  if (updatedCart[product.id]) {
    updatedCart[product.id].quantity += 1;
  } else {
    updatedCart[product.id] = { ...product, quantity: 1 };
  }
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export const removeFromCart = (cart, productId) => {
  const updatedCart = { ...cart };
  if (updatedCart[productId]) {
    updatedCart[productId].quantity -= 1;
    if (updatedCart[productId].quantity <= 0) {
      delete updatedCart[productId];
    }
  }
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : {};
};
