// src/pages/admin/Users.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/shared/ui/Card';
import { Table } from '../../components/shared/ui/Table';

const Users = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'dosen', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'mahasiswa', status: 'active' },
    // Add more sample data as needed
  ]);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
    { header: 'Status', accessor: 'status' },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <button 
            className="text-blue-600 hover:text-blue-800"
            onClick={() => handleEdit(row)}
          >
            Edit
          </button>
          <button 
            className="text-red-600 hover:text-red-800"
            onClick={() => handleDelete(row)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (user) => {
    console.log('Edit user:', user);
    // Implement edit functionality
  };

  const handleDelete = (user) => {
    console.log('Delete user:', user);
    // Implement delete functionality
  };

  const handleAddUser = () => {
    console.log('Add new user');
    // Implement add user functionality
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
        <button
          onClick={handleAddUser}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add User
        </button>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">Users List</h2>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table 
              columns={columns}
              data={users}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;