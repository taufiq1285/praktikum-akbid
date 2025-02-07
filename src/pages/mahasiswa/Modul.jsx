// src/pages/mahasiswa/Modul.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/shared/ui/Card';

const ModulPage = () => {
  const [modulList] = useState([
    {
      id: 1,
      judul: 'Pengenalan Praktikum',
      deskripsi: 'Modul dasar pengenalan praktikum...',
      status: 'Selesai',
      progress: 100
    },
    {
      id: 2,
      judul: 'Pemeriksaan Fisik',
      deskripsi: 'Pembelajaran tentang pemeriksaan fisik dasar...',
      status: 'Sedang Berlangsung',
      progress: 60
    },
    {
      id: 3,
      judul: 'Pemberian Obat',
      deskripsi: 'Teknik pemberian obat yang aman...',
      status: 'Belum Mulai',
      progress: 0
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selesai':
        return 'bg-green-100 text-green-800';
      case 'Sedang Berlangsung':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Modul Pembelajaran</h1>
        <div className="flex space-x-2">
          <select className="form-select rounded-md border-gray-300">
            <option>Semua Status</option>
            <option>Selesai</option>
            <option>Sedang Berlangsung</option>
            <option>Belum Mulai</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {modulList.map(modul => (
          <Card key={modul.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium text-gray-900">{modul.judul}</h2>
                  <p className="text-gray-600">{modul.deskripsi}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusColor(modul.status)}`}>
                    {modul.status}
                  </span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Lihat Modul
                </button>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: `${modul.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-gray-600">
                    {modul.progress}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ModulPage;