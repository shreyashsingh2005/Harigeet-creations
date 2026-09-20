"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CustomerSignup() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
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
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to send OTP");
      } else {
        setStep(2);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid OTP");
        setLoading(false);
        return;
      }

      const signInRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (signInRes?.error) {
        setError("Account created, but failed to log in automatically.");
        setLoading(false);
      } else {
        router.push("/");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-beige flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <h2 className="mt-2 text-3xl font-serif text-burgundy">
            {step === 1 ? "Create an Account" : "Verify Your Email"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {step === 1 ? (
              <>
                Already have an account?{" "}
                <Link href="/account/login" className="font-medium text-champagne hover:text-burgundy transition-colors">
                  Sign in here
                </Link>
              </>
            ) : (
              `We sent a 6-digit code to ${email}`
            )}
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-none sm:px-10 border border-champagne/20">
            
            {step === 1 ? (
              <form className="space-y-6" onSubmit={handleSendOtp}>
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-champagne focus:border-champagne sm:text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-champagne focus:border-champagne sm:text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-champagne focus:border-champagne sm:text-sm" />
                </div>

                <div>
                  <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-ivory bg-burgundy hover:bg-[#4a0d16] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-champagne disabled:opacity-50 uppercase tracking-widest">
                    {loading ? "Sending Code..." : "Send Verification Code"}
                  </button>
                </div>
                
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or sign up with</span></div>
                  </div>
                  <div className="mt-6">
                    <button type="button" onClick={() => signIn("google", { callbackUrl: "/" })} className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google" />
                      Sign up with Google
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleVerifyOtp}>
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-center">Enter 6-Digit OTP</label>
                  <input type="text" maxLength={6} required value={otp} onChange={(e) => setOtp(e.target.value)} className="mt-2 block w-full px-3 py-4 text-center tracking-widest text-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-champagne focus:border-champagne" placeholder="------" />
                </div>

                <div>
                  <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-ivory bg-burgundy hover:bg-[#4a0d16] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-champagne disabled:opacity-50 uppercase tracking-widest">
                    {loading ? "Verifying..." : "Verify & Create Account"}
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <button type="button" onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-burgundy">
                    Change Email Address
                  </button>
                </div>
              </form>
            )}
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}