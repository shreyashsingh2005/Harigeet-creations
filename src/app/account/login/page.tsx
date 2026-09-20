"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-beige flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <h2 className="mt-2 text-3xl font-serif text-burgundy">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/account/signup" className="font-medium text-champagne hover:text-burgundy transition-colors">
              Sign up here
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-none sm:px-10 border border-champagne/20">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-champagne focus:border-champagne sm:text-sm" />
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <Link href="/account/forgot-password" className="text-sm font-medium text-[#D4AF37] hover:text-[#b08d27] transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="mt-1">
                  <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                </div>
              </div>

              <div>
                <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-ivory bg-burgundy hover:bg-[#4a0d16] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-champagne disabled:opacity-50 uppercase tracking-widest">
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
                <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or continue with</span></div>
              </div>

              <div className="mt-6">
                <button onClick={() => signIn("google", { callbackUrl: "/" })} className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google" />
                  Sign in with Google
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