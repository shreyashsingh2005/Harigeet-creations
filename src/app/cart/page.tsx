"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Trash2, Heart, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const shipping = cartTotal > 999 || cartTotal === 0 ? 0 : 99;
  const total = cartTotal + shipping;

  return (
    <>
      <Header />
      
      <div className="bg-ivory py-8 border-b border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif text-burgundy">Your Shopping Cart</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[50vh]">
        {!mounted ? null : cart.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl text-gray-600 mb-6">Your cart is currently empty.</h2>
            <Link href="/shop" className="bg-burgundy text-ivory px-8 py-3 uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="hidden md:grid grid-cols-5 text-sm font-medium text-gray-500 uppercase tracking-wider border-b border-champagne/30 pb-4 mb-6">
                 <div className="col-span-3">Product</div>
                 <div className="text-center">Quantity</div>
                 <div className="text-right">Action</div>
              </div>
              
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex flex-col md:grid md:grid-cols-5 gap-4 md:items-center py-4 border-b border-champagne/20">
                    <div className="col-span-3 flex gap-4">
                      <Link href={`/product/${item.id}`} className="relative w-24 h-32 bg-beige flex-shrink-0">
                        <Image 
                          src={item.image} 
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </Link>
                      <div className="flex flex-col justify-center">
                        <Link href={`/product/${item.id}`} className="text-base font-medium text-gray-900 hover:text-burgundy transition-colors mb-1">
                          {item.name}
                        </Link>
                        <span className="text-sm text-gray-500 mb-2">Size: {item.selectedSize} | {item.selectedColor}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-start md:justify-center">
                      <div className="flex items-center border border-champagne/50">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)} className="px-3 py-1 text-gray-500 hover:text-burgundy hover:bg-beige transition-colors">-</button>
                        <input type="text" value={item.quantity} readOnly className="w-8 text-center bg-transparent focus:outline-none text-sm" />
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)} className="px-3 py-1 text-gray-500 hover:text-burgundy hover:bg-beige transition-colors">+</button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <button onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)} className="text-sm text-gray-500 hover:text-burgundy transition-colors flex items-center justify-end w-full">
                        <Trash2 size={14} className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                 <Link href="/shop" className="text-burgundy text-sm uppercase tracking-wider font-medium hover:underline flex items-center">
                    ← Continue Shopping
                 </Link>
                 <button onClick={clearCart} className="text-gray-600 text-sm uppercase tracking-wider font-medium hover:text-burgundy border border-champagne/50 px-6 py-2 transition-colors">
                    Clear Bag
                 </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[#FDF8F5] p-6 border border-champagne/30">
                <h2 className="text-xl font-serif text-burgundy mb-6 border-b border-champagne/30 pb-4">Inquiry Summary</h2>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Submit your inquiry bag and our team will get back to you with pricing, availability, and custom stitching options.
                </p>
                
                <Link href="/checkout" className="block w-full bg-burgundy text-ivory py-4 text-center uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors shadow-md">
                  Submit Inquiry
                </Link>
                
                <div className="mt-6 flex flex-col gap-3">
                   <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <ShieldCheck size={16} className="text-champagne" />
                      <span>Secure Checkout</span>
                   </div>
                   <div className="flex justify-center gap-2 mt-2">
                      <div className="w-10 h-6 bg-gray-200 rounded-sm"></div>
                      <div className="w-10 h-6 bg-gray-200 rounded-sm"></div>
                      <div className="w-10 h-6 bg-gray-200 rounded-sm"></div>
                   </div>
                </div>
              </div>
            </div>
            
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
