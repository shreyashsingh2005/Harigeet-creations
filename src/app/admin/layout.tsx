"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Package, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

function AdminSidebar() {
  const pathname = usePathname();
  if (pathname === "/admin/login") return null;

  return (
    <div className="w-64 bg-[#1a0508] text-white min-h-screen flex flex-col hidden md:flex">
      <div className="p-6 border-b border-white/10">
        <h2 className="text-xl font-serif text-[#D4AF37]">Harigeet Admin</h2>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link 
          href="/admin"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            pathname === "/admin" ? "bg-[#D4AF37] text-[#1a0508] font-semibold" : "hover:bg-white/5 text-gray-300"
          }`}
        >
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link 
          href="/admin/products"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            pathname.includes("/admin/products") ? "bg-[#D4AF37] text-[#1a0508] font-semibold" : "hover:bg-white/5 text-gray-300"
          }`}
        >
          <Package size={20} /> Products
        </Link>
      </nav>
      <div className="p-4 border-t border-white/10">
        <button 
          onClick={() => signOut()}
          className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg hover:bg-white/5 text-gray-300 transition-colors"
        >
          <LogOut size={20} /> Sign Out
        </button>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  
  const isAuthPage = pathname === "/admin/login" || pathname === "/admin/signup";

  useEffect(() => {
    if (status === "loading") return;
    
    // If user is logged in but is NOT an ADMIN, kick them to the customer dashboard
    if (status === "authenticated" && (session?.user as any)?.role !== "ADMIN" && !isAuthPage) {
      router.push("/account");
    }
  }, [status, session, pathname, router, isAuthPage]);

  // Optionally show a loading screen while checking session
  if (status === "loading" && !isAuthPage) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">Checking Access...</div>;
  }

  // Hide sidebar on auth pages
  if (isAuthPage) {
    return <>{children}</>;
  }

  // Prevent rendering admin UI if they aren't an admin
  if (status === "authenticated" && (session?.user as any)?.role !== "ADMIN") {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}