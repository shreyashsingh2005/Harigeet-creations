import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1a0508] via-[#2d0c12] to-[#1a0508]">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
      {/* Top gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-24 bg-[#D4AF37]/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <div className="inline-block bg-white/95 p-2.5 rounded-xl shadow-lg">
              <Image
                src="/images/harigeet-logo.jpg"
                alt="Harigeet Creations"
                width={140}
                height={60}
                className="h-14 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <p className="text-[#D4AF37] font-serif italic text-base">&ldquo;Elegance in Every Stitch&rdquo;</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Premium Indian ethnic fashion, jewellery, accessories, and exclusive boutique custom stitching services.
            </p>
            {/* Socials */}
            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com/harigeet.creations" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/918178350210" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.532 5.855L.057 23.487a.5.5 0 0 0 .609.627l5.796-1.519A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.799 9.799 0 0 1-5.031-1.394l-.361-.214-3.74.981.999-3.648-.235-.374A9.793 9.793 0 0 1 2.182 12C2.182 6.563 6.563 2.182 12 2.182S21.818 6.563 21.818 12 17.437 21.818 12 21.818z"/></svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#D4AF37]" /> Stay Connected
            </h3>
            <p className="text-white/50 text-sm mb-5 leading-relaxed">
              Sign up for exclusive updates, new arrivals and behind-the-scenes from our boutique.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-[#2a0a10] px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#c9a432] transition-colors shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#D4AF37]" /> Shop &amp; Services
            </h3>
            <ul className="space-y-3">
              {[
                ["All Collections", "/shop"],
                ["Garments", "/category/garments"],
                ["Jewellery", "/category/jewellery"],
                ["Accessories", "/category/accessories"],
                ["Custom Stitching", "/custom-stitching"],
                ["New Arrivals", "/new-arrivals"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-3 h-px bg-white/20 group-hover:bg-[#D4AF37] group-hover:w-5 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#D4AF37]" /> Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">B-159, Sec-16, Bhagwali Colony, Shastri Nagar, Ghaziabad, U.P — 201002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+918178350210" className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors">+91 8178350210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:harigeetcreations@gmail.com" className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors">harigeetcreations@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Harigeet Creations. All rights reserved. &nbsp;|&nbsp; GSTIN: 09RJUPS3166R1ZF</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/shipping" className="hover:text-[#D4AF37] transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}