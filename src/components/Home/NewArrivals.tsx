import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { sampleProducts } from "@/data/products";

export default function NewArrivals() {
  const products = sampleProducts.slice(0, 4);

  return (
    <section className="py-24 bg-[#FDF8F5] relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-champagne/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
          <div>
            <span className="text-champagne font-serif italic text-xl block mb-2">Just Arrived</span>
            <h2 className="text-4xl md:text-5xl font-serif text-burgundy">New Arrivals</h2>
          </div>
          <Link
            href="/new-arrivals"
            className="self-start md:self-auto text-burgundy border-b border-burgundy text-sm uppercase tracking-widest font-medium hover:text-champagne hover:border-champagne transition-colors pb-0.5 flex items-center gap-2"
          >
            View All <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-3 mb-12">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
          <span className="text-champagne text-xs">♦</span>
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}