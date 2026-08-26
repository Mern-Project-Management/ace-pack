'use client';

import React from 'react';
import Link from 'next/link';
import { productCategories } from '@/lib/data/products';
import { Container } from '../ui/Container';
import { ArrowRight } from 'lucide-react';

export const CategoryShowcase: React.FC = () => {
  const showcaseCategories = productCategories.slice(0, 3);

  return (
    <section className="py-20 bg-[#FAF8F4] text-[#1A1D20] border-b border-[#E6DBC6]/40 overflow-hidden">
      <Container>
        
        {/* Left-Aligned Header matching user instruction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" data-aos="fade-right">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
              OUR PRODUCT CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D20] tracking-tight">
              Premium Packaging Crafted for Every Food
            </h2>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 bg-[#b89858] hover:bg-[#9e8042] text-white text-xs font-bold px-6 py-3 rounded-full uppercase tracking-wider shadow transition-all shrink-0 self-start md:self-auto"
          >
            <span>View All 11 Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Light Cover Image Showcase Cards Grid with Increased Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseCategories.map((category, idx) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white rounded-2xl overflow-hidden border border-[#E6DBC6] hover:border-[#b89858] transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group text-left min-h-[460px]"
            >
              <div>
                {/* Full Width Cover Image Box (Increased Height h-64 sm:h-72) */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={category.heroImage}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-[#b89858] text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow">
                    {category.subtitleName}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-extrabold text-[#1A1D20] mb-2 group-hover:text-[#b89858] transition-colors leading-snug">
                    {category.name}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 line-clamp-2 leading-relaxed mb-4">
                    {category.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-[#b89858]">
                <span>{category.products.length} Models Available</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
};
