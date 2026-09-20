"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { PlusCircle, Package } from "lucide-react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return <div className="flex h-full items-center justify-center">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-serif text-[#1a0508] mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Products</p>
            <p className="text-3xl font-bold text-[#1a0508] mt-1">12</p>
          </div>
          <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37]">
            <Package size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-serif text-[#1a0508]">Quick Actions</h2>
        </div>
        <div className="p-6 flex gap-4">
          <Link 
            href="/admin/products/add"
            className="flex items-center gap-2 bg-[#1a0508] text-white px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#1a0508] transition-colors"
          >
            <PlusCircle size={20} /> Add New Product
          </Link>
          <Link 
            href="/admin/products"
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Manage Products
          </Link>
        </div>
      </div>
    </div>
  );
}