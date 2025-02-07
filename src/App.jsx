// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/shared/layout/ProtectedRoute';
import { ROUTES } from './config/routes';

// Public Pages
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import ForgotPassword from './features/auth/ForgotPassword';

// Admin Pages
import AdminDashboard from './pages/admin/Home';
import AdminUsers from './pages/admin/Users';
import AdminPraktikum from './pages/admin/Praktikum';
import AdminReports from './pages/admin/Reports';

// Dosen Pages
import DosenDashboard from './pages/dosen/Home';
import DosenKelas from './pages/dosen/Kelas';
import DosenNilai from './pages/dosen/Nilai';

// Mahasiswa Pages
import MahasiswaDashboard from './pages/mahasiswa/Home';
import MahasiswaModul from './pages/mahasiswa/Modul';
import MahasiswaTugas from './pages/mahasiswa/Tugas';

// Layouts
import AdminLayout from './layouts/AdminLayout';
import DosenLayout from './layouts/DosenLayout';
import MahasiswaLayout from './layouts/MahasiswaLayout';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path={ROUTES.PUBLIC.LOGIN} element={<Login />} />
          <Route path={ROUTES.PUBLIC.REGISTER} element={<Register />} />
          <Route path={ROUTES.PUBLIC.FORGOT_PASSWORD} element={<ForgotPassword />} />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="users" element={<AdminUsers />} />
                    <Route path="praktikum" element={<AdminPraktikum />} />
                    <Route path="reports" element={<AdminReports />} />
                  </Routes>
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          {/* Dosen Routes */}
          <Route
            path="/dosen/*"
            element={
              <ProtectedRoute>
                <DosenLayout>
                  <Routes>
                    <Route path="dashboard" element={<DosenDashboard />} />
                    <Route path="kelas" element={<DosenKelas />} />
                    <Route path="nilai" element={<DosenNilai />} />
                  </Routes>
                </DosenLayout>
              </ProtectedRoute>
            }
          />

          {/* Mahasiswa Routes */}
          <Route
            path="/mahasiswa/*"
            element={
              <ProtectedRoute>
                <MahasiswaLayout>
                  <Routes>
                    <Route path="dashboard" element={<MahasiswaDashboard />} />
                    <Route path="modul" element={<MahasiswaModul />} />
                    <Route path="tugas" element={<MahasiswaTugas />} />
                  </Routes>
                </MahasiswaLayout>
              </ProtectedRoute>
            }
          />

          {/* Default Route */}
          <Route path="/" element={<Navigate to={ROUTES.PUBLIC.LOGIN} replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;