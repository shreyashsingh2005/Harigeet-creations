import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoBanners() {
  return (
    <section className="py-12 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Banner 1 */}
          <Link href="/new-arrivals" className="group relative aspect-square md:aspect-auto md:h-[400px] overflow-hidden bg-beige flex items-center justify-center hover-lift texture-card rounded-xl">
            <div className="absolute inset-0 z-0">
               <Image 
                  src="/images/cat_premium.jpg"
                  alt="New Arrivals"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
               />
            </div>
            <div className="relative z-10 text-center bg-ivory/80 backdrop-blur-md p-8 m-6 border border-champagne/30 w-full max-w-[calc(100%-3rem)] hover:bg-ivory/95 transition-colors shadow-xl">
              <span className="block text-champagne font-serif italic mb-2 text-lg">Just For You</span>
              <h3 className="text-2xl font-serif text-burgundy mb-4">NEW ARRIVALS</h3>
              <span className="inline-block border-b border-burgundy text-burgundy text-xs uppercase tracking-widest pb-1 font-medium group-hover:text-champagne group-hover:border-champagne transition-colors">Shop Now</span>
            </div>
          </Link>

          {/* Banner 2 */}
          <Link href="/collection/handcrafted" className="group relative aspect-square md:aspect-auto md:h-[400px] overflow-hidden bg-beige flex items-center justify-center hover-lift texture-card rounded-xl">
             <div className="absolute inset-0 z-0">
               <Image 
                  src="/images/cat_boutique.jpg"
                  alt="Handcrafted Collection"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
               />
            </div>
            <div className="relative z-10 text-center bg-burgundy/90 backdrop-blur-md p-8 m-6 border border-champagne/30 w-full max-w-[calc(100%-3rem)] hover:bg-burgundy transition-colors shadow-xl">
              <span className="block text-champagne font-serif italic mb-2 text-lg">Made With Love</span>
              <h3 className="text-xl lg:text-2xl font-serif text-ivory mb-4 leading-snug">HANDCRAFTED<br/>COLLECTION</h3>
              <span className="inline-block border-b border-ivory text-ivory text-xs uppercase tracking-widest pb-1 font-medium group-hover:text-champagne group-hover:border-champagne transition-colors">View Collection</span>
            </div>
          </Link>

          {/* Banner 3 */}
          <Link href="/collection/chikankari" className="group relative aspect-square md:aspect-auto md:h-[400px] overflow-hidden bg-beige flex items-center justify-center lg:col-span-1 md:col-span-2 hover-lift texture-card rounded-xl">
             <div className="absolute inset-0 z-0">
               <Image 
                  src="/images/cat_garments.jpg"
                  alt="Exclusive Chikankari"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
               />
            </div>
            <div className="relative z-10 text-center bg-ivory/80 backdrop-blur-md p-8 m-6 border border-champagne/30 w-full max-w-[calc(100%-3rem)] md:max-w-md lg:max-w-[calc(100%-3rem)] hover:bg-ivory/95 transition-colors shadow-xl">
              <span className="block text-champagne font-serif italic mb-2 text-lg">Elegance Redefined</span>
              <h3 className="text-2xl font-serif text-burgundy mb-4 leading-snug">EXCLUSIVE<br/>CHIKANKARI</h3>
              <span className="inline-block border-b border-burgundy text-burgundy text-xs uppercase tracking-widest pb-1 font-medium group-hover:text-champagne group-hover:border-champagne transition-colors">Shop Now</span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
