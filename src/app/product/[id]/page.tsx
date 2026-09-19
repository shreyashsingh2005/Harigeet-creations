import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ProductCard from "@/components/ui/ProductCard";
import AddToCartSection from "@/components/product/AddToCartSection";
import { sampleProducts } from "@/data/products";
import { Share2, Truck, RotateCcw, ShieldCheck } from "lucide-react";

export function generateStaticParams() {
  return sampleProducts.map((p) => ({
    id: p.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = sampleProducts.find(p => p.id === resolvedParams.id) || sampleProducts[0];
  
  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-ivory py-4 border-b border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-burgundy">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href="/shop" className="hover:text-burgundy">Shop</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-burgundy capitalize">{product.category.toLowerCase()}</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-gray-900 font-medium">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible flex-shrink-0">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className={`relative w-20 h-24 border ${i === 1 ? 'border-burgundy' : 'border-transparent'} hover:border-champagne bg-beige`}>
                  <Image 
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            
            <div className="relative aspect-[3/4] w-full max-w-md xl:max-w-lg mx-auto bg-beige">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.discount && (
                <div className="absolute top-4 left-4 bg-burgundy text-ivory text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
                  -{product.discount}%
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6 pb-6 border-b border-champagne/30">
              <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-green-600 font-medium tracking-wider">IN STOCK</span>
              </div>
              
              <div className="flex items-end gap-3 mt-4">
                <span className="text-sm uppercase tracking-widest text-burgundy font-medium border border-champagne px-4 py-1 bg-champagne/10">Price upon request</span>
              </div>
            </div>

            <div className="prose prose-sm text-gray-600 mb-8 max-w-none">
              <p>Experience the timeless elegance of this premium handcrafted outfit. Made with luxurious fabrics and intricate detailing, this piece is perfect for festive occasions and celebrations. Each piece reflects our commitment to authentic craftsmanship and quality.</p>
            </div>

            {/* Interactive Selectors & Buttons */}
            <AddToCartSection product={product} />

            {/* Features/Trust */}
            <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-champagne/30 mb-8">
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-champagne" />
                <span className="text-sm text-gray-700">Free Shipping on orders above ₹999</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={20} className="text-champagne" />
                <span className="text-sm text-gray-700">7 Days Easy Returns</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-champagne" />
                <span className="text-sm text-gray-700">Secure Payment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-champagne">₹</span>
                <span className="text-sm text-gray-700">Cash on Delivery Available</span>
              </div>
            </div>

            {/* Delivery Availability */}
            <div className="mb-8">
               <span className="block text-sm font-medium text-gray-900 mb-3">Check Delivery Availability</span>
               <div className="flex gap-2">
                  <input type="text" placeholder="Enter Pincode" className="flex-1 border border-champagne/50 px-4 py-2 text-sm focus:outline-none focus:border-burgundy" />
                  <button className="bg-beige text-burgundy px-6 py-2 uppercase tracking-wider text-sm font-medium border border-champagne/50 hover:bg-champagne/20 transition-colors">Check</button>
               </div>
            </div>
            
            {/* Share */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Share2 size={16} />
              <span>Share:</span>
              <div className="flex gap-3 ml-2">
                <a href="#" className="hover:text-burgundy">Facebook</a>
                <a href="#" className="hover:text-burgundy">Twitter</a>
                <a href="#" className="hover:text-burgundy">Pinterest</a>
              </div>
            </div>

          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <div className="border-b border-champagne/30 flex justify-center gap-8 md:gap-16">
            <button className="pb-4 text-burgundy border-b-2 border-burgundy uppercase tracking-wider font-medium text-sm">Description</button>
            <button className="pb-4 text-gray-500 hover:text-burgundy uppercase tracking-wider font-medium text-sm">Additional Info</button>
            <button className="pb-4 text-gray-500 hover:text-burgundy uppercase tracking-wider font-medium text-sm">Shipping & Returns</button>
          </div>
          
          <div className="py-8 max-w-4xl mx-auto">
             <h3 className="font-serif text-2xl text-burgundy mb-4">Product Description</h3>
             <p className="text-gray-600 mb-4 leading-relaxed">
               Crafted with precision and love, this outfit embodies the true essence of Indian ethnic fashion. The intricate work and premium fabric make it a must-have for your wardrobe. At Harigeet Creations, we ensure that every piece meets the highest standards of quality and design.
             </p>
             <ul className="list-disc list-inside text-gray-600 space-y-2 mt-6">
                <li>Premium quality fabric</li>
                <li>Intricate handwork/embroidery</li>
                <li>Comfortable fit for all-day wear</li>
                <li>Includes top and bottom (if applicable)</li>
                <li>Care: Dry clean recommended</li>
             </ul>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 border-t border-champagne/30 pt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-burgundy mb-2">You May Also Like</h2>
            <div className="flex justify-center items-center gap-2">
              <span className="w-8 h-px bg-champagne"></span>
              <span className="text-champagne">♦</span>
              <span className="w-8 h-px bg-champagne"></span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {sampleProducts.filter(p => p.id !== product.id).slice(0, 4).map(p => (
                <ProductCard key={p.id} product={p} />
             ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
