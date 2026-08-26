'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { ArrowRight, Eye } from 'lucide-react';

const galleryItems = [
  { title: 'Hinge Cups & Sauce Containers', image: 'https://plus.unsplash.com/premium_photo-1664392020927-9344e87b378d?q=80&w=800&auto=format&fit=crop' },
  { title: 'RO Series Round Gravy Tubs', image: 'https://plus.unsplash.com/premium_photo-1701213306445-9874fe01971a?w=800&auto=format&fit=crop' },
  { title: 'RE Bento Meal Delivery Boxes', image: 'https://plus.unsplash.com/premium_photo-1701213306583-082f9bfd88b4?w=800&auto=format&fit=crop' },
  { title: 'Portion Control Cups', image: 'https://plus.unsplash.com/premium_photo-1701213306476-132f16a0a01e?w=800&auto=format&fit=crop' }
];

export const GallerySection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF8F4] border-b border-[#E6DBC6]/40">
      <Container>
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
              VISUAL GALLERY
            </span>
            <h2 className="text-3xl font-extrabold text-[#1A1D20] tracking-tight">
              Container Product Gallery
            </h2>
          </div>

          <Link
            href="/gallery"
            className="text-xs font-bold text-[#b89858] hover:underline uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#050505] rounded-3xl overflow-hidden border-2 border-[#b89858]/60 hover:border-[#b89858] shadow-sm hover:shadow-xl transition-all duration-300 relative group h-64 flex items-center justify-center p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-white leading-tight">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
