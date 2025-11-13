"use client";

import { useRouter } from "next/navigation";
import { FaLock } from "react-icons/fa";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-700 to-black text-white">
      <FaLock size={60} className="mb-4 text-red-300" />

      <h1 className="text-4xl font-bold mb-2">Access Denied</h1>
      <p className="opacity-80 text-lg mb-6">
        You do not have permission to view this page.
      </p>

      <button
        onClick={() => router.push("/dashboard")}
        className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg"
      >
        Go Back to Dashboard
      </button>
    </div>
  );
}
