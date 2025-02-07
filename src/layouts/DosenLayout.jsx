// src/layouts/DosenLayout.jsx
import React from 'react';
import Navbar from '../components/shared/layout/Navbar';
import Sidebar from '../components/shared/layout/Sidebar';

const DosenLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DosenLayout;