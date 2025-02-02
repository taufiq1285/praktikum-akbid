// src/services/cloudinary/storage.service.js
import { CLOUDINARY_UPLOAD_URL, cloudinaryConfig } from '../../config/cloudinary';

export const uploadFile = async (file, folder = '') => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);
    if (folder) {
      formData.append('folder', folder);
    }

    const response = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return {
      url: data.secure_url,
      publicId: data.public_id,
      format: data.format,
      resourceType: data.resource_type
    };
  } catch (error) {
    throw error;
  }
};

export const deleteFile = async (publicId) => {
  // Catatan: Penghapusan file di Cloudinary biasanya dilakukan dari backend
  // untuk keamanan karena membutuhkan API Secret
  // Ini hanya contoh implementasi jika Anda memiliki endpoint backend
  try {
    const response = await fetch('/api/cloudinary/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ publicId })
    });
    
    if (!response.ok) {
      throw new Error('Delete failed');
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};