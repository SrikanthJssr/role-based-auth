"use client";

import AdminRoute from "../../components/AdminRoute";
import GlobalLayout from "@/components/GlobalLayout";


export default function OrdersPage() {
  const orders = [
    { id: 101, customer: "Akhil", total: "$120", status: "Pending" },
    { id: 102, customer: "Sri", total: "$280", status: "Pending" },
  ];

  return (
    <AdminRoute>
      <GlobalLayout>
        <h1 className="text-3xl font-bold mb-6">🛒 Pending Orders</h1>

        <div className="space-y-4">
          {orders.map((o, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 p-5 rounded-xl"
            >
              <h2 className="text-xl font-semibold">Order #{o.id}</h2>
              <p>Customer: {o.customer}</p>
              <p>Total: {o.total}</p>
              <p className="text-yellow-300">{o.status}</p>
            </div>
          ))}
        </div>
      </GlobalLayout>
    </AdminRoute>
  );
}
