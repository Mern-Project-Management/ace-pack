'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Flame, Layers, Lock, Sparkles } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: '100% Virgin PP 05 Food Grade',
      description: 'US FDA 21 CFR 177.1520 certified virgin polypropylene resin free from toxic plasticizers and BPA.'
    },
    {
      icon: Flame,
      title: 'Microwave & Deep Freeze Safe',
      description: 'Thermal tolerance spanning -20°C to +120°C allows direct hot gravy filling and customer microwave reheating.'
    },
    {
      icon: Lock,
      title: 'Zero-Leak Snap Seal Rim',
      description: 'Precision injection-moulded locking rims prevent sauce seepage during two-wheeler delivery transport.'
    },
    {
      icon: Layers,
      title: 'Robotic IML Branding',
      description: 'Full-color In-Mould Labelling fused directly into plastic walls for waterproof, scratch-proof branding.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-[#E6DBC6]/40">
      <Container>
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
            WHY ACEPACK CONTAINERS
          </span>
          <h2 className="text-3xl font-extrabold text-[#1A1D20] tracking-tight">
            Engineered for Commercial Food Packaging
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F4] p-8 rounded-3xl border border-[#E6DBC6] hover:border-[#b89858] transition-all hover:shadow-lg text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center mb-6 border border-[#b89858]/30">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-[#1A1D20] mb-3">{f.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
