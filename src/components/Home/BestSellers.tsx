import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { sampleProducts } from "@/data/products";

export default function BestSellers() {
  const featured = sampleProducts.slice(0, 8);

  return (
    <section className="py-24 bg-ivory relative overflow-hidden">
      {/* Subtle background ornament */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-champagne/8 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-burgundy/5 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-champagne font-serif italic text-xl block mb-2">Curated For You</span>
            <h2 className="text-4xl md:text-5xl font-serif text-burgundy">Trending Collections</h2>
          </div>
          <Link
            href="/trending"
            className="self-start md:self-auto inline-flex items-center gap-2 text-burgundy border-b border-burgundy pb-0.5 text-sm uppercase tracking-widest font-medium hover:text-champagne hover:border-champagne transition-colors"
          >
            View All <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-12">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
          <span className="text-champagne text-sm">♦</span>
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {featured.map((product, i) => (
            <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="inline-block bg-burgundy text-ivory px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#5a1520] transition-colors shadow-lg hover-lift rounded-sm"
          >
            Explore Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}