'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { ChevronDown, HelpCircle, ShieldCheck, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What material resins are used in AcePack containers?',
      answer: 'All AcePack containers are manufactured using 100% prime virgin Polypropylene (PP 05) certified under US FDA 21 CFR 177.1520 regulations. They are 100% BPA-free, heavy metal free, and food-contact safe.'
    },
    {
      question: 'Are your plastic containers microwave and freezer safe?',
      answer: 'Yes, our PP 05 material has a operating thermal range spanning -20°C (deep freeze) up to +120°C (hot gravy filling and microwave reheating).'
    },
    {
      question: 'How do Hinge Cups prevent sauce leakage during delivery?',
      answer: 'Our Hinge Cups feature a built-in snap-tight lid rim geometry that creates an airtight hermetic seal, preventing liquid spillage even during rough motorcycle transit.'
    },
    {
      question: 'What is the minimum order quantity (MOQ) for factory direct orders?',
      answer: 'Standard stock containers have a minimum order quantity of 1 master carton (typically 1,000–2,000 Pcs). Custom color or IML printed runs start from 25,000 Pcs.'
    },
    {
      question: 'Where is your manufacturing facility located?',
      answer: 'Our modern automated injection moulding facility is located in Daman (U.T.), India, with 2 plant units capable of producing over 1.5 million container units daily.'
    }
  ];

  return (
    <section className="py-20 bg-[#111518] text-white border-b border-white/10">
      <Container>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo Card with Overlay Box matching Section 11 of reference mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 h-[420px]">
              <img
                src="https://plus.unsplash.com/premium_photo-1701213306445-9874fe01971a?w=1000&auto=format&fit=crop"
                alt="AcePack Packaging Technical Support"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <div className="bg-[#050505]/95 backdrop-blur-md p-5 rounded-2xl border border-white/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#b89858] mb-1">
                    <PhoneCall className="w-4 h-4" /> Direct Packaging Hotline
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Have custom container inquiries?</h4>
                  <p className="text-[11px] text-gray-400">Our polymer engineers respond within 4 business hours.</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#b89858] hover:bg-[#9e8042] text-white text-[11px] font-bold px-4 py-2 rounded-xl uppercase tracking-wider mt-3 transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion FAQ List matching Section 11 */}
          <div className="lg:col-span-7 flex flex-col">
            
            <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-3">
              HELP & FAQ
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Everything You Need to Know About Food Packaging
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#050505] rounded-2xl border border-white/15 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-[#b89858] transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-[#b89858] shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#b89858] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-gray-400 leading-relaxed border-t border-white/10">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};
