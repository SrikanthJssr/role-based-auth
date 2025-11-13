"use client";

export default function GlobalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">{children}</div>
    </div>
  );
}
