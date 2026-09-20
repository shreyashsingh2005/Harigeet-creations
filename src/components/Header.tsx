"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Royal Announcement Bar */}
      <div className="bg-[#1a0508] text-[#D4AF37] text-[10px] sm:text-xs py-2.5 px-4 flex justify-center items-center space-x-4 sm:space-x-8 tracking-[0.2em] uppercase font-medium">
        <span className="hidden sm:inline">Free Shipping On Orders Above ₹1999</span>
        <span className="hidden sm:inline text-[#D4AF37]/50">♦</span>
        <span>COD Available</span>
        <span className="hidden sm:inline text-[#D4AF37]/50">♦</span>
        <span className="hidden sm:inline">Easy Returns</span>
      </div>

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-40 bg-[#FDF8F5]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Mobile Menu Button */}
            <div className="flex-1 flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#2a0a10] hover:text-[#D4AF37] p-2 -ml-2 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <Link href="/" className="flex items-center group">
                <div className="relative p-1 rounded-full border border-transparent group-hover:border-[#D4AF37]/40 transition-colors duration-500">
                  <Image
                    src="/images/harigeet-logo.jpg"
                    alt="Harigeet Creations"
                    width={160}
                    height={70}
                    className="h-14 md:h-16 w-auto object-contain mix-blend-multiply"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-none justify-center items-center space-x-5 xl:space-x-8 px-4">
              {[
                { name: "Home", href: "/" },
                { name: "Shop", href: "/shop" },
                { name: "Collection", href: "/collection" },
                { name: "New Arrivals", href: "/new-arrivals" },
                { name: "Custom Stitching", href: "/custom-stitching" },
                { name: "About Us", href: "/about" }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="relative group text-[#1a0508] hover:text-[#D4AF37] transition-colors text-[11px] xl:text-xs uppercase tracking-[0.2em] font-semibold py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex-1 flex justify-end items-center space-x-4 md:space-x-6">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-[#1a0508] hover:text-[#D4AF37] transition-colors"
                aria-label="Search"
              >
                <Search size={22} strokeWidth={1.5} />
              </button>
              <Link href="/wishlist" className="text-[#1a0508] hover:text-[#D4AF37] transition-colors hidden sm:flex items-center relative" aria-label="Wishlist">
                <Heart size={22} strokeWidth={1.5} />
                {mounted && wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#D4AF37] text-[#1a0508] text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-[#FDF8F5]">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link href="/account" className="text-[#1a0508] hover:text-[#D4AF37] transition-colors" aria-label="Account">
                <User size={22} strokeWidth={1.5} />
              </Link>
              <Link href="/cart" className="text-[#1a0508] hover:text-[#D4AF37] transition-colors relative flex items-center" aria-label="Cart">
                <ShoppingBag size={22} strokeWidth={1.5} />
                {mounted && cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#D4AF37] text-[#1a0508] text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-[#FDF8F5]">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-[#FDF8F5] border-b border-[#D4AF37]/30 shadow-2xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-1 flex flex-col">
            {[
              { name: "Home", href: "/" },
              { name: "My Account", href: "/account" },
              { name: "Shop", href: "/shop" },
              { name: "Collection", href: "/collection" },
              { name: "New Arrivals", href: "/new-arrivals" },
              { name: "Custom Stitching", href: "/custom-stitching" },
              { name: "Wishlist", href: "/wishlist" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" }
            ].map((link) => (
               <Link 
                  key={link.name}
                  onClick={() => setIsMobileMenuOpen(false)} 
                  href={link.href} 
                  className="block px-4 py-3 text-sm font-medium text-[#1a0508] uppercase tracking-[0.15em] border-b border-[#D4AF37]/10 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37] hover:pl-6 transition-all duration-300"
                >
                  {link.name}
               </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Full Screen Search Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-[#FDF8F5]/95 backdrop-blur-md transition-all duration-500 flex flex-col items-center justify-center ${
          isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button 
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-8 right-8 text-[#1a0508] hover:text-[#D4AF37] transition-colors p-2"
          aria-label="Close search"
        >
          <X size={36} strokeWidth={1} />
        </button>

        <div className="w-full max-w-3xl px-6">
          <span className="block text-center text-[#D4AF37] font-serif italic text-xl mb-4">What are you looking for?</span>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for lehengas, suits, fabrics..."
              className="w-full bg-transparent border-b-2 border-[#1a0508]/20 text-[#1a0508] text-2xl md:text-4xl font-serif py-4 px-2 focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-[#1a0508]/30 text-center"
              autoFocus={isSearchOpen}
            />
            <button 
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1a0508]/50 hover:text-[#D4AF37] transition-colors"
            >
              <Search size={28} strokeWidth={1.5} />
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4 block">Popular Searches</span>
            <div className="flex flex-wrap justify-center gap-3">
              {['Bridal Lehenga', 'Chikankari Kurta', 'Banarasi Saree', 'Custom Blouse'].map(term => (
                <button 
                  key={term}
                  onClick={() => {
                    setSearchQuery(term);
                    router.push(`/shop?q=${encodeURIComponent(term)}`);
                    setIsSearchOpen(false);
                  }}
                  className="px-5 py-2 border border-[#D4AF37]/30 rounded-full text-xs uppercase tracking-wider text-[#1a0508] hover:bg-[#D4AF37] hover:text-white transition-all"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}