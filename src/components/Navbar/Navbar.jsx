// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ cart }) => {
  const itemCount = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
        <Link to="/cart" className="relative flex items-center">
          <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
