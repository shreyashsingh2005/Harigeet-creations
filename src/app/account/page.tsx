"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { LogOut, Package, User, CheckCircle } from "lucide-react";

export default function CustomerDashboard() {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/account/login");
    }
    
    if (status === "authenticated") {
      fetch("/api/user/profile")
        .then(res => res.json())
        .then(data => {
          if (data.user) {
            setProfileData({
              name: data.user.name || "",
              phone: data.user.phone || "",
              address: data.user.address || "",
              city: data.user.city || "",
              state: data.user.state || "",
              pincode: data.user.pincode || "",
            });
          }
          setLoading(false);
        });
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated" || loading) {
    return <div className="min-h-screen flex items-center justify-center bg-beige">Loading...</div>;
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      });

      if (res.ok) {
        setMessage("Profile updated successfully!");
        update(); // Force session update if needed
        setTimeout(() => setIsEditing(false), 1500);
      } else {
        setMessage("Failed to update profile.");
      }
    } catch (err) {
      setMessage("Error updating profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-beige py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-none shadow-xl border border-champagne/20 overflow-hidden">
            <div className="bg-[#1a0508] p-8 text-center text-ivory relative">
              <div className="w-20 h-20 bg-champagne rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-ivory">
                <User size={40} className="text-[#1a0508]" />
              </div>
              <h1 className="text-3xl font-serif">Welcome, {profileData.name || session?.user?.name || 'Guest'}</h1>
              <p className="text-champagne/80 mt-2">{session?.user?.email}</p>
              {profileData.phone && <p className="text-gray-400 mt-1">Phone: {profileData.phone}</p>}
              
              {(session?.user as any)?.role === "ADMIN" && (
                <Link href="/admin" className="inline-block mt-4 px-6 py-2 bg-champagne text-[#1a0508] text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors">
                  Go to Admin Panel
                </Link>
              )}
            </div>

            <div className="p-8">
              {!isEditing ? (
                <>
                  <h2 className="text-xl font-serif text-burgundy mb-6 border-b border-champagne/30 pb-2">Your Dashboard</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-100 p-6 flex items-start gap-4 hover:border-champagne transition-colors">
                      <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0">
                        <Package className="text-burgundy" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Your Inquiries</h3>
                        <p className="text-sm text-gray-500 mb-3">View all the products you have inquired about.</p>
                        <button className="text-xs uppercase tracking-widest font-bold text-champagne hover:text-burgundy">View All</button>
                      </div>
                    </div>

                    <div className="border border-gray-100 p-6 flex items-start gap-4 hover:border-champagne transition-colors cursor-pointer" onClick={() => setIsEditing(true)}>
                      <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="text-burgundy" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Account Details</h3>
                        <p className="text-sm text-gray-500 mb-3">Update your name, phone, and delivery address.</p>
                        <button className="text-xs uppercase tracking-widest font-bold text-champagne hover:text-burgundy">Edit Profile</button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-6 border-b border-champagne/30 pb-2">
                    <h2 className="text-xl font-serif text-burgundy">Edit Profile Details</h2>
                    <button onClick={() => setIsEditing(false)} className="text-sm text-gray-500 hover:text-burgundy">Cancel</button>
                  </div>
                  
                  {message && (
                    <div className={`p-4 mb-6 text-sm ${message.includes('successfully') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {message}
                    </div>
                  )}

                  <form onSubmit={handleSaveProfile} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" value={profileData.name} onChange={(e) => setProfileData({...profileData, name: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-champagne focus:border-champagne" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="text" value={profileData.phone} onChange={(e) => setProfileData({...profileData, phone: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-champagne focus:border-champagne" placeholder="+91" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Address (House No, Street, Landmark)</label>
                        <input type="text" value={profileData.address} onChange={(e) => setProfileData({...profileData, address: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-champagne focus:border-champagne" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" value={profileData.city} onChange={(e) => setProfileData({...profileData, city: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-champagne focus:border-champagne" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        <input type="text" value={profileData.state} onChange={(e) => setProfileData({...profileData, state: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-champagne focus:border-champagne" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Pincode</label>
                        <input type="text" value={profileData.pincode} onChange={(e) => setProfileData({...profileData, pincode: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-champagne focus:border-champagne" />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button type="submit" disabled={saving} className="flex items-center gap-2 px-8 py-3 bg-burgundy text-ivory uppercase tracking-widest text-sm font-medium hover:bg-[#4a0d16] transition-colors disabled:opacity-50">
                        {saving ? "Saving..." : <><CheckCircle size={18} /> Save Profile</>}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="mt-12 flex justify-center border-t border-gray-100 pt-8">
                <button 
                  onClick={() => signOut({ callbackUrl: "/account/login" })}
                  className="flex items-center gap-2 px-8 py-3 border border-burgundy text-burgundy uppercase tracking-widest text-sm font-medium hover:bg-burgundy hover:text-ivory transition-colors"
                >
                  <LogOut size={18} /> Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}