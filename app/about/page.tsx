import React from 'react';
import { Metadata } from 'next';
import { PageBanner } from '@/components/ui/PageBanner';
import { ShieldCheck, Target, Eye, Heart, Award, Users, CheckCircle2, History } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | AcePack Plastic Food Packaging Manufacturer',
  description: 'Learn about AcePack\'s 15+ year journey in high-precision injection-moulded plastic container manufacturing, ISO certifications, mission, vision, and esteemed clients.',
};

export default function AboutPage() {
  const milestones = [
    { year: '2010', title: 'Factory Establishment', description: 'Founded Unit 1 in Daman with 4 high-speed injection moulding machines.' },
    { year: '2015', title: 'FDA & ISO Certification', description: 'Achieved ISO 9001:2015 certification and US FDA food-contact clearance.' },
    { year: '2019', title: 'Robotic Automation Expansion', description: 'Commissioned 100% automated IML labelling and robotic pick-and-place arms.' },
    { year: '2023', title: 'Unit 2 Facility Launch', description: 'Expanded manufacturing capacity to 10,000+ metric tons annually across 2 plant units.' },
    { year: '2026', title: 'Global Export Network', description: 'Exporting premium food containers to over 25 countries across Middle East, Europe, and Asia.' }
  ];

  const coreValues = [
    { title: '100% Food Safety', description: 'Exclusively using prime virgin PP 05 polymer certified BPA-free and non-toxic.' },
    { title: 'Zero-Leak Precision', description: 'Engineered tight lid snap geometry to prevent spillage during motorcycle delivery.' },
    { title: 'Sustainable Recyclability', description: '100% recyclable polypropylene designed for circular reuse in consumer homes.' },
    { title: 'Customer First Delivery', description: 'Maintaining 99.8% on-time dispatch for QSR chains and cloud kitchens.' }
  ];

  return (
    <div className="bg-[#FAF8F4] min-h-screen text-[#1A1D20] pb-24">
      <PageBanner
        title="About AcePack Packaging"
        subtitle="Pioneering high-precision injection-moulded plastic containers for restaurants, cloud kitchens, and food brands across India and worldwide."
        badge="OUR HERITAGE & QUALITY"
        bgImage="/b9d572a7-af59-4e63-92e8-2971440edffe.png"
        breadcrumbs={[{ name: 'About Us', href: '/about' }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          
          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl border-2 border-[#b89858]/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1D20] mb-3">Our Mission</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  To manufacture the safest, highest clarity, and leak-proof plastic food containers that empower food businesses to deliver fresh meals seamlessly.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-[#b89858]/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1D20] mb-3">Our Vision</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  To become the global benchmark for eco-engineered polypropylene packaging solutions, trusted by 10,000+ food brands worldwide.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-[#b89858]/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1D20] mb-3">Core Values</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Uncompromising hygiene standards, technological innovation in mould CAD, and unwavering dedication to customer fulfillment.
                </p>
              </div>
            </div>
          </div>

          {/* Company History Timeline */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DBC6] shadow-sm mb-20">
            <div className="flex items-center gap-2 text-xs font-bold text-[#b89858] uppercase tracking-wider mb-2">
              <History className="w-4 h-4" /> 15+ Years Journey
            </div>
            <h2 className="text-3xl font-extrabold text-[#1A1D20] mb-8">Our Growth & Milestones</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {milestones.map((m, idx) => (
                <div key={idx} className="bg-[#FAF8F4] p-5 rounded-2xl border border-[#E6DBC6] relative">
                  <span className="text-2xl font-extrabold text-[#b89858] block mb-2">{m.year}</span>
                  <h4 className="text-xs font-bold text-[#1A1D20] mb-1">{m.title}</h4>
                  <p className="text-[11px] text-gray-600 leading-normal">{m.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-[#b89858]/60 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold text-[#b89858] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" /> Certified Excellence
            </div>
            <h2 className="text-3xl font-extrabold text-[#1A1D20] mb-6">Certifications & Quality Assurance</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#FAF8F4] p-5 rounded-2xl border border-[#E6DBC6] flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#b89858] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1D20]">ISO 9001:2015</h4>
                  <p className="text-[11px] text-gray-500 mt-1">Quality Management System certified facility.</p>
                </div>
              </div>

              <div className="bg-[#FAF8F4] p-5 rounded-2xl border border-[#E6DBC6] flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#b89858] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1D20]">US FDA Approved</h4>
                  <p className="text-[11px] text-gray-500 mt-1">FDA 21 CFR 177.1520 direct food contact safe.</p>
                </div>
              </div>

              <div className="bg-[#FAF8F4] p-5 rounded-2xl border border-[#E6DBC6] flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#b89858] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1D20]">BPA Free Virgin PP</h4>
                  <p className="text-[11px] text-gray-500 mt-1">Non-toxic, heavy metal free virgin polymer.</p>
                </div>
              </div>

              <div className="bg-[#FAF8F4] p-5 rounded-2xl border border-[#E6DBC6] flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#b89858] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1D20]">Cleanroom Certified</h4>
                  <p className="text-[11px] text-gray-500 mt-1">Dust-free hygienic manufacturing environment.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
