import React from 'react';
import { Link } from 'react-router-dom';

const NavComp = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-6 justify-between">
      <div className="font-bold text-xl text-indigo-600">MobileShowcase</div>
      <div className="flex gap-6 font-medium text-gray-700">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/products" className="hover:text-indigo-600">Manage Products</Link>
        <Link to="/login" className="hover:text-indigo-600">Login</Link>
      </div>
    </nav>
  );
};

export default NavComp;