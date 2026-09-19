import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata = {
  title: "About Us | Harigeet Creations",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <div className="bg-beige py-16 border-b border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-champagne font-serif italic text-xl mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-serif text-burgundy mb-4">About Harigeet Creations</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           <div className="w-full lg:w-1/2">
             <div className="relative aspect-[4/5] w-full bg-ivory shadow-xl border border-champagne/30 p-2 max-w-md mx-auto">
                <Image 
                   src="/images/cat_about.jpg"
                   alt="Harigeet Creations"
                   fill
                   className="object-cover"
                />
             </div>
           </div>
           
           <div className="w-full lg:w-1/2">
             <h2 className="text-3xl font-serif text-burgundy mb-6">Elegance in Every Stitch</h2>
             <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Welcome to <strong>Harigeet Creations</strong>, your premier destination for exquisite Indian ethnic fashion. 
                  Located in the heart of Ghaziabad, we bring you a carefully curated collection of garments, jewellery, accessories, and premium fabrics.
                </p>
                <p>
                  Our journey began with a simple vision: to celebrate the rich heritage of Indian craftsmanship while 
                  offering modern, elegant silhouettes for today's woman. Every piece in our collection is thoughtfully 
                  designed and crafted with attention to detail.
                </p>
                <p>
                  Beyond our ready-to-wear collections, we take immense pride in our <strong>Boutique & Custom Stitching Services</strong>. 
                  We believe that the perfect fit can transform not just an outfit, but how you feel wearing it. Our expert 
                  tailors work meticulously to bring your dream designs to life.
                </p>
                <p>
                  At Harigeet Creations, we are committed to providing premium quality, personalized service, and 
                  an unforgettable shopping experience. Thank you for being a part of our story.
                </p>
             </div>
             
             <div className="mt-10 pt-10 border-t border-champagne/30">
               <span className="block font-serif text-burgundy text-xl italic mb-2">Made with love, stitched with care.</span>
             </div>
           </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
