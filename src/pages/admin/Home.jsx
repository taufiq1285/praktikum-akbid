// src/pages/admin/Home.jsx
import React from 'react';
import { Card } from '../../components/shared/ui/Card';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Mahasiswa', value: '150', color: 'bg-blue-500' },
    { title: 'Total Dosen', value: '12', color: 'bg-green-500' },
    { title: 'Praktikum Aktif', value: '5', color: 'bg-purple-500' },
    { title: 'Total Tugas', value: '45', color: 'bg-yellow-500' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard Admin</h1>
      
      {/* Statistik Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <div className="p-4">
              <div className={`${stat.color} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                <span className="text-white text-xl">
                  {parseInt(stat.value) > 99 ? '99+' : stat.value}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-700">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <Card>
        <div className="p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Aktivitas Terbaru</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <p className="text-sm text-gray-600">
                    {index === 0 && "Dosen Baru Ditambahkan"}
                    {index === 1 && "Praktikum Baru Dibuat"}
                    {index === 2 && "Update Jadwal Praktikum"}
                  </p>
                  <p className="text-xs text-gray-400">
                    {index === 0 && "2 jam yang lalu"}
                    {index === 1 && "5 jam yang lalu"}
                    {index === 2 && "1 hari yang lalu"}
                  </p>
                </div>
                <button className="text-blue-500 hover:text-blue-700">
                  Detail
                </button>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;