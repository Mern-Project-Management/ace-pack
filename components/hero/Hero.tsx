'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Sparkles, Award, Box, Flame } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1701213306583-082f9bfd88b4?q=80&w=1200&auto=format&fit=crop',
    badge: '100% VIRGIN PP 05 FOOD GRADE',
    title: 'High-Precision Plastic Food Container Manufacturing',
    description: 'Engineered for cloud kitchens, QSR chains, and dairy brands. Microwave-safe, leak-proof rim geometry, and high stacking strength.',
    productName: 'AcePack Heavy-Duty Container Series',
    stats: '1,500,000+ Units Daily Output'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1664392020927-9344e87b378d?q=80&w=1200&auto=format&fit=crop',
    badge: 'ONE-PIECE HINGE CUPS & PORTION CONTAINERS',
    title: 'Zero-Leak Snap Rim Technology for Delivery & Takeaway',
    description: 'Attached snap-tight lids eliminate sauce spillage during motorcycle delivery and streamline kitchen prep speed.',
    productName: 'One-Piece Hinged Sauce & Condiment Cup',
    stats: 'Zero Lost Lid Inventory'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1701213306445-9874fe01971a?w=1200&auto=format&fit=crop',
    badge: 'RO & RE SERIES CONTAINERS',
    title: 'Heavy-Duty Injection Moulded Tubs for Soups & Curries',
    description: 'Thermal resistance from -20°C deep freeze to +120°C hot soup filling. ISO 9001:2015 & FDA certified.',
    productName: 'RO & RE Multi-Compartment Meal Box',
    stats: '-20°C to +120°C Thermal Tolerant'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlideIndex(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] bg-[#111518] text-white flex items-center overflow-hidden border-b border-[#E6DBC6]/30">
      
      {/* Underlying Base Image (Prevents Blank Shade Flash during crossfade) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSlides[prevSlideIndex].image}
          alt="Base Container Slide"
          className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.05]"
        />
      </div>

      {/* Active Incoming Crossfade Image Layer */}
      <motion.div
        key={currentSlide}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <img
          src={heroSlides[currentSlide].image}
          alt="Hero Container Slide"
          className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.05]"
        />
      </motion.div>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/75" />

      <div className="container-custom relative z-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col">
            
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#b89858] text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 shadow-md self-start"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{heroSlides[currentSlide].badge}</span>
            </motion.div>

            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-base text-gray-200 leading-relaxed mb-8 max-w-2xl font-medium"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            {/* 3 Key Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/15 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#b89858] shrink-0" />
                <span className="font-semibold">FDA 21 CFR Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/15 text-xs text-gray-200">
                <Flame className="w-4 h-4 text-[#b89858] shrink-0" />
                <span className="font-semibold">Microwave & Freezer</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/15 text-xs text-gray-200">
                <Sparkles className="w-4 h-4 text-[#b89858] shrink-0" />
                <span className="font-semibold">Custom IML Branding</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/categories"
                className="bg-[#b89858] hover:bg-[#9e8042] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider flex items-center gap-2.5"
              >
                <span>Explore Categories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-full border border-white/30 transition-all uppercase tracking-wider flex items-center gap-2.5"
              >
                <span>Request Wholesale Quote</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrevSlideIndex(currentSlide);
                    setCurrentSlide(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    currentSlide === idx ? 'w-10 bg-[#b89858]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Right Column: Hero Product Preview Studio Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              key={`studio-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-md bg-[#050505]/90 backdrop-blur-xl border-2 border-[#b89858]/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden group"
            >
              {/* Floating Badges */}
              <div className="absolute top-4 left-4 bg-white/95 text-[#1A1D20] text-[10px] font-extrabold px-3 py-1 rounded-full border border-[#E6DBC6] uppercase tracking-wider shadow">
                ISO 9001:2015 CERTIFIED
              </div>

              <div className="absolute top-4 right-4 bg-[#b89858] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                100% VIRGIN PP 05
              </div>

              {/* Product Image Studio Box */}
              <div className="h-64 sm:h-72 w-full flex items-center justify-center p-4 my-6">
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].productName}
                  className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Card Summary */}
              <div className="bg-[#111518]/90 p-4 rounded-2xl border border-white/10 text-center">
                <h3 className="text-sm font-bold text-white mb-1">
                  {heroSlides[currentSlide].productName}
                </h3>
                <p className="text-[11px] font-semibold text-[#b89858]">
                  {heroSlides[currentSlide].stats}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
