import React from "react";
import Image from "next/image";

export default function CustomStitching() {
  return (
    <section className="py-20 bg-beige relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-dusty-rose/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-champagne/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
               <div className="absolute inset-0 border-2 border-champagne translate-x-4 translate-y-4"></div>
               <div className="relative h-full w-full bg-ivory p-2 shadow-lg hover-lift texture-card rounded-md">
                  <Image 
                    src="/images/cat_stitching.jpg" 
                    alt="Custom Stitching and Boutique Services"
                    fill
                    className="object-cover rounded-sm"
                  />
               </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-champagne font-serif italic text-xl mb-4 block">Your Vision. Our Craft.</span>
            <h2 className="text-4xl md:text-5xl font-serif text-burgundy mb-6">Custom Stitching & <br/> Boutique Services</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              From perfect measurements to thoughtful detailing, our custom stitching service brings your dream outfit to life. Experience authentic craftsmanship with a flawless fit.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center space-x-2">
                <span className="text-champagne">♦</span>
                <span className="text-sm font-medium text-gray-800 uppercase tracking-wider">Custom Blouse</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-champagne">♦</span>
                <span className="text-sm font-medium text-gray-800 uppercase tracking-wider">Suit Stitching</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-champagne">♦</span>
                <span className="text-sm font-medium text-gray-800 uppercase tracking-wider">Designer Outfits</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-champagne">♦</span>
                <span className="text-sm font-medium text-gray-800 uppercase tracking-wider">Perfect Fitting</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-champagne">♦</span>
                <span className="text-sm font-medium text-gray-800 uppercase tracking-wider">Alterations</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-champagne">♦</span>
                <span className="text-sm font-medium text-gray-800 uppercase tracking-wider">Kurta Stitching</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/custom-stitching" className="bg-burgundy text-ivory px-8 py-3 text-center uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors shadow-md">
                Book Custom Stitching
              </a>
              <a href="https://wa.me/918178350210" target="_blank" rel="noopener noreferrer" className="bg-transparent text-burgundy px-8 py-3 text-center uppercase tracking-widest font-medium border border-burgundy hover:bg-burgundy/5 transition-colors">
                Enquire Now
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
