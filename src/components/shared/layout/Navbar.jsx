// src/components/shared/layout/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth/useAuth';
import { useRole } from '../../../hooks/auth/useRole';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { role } = useRole();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">
              Praktikum AKBID
            </span>
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                {user?.email} ({role})
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;