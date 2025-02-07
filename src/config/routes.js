// src/config/routes.js
import { USER_ROLES } from './constants';

export const ROUTES = {
  // Public routes
  PUBLIC: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
  },

  // Admin routes
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    PRAKTIKUM: '/admin/praktikum',
    REPORTS: '/admin/reports',
    SETTINGS: '/admin/settings',
  },

  // Dosen routes
  DOSEN: {
    DASHBOARD: '/dosen/dashboard',
    KELAS: '/dosen/kelas',
    NILAI: '/dosen/nilai',
    PRAKTIKUM: '/dosen/praktikum',
  },

  // Mahasiswa routes
  MAHASISWA: {
    DASHBOARD: '/mahasiswa/dashboard',
    MODUL: '/mahasiswa/modul',
    TUGAS: '/mahasiswa/tugas',
    NILAI: '/mahasiswa/nilai',
    PROFILE: '/mahasiswa/profile',
  }
};

// Route permissions
export const ROUTE_PERMISSIONS = {
  [ROUTES.ADMIN.DASHBOARD]: [USER_ROLES.ADMIN],
  [ROUTES.ADMIN.USERS]: [USER_ROLES.ADMIN],
  [ROUTES.ADMIN.PRAKTIKUM]: [USER_ROLES.ADMIN],
  [ROUTES.ADMIN.REPORTS]: [USER_ROLES.ADMIN],
  [ROUTES.ADMIN.SETTINGS]: [USER_ROLES.ADMIN],
  
  [ROUTES.DOSEN.DASHBOARD]: [USER_ROLES.DOSEN],
  [ROUTES.DOSEN.KELAS]: [USER_ROLES.DOSEN],
  [ROUTES.DOSEN.NILAI]: [USER_ROLES.DOSEN],
  [ROUTES.DOSEN.PRAKTIKUM]: [USER_ROLES.DOSEN],
  
  [ROUTES.MAHASISWA.DASHBOARD]: [USER_ROLES.MAHASISWA],
  [ROUTES.MAHASISWA.MODUL]: [USER_ROLES.MAHASISWA],
  [ROUTES.MAHASISWA.TUGAS]: [USER_ROLES.MAHASISWA],
  [ROUTES.MAHASISWA.NILAI]: [USER_ROLES.MAHASISWA],
  [ROUTES.MAHASISWA.PROFILE]: [USER_ROLES.MAHASISWA],
};