'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Orbitron } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrambleTitle } from '../ui/ScrambleTitle';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['700', '800', '900'] });

const SLIDE_DURATION = 5500;

// `background` = full-bleed banner background artwork (gradient / graphic).
// `product`    = transparent front-of-banner product cutout, centered over the background.
// Drop the new asset URLs in here once ready — layout already expects both.
const heroSlides = [
  {
    background: '/images/hero-gold-wave-bg.png',
    product: '/images/hero-food-containers.png',
    sideProduct: '/images/hero-fruit-container.png',
    light: true,
    tagline: 'Heavy-duty tubs\nfor soups & curries',
    title: 'CONTAINERS',
    left: 'Injection moulded strength, built for cloud kitchens.',
    right: 'Thermal resistance from -20°C deep freeze to +120°C hot fill. ISO 9001:2015 & FDA certified.'
  },
  {
    background: 'https://ik.imagekit.io/mikbqwyy0/AcePackaging/ChatGPT%20Image%20Aug%2026,%202026,%2012_02_11%20PM.png',
    product: '',
    tagline: 'Full-color branding\nfused into the mould',
    title: 'BRANDING',
    left: 'Custom IML branding, fused directly into the mould.',
    right: 'High-definition graphics bonded into container walls during moulding for waterproof, scratch-proof durability.'
  },
  {
    background: 'https://ik.imagekit.io/mikbqwyy0/AcePackaging/ChatGPT%20Image%20Aug%2026,%202026,%2012_02_15%20PM.png',
    product: '',
    tagline: 'Precision plastic\ncontainer manufacturing',
    title: 'PACKAGING',
    left: 'Engineered for QSR chains and dairy brands.',
    right: 'Microwave-safe, leak-proof rim geometry, and high stacking strength for delivery and takeaway.'
  },
];

// Whole slide (background + text) slides in from one side and slides the
// outgoing slide out the other side, blended with a blur "dissolve" so the
// motion reads as smoke rather than a hard cut — matches the reference banner.
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
    filter: 'blur(14px)',
    scale: 1.04,
  }),
  center: {
    x: '0%',
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
    filter: 'blur(14px)',
    scale: 1.04,
  }),
};

export const Hero: React.FC = () => {
  const [[currentSlide, direction], setSlide] = useState<[number, number]>([0, 1]);

  const goTo = useCallback((idx: number) => {
    setSlide(([prev]) => [idx, idx > prev ? 1 : -1]);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[640px] sm:min-h-[730px] bg-[#111518] text-white flex items-center overflow-hidden border-b border-[#E6DBC6]/30">

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* Background artwork for this slide */}
          <img
            src={slide.background}
            alt="Hero background"
            className={`absolute inset-0 w-full h-full object-cover ${slide.light ? '' : 'filter brightness-[0.9]'}`}
          />
          <div
            className={
              slide.light
                ? 'absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent'
                : 'absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10'
            }
          />

          {/* Center: big heading + product cutout, nothing else in the middle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
            <div className="hero-float-title will-change-transform">
              <ScrambleTitle
                text={slide.title}
                className={`${orbitron.className} text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-wide text-center drop-shadow-lg ${
                  slide.light ? 'text-[#1A1D20]' : 'text-[#e8cf9e]'
                }`}
              />
            </div>
            {slide.product && (
              <div className="relative mt-4 flex flex-col items-center" style={{ perspective: '1600px' }}>
                <img
                  src={slide.product}
                  alt="Product"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1600px) rotateX(14deg) rotateY(-10deg) scale(1.06) translateZ(30px)',
                  }}
                  className="max-h-[38vh] sm:max-h-[42vh] object-contain rounded-2xl [filter:drop-shadow(0_6px_6px_rgba(0,0,0,0.22))_drop-shadow(0_24px_18px_rgba(0,0,0,0.28))_drop-shadow(0_60px_45px_rgba(0,0,0,0.32))_drop-shadow(0_90px_60px_rgba(0,0,0,0.18))]"
                />
                <div
                  aria-hidden="true"
                  className="w-[62%] h-6 sm:h-9 mt-2 rounded-[100%] bg-black/50 blur-2xl"
                />

                {/* Side product accent — floats independently for depth/parallax, tucked up-left of the main product */}
                {slide.sideProduct && (
                  <div className="hero-float-side absolute -left-6 sm:-left-14 -top-4 sm:-top-10 pointer-events-none will-change-transform">
                    <img
                      src={slide.sideProduct}
                      alt="Product accent"
                      className="w-24 sm:w-36 lg:w-40 object-contain [filter:drop-shadow(0_18px_14px_rgba(0,0,0,0.3))]"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Left side column */}
          <div className="hidden md:flex flex-col items-start absolute left-6 lg:left-14 top-1/2 -translate-y-1/2 z-20 max-w-[220px] pointer-events-auto">
            <p
              className={`text-xs font-semibold uppercase tracking-wider leading-relaxed whitespace-pre-line mb-4 ${
                slide.light ? 'text-[#1A1D20]' : 'text-gray-200'
              }`}
            >
              {slide.tagline}
            </p>
            <div className="flex items-center gap-1 text-[#b89858] mb-6" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <ChevronRight key={i} className="w-3 h-3 -mx-0.5" strokeWidth={3} />
              ))}
            </div>
            <Link
              href="/categories"
              className={`text-xs font-bold px-6 py-3.5 rounded-md shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider flex items-center gap-2 ${
                slide.light
                  ? 'bg-[#1A1D20] hover:bg-black text-[#e8cf9e]'
                  : 'bg-[#111518] hover:bg-black text-[#e8cf9e]'
              }`}
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right side column */}
          <div className="hidden md:flex absolute right-6 lg:right-14 top-1/2 -translate-y-1/2 z-20 max-w-[260px]">
            <p className={`text-xs text-right leading-relaxed font-medium ${slide.light ? 'text-[#1A1D20]' : 'text-gray-200'}`}>
              {slide.right}
            </p>
          </div>

          {/* Mobile-only condensed content */}
          <div className="md:hidden absolute inset-x-0 bottom-16 z-20 flex flex-col items-center text-center px-6 gap-3">
            <p className={`text-xs leading-relaxed font-medium ${slide.light ? 'text-[#1A1D20]' : 'text-gray-200'}`}>
              {slide.left} {slide.right}
            </p>
            <Link
              href="/categories"
              className={`text-xs font-bold px-6 py-3 rounded-md shadow-lg uppercase tracking-wider flex items-center gap-2 ${
                slide.light ? 'bg-[#1A1D20] text-[#e8cf9e]' : 'bg-[#111518] text-[#e8cf9e]'
              }`}
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Fixed chrome: progress indicators, sits above the sliding layer */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center px-6">
        <div className="flex items-center justify-center gap-2 w-full max-w-xs">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className="relative h-1 flex-1 rounded-full bg-white/20 overflow-hidden"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === currentSlide && (
                <motion.span
                  key={`progress-${currentSlide}`}
                  className="absolute inset-y-0 left-0 bg-[#b89858] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                />
              )}
              {idx < currentSlide && <span className="absolute inset-0 bg-[#b89858]/70 rounded-full" />}
            </button>
          ))}
        </div>
      </div>

      {/* Arrow navigation — solid dark chip so it stays visible over both light and dark slide backgrounds */}
      <button
        onClick={() => goTo((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-10 rounded-full bg-[#1A1D20]/80 hover:bg-[#1A1D20] backdrop-blur-md border border-[#b89858]/40 shadow-md transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-[#e8cf9e]" />
      </button>
      <button
        onClick={() => goTo((currentSlide + 1) % heroSlides.length)}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-10 rounded-full bg-[#1A1D20]/80 hover:bg-[#1A1D20] backdrop-blur-md border border-[#b89858]/40 shadow-md transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-[#e8cf9e]" />
      </button>
    </section>
  );
};
