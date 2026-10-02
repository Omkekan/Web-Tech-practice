import React from 'react';
import { Link } from 'react-router-dom';

const ProductAddComp = () => {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Product Name" className="border p-2 rounded" />
        <input type="text" placeholder="Price" className="border p-2 rounded" />
        <input type="text" placeholder="Company" className="border p-2 rounded" />
        <button className="bg-green-600 text-white p-2 rounded">Save Product</button>
        <Link to="/products" className="text-center text-gray-500 mt-2">Cancel</Link>
      </form>
    </div>
  );
};

export default ProductAddComp;