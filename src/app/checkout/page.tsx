"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => setMounted(true), []);

  const shipping = cartTotal > 999 || cartTotal === 0 ? 0 : 99;
  const total = cartTotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (!mounted) return null;

  if (orderPlaced) {
    return (
      <>
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-24 text-center min-h-[60vh]">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          <h1 className="text-4xl font-serif text-burgundy mb-4">Inquiry Submitted!</h1>
          <p className="text-gray-600 mb-8 text-lg">Thank you for your interest in Harigeet Creations. Your inquiry has been received successfully and our team will contact you shortly.</p>
          <Link href="/shop" className="inline-block bg-burgundy text-ivory px-8 py-3 text-center uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors">
            Continue Shopping
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-ivory py-8 border-b border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif text-burgundy">Checkout</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
        {cart.length === 0 ? (
           <div className="text-center py-16">
             <h2 className="text-xl text-gray-600 mb-6">Your cart is empty. Please add items to checkout.</h2>
             <Link href="/shop" className="bg-burgundy text-ivory px-8 py-3 uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors inline-block">
               Go to Shop
             </Link>
           </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <h2 className="text-xl font-serif text-burgundy mb-6 border-b border-champagne/30 pb-4">Contact Details</h2>
              <form onSubmit={handlePlaceOrder} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">First Name</label>
                    <input required type="text" className="w-full border border-champagne/50 p-3 focus:outline-none focus:border-burgundy bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                    <input required type="text" className="w-full border border-champagne/50 p-3 focus:outline-none focus:border-burgundy bg-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email Address</label>
                  <input required type="email" className="w-full border border-champagne/50 p-3 focus:outline-none focus:border-burgundy bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Phone Number / WhatsApp</label>
                  <input required type="tel" className="w-full border border-champagne/50 p-3 focus:outline-none focus:border-burgundy bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Message or Custom Requirements (Optional)</label>
                  <textarea rows={4} className="w-full border border-champagne/50 p-3 focus:outline-none focus:border-burgundy bg-transparent"></textarea>
                </div>

                <button type="submit" className="w-full bg-burgundy text-ivory py-4 mt-8 text-center uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors shadow-md">
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-[#FDF8F5] p-6 border border-champagne/30 sticky top-24">
                <h2 className="text-xl font-serif text-burgundy mb-6 border-b border-champagne/30 pb-4">Inquiry Summary</h2>
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex justify-between items-center text-sm border-b border-champagne/20 pb-4">
                      <div className="flex gap-4">
                        <div className="text-gray-600">
                          <span className="font-medium text-gray-900">{item.name}</span> <br/> 
                          <span className="text-xs">Size: {item.selectedSize} | Color: {item.selectedColor}</span> <br/>
                          <span className="text-xs">Quantity: {item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-gray-600 mt-4 italic">
                  * Prices are available upon request. Our team will contact you shortly after you submit your inquiry to discuss pricing and customization.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
