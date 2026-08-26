'use client';

import React from 'react';
import Link from 'next/link';
import { productCategories } from '@/lib/data/products';
import { Container } from '../ui/Container';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const CategoryShowcase: React.FC = () => {
  const featuredCategories = productCategories.slice(0, 6);

  return (
    <section className="py-16 bg-[#FAF8F4] border-b border-[#E6DBC6]/40">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
              FEATURED CONTAINER LINES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D20] tracking-tight">
              Plastic Food Containers by Category
            </h2>
          </div>

          <Link
            href="/categories"
            className="text-xs font-bold text-[#b89858] hover:underline uppercase tracking-wider flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View All 11 Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl border-2 border-[#b89858]/60 hover:border-[#b89858] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 bg-[#050505] p-6 flex items-center justify-center border-b border-[#E6DBC6]">
                  <img
                    src={category.heroImage}
                    alt={category.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                  />
                  <span className="absolute top-3 right-3 bg-[#b89858] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {category.products.length} Models
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-bold text-[#b89858] uppercase tracking-wider block mb-1">
                    {category.subtitleName}
                  </span>
                  <Link href={`/categories/${category.slug}`}>
                    <h3 className="text-xl font-bold text-[#1A1D20] mb-2 group-hover:text-[#b89858] transition-colors">
                      {category.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/categories/${category.slug}`}
                  className="w-full bg-[#FAF8F4] hover:bg-[#b89858] text-[#1A1D20] hover:text-white border border-[#E6DBC6] hover:border-[#b89858] text-xs font-bold py-3 rounded-xl text-center uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Explore Series</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
