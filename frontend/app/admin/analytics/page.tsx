"use client";

import AdminRoute from "../../components/AdminRoute";
import GlobalLayout from "@/components/GlobalLayout";


export default function AnalyticsPage() {
  return (
    <AdminRoute>
      <GlobalLayout>
        <h1 className="text-3xl font-bold mb-6">📊 Revenue Analytics</h1>

        <div className="bg-white/10 border border-white/20 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Monthly Revenue</h2>
          <p className="opacity-80 mt-2">$12,450 this month</p>

          <h2 className="text-xl font-semibold mt-6">Top Performing Category</h2>
          <p className="opacity-80 mt-2">Electronics</p>
        </div>
      </GlobalLayout>
    </AdminRoute>
  );
}
