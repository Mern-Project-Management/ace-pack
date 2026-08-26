import React from 'react';
import { Metadata } from 'next';
import { PageBanner } from '@/components/ui/PageBanner';

export const metadata: Metadata = {
  title: 'Container Visual Gallery | AcePack Food Packaging',
  description: 'Explore AcePack\'s high-precision plastic food container product gallery, cleanroom manufacturing facility, and custom IML branded products.',
};

const galleryItems = [
  { id: 1, title: 'Hinge Cups & Sauce Containers', category: 'Takeaway Packaging', image: '/images/media_1787717762050.jpg' },
  { id: 2, title: 'RO Series Round Gravy Tubs', category: 'Soup & Curry Tubs', image: 'https://images.unsplash.com/photo-1581059474347-833e80d81ba8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, title: 'RE Bento Meal Delivery Boxes', category: 'Cloud Kitchen Combos', image: '/50d728a7-e02c-49d9-b530-58a7db8a6ecc.png' },
  { id: 4, title: 'Portion Control Cups', category: 'Side Condiments', image: '/b9d572a7-af59-4e63-92e8-2971440edffe.png' },
  { id: 5, title: 'Custom IML Branded Packaging', category: 'In-Mould Labelling', image: '/images/media_1787711507848.png' },
  { id: 6, title: 'High-Precision Plant Container Production', category: 'Plant Facility', image: '/images/media_1787712717089.png' }
];

export default function GalleryPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen text-[#1A1D20] pb-24">
      <PageBanner
        title="Visual Product & Plant Gallery"
        subtitle="High-resolution imagery of our injection-moulded plastic containers, cleanroom production environment, and custom IML branded products."
        badge="PRODUCT & PLANT GALLERY"
        bgImage="/50d728a7-e02c-49d9-b530-58a7db8a6ecc.png"
        breadcrumbs={[{ name: 'Gallery', href: '/gallery' }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#050505] rounded-3xl overflow-hidden border-2 border-[#b89858]/60 hover:border-[#b89858] shadow-sm hover:shadow-xl transition-all duration-300 relative group h-72 flex items-center justify-center p-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-extrabold text-[#b89858] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
