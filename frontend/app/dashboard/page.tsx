"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../lib/axios";
import { FaUsers, FaStar, FaBoxOpen, FaUserShield, FaBan } from "react-icons/fa";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");

    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch {
        router.push("/login");
      }
    };

    fetchUser();
  }, [router]);

  if (!user) return <p className="p-10 text-white">Loading dashboard...</p>;

  const isAdmin = user.role === "admin";

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-700 via-purple-700 to-pink-600 flex">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white/10 backdrop-blur-md p-6 text-white border-r border-white/20">
        <h1 className="text-2xl font-bold mb-8">🛒 Store Dashboard</h1>

        <nav className="space-y-4">
          <button 
            onClick={() => router.push("/dashboard")}
            className="block w-full text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
          >
            Dashboard
          </button>

          {isAdmin && (
            <>
              <button 
                onClick={() => router.push("/admin/manage-users")}
                className="block w-full text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
              >
                Manage Users
              </button>

              <button 
                onClick={() => router.push("/admin/settings")}
                className="block w-full text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
              >
                Admin Settings
              </button>
            </>
          )}
        </nav>

        <div className="absolute bottom-6 left-6 w-[210px]">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/login");
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 text-white">
        
        {/* HEADER */}
        <h1 className="text-4xl font-bold">Hello, {user.name} 👋</h1>
        <p className="opacity-80 mt-1">Role: {user.role}</p>

        {/* DASHBOARD CARDS */}
        {/* DASHBOARD CARDS */}
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* CARD 1 — Visible to everyone */}
  <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md">
    <h2 className="text-xl font-bold flex items-center gap-2">
      <FaUsers /> Customer Overview
    </h2>

    <ul className="mt-3 space-y-2 opacity-90">
      <li>Total Customers: <b>1,245</b></li>
      <li>Active This Week: <b>342</b></li>
      <li>Premium Members: <b>128</b></li>
    </ul>
  </div>

  {/* CARD 2 — Visible to everyone */}
  <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md">
    <h2 className="text-xl font-bold flex items-center gap-2">
      <FaBoxOpen /> Available Products
    </h2>

    <ul className="mt-3 space-y-2 opacity-90">
      <li>Total Products: <b>320</b></li>
      <li>Out of Stock: <b>12</b></li>
      <li>New Arrivals: <b>18</b></li>
    </ul>
  </div>

  {/* CARD 3 — Admin Exclusive */}
  <AdminOnlyCard isAdmin={isAdmin} title="Top Rated Items" icon={<FaStar />}>
    <ul className="list-disc ml-5 opacity-90 space-y-2">
      <li>Wireless Headphones — ⭐ 4.8 — ₹2,499</li>
      <li>Fitness Watch — ⭐ 4.6 — ₹1,999</li>
      <li>Bluetooth Speakers — ⭐ 4.5 — ₹1,299</li>
    </ul>
  </AdminOnlyCard>

  {/* CARD 4 — Admin Exclusive */}
  <AdminOnlyCard isAdmin={isAdmin} title="Customer Complaints" icon={<FaBan />}>
    <ul className="list-disc ml-5 opacity-90 space-y-2">
      <li>Late delivery issues — <b>12 reports</b></li>
      <li>Damaged products — <b>4 reports</b></li>
      <li>Refund delays — <b>7 reports</b></li>
    </ul>
  </AdminOnlyCard>

  {/* CARD 5 — Admin Exclusive */}
  <AdminOnlyCard isAdmin={isAdmin} title="Sales Overview" icon={<FaUserShield />}>
    <ul className="list-disc ml-5 opacity-90 space-y-2">
      <li>Today’s Sales — <b>₹42,850</b></li>
      <li>This Week — <b>₹2,98,300</b></li>
      <li>Best Seller — <b>Noise Buds (₹1,499)</b></li>
    </ul>
  </AdminOnlyCard>

</div>

      </main>
    </div>
  );
}

/* COMPONENT: Shows admin-only cards, and lock UI for users */
function AdminOnlyCard({ isAdmin, title, children, icon }: any) {
  return (
    <div
      className={`p-6 rounded-2xl backdrop-blur-md border ${
        isAdmin
          ? "bg-green-700/20 border-green-400"
          : "bg-red-700/10 border-red-400"
      }`}
    >
      <h2 className="text-xl font-bold flex items-center gap-2">
        {icon} {title}
      </h2>

      {isAdmin ? (
        <div className="mt-3">{children}</div>
      ) : (
        <p className="opacity-70 mt-3">🔒 Admin only — you cannot access this.</p>
      )}
    </div>
  );
}
