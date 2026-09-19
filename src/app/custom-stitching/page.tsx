import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Scissors, Ruler, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Custom Stitching | Harigeet Creations",
  description: "Boutique services, custom stitching, perfect fitting, and designer outfits.",
};

export default function CustomStitchingPage() {
  return (
    <>
      <Header />
      
      <div className="bg-beige py-16 border-b border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-champagne font-serif italic text-xl mb-4 block">Boutique Services</span>
          <h1 className="text-4xl md:text-5xl font-serif text-burgundy mb-4">Custom Stitching</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the luxury of perfectly fitted garments. Our expert tailors and designers work closely with you to bring your dream outfit to life.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
           <div>
             <div className="relative aspect-[4/3] w-full bg-ivory shadow-xl border border-champagne/30 p-2">
                <Image 
                   src="/images/cat_custom.jpg"
                   alt="Harigeet Creations Stitching Services"
                   fill
                   className="object-cover"
                />
             </div>
           </div>
           
           <div>
             <h2 className="text-3xl font-serif text-burgundy mb-6">Your Vision. Our Craft.</h2>
             <p className="text-gray-700 mb-6 leading-relaxed">
               At Harigeet Creations, we understand that every individual is unique, and so are their fitting requirements. Our bespoke custom stitching service ensures that your garment is tailored specifically to your measurements, offering unparalleled comfort and style.
             </p>
             
             <ul className="space-y-4 mb-8">
               <li className="flex items-start">
                 <CheckCircle className="text-champagne mr-3 mt-1 flex-shrink-0" size={20} />
                 <div>
                   <h4 className="font-medium text-gray-900">Expert Designers</h4>
                   <p className="text-sm text-gray-600">Consult with our designers to choose the perfect style.</p>
                 </div>
               </li>
               <li className="flex items-start">
                 <CheckCircle className="text-champagne mr-3 mt-1 flex-shrink-0" size={20} />
                 <div>
                   <h4 className="font-medium text-gray-900">Perfect Fit</h4>
                   <p className="text-sm text-gray-600">Garments stitched to your exact measurements.</p>
                 </div>
               </li>
               <li className="flex items-start">
                 <CheckCircle className="text-champagne mr-3 mt-1 flex-shrink-0" size={20} />
                 <div>
                   <h4 className="font-medium text-gray-900">Premium Finish</h4>
                   <p className="text-sm text-gray-600">Impeccable finishing with high-quality threads and accessories.</p>
                 </div>
               </li>
               <li className="flex items-start">
                 <CheckCircle className="text-champagne mr-3 mt-1 flex-shrink-0" size={20} />
                 <div>
                   <h4 className="font-medium text-gray-900">On-Time Delivery</h4>
                   <p className="text-sm text-gray-600">We respect your time and ensure timely delivery of your outfit.</p>
                 </div>
               </li>
             </ul>
             
             <a href="#measurement-form" className="inline-block bg-burgundy text-ivory px-8 py-4 text-center uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors shadow-md hover-lift">
                Submit Online Measurements
             </a>
           </div>
        </div>

        <div className="bg-[#FDF8F5] p-10 lg:p-16 border border-champagne/30 text-center">
           <h2 className="text-3xl font-serif text-burgundy mb-4">Our Services</h2>
           <p className="text-gray-600 mb-12 max-w-2xl mx-auto">We offer a wide range of boutique stitching services to cater to all your ethnic wear needs.</p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center border border-champagne/50 mb-4">
                    <Scissors className="text-burgundy" size={24} />
                 </div>
                 <h4 className="font-medium text-gray-900 uppercase tracking-wider text-sm">Designer Blouses</h4>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center border border-champagne/50 mb-4">
                    <Ruler className="text-burgundy" size={24} />
                 </div>
                 <h4 className="font-medium text-gray-900 uppercase tracking-wider text-sm">Kurta Sets</h4>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center border border-champagne/50 mb-4">
                    <Scissors className="text-burgundy" size={24} />
                 </div>
                 <h4 className="font-medium text-gray-900 uppercase tracking-wider text-sm">Lehengas</h4>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center border border-champagne/50 mb-4">
                    <Ruler className="text-burgundy" size={24} />
                 </div>
                 <h4 className="font-medium text-gray-900 uppercase tracking-wider text-sm">Alterations</h4>
              </div>
           </div>
           
           <div className="mt-16">
              <h3 className="text-xl font-serif text-burgundy mb-2">Boutique and Stitching Learning is Available</h3>
              <p className="text-gray-600 mb-6">Interested in learning the art of stitching? Contact us for classes.</p>
              <a href="https://wa.me/918178350210" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent text-burgundy px-8 py-3 text-center uppercase tracking-widest font-medium border border-burgundy hover:bg-burgundy hover:text-ivory transition-colors">
                Enquire Now
              </a>
           </div>
        </div>

      </main>

      {/* Online Measurement Form Section */}
      <section className="bg-ivory py-20 relative overflow-hidden" id="measurement-form">
        <div className="absolute top-0 right-0 w-96 h-96 bg-champagne/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-burgundy mb-4">Submit Your Measurements Online</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Provide your exact sizing details below for a flawless bespoke fit. Our team will review your measurements and contact you to confirm your order details.
            </p>
          </div>

          <form className="texture-card p-8 md:p-12 rounded-2xl shadow-xl animate-fade-up delay-300 space-y-8">
            {/* Personal Details */}
            <div>
              <h3 className="text-lg font-serif text-burgundy border-b border-champagne/30 pb-2 mb-6">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">Full Name</label>
                  <input type="text" className="w-full bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">WhatsApp Number</label>
                  <input type="tel" className="w-full bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy" placeholder="+91 00000 00000" required />
                </div>
              </div>
            </div>

            {/* Garment Details */}
            <div>
              <h3 className="text-lg font-serif text-burgundy border-b border-champagne/30 pb-2 mb-6">Garment Details</h3>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">Garment Type</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy">
                    <option value="">Select Garment</option>
                    <option value="blouse">Designer Blouse</option>
                    <option value="lehenga">Lehenga Set</option>
                    <option value="kurta">Kurta / Suit Set</option>
                    <option value="gown">Indo-Western Gown</option>
                    <option value="other">Other (Please specify in notes)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Measurements */}
            <div>
              <h3 className="text-lg font-serif text-burgundy border-b border-champagne/30 pb-2 mb-6 flex justify-between items-end">
                <span>Measurements</span>
                <span className="text-xs text-gray-500 font-sans normal-case tracking-normal">(All measurements in inches)</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">Bust / Chest</label>
                  <input type="number" step="0.5" className="w-full bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy" placeholder="e.g. 36" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">Waist</label>
                  <input type="number" step="0.5" className="w-full bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy" placeholder="e.g. 30" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">Hips</label>
                  <input type="number" step="0.5" className="w-full bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy" placeholder="e.g. 40" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">Shoulder</label>
                  <input type="number" step="0.5" className="w-full bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy" placeholder="e.g. 15" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">Armhole</label>
                  <input type="number" step="0.5" className="w-full bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy" placeholder="e.g. 16" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">Desired Length</label>
                  <input type="number" step="0.5" className="w-full bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy" placeholder="e.g. 42" />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-700 font-medium mb-2">Additional Customizations / Notes</label>
              <textarea rows={4} className="w-full bg-white/50 border border-champagne/50 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-burgundy resize-none" placeholder="E.g., I want a deep U-neck, elbow-length sleeves, and tassels on the back..."></textarea>
            </div>

            <button type="button" className="w-full bg-burgundy text-ivory py-4 uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors shadow-md hover-lift">
              Submit Measurements
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
