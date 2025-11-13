"use client";

import AdminRoute from "../../components/AdminRoute";
import { FaUserShield, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function ManageUsersPage() {
  const dummyUsers = [
    { name: "John Doe", email: "john@example.com", role: "user", status: "Active" },
    { name: "Raghu Admin", email: "admin@example.com", role: "admin", status: "Active" },
    { name: "Demo User", email: "demo@example.com", role: "user", status: "Active" },
  ];

  return (
    <AdminRoute>
      <div className="min-h-screen bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-600 p-10 text-white">

        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <FaUserShield size={35} />
          <h1 className="text-4xl font-bold">Manage Users</h1>
        </div>

        <p className="opacity-80 mb-6">This page is visible only to admins.</p>

        {/* Table Container */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaUsers /> User List
          </h2>

          <table className="w-full text-left">
            <thead>
              <tr className="text-sm uppercase opacity-70 border-b border-white/20">
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Role</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {dummyUsers.map((user, idx) => (
                <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition">
                  <td className="py-3">{user.name}</td>
                  <td className="py-3">{user.email}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        user.role === "admin"
                          ? "bg-green-600/30 border border-green-400"
                          : "bg-blue-600/30 border border-blue-400"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className="flex items-center gap-2 text-green-300">
                      <FaCheckCircle /> {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminRoute>
  );
}
