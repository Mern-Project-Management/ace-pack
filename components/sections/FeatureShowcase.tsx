'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Flame, Lock, Layers, CheckCircle2 } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  const checklist = [
    '100% Virgin PP 05 Polypropylene (US FDA 21 CFR 177.1520 certified)',
    'Thermal resistance from -20°C deep freeze to +120°C microwave reheating',
    'Zero-leakage snap rim geometry prevents spills during delivery',
    'High clarity walls with customizable In-Mould Labelling (IML) branding'
  ];

  return (
    <section className="py-20 bg-[#FAF8F4] border-b border-[#E6DBC6]/40 overflow-hidden">
      <Container>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Checklist & Copy matching left alignment */}
          <div className="lg:col-span-6 flex flex-col text-left" data-aos="fade-right" data-aos-duration="800">
            
            <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-3">
              WHY CHOOSE ACEPACK
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D20] tracking-tight leading-tight mb-6">
              The Perfect Packaging Choice for Your Delivery Needs
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-8">
              We design and manufacture high-performance plastic containers tailored for quick-service restaurants, cloud kitchens, caterers, and food brands.
            </p>

            <div className="space-y-4 mb-8">
              {checklist.map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#E6DBC6] shadow-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#b89858] shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-[#1A1D20] leading-normal">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Large Photo Card matching right alignment */}
          <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="800">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 h-[380px] sm:h-[450px]">
              <img
                src="https://plus.unsplash.com/premium_photo-1664392020927-9344e87b378d?q=80&w=1200&auto=format&fit=crop"
                alt="AcePack Precision Food Packaging Line"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end text-left">
                <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-1">
                  1,500,000+ DAILY CONTAINER CAPACITY
                </span>
                <p className="text-base font-bold text-white">
                  Engineered with zero-touch 3-axis robotic automation
                </p>
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};
