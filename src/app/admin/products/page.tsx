"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PlusCircle, Edit, Trash2 } from "lucide-react";

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // We will fetch real products from our database here
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await fetch(`/api/products/${id}`, { method: "DELETE" });
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-[#1a0508]">Manage Products</h1>
        <Link 
          href="/admin/products/add"
          className="flex items-center gap-2 bg-[#1a0508] text-white px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#1a0508] transition-colors shadow-sm"
        >
          <PlusCircle size={20} /> Add New Product
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="p-12 text-center">
            <h3 className="text-xl font-serif text-[#1a0508] mb-2">No Products Yet</h3>
            <p className="text-gray-500 mb-6">You haven't added any products to your database.</p>
            <Link href="/admin/products/add" className="text-[#D4AF37] hover:underline font-medium">
              + Add your first product
            </Link>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 text-sm font-semibold text-gray-600">Product</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Category</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Price (?)</th>
                <th className="p-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      {product.image && (
                        <img src={product.image} alt={product.name} className="w-12 h-16 object-cover rounded-md border border-gray-200" />
                      )}
                      <span className="font-medium text-[#1a0508]">{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600 capitalize">{product.category.toLowerCase()}</td>
                  <td className="p-4 text-sm text-gray-600">?{product.price}</td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg mr-2 transition-colors" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}