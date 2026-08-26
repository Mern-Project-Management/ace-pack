'use client';

import React from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';
import { Container } from '../ui/Container';
import { ShieldCheck, Award, ArrowRight, Play, CheckCircle2, Factory, Package, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F4] text-[#1A1D20] border-b border-[#E6DBC6]/40 overflow-hidden">
      <Container>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Stack with AOS scroll animation */}
          <div className="lg:col-span-6 relative" data-aos="fade-right" data-aos-duration="800">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 h-[380px] sm:h-[460px]">
              <img
                src="https://plus.unsplash.com/premium_photo-1701213306583-082f9bfd88b4?q=80&w=1200&auto=format&fit=crop"
                alt="AcePack Precision Moulding Facility"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Inset Badge Box with AOS delay */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl border border-[#E6DBC6] shadow-2xl flex items-center gap-3 max-w-[240px]"
            >
              <div className="w-10 h-10 rounded-full bg-[#b89858] text-white flex items-center justify-center shrink-0 shadow-md">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-[#1A1D20] leading-tight">ISO 9001:2015 Tested</p>
                <p className="text-[10px] text-gray-500 font-medium mt-0.5">Watch Plant Production</p>
              </div>
            </div>
          </div>

          {/* Right Column: Left-Aligned Content with AOS animation */}
          <div className="lg:col-span-6 flex flex-col text-left" data-aos="fade-left" data-aos-duration="800">
            
            <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-3">
              ABOUT ACEPACK PACKAGING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D20] tracking-tight leading-tight mb-6">
              Where Polymer Excellence Meets Food Safety
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-8">
              Pioneering high-precision injection-moulded plastic containers for QSR chains, cloud kitchens, and food brands across India and global markets. Manufactured exclusively from 100% prime virgin PP 05.
            </p>

            {/* 4 Animated Counter Facilities Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              
              <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-5 rounded-2xl border border-[#E6DBC6] shadow-xs hover:border-[#b89858] transition-colors">
                <div className="flex items-center gap-2 text-[#b89858] mb-1">
                  <Award className="w-5 h-5" />
                  <span className="text-2xl font-extrabold text-[#b89858]">
                    <CountUp end={15} duration={2.5} enableScrollSpy scrollSpyOnce />+
                  </span>
                </div>
                <span className="text-xs font-bold text-[#1A1D20] block">Years Legacy</span>
                <p className="text-[10px] text-gray-500 mt-0.5">Daman Plant Unit 1 & 2</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-5 rounded-2xl border border-[#E6DBC6] shadow-xs hover:border-[#b89858] transition-colors">
                <div className="flex items-center gap-2 text-[#b89858] mb-1">
                  <Factory className="w-5 h-5" />
                  <span className="text-2xl font-extrabold text-[#b89858]">
                    <CountUp end={1500000} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />+
                  </span>
                </div>
                <span className="text-xs font-bold text-[#1A1D20] block">Daily Output Pcs</span>
                <p className="text-[10px] text-gray-500 mt-0.5">Robotic Injection Presses</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-5 rounded-2xl border border-[#E6DBC6] shadow-xs hover:border-[#b89858] transition-colors">
                <div className="flex items-center gap-2 text-[#b89858] mb-1">
                  <Package className="w-5 h-5" />
                  <span className="text-2xl font-extrabold text-[#b89858]">
                    <CountUp end={11} duration={2.5} enableScrollSpy scrollSpyOnce />
                  </span>
                </div>
                <span className="text-xs font-bold text-[#1A1D20] block">Product Categories</span>
                <p className="text-[10px] text-gray-500 mt-0.5">Hinge, Portion, RO, Bento</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className="bg-white p-5 rounded-2xl border border-[#E6DBC6] shadow-xs hover:border-[#b89858] transition-colors">
                <div className="flex items-center gap-2 text-[#b89858] mb-1">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-2xl font-extrabold text-[#b89858]">
                    <CountUp end={100} duration={2.5} suffix="%" enableScrollSpy scrollSpyOnce />
                  </span>
                </div>
                <span className="text-xs font-bold text-[#1A1D20] block">Virgin PP 05 Food Grade</span>
                <p className="text-[10px] text-gray-500 mt-0.5">US FDA 21 CFR Certified</p>
              </div>

            </div>

            {/* Quote / Highlight */}
            <p className="text-xs font-semibold text-gray-700 italic mb-8 border-l-2 border-[#b89858] pl-4">
              &quot;Engineered to protect food taste, eliminate zero-leak spillage, and elevate customer unboxing.&quot;
            </p>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#b89858] hover:bg-[#9e8042] text-white text-xs font-bold px-7 py-3.5 rounded-full uppercase tracking-wider shadow-md transition-all"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};
