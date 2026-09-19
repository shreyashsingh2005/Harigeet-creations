import React from "react";
import { ShieldCheck, Sparkles, Heart, Leaf, CheckCircle, Truck } from "lucide-react";

const features = [
  { icon: CheckCircle, title: "Authentic Craft", desc: "Handcrafted by master artisans" },
  { icon: Sparkles,    title: "Premium Quality", desc: "Finest fabrics & materials" },
  { icon: Heart,       title: "Made in India",   desc: "Rooted in rich tradition" },
  { icon: Truck,       title: "Pan India Delivery", desc: "Safe & timely shipping" },
  { icon: ShieldCheck, title: "Easy Returns",    desc: "Hassle-free exchange" },
  { icon: Leaf,        title: "Sustainable",     desc: "Conscious & eco-friendly" },
];

export default function Features() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a0a10] via-[#3d1018] to-[#1a0508]" />
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#D4AF37]/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#D4AF37] font-serif italic text-lg block mb-3">Our Promise</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Why Choose Harigeet Creations</h2>
          <div className="flex justify-center items-center gap-3 mt-5">
            <span className="w-16 h-px bg-[#D4AF37]/40" />
            <span className="text-[#D4AF37]">♦</span>
            <span className="w-16 h-px bg-[#D4AF37]/40" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/4 backdrop-blur-sm hover:bg-white/8 hover:border-[#D4AF37]/35 transition-all duration-500">
              <div className="mb-4 w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/20 group-hover:scale-110 transition-all duration-400">
                <Icon strokeWidth={1.2} className="w-6 h-6" />
              </div>
              <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-1.5">{title}</h3>
              <p className="text-white/45 text-xs font-serif italic">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}