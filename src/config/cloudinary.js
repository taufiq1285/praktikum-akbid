// src/config/cloudinary.js

export const cloudinaryConfig = {
  cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
  apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY
};

// Base URL untuk upload
export const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;

// Fungsi helper untuk membuat URL gambar dengan transformasi
export const getCloudinaryUrl = (publicId, options = {}) => {
  const { width, height, crop } = options;
  const transformations = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  
  const transformationString = transformations.length > 0 
    ? transformations.join(',') + '/'
    : '';
    
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transformationString}${publicId}`;
};