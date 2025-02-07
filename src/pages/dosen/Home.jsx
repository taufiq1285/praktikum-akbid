// src/pages/dosen/Home.jsx
import React from 'react';
import { Card, CardHeader, CardContent } from '../../components/shared/ui/Card';

const DosenDashboard = () => {
  const kelasList = [
    { id: 1, nama: 'Kelas A', jumlahMahasiswa: 30, jadwal: 'Senin, 08:00' },
    { id: 2, nama: 'Kelas B', jumlahMahasiswa: 25, jadwal: 'Selasa, 10:00' },
    { id: 3, nama: 'Kelas C', jumlahMahasiswa: 28, jadwal: 'Rabu, 13:00' }
  ];

  const tugasTerbaru = [
    { id: 1, judul: 'Praktikum Modul 1', deadline: '2024-02-10', kelas: 'Kelas A' },
    { id: 2, judul: 'Praktikum Modul 2', deadline: '2024-02-15', kelas: 'Kelas B' },
    { id: 3, judul: 'Praktikum Modul 3', deadline: '2024-02-20', kelas: 'Kelas C' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard Dosen</h1>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-50">
          <CardContent>
            <h3 className="text-lg font-medium text-blue-900">Total Kelas</h3>
            <p className="text-3xl font-bold text-blue-600">3</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50">
          <CardContent>
            <h3 className="text-lg font-medium text-green-900">Total Mahasiswa</h3>
            <p className="text-3xl font-bold text-green-600">83</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-50">
          <CardContent>
            <h3 className="text-lg font-medium text-purple-900">Tugas Belum Dinilai</h3>
            <p className="text-3xl font-bold text-purple-600">12</p>
          </CardContent>
        </Card>
      </div>

      {/* Kelas Aktif */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">Kelas Aktif</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {kelasList.map(kelas => (
              <div key={kelas.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <h3 className="font-medium text-gray-900">{kelas.nama}</h3>
                  <p className="text-sm text-gray-500">
                    {kelas.jumlahMahasiswa} Mahasiswa • {kelas.jadwal}
                  </p>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tugas Terbaru */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">Tugas Terbaru</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tugasTerbaru.map(tugas => (
              <div key={tugas.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <h3 className="font-medium text-gray-900">{tugas.judul}</h3>
                  <p className="text-sm text-gray-500">
                    {tugas.kelas} • Deadline: {tugas.deadline}
                  </p>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  Periksa
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DosenDashboard;