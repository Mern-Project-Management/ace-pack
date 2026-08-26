'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Target, Eye, Heart, History, ShieldCheck, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const milestones = [
    { year: '2010', title: 'Plant Launch', description: 'Established Unit 1 in Daman with 4 high-speed presses.' },
    { year: '2015', title: 'ISO & FDA Certified', description: 'Achieved ISO 9001:2015 and US FDA direct food contact compliance.' },
    { year: '2019', title: 'Robotic Automation', description: 'Integrated 100% automated IML labelling & robotic arms.' },
    { year: '2023', title: 'Unit 2 Expansion', description: 'Expanded capacity to 10,000+ metric tons annually across 2 plant units.' },
    { year: '2026', title: 'Global Export Leader', description: 'Exporting to 25+ countries across Middle East, Europe, and Asia.' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E6DBC6]/40">
      <Container>
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
            OUR HERITAGE & QUALITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D20] tracking-tight">
            About AcePack Packaging
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
            Pioneering high-precision injection-moulded plastic containers for restaurants, cloud kitchens, and food brands across India and worldwide.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#FAF8F4] p-8 rounded-3xl border-2 border-[#b89858]/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1D20] mb-3">Our Mission</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                To manufacture the safest, highest clarity, and leak-proof plastic food containers that empower food businesses to deliver fresh meals seamlessly.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF8F4] p-8 rounded-3xl border-2 border-[#b89858]/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1D20] mb-3">Our Vision</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                To become the global benchmark for eco-engineered polypropylene packaging solutions, trusted by 10,000+ food brands worldwide.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF8F4] p-8 rounded-3xl border-2 border-[#b89858]/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1D20] mb-3">Core Values</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Uncompromising hygiene standards, technological innovation in mould CAD, and unwavering dedication to customer fulfillment.
              </p>
            </div>
          </div>
        </div>

        {/* 15+ Years Growth Timeline */}
        <div className="bg-[#FAF8F4] p-8 sm:p-10 rounded-3xl border border-[#E6DBC6] shadow-sm mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-[#b89858] uppercase tracking-wider mb-2">
            <History className="w-4 h-4" /> 15+ Years Journey
          </div>
          <h3 className="text-2xl font-extrabold text-[#1A1D20] mb-8">Our Growth & Milestones</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E6DBC6] shadow-xs">
                <span className="text-2xl font-extrabold text-[#b89858] block mb-2">{m.year}</span>
                <h4 className="text-xs font-bold text-[#1A1D20] mb-1">{m.title}</h4>
                <p className="text-[11px] text-gray-600 leading-normal">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Certifications Bar */}
        <div className="bg-white p-8 rounded-3xl border-2 border-[#b89858]/60 shadow-md">
          <div className="flex items-center gap-2 text-xs font-bold text-[#b89858] uppercase tracking-wider mb-2">
            <Award className="w-4 h-4" /> Certified Excellence
          </div>
          <h3 className="text-2xl font-extrabold text-[#1A1D20] mb-6">Certifications & Quality Assurance</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-[#E6DBC6] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#b89858] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1A1D20]">ISO 9001:2015</h4>
                <p className="text-[10px] text-gray-500">Quality Management certified facility.</p>
              </div>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-[#E6DBC6] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#b89858] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1A1D20]">US FDA Approved</h4>
                <p className="text-[10px] text-gray-500">21 CFR 177.1520 food contact safe.</p>
              </div>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-[#E6DBC6] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#b89858] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1A1D20]">BPA Free Virgin PP</h4>
                <p className="text-[10px] text-gray-500">Non-toxic virgin polymer resin.</p>
              </div>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-[#E6DBC6] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#b89858] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1A1D20]">Cleanroom Facility</h4>
                <p className="text-[10px] text-gray-500">Dust-free hygienic bay.</p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
