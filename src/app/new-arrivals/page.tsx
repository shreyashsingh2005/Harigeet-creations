import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ProductCard from "@/components/ui/ProductCard";
import { sampleProducts } from "@/data/products";

export default function NewArrivalsPage() {
  const products = sampleProducts.filter(p => p.isNew);
  
  return (
    <>
      <Header />
      <div className="bg-ivory py-16 border-b border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-champagne font-serif italic text-xl mb-2 block">Just For You</span>
          <h1 className="text-4xl md:text-5xl font-serif text-burgundy">New Arrivals</h1>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[50vh]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
