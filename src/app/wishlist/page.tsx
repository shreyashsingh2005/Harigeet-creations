"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ui/ProductCard";

export default function WishlistPage() {
  const { wishlist, wishlistCount } = useWishlist();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <Header />
      <main className="flex-grow bg-[#FDF8F5] min-h-[70vh] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-serif text-[#1a0508] mb-4">
              Your Wishlist
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="w-12 h-px bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37]">♦</span>
              <span className="w-12 h-px bg-[#D4AF37]"></span>
            </div>
          </div>

          {!mounted ? (
             <div className="h-64 flex items-center justify-center">
               <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
             </div>
          ) : wishlistCount === 0 ? (
            <div className="max-w-2xl mx-auto text-center bg-white/50 p-12 rounded-2xl border border-[#D4AF37]/20 shadow-xl shadow-[#D4AF37]/5">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md shadow-[#D4AF37]/10 mb-6 border border-[#D4AF37]/20">
                <Heart size={32} className="text-[#D4AF37] opacity-80" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-serif text-[#1a0508] mb-4">No favorites yet</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Your wishlist is currently empty. Explore our luxurious collections and save your favorite pieces here for later.
              </p>
              <Link
                href="/shop"
                className="inline-block bg-[#1a0508] text-[#FDF8F5] px-8 py-3 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#D4AF37] hover:text-[#1a0508] transition-colors duration-300 shadow-md"
              >
                Explore Collection
              </Link>
            </div>
          ) : (
            <div>
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">{wishlistCount} {wishlistCount === 1 ? 'Item' : 'Items'} saved</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                {wishlist.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}