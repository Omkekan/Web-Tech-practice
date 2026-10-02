import React from 'react';
import { Link } from 'react-router-dom';

const ProductDashComp = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Management</h2>
        <Link to="/products/add" className="bg-green-600 text-white px-4 py-2 rounded">Add New Product</Link>
      </div>
      <table className="w-full border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Galaxy S24</td>
            <td className="p-3 border">
              <Link to="/products/edit/1" className="text-blue-600 mr-4">Edit</Link>
              <button className="text-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDashComp;