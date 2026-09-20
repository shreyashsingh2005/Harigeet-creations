"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, action: "reset" }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to send OTP");
      } else {
        setStep(2);
        setSuccess("OTP sent to your email!");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid OTP");
        setLoading(false);
        return;
      }

      setSuccess("Password reset successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/account/login");
      }, 2000);
      
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-white p-2 rounded-xl shadow-sm border border-[#D4AF37]/20">
            <Image src="/images/harigeet-logo.jpg" alt="Logo" width={120} height={50} className="object-contain" />
          </div>
        </div>
        <h2 className="mt-2 text-center text-3xl font-serif font-extrabold text-[#1a0508]">
          {step === 1 ? "Reset Password" : "Enter OTP & New Password"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link href="/account/login" className="font-medium text-[#D4AF37] hover:text-[#b08d27] transition-colors">
            Sign in here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-[#1a0508]/5 sm:rounded-2xl sm:px-10 border border-[#D4AF37]/20">
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md mb-6">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          {success && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md mb-6">
              <p className="text-sm text-green-700">{success}</p>
            </div>
          )}
          
          {step === 1 ? (
            <form className="space-y-6" onSubmit={handleSendOtp}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-1">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                </div>
              </div>

              <div>
                <button type="submit" disabled={loading} className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1a0508] hover:bg-[#D4AF37] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] disabled:opacity-50">
                  {loading ? "Sending OTP..." : "Send Reset Link"}
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleResetPassword}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Enter 6-Digit OTP</label>
                <input type="text" maxLength={6} required value={otp} onChange={(e) => setOtp(e.target.value)} className="mt-2 block w-full px-3 py-4 text-center tracking-widest text-2xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]" placeholder="------" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <div className="mt-1">
                  <input type="password" required minLength={6} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                </div>
              </div>

              <div>
                <button type="submit" disabled={loading || success !== ""} className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1a0508] hover:bg-[#D4AF37] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] disabled:opacity-50">
                  {loading ? "Resetting..." : "Reset Password"}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}