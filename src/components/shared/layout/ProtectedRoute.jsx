// src/components/shared/layout/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth/useAuth';
import { useRole } from '../../../hooks/auth/useRole';
import { ROUTE_PERMISSIONS, ROUTES } from '../../../config/routes';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role } = useRole();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if user is authenticated
  if (!user) {
    return <Navigate to={ROUTES.PUBLIC.LOGIN} state={{ from: location }} replace />;
  }

  // Check if user has permission for this route
  const hasPermission = ROUTE_PERMISSIONS[location.pathname]?.includes(role);
  if (!hasPermission) {
    // Redirect to appropriate dashboard based on role
    const dashboardRoutes = {
      admin: ROUTES.ADMIN.DASHBOARD,
      dosen: ROUTES.DOSEN.DASHBOARD,
      mahasiswa: ROUTES.MAHASISWA.DASHBOARD,
    };
    return <Navigate to={dashboardRoutes[role] || ROUTES.PUBLIC.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;