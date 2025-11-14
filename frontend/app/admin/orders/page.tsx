"use client";

import AdminRoute from "../../components/AdminRoute";

export default function OrdersPage() {
  const orders = [
    { id: 101, status: "Delivered" },
    { id: 102, status: "Shipped" },
    { id: 103, status: "Pending" },
  ];

  return (
    <AdminRoute>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">🛒 Orders</h1>

        <div className="space-y-4">
          {orders.map((o, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 p-5 rounded-xl"
            >
              <h2 className="text-xl font-semibold">Order #{o.id}</h2>
              <p className="opacity-80">Status: {o.status}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminRoute>
  );
}
