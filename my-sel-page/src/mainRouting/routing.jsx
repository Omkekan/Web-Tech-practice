import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavComp from '../layout/NavComp';
import DashboardComp from '../layout/DashboardComp';
import LoginComp from '../layout/LoginComp';
import PageNotFoundComp from '../layout/PageNotFoundComp';

import ProductDashComp from '../CRUD/ProductDashComp';
import ProductAddComp from '../CRUD/ProductAddComp';
import ProductUpdateComp from '../CRUD/ProductUpdateComp';

const AppRouting = () => {
  return (
    <BrowserRouter>
      <NavComp /> 
      <div className="pt-16 h-screen"> {/* Offset for fixed navbar */}
        <Routes>
          {/* Main Horizontal Showcase */}
          <Route path="/" element={<DashboardComp />} />
          <Route path="/login" element={<LoginComp />} />
          
          {/* CRUD Admin Routes */}
          <Route path="/products" element={<ProductDashComp />} />
          <Route path="/products/add" element={<ProductAddComp />} />
          <Route path="/products/edit/:id" element={<ProductUpdateComp />} />
          
          {/* Wildcard Routing - Must be last */}
          <Route path="*" element={<PageNotFoundComp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouting;