"use client";

import AdminRoute from "../../components/AdminRoute";

export default function HighRatedPage() {
  const products = [
    { name: "Wireless Earbuds", rating: 4.8 },
    { name: "Smart Watch", rating: 4.7 },
    { name: "Gaming Laptop", rating: 4.9 },
  ];

  return (
    <AdminRoute>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">⭐ High Rated Products</h1>

        <div className="space-y-4">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 p-5 rounded-xl"
            >
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="opacity-80">Rating: {p.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminRoute>
  );
}
