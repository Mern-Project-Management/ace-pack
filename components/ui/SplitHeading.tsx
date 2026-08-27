'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

interface SplitHeadingProps {
  // A single heading element (h1/h2/h3...) whose text content gets split.
  children: React.ReactElement;
  delay?: number;
  start?: string;
}

// Wraps a heading with a word-by-word "reveal from behind a mask" animation:
// each line is clipped with overflow-hidden and its words slide up from
// below into place. Rebuilds on resize/orientation change so mobile line
// wrapping (which differs from desktop) always gets a correctly-masked
// split instead of the stale desktop layout.
export const SplitHeading: React.FC<SplitHeadingProps> = ({
  children,
  delay = 0,
  start = 'top 90%',
}) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let split: SplitText | undefined;
    let tween: gsap.core.Tween | undefined;

    const build = () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert();

      split = new SplitText(el, {
        type: 'lines,words',
        linesClass: 'split-line overflow-hidden',
      });

      tween = gsap.fromTo(
        split.words,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.65,
          delay,
          ease: 'power3.out',
          stagger: 0.035,
          force3D: true,
          onStart: () => gsap.set(split!.words, { willChange: 'transform, opacity' }),
          onComplete: () => gsap.set(split!.words, { willChange: 'auto' }),
          scrollTrigger: {
            trigger: el,
            start,
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    build();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      // Debounced: mobile browsers fire resize repeatedly while the address
      // bar shows/hides during scroll, so rebuilding on every tick would
      // itself cause jank — only re-split once things settle.
      resizeTimer = setTimeout(build, 300);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert();
    };
  }, [delay, start]);

  return React.cloneElement(children, { ref } as Partial<unknown>);
};
