// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:underline">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
