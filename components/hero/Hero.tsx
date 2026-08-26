'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Flame, Sparkles } from 'lucide-react';

const heroSlides = [
  {
    image: '/images/media_1787717762050.jpg',
    badge: '100% VIRGIN PP 05 FOOD GRADE',
    title: 'High-Precision Plastic Food Container Manufacturing',
    description: 'Engineered for cloud kitchens, QSR chains, and dairy brands. Microwave-safe, leak-proof rim geometry, and high stacking strength.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581059474347-833e80d81ba8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'ONE-PIECE HINGE CUPS & PORTION CONTAINERS',
    title: 'Zero-Leak Snap Rim Technology for Delivery & Takeaway',
    description: 'Attached snap-tight lids eliminate sauce spillage during motorcycle delivery and streamline kitchen prep speed.'
  },
  {
    image: '/50d728a7-e02c-49d9-b530-58a7db8a6ecc.png',
    badge: 'RO & RE SERIES CONTAINERS',
    title: 'Heavy-Duty Injection Moulded Tubs for Soups & Curries',
    description: 'Thermal resistance from -20°C deep freeze to +120°C hot soup filling. ISO 9001:2015 & FDA certified.'
  },
  {
    image: '/b9d572a7-af59-4e63-92e8-2971440edffe.png',
    badge: 'CUSTOM IML BRANDED PACKAGING',
    title: 'Full-Color In-Mould Labelling for Cloud Kitchen Branding',
    description: 'High-definition full-color graphics fused directly into plastic container walls during moulding for waterproof, scratch-proof durability.'
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
    <section className="relative min-h-[580px] sm:min-h-[660px] bg-[#111518] text-white flex items-center overflow-hidden border-b border-[#E6DBC6]/30">
      
      {/* Underlying Base Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSlides[prevSlideIndex].image}
          alt="Base Container Background Slide"
          className="w-full h-full object-cover filter brightness-[0.95]"
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
          alt="Active Container Hero Background"
          className="w-full h-full object-cover filter brightness-[0.95]"
        />
      </motion.div>

      {/* Subtle Bottom-to-Top Gradient Overlay (Bottom Dark to Upper Side Light) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

      <div className="container-custom relative z-20 py-16 sm:py-24">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#b89858] text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 shadow-md"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{heroSlides[currentSlide].badge}</span>
          </motion.div>

          {/* Headline Title */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-base text-gray-100 leading-relaxed mb-8 max-w-2xl font-medium drop-shadow-sm"
          >
            {heroSlides[currentSlide].description}
          </motion.p>

          {/* 3 Trust Feature Pills */}
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

          {/* Action CTAs */}
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
      </div>
    </section>
  );
};
