// src/components/shared/forms/FileUpload.jsx
import React, { useState } from 'react';
import { uploadFile } from '../../../services/cloudinary/upload.service';

const FileUpload = ({ onUploadSuccess, onUploadError, folder, acceptedTypes = '*' }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setProgress(0);

      // Start upload
      const result = await uploadFile(file, folder);
      
      // Reset states
      setIsUploading(false);
      setProgress(100);
      
      // Call success callback
      if (onUploadSuccess) {
        onUploadSuccess(result);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setIsUploading(false);
      setProgress(0);
      
      if (onUploadError) {
        onUploadError(error);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            {isUploading ? (
              <p className="mb-2 text-sm text-gray-500">Uploading... {progress}%</p>
            ) : (
              <>
                <p className="mb-2 text-sm text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">Accepted files: {acceptedTypes}</p>
              </>
            )}
          </div>
          <input 
            type="file" 
            className="hidden" 
            onChange={handleFileChange}
            accept={acceptedTypes}
            disabled={isUploading}
          />
        </label>
      </div>
      {isUploading && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-4">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;