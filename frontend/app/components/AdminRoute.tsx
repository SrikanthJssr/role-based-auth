"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../lib/axios";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If no token → redirect to login
    if (!token) {
      router.push("/login");
      return;
    }

    const verifyAdmin = async () => {
      try {
        const res = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.role === "admin") {
          setIsAdmin(true); // admin allowed
        } else {
          router.push("/unauthorized"); // ❌ NOT admin → redirect
        }
      } catch (error) {
        router.push("/login"); // token invalid → login
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, [router]);

  // Loading UI
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl">
        Checking admin permissions...
      </div>
    );

  // Non-admin users will already be redirected, so return null
  if (!isAdmin) return null;

  // If admin → render page
  return <>{children}</>;
}
