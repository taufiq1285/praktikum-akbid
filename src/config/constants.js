// src/config/constants.js

// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
  apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY
};

export const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/upload`;

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  DOSEN: 'dosen',
  MAHASISWA: 'mahasiswa'
};

// Collection names
export const COLLECTIONS = {
  USERS: 'users',
  PRAKTIKUM: 'praktikum',
  MODUL: 'modul',
  TUGAS: 'tugas',
  NILAI: 'nilai'
};

// File upload configs
export const UPLOAD_CONFIG = {
  ALLOWED_TYPES: {
    IMAGE: ['image/jpeg', 'image/png'],
    DOCUMENT: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  },
  MAX_SIZE: 5 * 1024 * 1024 // 5MB
};