import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ProductCard from "@/components/ui/ProductCard";
import { sampleProducts, categories } from "@/data/products";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((c) => ({
    slug: c.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const categoryName = resolvedParams.slug.replace(/-/g, " ");
  
  // Find products that match this category
  const products = sampleProducts.filter(p => 
    p.category.toLowerCase() === categoryName
  );

  const categoryData = categories.find(c => c.name.toLowerCase() === categoryName);

  if (!categoryData && products.length === 0) {
    notFound();
  }

  return (
    <>
      <Header />
      
      <div className="bg-ivory py-16 border-b border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-burgundy mb-4 capitalize">{categoryName}</h1>
          {categoryData && (
            <p className="text-gray-600 max-w-2xl mx-auto">{categoryData.description}</p>
          )}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[50vh]">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl text-gray-500">More products coming soon to this collection.</h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
