import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Harigeet Creations",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <div className="bg-beige py-16 border-b border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-champagne font-serif italic text-xl mb-4 block">Let's Connect</span>
          <h1 className="text-4xl md:text-5xl font-serif text-burgundy mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We would love to hear from you. Reach out to us for any queries, custom stitching appointments, or feedback.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
           
           {/* Contact Info */}
           <div className="w-full lg:w-1/3 space-y-10">
              <div>
                 <h3 className="text-xl font-serif text-burgundy mb-6 border-b border-champagne/30 pb-2">Store Information</h3>
                 <ul className="space-y-6">
                   <li className="flex items-start space-x-4">
                     <div className="w-10 h-10 rounded-full bg-ivory border border-champagne/50 flex items-center justify-center flex-shrink-0 text-burgundy">
                        <MapPin size={20} />
                     </div>
                     <div>
                       <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                       <p className="text-sm text-gray-600 leading-relaxed">
                         B-159, Sec-16, Bhagwali Colony,<br/>
                         Shastri Nagar, Ghaziabad,<br/>
                         Uttar Pradesh - 201002, India
                       </p>
                     </div>
                   </li>
                   
                   <li className="flex items-start space-x-4">
                     <div className="w-10 h-10 rounded-full bg-ivory border border-champagne/50 flex items-center justify-center flex-shrink-0 text-burgundy">
                        <Phone size={20} />
                     </div>
                     <div>
                       <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                       <a href="tel:8178350210" className="text-sm text-gray-600 hover:text-burgundy">8178350210</a>
                     </div>
                   </li>
                   
                   <li className="flex items-start space-x-4">
                     <div className="w-10 h-10 rounded-full bg-ivory border border-champagne/50 flex items-center justify-center flex-shrink-0 text-burgundy">
                        <Mail size={20} />
                     </div>
                     <div>
                       <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                       <a href="mailto:harigeetcreations@gmail.com" className="text-sm text-gray-600 hover:text-burgundy">harigeetcreations@gmail.com</a>
                     </div>
                   </li>
                   
                   <li className="flex items-start space-x-4">
                     <div className="w-10 h-10 rounded-full bg-ivory border border-champagne/50 flex items-center justify-center flex-shrink-0 text-burgundy">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                     </div>
                     <div>
                       <h4 className="font-medium text-gray-900 mb-1">Instagram</h4>
                       <a href="https://instagram.com/harigeet.creations" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-burgundy">@harigeet.creations</a>
                     </div>
                   </li>
                 </ul>
              </div>
              
              <div className="bg-[#FDF8F5] p-6 border border-champagne/30">
                 <h4 className="font-medium text-burgundy flex items-center mb-3">
                    <Clock size={18} className="mr-2" /> Business Hours
                 </h4>
                 <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                       <span>Monday - Saturday:</span>
                       <span>10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                       <span>Sunday:</span>
                       <span>Closed</span>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Contact Form */}
           <div className="w-full lg:w-2/3">
              <div className="bg-white p-8 lg:p-10 border border-champagne/30 shadow-sm">
                 <h2 className="text-2xl font-serif text-burgundy mb-6">Send us a Message</h2>
                 <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                          <input type="text" className="w-full border border-champagne/50 px-4 py-3 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy bg-ivory/30" />
                       </div>
                       <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                          <input type="text" className="w-full border border-champagne/50 px-4 py-3 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy bg-ivory/30" />
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                          <input type="email" className="w-full border border-champagne/50 px-4 py-3 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy bg-ivory/30" />
                       </div>
                       <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input type="tel" className="w-full border border-champagne/50 px-4 py-3 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy bg-ivory/30" />
                       </div>
                    </div>
                    
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                       <select className="w-full border border-champagne/50 px-4 py-3 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy bg-ivory/30 appearance-none">
                          <option>General Enquiry</option>
                          <option>Custom Stitching Appointment</option>
                          <option>Order Status</option>
                          <option>Returns & Refunds</option>
                       </select>
                    </div>
                    
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                       <textarea rows={5} className="w-full border border-champagne/50 px-4 py-3 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy bg-ivory/30"></textarea>
                    </div>
                    
                    <button type="submit" className="bg-burgundy text-ivory px-10 py-4 text-center uppercase tracking-widest font-medium hover:bg-burgundy-dark transition-colors shadow-md">
                       Send Message
                    </button>
                 </form>
              </div>
           </div>
           
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
