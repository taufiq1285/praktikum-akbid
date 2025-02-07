// src/pages/mahasiswa/Home.jsx
import React from 'react';
import { Card, CardHeader, CardContent } from '../../components/shared/ui/Card';

const MahasiswaDashboard = () => {
  const jadwalPraktikum = [
    { id: 1, modul: 'Modul 1', tanggal: '2024-02-10', waktu: '08:00', ruang: 'Lab A' },
    { id: 2, modul: 'Modul 2', tanggal: '2024-02-15', waktu: '10:00', ruang: 'Lab B' },
    { id: 3, modul: 'Modul 3', tanggal: '2024-02-20', waktu: '13:00', ruang: 'Lab A' }
  ];

  const tugasTerbaru = [
    { id: 1, modul: 'Modul 1', deadline: '2024-02-12', status: 'Belum Dikumpul' },
    { id: 2, modul: 'Modul 2', deadline: '2024-02-17', status: 'Draft' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard Mahasiswa</h1>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-blue-50">
          <CardContent>
            <h3 className="text-lg font-medium text-blue-900">Total Modul</h3>
            <p className="text-3xl font-bold text-blue-600">6</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50">
          <CardContent>
            <h3 className="text-lg font-medium text-green-900">Modul Selesai</h3>
            <p className="text-3xl font-bold text-green-600">2</p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50">
          <CardContent>
            <h3 className="text-lg font-medium text-yellow-900">Tugas Pending</h3>
            <p className="text-3xl font-bold text-yellow-600">2</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-50">
          <CardContent>
            <h3 className="text-lg font-medium text-purple-900">Rata-rata Nilai</h3>
            <p className="text-3xl font-bold text-purple-600">85</p>
          </CardContent>
        </Card>
      </div>

      {/* Jadwal Praktikum */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">Jadwal Praktikum</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {jadwalPraktikum.map(jadwal => (
              <div key={jadwal.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <h3 className="font-medium text-gray-900">{jadwal.modul}</h3>
                  <p className="text-sm text-gray-500">
                    {jadwal.tanggal} • {jadwal.waktu} • {jadwal.ruang}
                  </p>
                </div>
                <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
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
                  <h3 className="font-medium text-gray-900">{tugas.modul}</h3>
                  <p className="text-sm text-gray-500">
                    Deadline: {tugas.deadline}
                  </p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1
                    ${tugas.status === 'Belum Dikumpul' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {tugas.status}
                  </span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Kumpulkan
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MahasiswaDashboard;