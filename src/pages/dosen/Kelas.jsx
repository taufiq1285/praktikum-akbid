// src/pages/dosen/Kelas.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/shared/ui/Card';
import { Table } from '../../components/shared/ui/Table';

const KelasPage = () => {
  const [mahasiswa] = useState([
    { id: 1, nim: '2021001', nama: 'John Doe', kehadiran: '100%', nilai: 85 },
    { id: 2, nim: '2021002', nama: 'Jane Smith', kehadiran: '90%', nilai: 78 },
    { id: 3, nim: '2021003', nama: 'Bob Johnson', kehadiran: '95%', nilai: 92 },
  ]);

  const columns = [
    { header: 'NIM', accessor: 'nim' },
    { header: 'Nama', accessor: 'nama' },
    { header: 'Kehadiran', accessor: 'kehadiran' },
    { header: 'Nilai', accessor: 'nilai' },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <button 
            className="text-blue-600 hover:text-blue-800"
            onClick={() => handleDetailClick(row)}
          >
            Detail
          </button>
        </div>
      ),
    },
  ];

  const handleDetailClick = (mahasiswa) => {
    console.log('View detail:', mahasiswa);
  };

  const handleAddMahasiswa = () => {
    console.log('Add new mahasiswa');
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Kelas A</h1>
          <p className="text-gray-500">Semester Genap 2023/2024</p>
        </div>
        <button
          onClick={handleAddMahasiswa}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Tambah Mahasiswa
        </button>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-50">
          <CardContent>
            <h3 className="text-lg font-medium text-blue-900">Total Mahasiswa</h3>
            <p className="text-3xl font-bold text-blue-600">30</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50">
          <CardContent>
            <h3 className="text-lg font-medium text-green-900">Rata-rata Kehadiran</h3>
            <p className="text-3xl font-bold text-green-600">95%</p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50">
          <CardContent>
            <h3 className="text-lg font-medium text-yellow-900">Rata-rata Nilai</h3>
            <p className="text-3xl font-bold text-yellow-600">85</p>
          </CardContent>
        </Card>
      </div>

      {/* Mahasiswa Table */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">Daftar Mahasiswa</h2>
        </CardHeader>
        <CardContent>
          <Table 
            columns={columns}
            data={mahasiswa}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default KelasPage;