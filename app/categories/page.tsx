import React from 'react';
import { Metadata } from 'next';
import { PageBanner } from '@/components/ui/PageBanner';
import { productCategories } from '@/lib/data/products';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Product Categories | AcePack Plastic Food Packaging',
  description: 'Explore AcePack\'s 11 plastic food container categories including Hinge Cups, Portion Cups, RO-Series, RE Bento Boxes, Round Containers, Natraj Sweets, and Elite Containers.',
};

export default function CategoryListPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen text-[#1A1D20] pb-24">
      <PageBanner
        title="Plastic Food Container Categories"
        subtitle="Explore our 11 specialized packaging categories designed for food manufacturers, cloud kitchens, QSR chains, and bakeries."
        badge="CATALOG OF 11 CATEGORIES"
        bgImage="/b9d572a7-af59-4e63-92e8-2971440edffe.png"
        breadcrumbs={[{ name: 'Categories', href: '/categories' }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-custom">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E6DBC6]">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1D20]">All 11 Product Categories</h2>
              <p className="text-xs text-gray-500 mt-1">Select a category to view all model capacities, sizes, and specifications.</p>
            </div>

            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E6DBC6] shadow-xs text-xs text-gray-600 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#b89858]" /> 100% Virgin Food-Grade PP 05 Resins
            </div>
          </div>

          {/* 11 Categories Studio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const isDarkStudio = index % 5 === 0 || index % 6 === 5;
              return (
                <div
                  key={category.id}
                  className="bg-white border-2 border-[#b89858]/80 hover:border-[#b89858] rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl"
                >
                  <div>
                    <Link href={`/categories/${category.slug}`}>
                      <div className={`relative h-64 w-full flex items-center justify-center p-6 border-b border-[#b89858]/40 ${
                        isDarkStudio ? 'bg-[#050505]' : 'bg-white'
                      }`}>
                        <img
                          src={category.heroImage}
                          alt={category.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                        />
                        <span className="absolute top-3 right-3 bg-[#b89858] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {category.products.length} Models
                        </span>
                      </div>
                    </Link>

                    <div className="p-6 text-center">
                      <span className="text-[11px] font-bold text-[#b89858] uppercase tracking-wider block mb-1">
                        {category.subtitleName}
                      </span>
                      <Link href={`/categories/${category.slug}`}>
                        <h3 className="text-2xl font-bold text-[#1A1D20] tracking-tight group-hover:text-[#b89858] transition-colors">
                          {category.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                        {category.shortDescription}
                      </p>

                      <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                        {category.features.slice(0, 2).map((f, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-[11px] bg-[#FAF8F4] text-gray-700 px-2.5 py-0.5 rounded-full border border-[#E6DBC6]">
                            <CheckCircle2 className="w-3 h-3 text-[#b89858]" /> {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 text-center">
                    <Link
                      href={`/categories/${category.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#b89858] hover:bg-[#9e8042] text-white text-xs font-bold py-3 px-6 rounded-xl shadow-sm transition-all duration-200 uppercase tracking-wider"
                    >
                      <span>Explore Category Products</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
