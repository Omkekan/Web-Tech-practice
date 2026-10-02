import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductUpdateComp = () => {
  const { id } = useParams(); // Gets the ID from the URL wildcard

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Update Product (ID: {id})</h2>
      <form className="flex flex-col gap-4">
        <input type="text" defaultValue="Galaxy S24" className="border p-2 rounded" />
        <input type="text" defaultValue="$799" className="border p-2 rounded" />
        <input type="text" defaultValue="Samsung" className="border p-2 rounded" />
        <button className="bg-blue-600 text-white p-2 rounded">Update Product</button>
        <Link to="/products" className="text-center text-gray-500 mt-2">Cancel</Link>
      </form>
    </div>
  );
};

export default ProductUpdateComp;