import React from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export default function ShopByCategory() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-burgundy mb-4">Shop by Category</h2>
          <div className="flex justify-center items-center gap-2">
            <span className="w-12 h-px bg-champagne"></span>
            <span className="text-champagne">♦</span>
            <span className="w-12 h-px bg-champagne"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative block overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 hover-lift rounded-xl"
            >
              <div className="w-full aspect-[4/5] relative">
                <Image 
                  src={category.image} 
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Decorative Border Overlay */}
                <div className="absolute inset-4 border border-ivory/30 group-hover:border-champagne/60 transition-colors duration-500 pointer-events-none"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center flex flex-col items-center justify-end h-full">
                <h3 className="text-2xl md:text-3xl font-serif text-ivory tracking-wide mb-3 drop-shadow-md group-hover:-translate-y-2 transition-transform duration-500">{category.name}</h3>
                <span className="inline-flex items-center text-xs md:text-sm text-champagne uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                  Explore Collection <span className="ml-2">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
