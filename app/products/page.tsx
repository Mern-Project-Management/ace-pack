import React from 'react';
import Link from 'next/link';
import { productCategories } from '@/lib/data/products';
import { PageBanner } from '@/components/ui/PageBanner';
import { InfiniteCardCarousel } from '@/components/products/InfiniteCardCarousel';
import { ShieldCheck, ArrowRight, Box } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products Catalog | AcePack Plastic Food Packaging',
  description: 'Explore AcePack\'s complete catalog of plastic food containers, portion cups, hinged cups, round tubs, bento boxes, and confectionery packaging.',
};

export default function ProductsPage() {
  const allProductsList = productCategories.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      categoryName: cat.name,
      categorySlug: cat.slug
    }))
  );

  return (
    <div className="bg-[#FAF8F4] min-h-screen text-[#1A1D20] pb-24">
      <PageBanner
        title="All Products Catalog"
        subtitle="Explore our full collection of 100% food-grade polypropylene packaging models designed for QSR delivery, cloud kitchens, caterers, and food brands."
        badge="COMPLETE PRODUCT CATALOG"
        bgImage="/b9d572a7-af59-4e63-92e8-2971440edffe.png"
        breadcrumbs={[{ name: 'All Products', href: '/products' }]}
      />

      {/* Infinite 3D card carousel — browse by category */}
      <section className="py-16 md:py-20 bg-[#111518] overflow-hidden">
        <div className="container-custom text-center mb-10">
          <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
            Browse by Category
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Drag through our 11 product lines</h2>
        </div>
        <InfiniteCardCarousel
          cards={productCategories.map((cat) => ({
            id: cat.id,
            slug: cat.slug,
            title: cat.name,
            subtitle: cat.shortDescription,
          }))}
        />
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E6DBC6]">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1D20] flex items-center gap-2">
                <Box className="w-6 h-6 text-[#b89858]" />
                <span>Showing All {allProductsList.length} Product Models</span>
              </h2>
              <p className="text-xs text-gray-500 mt-1">Direct factory wholesale rates available for bulk orders.</p>
            </div>

            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E6DBC6] shadow-xs text-xs text-gray-600 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#b89858]" /> ISO 9001:2015 & FDA Certified Food Grade
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProductsList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border-2 border-[#b89858]/70 hover:border-[#b89858] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 bg-[#050505] p-6 flex items-center justify-center border-b border-[#E6DBC6]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#b89858] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#E6DBC6]">
                      {item.categoryName}
                    </span>
                    <span className="absolute top-3 right-3 bg-[#b89858] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {item.capacity}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A1D20] mb-4 group-hover:text-[#b89858] transition-colors">
                      {item.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-3 text-xs bg-[#FAF8F4] p-3.5 rounded-2xl border border-[#E6DBC6] mb-4">
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase font-semibold block">Capacity</span>
                        <span className="font-bold text-[#b89858]">{item.capacity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase font-semibold block">Material</span>
                        <span className="font-bold text-[#1A1D20]">{item.material}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase font-semibold block">Food Grade</span>
                        <span className="font-bold text-emerald-600">Yes (BPA Free)</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase font-semibold block">Quality</span>
                        <span className="font-bold text-[#1A1D20]">{item.quality}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 bg-[#111518] hover:bg-black text-white text-xs font-bold py-3 rounded-xl text-center uppercase tracking-wider transition-colors"
                  >
                    Inquire Now
                  </Link>

                  <Link
                    href={`/categories/${item.categorySlug}/${item.product_slug}`}
                    className="flex-1 bg-[#b89858] hover:bg-[#9e8042] text-white text-xs font-bold py-3 rounded-xl text-center uppercase tracking-wider transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
