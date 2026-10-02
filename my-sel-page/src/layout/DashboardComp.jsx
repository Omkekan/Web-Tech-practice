import React from 'react';

const DashboardComp = () => {
  return (
    <div className="flex w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth">
      
      {/* 1. Dashboard Page */}
      <section className="min-w-full h-full snap-start p-8 flex flex-col overflow-y-auto bg-gray-50 border-r">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="w-full h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-8 border border-blue-200">
          <span className="text-xl text-blue-600 font-semibold">Carousel Area</span>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-8 flex-1">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white border p-4 rounded-lg shadow-sm flex flex-col items-center justify-center h-32">
              <div className="w-12 h-16 border-2 border-gray-300 rounded mb-2"></div>
              <span className="text-sm text-gray-500">Mobile {item}</span>
            </div>
          ))}
        </div>
        <footer className="text-center text-sm text-gray-400 mt-auto">All rights Reserved by Company</footer>
      </section>

      {/* 2. Product Details Page */}
      <section className="min-w-full h-full snap-start p-8 flex flex-col overflow-y-auto bg-white border-r">
        <h2 className="text-2xl font-bold mb-6">Product Details</h2>
        <table className="w-full text-left border-collapse border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Sr.no</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Company</th>
              <th className="p-3 border">Model</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">1</td>
              <td className="p-3 border">Galaxy S24</td>
              <td className="p-3 border">$799</td>
              <td className="p-3 border">Samsung</td>
              <td className="p-3 border">SM-S921</td>
              <td className="p-3 border text-green-600">In Stock</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>

      {/* 3. Enquiry Page */}
      <section className="min-w-full h-full snap-start p-8 flex flex-col items-center justify-center overflow-y-auto bg-gray-50 border-r">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border">
          <h2 className="text-2xl font-bold mb-6">Enquiry</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="username" className="border p-2 rounded" />
            <input type="email" placeholder="email" className="border p-2 rounded" />
            <textarea placeholder="feedback" rows="4" className="border p-2 rounded resize-none"></textarea>
            <button type="button" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </section>

      {/* 4. Contact / Map Page */}
      <section className="min-w-full h-full snap-start p-8 flex flex-col overflow-y-auto bg-white">
        <div className="grid grid-cols-2 gap-8 h-full">
          <div>
            <h2 className="text-2xl font-bold mb-6">Company Address & Branches</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Head Office:</h3>
              <p className="text-gray-600">123 Tech Street, IT Park</p>
            </div>
            <div>
              <h3 className="font-semibold">Branches:</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Branch 1 - North Side</li>
                <li>Branch 2 - South Side</li>
              </ul>
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 h-64 md:h-auto">
            <span className="text-gray-500 font-medium">Google Map of Head Office</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DashboardComp;