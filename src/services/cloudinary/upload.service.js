// src/services/cloudinary/upload.service.js
import { CLOUDINARY_UPLOAD_URL, cloudinaryConfig } from '../../config/cloudinary';

/**
 * Upload file ke Cloudinary
 * @param {File} file - File yang akan diupload
 * @param {string} folder - Folder tujuan di Cloudinary
 * @returns {Promise<Object>} - Hasil upload
 */
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
      size: data.bytes,
      resourceType: data.resource_type
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};