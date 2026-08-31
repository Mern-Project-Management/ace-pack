import React from 'react';
import { Metadata } from 'next';
import { PageBanner } from '@/components/ui/PageBanner';
import { Reveal } from '@/components/ui/Reveal';
import { SplitHeading } from '@/components/ui/SplitHeading';
import { AboutStatsBand } from '@/components/sections/AboutStatsBand';
import { CompanyOverview } from '@/components/sections/about/CompanyOverview';
import { MDDesk } from '@/components/sections/about/MDDesk';
import { LeadershipTeam } from '@/components/sections/about/LeadershipTeam';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { ManufacturingPillars } from '@/components/sections/ManufacturingPillars';
import {
  ShieldCheck,
  Target,
  Eye,
  Heart,
  Award,
  History,
  Lock,
  Recycle,
  Truck,
} from 'lucide-react';

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
    { title: '100% Food Safety', description: 'Exclusively using prime virgin PP 05 polymer certified BPA-free and non-toxic.', icon: ShieldCheck },
    { title: 'Zero-Leak Precision', description: 'Engineered tight lid snap geometry to prevent spillage during motorcycle delivery.', icon: Lock },
    { title: 'Sustainable Recyclability', description: '100% recyclable polypropylene designed for circular reuse in consumer homes.', icon: Recycle },
    { title: 'Customer First Delivery', description: 'Maintaining 99.8% on-time dispatch for QSR chains and cloud kitchens.', icon: Truck }
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

      <AboutStatsBand />

      {/* Company Overview */}
      <CompanyOverview />

      <section className="py-16 md:py-20">
        <div className="container-custom">

          {/* Company History / Our Journey (Timeline) */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DBC6] shadow-sm mb-20">
            <Reveal type="fade-right">
              <div className="flex items-center gap-2 text-xs font-bold text-[#b89858] uppercase tracking-wider mb-2">
                <History className="w-4 h-4" /> 15+ Years Journey
              </div>
            </Reveal>
            <SplitHeading>
              <h2 className="text-3xl font-extrabold text-[#1A1D20] mb-8">Our Growth & Milestones</h2>
            </SplitHeading>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {/* Connecting line across the timeline on desktop */}
              <div aria-hidden="true" className="hidden md:block absolute top-[38px] left-[10%] right-[10%] h-px bg-[#E6DBC6]" />
              {milestones.map((m, idx) => (
                <Reveal key={m.year} type="fade-up" delay={idx * 0.1}>
                  <div className="group bg-[#FAF8F4] p-5 rounded-2xl border border-[#E6DBC6] hover:border-[#b89858] hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative">
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute -top-[29px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#b89858] ring-4 ring-[#FAF8F4] group-hover:scale-125 transition-transform duration-300"
                    />
                    <span className="text-2xl font-extrabold text-[#b89858] block mb-2">{m.year}</span>
                    <h4 className="text-xs font-bold text-[#1A1D20] mb-1">{m.title}</h4>
                    <p className="text-[11px] text-gray-600 leading-normal">{m.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MD's Desk / Managing Director's Message */}
      <MDDesk />

      <section className="py-16 md:py-20">
        <div className="container-custom">

          {/* Vision, Mission & Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Target, title: 'Our Mission', text: 'To manufacture the safest, highest clarity, and leak-proof plastic food containers that empower food businesses to deliver fresh meals seamlessly.' },
              { icon: Eye, title: 'Our Vision', text: 'To become the global benchmark for eco-engineered polypropylene packaging solutions, trusted by 10,000+ food brands worldwide.' },
              { icon: Heart, title: 'Core Values', text: 'Uncompromising hygiene standards, technological innovation in mould CAD, and unwavering dedication to customer fulfillment.' },
            ].map((card, idx) => (
              <Reveal key={card.title} type="fade-up" delay={idx * 0.12}>
                <div className="group bg-white p-8 rounded-3xl border-2 border-[#b89858]/60 shadow-sm hover:shadow-xl hover:border-[#b89858] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#b89858] group-hover:text-white transition-all duration-300">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1D20] mb-3">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Why Choose AcePack — extends Core Values with concrete USPs */}
          <div className="mb-20">
            <Reveal type="fade-right">
              <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
                Why Food Brands Choose Us
              </span>
            </Reveal>
            <SplitHeading>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-10">
                Built for Kitchens That Can&apos;t Afford Mistakes
              </h2>
            </SplitHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => (
                <Reveal key={value.title} type="fade-up" delay={idx * 0.1}>
                  <div className="group bg-white p-6 rounded-2xl border border-[#E6DBC6] hover:border-[#b89858] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-11 h-11 rounded-xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center mb-4 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#1A1D20] mb-2">{value.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <LeadershipTeam />

        </div>
      </section>

      {/* Infrastructure & Facilities */}
      <CapabilitiesSection />

      {/* Manufacturing Capabilities */}
      <ManufacturingPillars />

      <section className="py-16 md:py-20">
        <div className="container-custom">

          {/* Certifications & Compliance */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-[#b89858]/60 shadow-md">
            <Reveal type="fade-right">
              <div className="flex items-center gap-2 text-xs font-bold text-[#b89858] uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" /> Certified Excellence
              </div>
            </Reveal>
            <SplitHeading>
              <h2 className="text-3xl font-extrabold text-[#1A1D20] mb-6">Certifications & Quality Assurance</h2>
            </SplitHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'ISO 9001:2015', desc: 'Quality Management System certified facility.' },
                { title: 'US FDA Approved', desc: 'FDA 21 CFR 177.1520 direct food contact safe.' },
                { title: 'BPA Free Virgin PP', desc: 'Non-toxic, heavy metal free virgin polymer.' },
                { title: 'Cleanroom Certified', desc: 'Dust-free hygienic manufacturing environment.' },
              ].map((cert, idx) => (
                <Reveal key={cert.title} type="fade-up" delay={idx * 0.1}>
                  <div className="group bg-[#FAF8F4] p-5 rounded-2xl border border-[#E6DBC6] hover:border-[#b89858] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-3 h-full">
                    <ShieldCheck className="w-6 h-6 text-[#b89858] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1A1D20]">{cert.title}</h4>
                      <p className="text-[11px] text-gray-500 mt-1">{cert.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
