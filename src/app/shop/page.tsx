import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ui/ProductCard";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { sampleProducts } from "@/data/products";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Shop | Harigeet Creations",
  description: "Shop premium Indian ethnic wear, garments, jewellery, and fabrics.",
};

export default async function ShopPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const q = typeof searchParams?.q === 'string' ? searchParams.q.toLowerCase() : '';
  
  const filteredProducts = q 
    ? sampleProducts.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    : sampleProducts;
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="relative bg-beige py-24 md:py-32 border-b border-champagne/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cat_premium.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity animate-ken-burns"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/95 to-ivory animate-blur-reveal"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-scale delay-300">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-burgundy mb-4 drop-shadow-sm">The Curated Collection</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Discover our premium range of ethnic wear, bespoke bridal ensembles, and luxury accessories.
          </p>
          <div className="mt-8 flex justify-center items-center gap-4">
             <span className="w-16 h-px bg-champagne"></span>
             <span className="text-champagne">♦</span>
             <span className="w-16 h-px bg-champagne"></span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0 animate-fade-up delay-500">
            <div className="flex items-center justify-between lg:hidden mb-6 texture-card p-4 rounded-xl cursor-pointer">
              <span className="font-medium text-burgundy uppercase tracking-widest text-sm">Filter & Sort</span>
              <SlidersHorizontal size={20} className="text-champagne" />
            </div>

            <div className="hidden lg:block space-y-8 sticky top-28 texture-card p-8 rounded-2xl shadow-xl">
              <div>
                <h3 className="font-serif text-xl text-burgundy mb-6 pb-2 border-b border-champagne/30">Categories</h3>
                <ul className="space-y-4">
                  {['All', 'Garments', 'Jewellery', 'Accessories', 'Fabrics', 'Boutique Collection', 'Premium Collection'].map((cat, i) => (
                    <li key={i}>
                      <label className="flex items-center space-x-4 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border border-champagne/70 rounded-sm checked:bg-burgundy checked:border-burgundy focus:ring-1 focus:ring-champagne transition-colors" defaultChecked={i === 0} />
                          <svg className="absolute w-3 h-3 text-ivory opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-sm md:text-base text-gray-700 group-hover:text-champagne transition-colors font-medium">{cat}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl text-burgundy mb-6 pb-2 border-b border-champagne/30">Size</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom'].map((size, i) => (
                    <button key={i} className="px-3 py-1.5 border border-champagne/50 text-sm hover:border-burgundy hover:text-burgundy hover:bg-burgundy/5 transition-colors rounded-sm">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 animate-fade-up delay-700">
            <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-champagne/20">
              <span className="text-sm text-gray-500 font-serif italic">
                {q ? `Showing ${filteredProducts.length} results for "${q}"` : `Showing ${filteredProducts.length} bespoke creations`}
              </span>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 uppercase tracking-widest text-xs font-medium">Sort by:</span>
                <div className="relative">
                  <select className="appearance-none bg-transparent border border-champagne/50 py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-burgundy rounded-sm font-medium text-gray-800">
                    <option>Featured Collection</option>
                    <option>Newest Arrivals</option>
                    <option>Alphabetical A-Z</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-burgundy" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center col-span-full">
                <p className="text-xl text-gray-500 font-serif italic mb-4">No creations found matching your search.</p>
                <button onClick={() => window.location.href='/shop'} className="text-burgundy uppercase tracking-widest text-sm font-medium hover:underline">View All Collections</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product, i) => (
                  <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${(i % 12) * 50}ms`, opacity: 0 }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-16 flex justify-center pb-12">
              <button className="bg-transparent text-burgundy px-10 py-3.5 text-center uppercase tracking-widest font-medium border border-burgundy hover:bg-burgundy hover:text-ivory transition-all hover-lift rounded-sm shadow-sm">
                Discover More
              </button>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
