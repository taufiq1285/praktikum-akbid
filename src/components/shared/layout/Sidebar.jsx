// src/components/shared/layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRole } from '../../../hooks/auth/useRole';
import { ROUTES } from '../../../config/routes';

const Sidebar = () => {
  const { role } = useRole();

  const getMenuItems = () => {
    switch (role) {
      case 'admin':
        return [
          { path: ROUTES.ADMIN.DASHBOARD, label: 'Dashboard' },
          { path: ROUTES.ADMIN.USERS, label: 'Users' },
          { path: ROUTES.ADMIN.PRAKTIKUM, label: 'Praktikum' },
          { path: ROUTES.ADMIN.REPORTS, label: 'Reports' },
        ];
      case 'dosen':
        return [
          { path: ROUTES.DOSEN.DASHBOARD, label: 'Dashboard' },
          { path: ROUTES.DOSEN.KELAS, label: 'Kelas' },
          { path: ROUTES.DOSEN.NILAI, label: 'Nilai' },
        ];
      case 'mahasiswa':
        return [
          { path: ROUTES.MAHASISWA.DASHBOARD, label: 'Dashboard' },
          { path: ROUTES.MAHASISWA.MODUL, label: 'Modul' },
          { path: ROUTES.MAHASISWA.TUGAS, label: 'Tugas' },
          { path: ROUTES.MAHASISWA.NILAI, label: 'Nilai' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        {getMenuItems().map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block py-2.5 px-4 rounded transition duration-200 ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;