import { useState } from "react";

const Users = () => {
  // Sample user data (Replace with real data from an API)
  const [users] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Mark Johnson", email: "markjohnson@example.com", role: "Seller", status: "Active" },
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">User ID</th>
            <th className="border p-3">Name</th>
            <th className="border p-3 hidden md:table-cell">Email</th>
            <th className="border p-3">Role</th>
            <th className="border p-3">Status</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center hover:bg-gray-50">
              <td className="border p-3">{user.id}</td>
              <td className="border p-3">{user.name}</td>
              <td className="border p-3 hidden md:table-cell">{user.email}</td>
              <td className="border p-3">{user.role}</td>
              <td className="border p-3">{user.status}</td>
              <td className="border p-3">
                <button className="border px-3 py-1 text-yellow-400 rounded-md">Edit</button>
                <button className="border px-3 py-1 rounded-md text-red-700 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
