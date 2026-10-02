import React from 'react';

const LoginComp = () => {
  return (
    <div className="flex h-full items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Username" className="border p-2 rounded" />
          <input type="password" placeholder="Password" className="border p-2 rounded" />
          <button className="bg-indigo-600 text-white p-2 rounded mt-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;