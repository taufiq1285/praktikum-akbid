// src/pages/dosen/Nilai.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/shared/ui/Card';
import { Table } from '../../components/shared/ui/Table';

const NilaiPage = () => {
  const [selectedKelas, setSelectedKelas] = useState('all');
  const [nilaiData] = useState([
    { 
      id: 1, 
      nim: '2021001', 
      nama: 'John Doe', 
      kelas: 'A',
      modul1: 85,
      modul2: 90,
      modul3: 88,
      rataRata: 87.7
    },
    // Add more data as needed
  ]);

  const columns = [
    { header: 'NIM', accessor: 'nim' },
    { header: 'Nama', accessor: 'nama' },
    { header: 'Kelas', accessor: 'kelas' },
    { 
      header: 'Modul 1', 
      accessor: 'modul1',
      cell: (row) => (
        <div className="text-center">{row.modul1}</div>
      )
    },
    { 
      header: 'Modul 2', 
      accessor: 'modul2',
      cell: (row) => (
        <div className="text-center">{row.modul2}</div>
      )
    },
    { 
      header: 'Modul 3', 
      accessor: 'modul3',
      cell: (row) => (
        <div className="text-center">{row.modul3}</div>
      )
    },
    { 
      header: 'Rata-rata', 
      accessor: 'rataRata',
      cell: (row) => (
        <div className="text-center font-medium">{row.rataRata}</div>
      )
    },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <div className="flex space-x-2 justify-center">
          <button 
            className="text-blue-600 hover:text-blue-800"
            onClick={() => handleEditNilai(row)}
          >
            Edit
          </button>
          <button 
            className="text-green-600 hover:text-green-800"
            onClick={() => handleDetailNilai(row)}
          >
            Detail
          </button>
        </div>
      ),
    },
  ];

  const handleEditNilai = (mahasiswa) => {
    console.log('Edit nilai:', mahasiswa);
  };

  const handleDetailNilai = (mahasiswa) => {
    console.log('View detail nilai:', mahasiswa);
  };

  const handleExportNilai = () => {
    console.log('Export nilai');
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Manajemen Nilai</h1>
          <p className="text-gray-500">Semester Genap 2023/2024</p>
        </div>
        <button
          onClick={handleExportNilai}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Export Nilai
        </button>
      </div>

      {/* Filter Section */}
      <Card>
        <CardContent>
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">Filter Kelas:</label>
            <select
              value={selectedKelas}
              onChange={(e) => setSelectedKelas(e.target.value)}
              className="form-select rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="all">Semua Kelas</option>
              <option value="A">Kelas A</option>
              <option value="B">Kelas B</option>
              <option value="C">Kelas C</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Nilai Table */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">Daftar Nilai Mahasiswa</h2>
        </CardHeader>
        <CardContent>
          <Table 
            columns={columns}
            data={nilaiData}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default NilaiPage;