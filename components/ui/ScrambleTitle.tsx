'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrambleTextPlugin);
}

interface ScrambleTitleProps {
  text: string;
  className?: string;
}

// Scrambles random characters into place whenever `text` changes — used for
// the hero title so each slide transition re-triggers a fresh decode-in.
export const ScrambleTitle: React.FC<ScrambleTitleProps> = ({ text, className }) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      duration: 1.4,
      scrambleText: {
        text,
        chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        revealDelay: 0.2,
        speed: 0.3,
      },
      ease: 'none',
    });

    return () => {
      tween.kill();
    };
  }, [text]);

  return (
    <h1 ref={ref} className={className}>
      {text}
    </h1>
  );
};
