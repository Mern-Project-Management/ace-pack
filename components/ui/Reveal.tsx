'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

let globalRefreshAttached = false;
// ScrollTrigger caches each trigger's pixel start/end at creation time.
// Images on this page (Hero, About, Category, Blog) load asynchronously and
// shift page height after triggers are already measured, leaving lower
// sections with stale coordinates that stop firing on later scrolls (AOS
// didn't have this problem since it re-measures live on every scroll).
// One delayed pass corrects for that without re-running during active
// scrolling, which caused visible jank.
function ensureGlobalScrollTriggerRefresh() {
  if (globalRefreshAttached || typeof window === 'undefined') return;
  globalRefreshAttached = true;
  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('load', refresh);
  setTimeout(refresh, 1200);
  // ScrollTrigger's own internal throttling is enough during scroll; lower
  // the global tick rate slightly so many simultaneous triggers (one per
  // revealed card) don't compete for main-thread time on scroll.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

type RevealType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';

// Names/semantics match the old AOS attribute values (fade-up moves up into
// place, fade-right enters moving rightward i.e. starts from the left, etc.)
// so each call site keeps the same visual direction it had before. Each also
// carries a slight scale so the entrance reads as "settling into place" with
// depth rather than a flat slide — a small but noticeable step up from the
// original 1:1 AOS translation.
const FROM_VARS: Record<RevealType, gsap.TweenVars> = {
  'fade-up': { y: 36, opacity: 0, scale: 0.97 },
  'fade-down': { y: -36, opacity: 0, scale: 0.97 },
  'fade-left': { x: 36, opacity: 0, scale: 0.97 },
  'fade-right': { x: -36, opacity: 0, scale: 0.97 },
  'zoom-in': { scale: 0.85, opacity: 0 },
  fade: { opacity: 0 },
};

interface RevealProps {
  children: React.ReactElement;
  type?: RevealType;
  delay?: number;
  duration?: number;
  start?: string;
}

// Attaches a scroll-triggered GSAP entrance animation directly to its child
// (via ref injection) instead of introducing a wrapper element, so grid/flex
// layouts on the child are left untouched.
export const Reveal: React.FC<RevealProps> = ({
  children,
  type = 'fade-up',
  delay = 0,
  duration = 0.6,
  start = 'top 88%',
}) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ensureGlobalScrollTriggerRefresh();

    const el = ref.current;
    if (!el) return;

    // Hint the browser to promote this element to its own compositor layer
    // only while it's animating — leaving will-change on permanently bloats
    // memory and was part of what made scrolling feel choppy.
    gsap.set(el, { force3D: true, backfaceVisibility: 'hidden' });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        FROM_VARS[type],
        {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          duration,
          delay,
          ease: 'power2.out',
          overwrite: 'auto',
          force3D: true,
          onStart: () => gsap.set(el, { willChange: 'transform, opacity' }),
          onComplete: () => gsap.set(el, { willChange: 'auto' }),
          scrollTrigger: {
            trigger: el,
            start,
            end: 'bottom top',
            toggleActions: 'play none none reverse',
            fastScrollEnd: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [type, delay, duration, start]);

  return React.cloneElement(children, { ref } as Partial<unknown>);
};
