import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye } from "lucide-react";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[#F5EFE8] overflow-hidden rounded-2xl mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-500">
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
          />
        </Link>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/85 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-burgundy hover:bg-white hover:scale-110 transition-all duration-300 shadow-sm z-10">
          <Heart size={15} strokeWidth={1.8} />
        </button>

        {/* NEW badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-[#D4AF37] text-white text-[9px] font-bold px-2.5 py-1 uppercase tracking-[0.2em] rounded-full z-10">
            New
          </div>
        )}

        {/* Hover overlay — Quick View */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a10]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end z-10">
          <Link
            href={`/product/${product.id}`}
            className="w-full flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm text-burgundy text-xs font-semibold uppercase tracking-[0.2em] py-3 hover:bg-[#7A1E28] hover:text-white transition-colors duration-300"
          >
            <Eye size={13} />
            Quick View
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="px-1 flex flex-col gap-1.5">
        <Link href={`/product/${product.id}`} className="group/title">
          <h3 className="text-sm md:text-[15px] font-medium text-gray-900 group-hover/title:text-burgundy transition-colors duration-200 leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <span className="text-[11px] text-gray-400 uppercase tracking-widest">{product.category}</span>
        <Link
          href={`/product/${product.id}`}
          className="mt-1 inline-flex items-center gap-1.5 text-burgundy text-[11px] font-semibold uppercase tracking-[0.18em] hover:gap-3 transition-all duration-300"
        >
          Enquire Now <span className="text-base leading-none">→</span>
        </Link>
      </div>
    </div>
  );
}