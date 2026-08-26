'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { productCategories } from '@/lib/data/products';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F4]">
      <Container>
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
            GET IN TOUCH WITH ACEPACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D20] tracking-tight">
            Contact Our Factory & Sales Team
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
            Request wholesale pricing, inquire about custom IML branding, or speak with our polymer packaging engineers in Daman.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white p-8 rounded-3xl border border-[#E6DBC6] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center shrink-0 border border-[#b89858]/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#b89858] uppercase tracking-wider block mb-1">Factory Location</span>
                <h3 className="text-base font-bold text-[#1A1D20] mb-1">Daman Plant Unit</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Plot No. 42/1, Government Industrial Estate, Masat, Daman - 396210, U.T., India.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E6DBC6] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center shrink-0 border border-[#b89858]/30">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#b89858] uppercase tracking-wider block mb-1">Direct Sales Hotline</span>
                <h3 className="text-base font-bold text-[#1A1D20] mb-1">+91 98000 00000 / +91 98251 00000</h3>
                <p className="text-xs text-gray-600">Available Monday through Saturday, 9:00 AM – 7:00 PM IST.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E6DBC6] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#b89858]/15 text-[#b89858] flex items-center justify-center shrink-0 border border-[#b89858]/30">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#b89858] uppercase tracking-wider block mb-1">Official Inquiry Email</span>
                <h3 className="text-base font-bold text-[#1A1D20] mb-1">info@acepack.co.in</h3>
                <p className="text-xs text-gray-600">Guaranteed response within 4 business hours.</p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#b89858]/70 shadow-lg">
            <h3 className="text-2xl font-extrabold text-[#1A1D20] mb-2">Send Factory Inquiry</h3>
            <p className="text-xs text-gray-500 mb-8">Fill in your requirements below to receive a wholesale catalog & sample kit.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-[#1A1D20] uppercase block mb-1">Full Name *</label>
                  <input type="text" placeholder="John Doe" required className="w-full bg-[#FAF8F4] border border-[#E6DBC6] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#b89858]" />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#1A1D20] uppercase block mb-1">Company / Brand *</label>
                  <input type="text" placeholder="Ace Cloud Kitchens" required className="w-full bg-[#FAF8F4] border border-[#E6DBC6] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#b89858]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-[#1A1D20] uppercase block mb-1">Email Address *</label>
                  <input type="email" placeholder="john@company.com" required className="w-full bg-[#FAF8F4] border border-[#E6DBC6] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#b89858]" />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#1A1D20] uppercase block mb-1">Phone / WhatsApp *</label>
                  <input type="tel" placeholder="+91 98000 00000" required className="w-full bg-[#FAF8F4] border border-[#E6DBC6] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#b89858]" />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#1A1D20] uppercase block mb-1">Container Category of Interest</label>
                <select className="w-full bg-[#FAF8F4] border border-[#E6DBC6] rounded-xl px-4 py-3 text-xs text-gray-700 focus:outline-none focus:border-[#b89858]">
                  <option value="">Select a container line...</option>
                  {productCategories.map((cat) => (
                    <option key={cat.id} value={cat.slug}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#1A1D20] uppercase block mb-1">Detailed Message / Order Quantity *</label>
                <textarea rows={4} placeholder="Please specify container size, monthly volume requirement, and shipping location..." required className="w-full bg-[#FAF8F4] border border-[#E6DBC6] rounded-xl p-4 text-xs focus:outline-none focus:border-[#b89858]"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#b89858] hover:bg-[#9e8042] text-white font-bold py-4 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2">
                <span>Submit Wholesale Quotation Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1 mt-2">
                <Lock className="w-3 h-3 text-[#b89858]" /> Your information is 100% confidential & protected
              </p>
            </form>
          </div>

        </div>

      </Container>
    </section>
  );
};
