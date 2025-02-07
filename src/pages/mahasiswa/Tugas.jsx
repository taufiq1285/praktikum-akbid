// src/pages/mahasiswa/Tugas.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/shared/ui/Card';

const TugasPage = () => {
  const [tugasList] = useState([
    {
      id: 1,
      modul: 'Modul 1',
      judul: 'Laporan Praktikum Pengenalan',
      deadline: '2024-02-12 23:59',
      status: 'Sudah Dikumpul',
      nilai: 85
    },
    {
      id: 2,
      modul: 'Modul 2',
      judul: 'Laporan Pemeriksaan Fisik',
      deadline: '2024-02-17 23:59',
      status: 'Draft',
      nilai: null
    },
    {
      id: 3,
      modul: 'Modul 3',
      judul: 'Laporan Pemberian Obat',
      deadline: '2024-02-25 23:59',
      status: 'Belum Dikumpul',
      nilai: null
    }
  ]);

  const getStatusBadge = (status) => {
    const styles = {
      'Sudah Dikumpul': 'bg-green-100 text-green-800',
      'Draft': 'bg-yellow-100 text-yellow-800',
      'Belum Dikumpul': 'bg-red-100 text-red-800'
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  const getActionButton = (status) => {
    switch (status) {
      case 'Sudah Dikumpul':
        return (
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            Lihat Submission
          </button>
        );
      case 'Draft':
        return (
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Lanjutkan
          </button>
        );
      default:
        return (
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Kumpulkan
          </button>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Daftar Tugas</h1>
        <div className="flex space-x-2">
          <select className="form-select rounded-md border-gray-300">
            <option>Semua Status</option>
            <option>Sudah Dikumpul</option>
            <option>Draft</option>
            <option>Belum Dikumpul</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {tugasList.map(tugas => (
          <Card key={tugas.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">{tugas.modul}</div>
                  <h2 className="text-xl font-medium text-gray-900">{tugas.judul}</h2>
                  <div className="flex items-center space-x-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusBadge(tugas.status)}`}>
                      {tugas.status}
                    </span>
                    {tugas.nilai && (
                      <span className="text-sm text-gray-600">
                        Nilai: <span className="font-medium">{tugas.nilai}</span>
                      </span>
                    )}
                  </div>
                </div>
                {getActionButton(tugas.status)}
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-600">
                  Deadline: {tugas.deadline}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TugasPage;