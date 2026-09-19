import React from "react";
import Image from "next/image";

const images = [
  "/images/p19_blue_lehenga_1789372302425.jpg",
  "/images/p22_magenta_saree_1789372351468.jpg",
  "/images/user_lehenga_pink.jpg",
  "/images/p28_rose_lehenga_1789372447057.jpg",
  "/images/p23_sherwani_1789372364071.jpg",
  "/images/p30_ruby_necklace_1789372486980.jpg",
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-[#FDF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-champagne font-serif italic text-xl block mb-3">Behind the Scenes</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-burgundy mb-5">Follow Our Story</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed mb-8">
            Join our growing family on Instagram for exclusive looks, styling inspiration, and the artistry behind every piece.
          </p>
          <a
            href="https://instagram.com/harigeet.creations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-8 py-3 rounded-full text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity shadow-lg"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            @harigeet.creations
          </a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/harigeet.creations"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-beige shadow-md hover:shadow-xl transition-shadow duration-500 ${i === 0 ? "md:row-span-2" : ""}`}
            >
              <div className={`relative w-full ${i === 0 ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-square"}`}>
                <Image
                  src={src}
                  alt={`Harigeet Creations collection ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                <div className="flex items-center gap-2 text-white">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  <span className="text-xs uppercase tracking-widest font-medium">View Post</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}