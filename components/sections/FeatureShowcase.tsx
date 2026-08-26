'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { ShieldCheck, Flame, Lock, Sparkles, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: '100% Virgin PP 05 Material',
      description: 'US FDA 21 CFR 177.1520 certified food-grade polymer. Completely BPA-free and non-toxic.'
    },
    {
      icon: Flame,
      title: 'Extreme Thermal Range',
      description: 'Resists temperatures from -20°C deep freeze up to +120°C hot soup and microwave reheating.'
    },
    {
      icon: Lock,
      title: 'Zero-Leak Snap Rim Geometry',
      description: 'Hermetically tight rim seal prevents sauce and liquid spillage during motorcycle delivery.'
    },
    {
      icon: Sparkles,
      title: 'Custom IML Brand Labelling',
      description: 'Waterproof full-color graphics molded directly into container walls for high-impact branding.'
    }
  ];

  return (
    <section className="py-20 bg-[#111518] text-white border-b border-white/10 overflow-hidden">
      <Container>
        
        {/* Main Grid: Left Column 6 / Right Column 6 (10% Left Decrease, 10% Right Increase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Dark Studio Theme (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left" data-aos="fade-right" data-aos-duration="800">
            
            <div>
              <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-3">
                WHY CHOOSE ACEPACK PACKAGING
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                The Perfect Packaging Choice for Your Delivery Needs
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 max-w-xl">
                We engineer high-performance plastic food containers tailored for quick-service restaurants, cloud kitchens, caterers, and food brands across India and global markets.
              </p>
            </div>

            {/* 2x2 Feature Cards Grid with Dark Studio Styling & Motion Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    className="bg-[#050505] p-5 rounded-2xl border-2 border-[#b89858]/40 hover:border-[#b89858] shadow-md hover:shadow-2xl hover:shadow-[#b89858]/10 transition-all duration-300 group text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#b89858]/20 text-[#b89858] flex items-center justify-center mb-3 group-hover:bg-[#b89858] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-md font-bold text-white mb-1.5 group-hover:text-[#b89858] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Media Studio Stack Frame (lg:col-span-6 - Increased width 10%) */}
          <div className="lg:col-span-6 relative flex flex-col min-h-[480px]" data-aos="fade-left" data-aos-duration="800">
            
            {/* Main Featured Container Photo with Gold Border Glow */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#b89858]/60 hover:border-[#b89858] bg-[#050505] flex-1 w-full group">
              <img
                src="https://ik.imagekit.io/mikbqwyy0/AcePackaging/ChatGPT%20Image%20Aug%2026,%202026,%2012_02_11%20PM.png"
                alt="AcePack Precision Food Packaging Line"
                className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              
              {/* Dark Gradient Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8 flex flex-col justify-end text-left">
                <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-1">
                  ROBOTIC INJECTION MOULDING
                </span>
                <p className="text-lg font-extrabold text-white leading-snug">
                  1,500,000+ Daily Production Output
                </p>
              </div>
            </div>

        

          </div>

        </div>

      </Container>
    </section>
  );
};
