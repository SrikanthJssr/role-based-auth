"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: any;
  onLogout: () => void;
}

export default function DashboardLayout({
  children,
  user,
  onLogout,
}: DashboardLayoutProps) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white/10 backdrop-blur-md p-6 hidden sm:flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">🚀 Flock Admin</h2>

          <nav className="flex flex-col gap-3">
            <button
              onClick={() => router.push("/dashboard")}
              className="text-left p-2 rounded-md hover:bg-white/20"
            >
              Dashboard
            </button>

            {user?.role === "admin" && (
              <>
                <button
                    onClick={() => router.push("/admin/manage-users")}
                     className="text-left p-2 rounded-md hover:bg-white/20"
                    >
                    Manage Users
                </button>

            <button
             onClick={() => router.push("/admin/reports")}
              className="text-left p-2 rounded-md hover:bg-white/20"
            >
             Reports
            </button>

             <button
               onClick={() => router.push("/admin/settings")}
               className="text-left p-2 rounded-md hover:bg-white/20"
             >
             Admin Settings
              </button>

              </>
            )}

            <button className="text-left p-2 rounded-md hover:bg-white/20">
              Profile
            </button>
          </nav>
        </div>

        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition-all"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start p-8 overflow-y-auto">
        <header className="w-full flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Welcome, <span className="capitalize">{user?.name}</span>
          </h1>
          <p className="bg-white/20 px-4 py-2 rounded-md text-sm font-semibold">
            Role: {user?.role}
          </p>
        </header>

        {/* Child Content */}
        <div className="w-full max-w-3xl">{children}</div>
      </main>
    </div>
  );
}
