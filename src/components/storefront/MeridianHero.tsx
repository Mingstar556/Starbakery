'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Clock, Crown, Sparkles, Feather } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';

// 8 Distinct Aristocratic Artisan Loaves that orbit in a circle around the bakery house
const ARTISAN_ORBIT = [
  {
    id: 'sourdough',
    name: 'Grand Reserve Country Boule',
    vintage: 'Solange Leaven 2006',
    tag: '36h Cold Retardation',
    shape: 'boule',
  },
  {
    id: 'croissant',
    name: 'Charentes Butter Croissant',
    vintage: 'AOP Reserve Butter',
    tag: '81 Laminated Layers',
    shape: 'croissant',
  },
  {
    id: 'baguette',
    name: 'Hearth-Fired Stone Batard',
    vintage: 'Stone Deck Baked',
    tag: 'Guérande Salt & Sesame',
    shape: 'batard',
  },
  {
    id: 'brioche',
    name: 'Cardamom Star Brioche',
    vintage: 'Estate Morning Swirl',
    tag: 'Guatemalan Green Cardamom',
    shape: 'roll',
  },
  {
    id: 'pain-chocolat',
    name: 'Pain au Chocolat Doré',
    vintage: 'Valrhona Grand Cru 70%',
    tag: 'Double Cocoa Batons',
    shape: 'croissant',
  },
  {
    id: 'miche',
    name: 'Rustic Seeded Miche',
    vintage: 'Heritage Einkorn & Rye',
    tag: 'Toasted Flax & Sesame',
    shape: 'boule',
  },
  {
    id: 'tradition',
    name: 'Baguette de Tradition',
    vintage: '24h Poolish Ferment',
    tag: 'Crisp Aerated Crumb',
    shape: 'batard',
  },
  {
    id: 'epi',
    name: 'Golden Épi de Blé',
    vintage: 'French Harvest Sheaf',
    tag: 'Artisan Snip Crust',
    shape: 'roll',
  },
];

const NUM_STEPS = 36;

export default function MeridianHero() {
  const { data } = useBakery();
  const [activeBread, setActiveBread] = useState(ARTISAN_ORBIT[0]);
  const [radii, setRadii] = useState({ rx: 360, ry: 200 });

  // Responsive circular orbit radii
  useEffect(() => {
    const updateRadii = () => {
      if (window.innerWidth < 640) {
        setRadii({ rx: 165, ry: 150 });
      } else if (window.innerWidth < 1024) {
        setRadii({ rx: 270, ry: 180 });
      } else {
        setRadii({ rx: 370, ry: 210 });
      }
    };
    updateRadii();
    window.addEventListener('resize', updateRadii);
    return () => window.removeEventListener('resize', updateRadii);
  }, []);

  // Compute 360-degree orbital motion paths for each bread item
  const orbitAnimations = useMemo(() => {
    return ARTISAN_ORBIT.map((_, index) => {
      const startAngle = (index / ARTISAN_ORBIT.length) * 360;
      const xKeyframes = [];
      const yKeyframes = [];
      const scaleKeyframes = [];
      const zIndexKeyframes = [];

      for (let k = 0; k <= NUM_STEPS; k++) {
        const deg = startAngle + (k / NUM_STEPS) * 360;
        const rad = (deg * Math.PI) / 180;
        const x = Math.cos(rad) * radii.rx;
        const y = Math.sin(rad) * radii.ry;
        xKeyframes.push(x);
        yKeyframes.push(y);
        // Floating above house sketch: breads remain in front (z-index >= 30) with slight perspective scale
        scaleKeyframes.push(y > 0 ? 1.08 : 0.95);
        zIndexKeyframes.push(y > 0 ? 40 : 30);
      }

      return { x: xKeyframes, y: yKeyframes, scale: scaleKeyframes, zIndex: zIndexKeyframes };
    });
  }, [radii]);

  const navLinks = [
    { label: 'Stone Hearth', href: '#menu' },
    { label: 'Wild Sourdough', href: '#menu' },
    { label: 'Viennoiserie', href: '#menu' },
    { label: 'Slow Ferment', href: '#story' },
    { label: 'The Estate Story', href: '#story' },
    { label: 'Atelier Hours', href: '#contact' },
    { label: 'Private Commissions', href: '#contact' },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#fafaf9] sketch-grid-bg isolate select-none pt-4 pb-12"
    >
      {/* 
        ARCHITECTURAL DRAFTING BORDER ACCENTS
      */}
      <div className="absolute top-4 left-6 text-xs font-mono tracking-widest text-[#27272a] hidden md:flex items-center gap-2 font-medium">
        <span>+ DRAFT REF. NO. 402/B</span>
        <span>•</span>
        <span>SCALE 1:50</span>
      </div>
      <div className="absolute top-4 right-6 text-xs font-mono tracking-widest text-[#27272a] hidden md:flex items-center gap-2 font-medium">
        <span>SHEET VII • ARCHIVES OF STAR BAKERY</span>
        <span>+</span>
      </div>

      {/* Subtle ambient paper washes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full ambient-sketch-wash pointer-events-none" />

      {/* 
        TOP ARISTOCRATIC BRAND STACK
      */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full pt-1">
        
        {/* COMPASS SEAL IN PENCIL GRAPHITE MEDALLION */}
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-white backdrop-blur-xl border border-[#18181b]/30 shadow-[0_6px_20px_rgba(24,24,27,0.08)] hover:scale-110 transition-transform duration-500 group">
          <svg
            className="w-10 sm:w-11 h-auto text-[#09090b] block transition-transform duration-700 group-hover:rotate-45"
            viewBox="0 0 64 64"
            role="img"
            aria-label="Star Bakery Royal Compass"
          >
            <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
            <g fill="currentColor">
              <path d="M32 32 L46 18 L35.2 34.4 Z" />
              <path d="M32 32 L46 46 L29.6 35.2 Z" />
              <path d="M32 32 L18 46 L28.8 29.6 Z" />
              <path d="M32 32 L18 18 L34.4 28.8 Z" />
            </g>
            <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
              <path d="M32 8 L35.5 28.5 L32 32 Z" fill="currentColor" />
              <path d="M32 8 L28.5 28.5 L32 32 Z" fill="none" />
              <path d="M56 32 L35.5 35.5 L32 32 Z" fill="currentColor" />
              <path d="M56 32 L35.5 28.5 L32 32 Z" fill="none" />
              <path d="M32 56 L28.5 35.5 L32 32 Z" fill="currentColor" />
              <path d="M32 56 L35.5 35.5 L32 32 Z" fill="none" />
              <path d="M8 32 L28.5 28.5 L32 32 Z" fill="currentColor" />
              <path d="M8 32 L28.5 35.5 L32 32 Z" fill="none" />
            </g>
            <circle cx="32" cy="32" r="2.5" fill="#ffffff" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div>

        {/* FANCY CURVY STYLE OLD MONEY BRAND TITLE */}
        <h1 className="mt-1 font-curvy-script text-6xl sm:text-8xl lg:text-9xl leading-tight tracking-wide text-[#09090b] drop-shadow-xs">
          <a href="#" className="hover:text-[#27272a] transition-colors">
            Star Bakery
          </a>
        </h1>

        {/* REGAL EDITORIAL SUB-HEADLINE - HIGH CONTRAST & EASY TO READ */}
        <p className="font-editorial italic text-base sm:text-xl text-[#27272a] font-medium tracking-wide -mt-2">
          Atelier de Boulangerie Traditionnelle • Est. 2012
        </p>

        {/* 
          ANIMATED VINTAGE LINEN & GRAPHITE ROYAL BANNER
        */}
        <motion.div
          animate={{
            rotate: [-1, 1, -1],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mt-3 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white text-[#18181b] border-2 border-[#18181b]/25 shadow-sm cursor-pointer hover:scale-105 transition-transform"
        >
          <Crown className="w-3.5 h-3.5 text-[#18181b]" />
          <span className="font-editorial text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#18181b]">
            Heritage Sourdough & Stone Hearth Atelier
          </span>
          <Crown className="w-3.5 h-3.5 text-[#18181b]" />
        </motion.div>

        {/* REFINED EDITORIAL TAGLINE - DEEP CHARCOAL TEXT FOR EFFORTLESS READING */}
        <p className="mt-3 text-sm sm:text-base text-[#27272a] max-w-2xl font-normal leading-relaxed">
          The quiet luxury of unhurried craft. Stoneground heritage grains, an eighteen-year living culture, and private-batch loaves baked upon refractory stone decks.
        </p>

        {/* QUICK NAVIGATION BUTTONS */}
        <nav className="mt-4 w-full" aria-label="Quick Nav">
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative text-xs tracking-wider uppercase font-semibold text-[#27272a] hover:text-[#09090b] px-4 py-2 rounded-xl bg-white hover:bg-[#f4f4f5] transition-all duration-200 hover:-translate-y-0.5 shadow-xs border border-[#18181b]/20 hover:border-[#18181b]/50 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="absolute left-4 right-4 bottom-1 h-[1.5px] bg-[#18181b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 
        CENTERPIECE STAGE:
        1. NO BOX around the house sketch - blends organically into the paper background.
        2. BREAD ORBITING IN A CIRCLE AROUND THE HOUSE SKETCH (with 8 artisan loaves).
      */}
      <div className="relative z-20 my-6 w-full max-w-5xl mx-auto h-[460px] sm:h-[540px] md:h-[600px] flex items-center justify-center">
        
        {/* FAINT ARCHITECTURAL ORBITAL TRACK GUIDELINE */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
          viewBox="-400 -240 800 480"
        >
          <ellipse
            cx="0"
            cy="0"
            rx={radii.rx}
            ry={radii.ry}
            fill="none"
            stroke="#18181b"
            strokeWidth="1.2"
            strokeDasharray="5 5"
          />
        </svg>

        {/* 
          THE HOUSE SKETCH - NO BOX, SEAMLESSLY BLENDED INTO BACKGROUND
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-[300px] sm:w-[460px] md:w-[540px] h-[300px] sm:h-[420px] md:h-[480px] flex items-center justify-center select-none"
        >
          <Image
            src="/sketches/bakery-facade-sketch.jpg"
            alt="Authentic Old Money Architectural Bakery Sketch"
            fill
            priority
            className="object-contain object-center sketch-blend pointer-events-none drop-shadow-sm"
            sizes="(max-width: 768px) 320px, 540px"
          />
        </motion.div>

        {/* 
          ANIMATED BREADS MOVING IN A CIRCLE AROUND THE HOUSE SKETCH (FLOATING ABOVE)
        */}
        {ARTISAN_ORBIT.map((bread, index) => {
          const anim = orbitAnimations[index];

          return (
            <motion.div
              key={bread.id}
              animate={{
                x: anim.x,
                y: anim.y,
                scale: anim.scale,
                zIndex: anim.zIndex,
              }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer z-30"
              onMouseEnter={() => setActiveBread(bread)}
            >
              <div className="group relative flex flex-col items-center">
                
                {/* Hover Tooltip Card */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute -top-16 whitespace-nowrap px-3.5 py-1.5 rounded-xl bg-[#18181b] text-white text-xs shadow-xl border border-white/20 z-50">
                  <span className="font-curvy-script text-base block text-white leading-tight">
                    {bread.name}
                  </span>
                  <span className="text-[10px] text-stone-300 font-mono">
                    {bread.vintage} • {bread.tag}
                  </span>
                </div>

                {/* Circular Bread Medallion */}
                <div className="p-2 sm:p-2.5 rounded-full bg-white border-2 border-[#18181b] shadow-[0_6px_20px_rgba(24,24,27,0.15)] group-hover:scale-125 group-hover:bg-[#f4f4f5] transition-all duration-200 flex items-center justify-center">
                  
                  {bread.shape === 'boule' && (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#18181b]" viewBox="0 0 64 64" fill="none">
                      <ellipse cx="32" cy="36" rx="26" ry="20" fill="#f5ede0" stroke="#18181b" strokeWidth="2.5" />
                      <path d="M16 28 C 24 18, 40 18, 48 28" stroke="#3f3f46" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M22 36 C 28 28, 36 28, 42 36" stroke="#3f3f46" strokeWidth="2.2" strokeLinecap="round" />
                      <circle cx="28" cy="24" r="1.5" fill="#18181b" />
                      <circle cx="36" cy="23" r="1.5" fill="#18181b" />
                    </svg>
                  )}

                  {bread.shape === 'croissant' && (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#18181b]" viewBox="0 0 64 64" fill="none">
                      <path d="M8 42 C 14 20, 50 20, 56 42 C 46 47, 18 47, 8 42 Z" fill="#faedd4" stroke="#18181b" strokeWidth="2.5" />
                      <path d="M22 28 C 26 34, 30 38, 30 42" stroke="#3f3f46" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M34 26 C 36 32, 38 38, 36 42" stroke="#3f3f46" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M44 30 C 43 35, 41 39, 40 42" stroke="#3f3f46" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  )}

                  {bread.shape === 'batard' && (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#18181b]" viewBox="0 0 64 64" fill="none">
                      <rect x="6" y="22" width="52" height="20" rx="10" fill="#f7efe1" stroke="#18181b" strokeWidth="2.5" transform="rotate(-10 32 32)" />
                      <line x1="20" y1="24" x2="26" y2="38" stroke="#3f3f46" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="30" y1="22" x2="36" y2="36" stroke="#3f3f46" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="40" y1="20" x2="46" y2="34" stroke="#3f3f46" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  )}

                  {bread.shape === 'roll' && (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#18181b]" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="34" r="20" fill="#faedd9" stroke="#18181b" strokeWidth="2.5" />
                      <path d="M32 18 C 42 18, 46 28, 42 34 C 36 42, 24 42, 22 34 C 20 28, 28 24, 32 28" stroke="#3f3f46" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  )}

                </div>

                {/* Trailing fine flour particle */}
                <motion.div
                  animate={{
                    opacity: [0.6, 0],
                    scale: [0.8, 2],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  className="w-2 h-2 rounded-full bg-[#18181b]/30 blur-[1px] mt-0.5"
                />

              </div>
            </motion.div>
          );
        })}

      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className="relative z-20 flex justify-center pt-2 pb-2">
        <motion.a
          href="#menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#09090b] font-bold bg-white hover:bg-[#f4f4f5] px-7 py-3 rounded-full border-2 border-[#18181b]/30 shadow-[0_6px_20px_rgba(24,24,27,0.08)] transition-all hover:scale-105 cursor-pointer"
        >
          <span className="font-curvy-script text-lg">View Private Reserves & Menu</span>
          <ArrowDown className="w-4 h-4 text-[#09090b] animate-bounce" />
        </motion.a>
      </div>

    </section>
  );
}
