import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopByCategory from "@/components/Home/ShopByCategory";
import NewArrivals from "@/components/Home/NewArrivals";
import PromoBanners from "@/components/Home/PromoBanners";
import BestSellers from "@/components/Home/BestSellers";
import Features from "@/components/Home/Features";
import CustomStitching from "@/components/Home/CustomStitching";
import InstagramFeed from "@/components/Home/InstagramFeed";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-[#FDF8F5]">
        
        {/* === MAHARAJA PREMIUM HERO === */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#0a0102] overflow-hidden">
          
          {/* Subtle floral background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23D4AF37' fill='none' stroke-width='0.3'%3E%3Ccircle cx='100' cy='100' r='40'/%3E%3Ccircle cx='100' cy='60' r='40'/%3E%3Ccircle cx='100' cy='140' r='40'/%3E%3Ccircle cx='65.36' cy='80' r='40'/%3E%3Ccircle cx='134.64' cy='120' r='40'/%3E%3Ccircle cx='65.36' cy='120' r='40'/%3E%3Ccircle cx='134.64' cy='80' r='40'/%3E%3Ccircle cx='100' cy='100' r='85' stroke-dasharray='3 4' stroke-width='0.6'/%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "250px 250px"
            }} 
          />

          {/* Radial gradient spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              <div className="inline-flex items-center gap-3 mb-6 animate-fade-up">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <span className="text-[#D4AF37] font-sans uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">Heritage Reimagined</span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#FDF8F5] leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Timeless<br />
                <span className="text-[#D4AF37] italic font-light">Elegance,</span><br />
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Crafted For You</span>
              </h1>

              <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed font-light mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                Step into a world of royal grandeur. Explore our premium ethnic wear, boutique collections, and bespoke custom stitching.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-up w-full sm:w-auto" style={{ animationDelay: '0.6s' }}>
                <a href="/shop"
                  className="group relative overflow-hidden bg-[#D4AF37] text-[#0a0102] px-10 py-4 text-center uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300 hover:bg-[#FDF8F5] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Collection
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a href="/custom-stitching"
                  className="group relative overflow-hidden bg-transparent text-[#D4AF37] px-10 py-4 text-center uppercase tracking-[0.2em] text-sm font-semibold border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                >
                  Custom Stitching
                </a>
              </div>
            </div>

            {/* Image Content (Mughal Arch) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-scale" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-full max-w-[380px] lg:max-w-[420px] aspect-[3/4] p-2 md:p-3 border border-[#D4AF37]/30 rounded-t-full shadow-[0_0_60px_rgba(212,175,55,0.1)]">
                <div className="relative w-full h-full rounded-t-full overflow-hidden border border-[#D4AF37]/50">
                  <div className="absolute inset-0 z-10 shadow-[inset_0_0_40px_rgba(10,1,2,0.6)] pointer-events-none rounded-t-full" />
                  <Image 
                    src="/images/p28_rose_lehenga_1789372447057.jpg"
                    alt="Premium Royal Lehenga"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    priority
                  />
                </div>
                
                {/* Decorative gold dots around the arch */}
                <div className="absolute -left-1.5 top-[60%] w-3 h-3 rounded-full bg-[#0a0102] border border-[#D4AF37]" />
                <div className="absolute -right-1.5 top-[60%] w-3 h-3 rounded-full bg-[#0a0102] border border-[#D4AF37]" />
              </div>
            </div>

          </div>
          
          {/* Gold Bottom Border Divider */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
        </section>

        {/* The main content area with a crisp transition instead of a muddy gradient */}
        <div className="max-w-7xl mx-auto py-12">
          <ShopByCategory />
          <NewArrivals />
          <PromoBanners />
          <BestSellers />
          <CustomStitching />
          <Features />
        </div>
        <InstagramFeed />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}