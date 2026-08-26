'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const FaqSection: React.FC = () => {
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
    <section className="py-16 sm:py-20 bg-white border-b border-[#E6DBC6]/40">
      <Container>
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
            HELP & FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D20] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
            Clear answers about our plastic food containers, polymer safety certifications, custom printing, and shipping logistics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#FAF8F4] p-6 sm:p-8 rounded-3xl border border-[#E6DBC6] shadow-sm">
              <h3 className="text-base font-bold text-[#1A1D20] mb-3 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#b89858] shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
