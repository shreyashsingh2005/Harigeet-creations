"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "GARMENTS",
    price: "",
    mrp: "",
    image: "", // We will implement Vercel Blob file upload later, using direct URL for now
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          mrp: parseFloat(formData.mrp),
        }),
      });

      if (res.ok) {
        router.push("/admin/products");
      } else {
        alert("Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-serif text-[#1a0508] mb-8">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
          <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D4AF37] focus:border-[#D4AF37]" placeholder="e.g. Maharaja Royal Lehenga" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D4AF37] focus:border-[#D4AF37]">
            <option value="GARMENTS">Garments</option>
            <option value="JEWELLERY">Jewellery</option>
            <option value="ACCESSORIES">Accessories</option>
            <option value="FABRICS">Fabrics</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Selling Price (?)</label>
            <input required type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D4AF37] focus:border-[#D4AF37]" placeholder="e.g. 15000" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">MRP (?)</label>
            <input required type="number" value={formData.mrp} onChange={e => setFormData({...formData, mrp: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D4AF37] focus:border-[#D4AF37]" placeholder="e.g. 20000" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
          <input required type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D4AF37] focus:border-[#D4AF37]" placeholder="/images/p1.jpg or https://..." />
          <p className="text-xs text-gray-500 mt-2">Note: Later we will add a drag-and-drop file uploader using Vercel Blob.</p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
          <button type="button" onClick={() => router.back()} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
          <button type="submit" disabled={loading} className="px-6 py-2 bg-[#1a0508] text-white rounded-lg hover:bg-[#D4AF37] hover:text-[#1a0508] transition-colors shadow-sm disabled:opacity-50">
            {loading ? "Saving..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
}