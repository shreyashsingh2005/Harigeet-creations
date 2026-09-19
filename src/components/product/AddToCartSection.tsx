"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Heart, Ruler, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function AddToCartSection({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Pastel Pink");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const colors = [
    { id: 'pink', bg: '#f8e1e7', name: 'Pastel Pink' },
    { id: 'green', bg: '#e6eedd', name: 'Mint Green' },
    { id: 'beige', bg: '#f5f5dc', name: 'Champagne Beige' }
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6 mb-8">
      {/* Color */}
      <div>
        <span className="block text-sm font-medium text-gray-900 mb-3">Color: <span className="text-gray-500 font-normal">{selectedColor}</span></span>
        <div className="flex gap-3">
          {colors.map(color => (
            <button 
              key={color.id}
              onClick={() => setSelectedColor(color.name)}
              className={`w-8 h-8 rounded-full focus:outline-none transition-all ${
                selectedColor === color.name 
                  ? 'border-2 border-burgundy ring-2 ring-transparent scale-110' 
                  : 'border border-gray-300 hover:border-champagne hover:scale-110'
              }`}
              style={{ backgroundColor: color.bg }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="block text-sm font-medium text-gray-900">Size</span>
          <button className="text-sm text-burgundy flex items-center hover:underline">
            <Ruler size={14} className="mr-1" /> Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <button 
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-10 flex items-center justify-center border text-sm transition-colors ${
                selectedSize === size 
                  ? 'border-burgundy text-burgundy bg-burgundy/5' 
                  : 'border-champagne/50 hover:border-burgundy hover:text-burgundy'
              }`}
            >
              {size}
            </button>
          ))}
          <Link href="/custom-stitching" className="px-4 h-10 flex items-center justify-center border border-champagne text-sm text-burgundy bg-champagne/5 hover:bg-champagne/10 transition-colors whitespace-nowrap">
            Custom Stitching
          </Link>
        </div>
      </div>

      {/* Quantity */}
      <div>
        <span className="block text-sm font-medium text-gray-900 mb-3">Quantity</span>
        <div className="flex items-center w-32 border border-champagne/50">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-gray-500 hover:text-burgundy hover:bg-beige transition-colors">-</button>
          <input type="text" value={quantity} readOnly className="w-full text-center bg-transparent focus:outline-none text-sm" />
          <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-gray-500 hover:text-burgundy hover:bg-beige transition-colors">+</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-burgundy text-ivory py-4 text-center uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors shadow-sm hover-lift"
        >
          {added ? "Added!" : "Add to Inquiry Bag"}
        </button>
        <Link href="/cart" className="flex-1 bg-gray-900 text-ivory py-4 text-center uppercase tracking-widest font-medium hover:bg-black transition-colors shadow-sm hover-lift block">
          View Inquiry Bag
        </Link>
        <button className="w-14 sm:w-16 h-14 flex items-center justify-center border border-champagne/50 text-gray-500 hover:text-burgundy hover:border-burgundy transition-colors">
          <Heart size={20} />
        </button>
      </div>

      {/* Enquire via WhatsApp */}
      <a href="https://wa.me/918178350210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full border border-[#25D366] text-[#25D366] py-3 mt-4 hover:bg-[#25D366] hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
        <MessageCircle size={18} /> Enquire About This Product
      </a>
    </div>
  );
}
