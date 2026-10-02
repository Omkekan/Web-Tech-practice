import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFoundComp = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Oops! Page not found.</h2>
      <p className="text-gray-500 mb-6">The URL you entered doesn't match any routing path.</p>
      <Link to="/" className="text-indigo-600 underline">Return to Dashboard</Link>
    </div>
  );
};

export default PageNotFoundComp;