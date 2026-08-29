'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
// import dynamic from 'next/dynamic'; // only needed by the commented-out ProductModel3D below
import Link from 'next/link';
import { Orbitron } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroWaves } from './HeroWaves';

// Three.js/WebGL — client-only, never rendered on the server.
// Commented out for now in favor of the flat product-image treatment (same as
// banner 2) — re-enable by uncommenting this and the productModel field/branch
// below if the 3D viewer is needed again.
// const ProductModel3D = dynamic(() => import('../ui/ProductModel3D').then((m) => m.ProductModel3D), {
//   ssr: false,
// });

const orbitron = Orbitron({ subsets: ['latin'], weight: ['700', '800', '900'] });

const AUTO_ADVANCE_MS = 5000;
const PUSH_DURATION = 0.7;
const PUSH_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];
const PREMIUM_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// `background` = full-bleed banner background artwork (gradient / graphic).
// `product`    = transparent front-of-banner product cutout, centered over the background.
// `decoration` = optional per-slide background treatment; only 'waves' exists
// today, but the field exists so a future slide can opt out (e.g. 'none')
// without touching the component.
// Drop new asset URLs in here once ready — layout already expects both.
const heroSlides = [
  {
    background: '/images/hero-gold-wave-bg.png',
    product: '/images/hero-food-containers.png',
    // productModel: '/models/takeout-container.glb', // 3D viewer disabled for now — flat image treatment (same as banner 2) used instead
    sideProduct: '/images/hero-fruit-container.png',
    light: true,
    decoration: 'waves' as const,
    tagline: 'Leak-proof tubs\nbuilt for hot delivery',
    title: 'CONTAINERS',
    left: 'Built for cloud kitchens and QSR delivery lines.',
    right: '-20°C to +120°C thermal range. FDA & ISO 9001:2015 certified.'
  },
  {
    background: '/images/banner2.png',
    product: '/images/product2banner.png',
    decoration: 'waves' as const,
    tagline: 'Your logo,\nmoulded in — not stuck on',
    title: 'BRANDING',
    left: 'In-mould labelling, bonded into the container wall.',
    right: 'Scratch-proof, waterproof, built to survive delivery.'
  },
  {
    background: 'https://ik.imagekit.io/mikbqwyy0/AcePackaging/ChatGPT%20Image%20Aug%2026,%202026,%2012_02_15%20PM.png',
    product: '',
    decoration: 'waves' as const,
    tagline: 'Precision-moulded\nfor every use case',
    title: 'PACKAGING',
    left: 'One factory, every format — QSR to dairy and sweets.',
    right: 'Microwave-safe, leak-proof, built for high-volume stacking.'
  },
];

// Background layer: translates with the slide direction like the content
// layer (so they still read as one slide), but carries its own slight
// scale/opacity breathing so it doesn't feel like a flat carousel photo
// snapping between frames.
const backgroundVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', scale: 1.06, opacity: 0.85 }),
  center: { x: '0%', scale: 1, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', scale: 1.06, opacity: 0.85 }),
};

const backgroundTransition = { duration: PUSH_DURATION + 0.15, ease: PUSH_EASE };

// Content layer only ever translates — the individual pieces inside it
// (title, side copy, product, CTA) carry their own independent
// opacity/translate/scale animations with a slight stagger, so the layers
// don't all move identically.
const pushVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%' }),
  center: { x: '0%' },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%' }),
};

const pushTransition = { duration: PUSH_DURATION, ease: PUSH_EASE };

// Nested per-element variants — these are NOT keyed by currentSlide
// themselves; the parent content wrapper's key change remounts them, which
// retriggers initial -> animate on mount. That keeps each element on its own
// timing/easing without needing a separate AnimatePresence per element
// (multiple AnimatePresence trees sharing a key is what caused duplicate-key
// warnings previously).
const titleVariants = {
  initial: { opacity: 0, y: 26, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
};
const titleTransition = { duration: 0.7, ease: PREMIUM_EASE, delay: 0.05 };

const productRevealVariants = {
  initial: { opacity: 0, y: 34, scale: 0.93 },
  animate: { opacity: 1, y: 0, scale: 1 },
};
const productRevealTransition = { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: 0.12 };

const sideTextVariants = {
  left: {
    initial: { opacity: 0, x: -26 },
    animate: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: 26 },
    animate: { opacity: 1, x: 0 },
  },
};
const sideTextTransition = { duration: 0.6, ease: PREMIUM_EASE, delay: 0.2 };

const ctaVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};
const ctaTransition = { duration: 0.5, ease: PREMIUM_EASE, delay: 0.32 };

// Ambient particle layer — persists across slide changes (no key on
// currentSlide, mounted once) and drifts on its own sine-ish loop, fully
// decoupled from both the slide push above and the product's idle float
// below. Fixed positions/timings (not Math.random() at render time) so
// there's no hydration mismatch and no re-shuffle on every re-render.
const HERO_PARTICLES = [
  { top: '18%', left: '12%', size: 6, px: 8, py: -16, duration: 5.2, delay: 0 },
  { top: '28%', left: '82%', size: 10, px: -6, py: 18, duration: 6.4, delay: 0.6 },
  { top: '62%', left: '6%', size: 5, px: 7, py: 14, duration: 4.6, delay: 1.1 },
  { top: '72%', left: '90%', size: 8, px: -9, py: -12, duration: 7.1, delay: 0.3 },
  { top: '14%', left: '48%', size: 4, px: 5, py: 12, duration: 5.8, delay: 1.6 },
  { top: '85%', left: '55%', size: 7, px: -7, py: -18, duration: 6.9, delay: 0.9 },
  { top: '45%', left: '92%', size: 5, px: 6, py: 15, duration: 4.4, delay: 2.1 },
  { top: '52%', left: '4%', size: 12, px: -8, py: 10, duration: 7.8, delay: 1.4 },
  { top: '8%', left: '75%', size: 6, px: 9, py: -14, duration: 5.5, delay: 2.5 },
];

export const Hero: React.FC = () => {
  const [[currentSlide, direction], setSlide] = useState<[number, number]>([0, 1]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Dot-nav jumps use simple index comparison for direction; prev/next arrows
  // pass their direction explicitly so wraparound (last -> first, first ->
  // last) still pushes the correct way instead of index comparison guessing wrong.
  const goTo = useCallback((idx: number) => {
    setSlide(([prev]) => [idx, idx > prev ? 1 : -1]);
  }, []);

  const goDirection = useCallback((dir: 1 | -1) => {
    setSlide(([prev]) => [(prev + dir + heroSlides.length) % heroSlides.length, dir]);
  }, []);

  // Auto-advance, restarting the countdown any time the slide changes —
  // manual prev/next clicks call goTo() too, which resets this same timer,
  // so a manual click doesn't get instantly undone by the autoplay.
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSlide(([prev]) => [(prev + 1) % heroSlides.length, 1]);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[560px] sm:h-[calc(100vh-85px)] sm:max-h-[920px] sm:min-h-[640px] bg-[#111518] text-white overflow-hidden border-b border-[#E6DBC6]/30">
      {/* LAYER 1 — Background: pushes with the slide direction plus its own
          slight scale/opacity breathing, independent of the content layer's
          timing (slightly longer duration) so it doesn't read as a flat
          carousel image snapping between frames. */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={backgroundTransition}
          className="absolute inset-0 z-0"
        >
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
        </motion.div>
      </AnimatePresence>

      {/* LAYER 2 — Decorative: wave lines + ambient particles. Mounted once,
          never keyed by currentSlide, so nothing here resets on slide
          change — only its own slow independent CSS-driven motion. */}
      {slide.decoration === 'waves' && <HeroWaves className="z-[6]" />}
      <div aria-hidden="true" className="absolute inset-0 z-[8] overflow-hidden pointer-events-none">
        {HERO_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#b89858]/30 hero-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              // @ts-expect-error -- custom properties read by the .hero-particle keyframes
              '--particle-x': `${p.px}px`,
              '--particle-y': `${p.py}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* LAYER 3-6 — Content: title, side copy, product, CTA. The wrapper
          only translates with the slide direction; each child below carries
          its own opacity/translate/scale animation with a slight stagger
          (title first, product close behind, side copy after, CTA last) —
          they retrigger because the parent's key remounts the whole
          subtree, not because each child has its own key/AnimatePresence. */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={pushVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pushTransition}
          className="absolute inset-0 z-10 flex items-center"
        >
          {/* Soft staged glow behind the product — reads like a studio spotlight
              on the podium instead of the product sitting flat on the page. */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[860px] h-[46vh] rounded-full blur-3xl"
            style={{
              background: slide.light
                ? 'radial-gradient(closest-side, rgba(184,152,88,0.22), transparent 72%)'
                : 'radial-gradient(closest-side, rgba(232,207,158,0.16), transparent 72%)',
            }}
          />

          {/* LAYER 3+5 — Center: big heading + product cutout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
            <motion.div
              variants={titleVariants}
              initial="initial"
              animate="animate"
              transition={titleTransition}
            >
              <div className="hero-float-title will-change-transform">
                <h1
                  className={`${orbitron.className} text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-wide text-center drop-shadow-lg ${slide.light ? 'text-[#1A1D20]' : 'text-[#e8cf9e]'
                    }`}
                >
                  {slide.title}
                </h1>
              </div>
            </motion.div>

            {slide.product && (
              <motion.div
                variants={productRevealVariants}
                initial="initial"
                animate="animate"
                transition={productRevealTransition}
                className="relative mt-8 sm:mt-14 flex flex-col items-center"
                style={{ perspective: '1600px', transformStyle: 'preserve-3d' }}
              >
                {/* 3D viewer disabled for now — using the flat product-image
                    treatment (same as banner 2) instead. Re-enable by restoring
                    the ProductModel3D import/field above and swapping this back
                    to a `slide.productModel ? <ProductModel3D .../> : (...)` ternary. */}
                <>
                  {/* Idle bob lives on this dedicated wrapper, driven purely by
                      CSS (.hero-float-product) — it is not part of the
                      Framer Motion reveal above, so it keeps running
                      continuously and never restarts on slide change. */}
                  <div className="hero-float-product will-change-transform">
                    <img
                      src={slide.product}
                      alt="Product"
                      className="max-h-[28vh] sm:max-h-[38vh] object-contain [filter:drop-shadow(0_20px_16px_rgba(0,0,0,0.25))_drop-shadow(0_50px_40px_rgba(0,0,0,0.2))]"
                    />
                  </div>
                  {/* Ground shadow stays put and squashes/fades in sync with the
                      float above — that contrast is what reads as "lifted". */}
                  <div
                    aria-hidden="true"
                    className="hero-float-product-shadow w-[58%] h-5 sm:h-8 mt-1 rounded-[100%] bg-black/45 blur-2xl"
                  />
                </>
                {/*
                {slide.productModel ? (
                  <ProductModel3D
                    src={slide.productModel}
                    className="w-[70vw] max-w-[620px] h-[32vh] sm:h-[56vh] pointer-events-auto"
                  />
                ) : (
                  <>
                    <div className="hero-float-product will-change-transform">
                      <img
                        src={slide.product}
                        alt="Product"
                        className="max-h-[38vh] sm:max-h-[56vh] object-contain [filter:drop-shadow(0_20px_16px_rgba(0,0,0,0.25))_drop-shadow(0_50px_40px_rgba(0,0,0,0.2))]"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      className="hero-float-product-shadow w-[58%] h-5 sm:h-8 mt-1 rounded-[100%] bg-black/45 blur-2xl"
                    />
                  </>
                )}
                */}

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
              </motion.div>
            )}
          </div>

          {/* LAYER 4 — Left side column (tagline + CTA). Positioning
              (absolute + top-1/2 -translate-y-1/2) lives on this plain
              wrapper; Framer Motion's inline transform on the animated child
              would otherwise silently overwrite that Tailwind translate on
              the same element. */}
          <div className="hidden lg:block absolute left-6 lg:left-24 xl:left-36 top-1/2 -translate-y-1/2 z-20 max-w-[220px]">
            <motion.div
              variants={sideTextVariants.left}
              initial="initial"
              animate="animate"
              transition={sideTextTransition}
              className="flex flex-col items-start pointer-events-auto"
            >
              <p
                className={`text-xs font-semibold uppercase tracking-wider leading-relaxed whitespace-pre-line mb-4 ${slide.light ? 'text-[#1A1D20]' : 'text-gray-200'
                  }`}
              >
                {slide.tagline}
              </p>
              <div className="flex items-center gap-1 text-[#b89858] mb-6" aria-hidden="true">
                {Array.from({ length: 8 }).map((_, i) => (
                  <ChevronRight key={i} className="w-3 h-3 -mx-0.5" strokeWidth={3} />
                ))}
              </div>
              {/* LAYER 6 — CTA: its own animation, entering after the rest of the content */}
              <motion.div variants={ctaVariants} initial="initial" animate="animate" transition={ctaTransition}>
                <Link
                  href="/categories"
                  className={`text-xs font-bold px-6 py-3.5 rounded-md shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider flex items-center gap-2 ${slide.light
                    ? 'bg-[#1A1D20] hover:bg-black text-[#e8cf9e]'
                    : 'bg-[#111518] hover:bg-black text-[#e8cf9e]'
                    }`}
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* LAYER 4 — Right side column */}
          <div className="hidden lg:block absolute right-6 lg:right-24 xl:right-36 top-1/2 -translate-y-1/2 z-20 max-w-[260px]">
            <motion.div
              variants={sideTextVariants.right}
              initial="initial"
              animate="animate"
              transition={sideTextTransition}
              className="flex"
            >
              <p className={`text-xs text-right leading-relaxed font-medium ${slide.light ? 'text-[#1A1D20]' : 'text-gray-200'}`}>
                {slide.right}
              </p>
            </motion.div>
          </div>

          {/* Mobile-only condensed content */}
          <div className="lg:hidden absolute inset-x-0 bottom-16 z-20 flex flex-col items-center text-center px-6 gap-3">
            <p className={`text-xs leading-relaxed font-medium ${slide.light ? 'text-[#1A1D20]' : 'text-gray-200'}`}>
              {slide.left} {slide.right}
            </p>
            <Link
              href="/categories"
              className={`text-xs font-bold px-6 py-3 rounded-md shadow-lg uppercase tracking-wider flex items-center gap-2 ${slide.light ? 'bg-[#1A1D20] text-[#e8cf9e]' : 'bg-[#111518] text-[#e8cf9e]'
                }`}
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* "Up next" teaser — small, quiet label previewing the next slide's
          category, sitting fixed above the sliding layer (matches the
          reference banner's bottom-left teaser). */}
      <button
        onClick={() => goDirection(1)}
        className="hidden sm:block absolute left-6 lg:left-10 bottom-7 z-30"
        aria-label={`Preview next slide: ${heroSlides[(currentSlide + 1) % heroSlides.length].title}`}
      >
        <span
          className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-colors hover:text-[#b89858] ${slide.light ? 'text-[#1A1D20]/45' : 'text-white/40'
            }`}
        >
          {heroSlides[(currentSlide + 1) % heroSlides.length].title}
        </span>
      </button>

      {/* Fixed chrome: progress indicators, sits above the sliding layer */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center px-6">
        <div className="flex items-center justify-center gap-2 w-full max-w-xs">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className="relative h-1.5 flex-1 rounded-full bg-[#b89858]/20 border border-[#b89858]/30 overflow-hidden"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === currentSlide && (
                <motion.span
                  key={`progress-${currentSlide}`}
                  className="absolute inset-y-0 left-0 bg-[#b89858] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                />
              )}
              {idx < currentSlide && <span className="absolute inset-0 bg-[#b89858]/70 rounded-full" />}
            </button>
          ))}
        </div>
      </div>

      {/* Arrow navigation — solid dark chip so it stays visible over both light and dark slide backgrounds */}
      <button
        onClick={() => goDirection(-1)}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-10 rounded-full bg-[#1A1D20]/80 hover:bg-[#1A1D20] backdrop-blur-md border border-[#b89858]/40 shadow-md transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-[#e8cf9e]" />
      </button>
      <button
        onClick={() => goDirection(1)}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-10 rounded-full bg-[#1A1D20]/80 hover:bg-[#1A1D20] backdrop-blur-md border border-[#b89858]/40 shadow-md transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-[#e8cf9e]" />
      </button>
    </section>
  );
};
