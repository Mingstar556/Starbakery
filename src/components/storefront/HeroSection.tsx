'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Flame, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';

export default function HeroSection() {
  const { data } = useBakery();

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-16 pb-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full ambient-glow-amber opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full ambient-glow-cream opacity-30 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full ambient-glow-amber opacity-35 pointer-events-none" />

      {/* Decorative grain backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Kinetic Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Heritage Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle border-amber-500/25 text-amber-300 text-xs tracking-wider uppercase font-medium mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{data.info.storyPill}</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#FDF8F0] leading-[1.08] mb-6"
            >
              {data.info.heroHeadline}
            </motion.h1>

            {/* Subheadline (Stop-Slop certified: direct, sensory, human) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-[#C9BFB0] font-light max-w-2xl leading-relaxed mb-10"
            >
              {data.info.heroSubheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm tracking-wide shadow-[0_12px_28px_rgba(217,119,6,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Today's Bakes</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl glass-button text-[#E5DECF] font-medium text-sm tracking-wide cursor-pointer"
              >
                <span>Our 36h Fermentation</span>
              </a>
            </motion.div>

            {/* Craft Credentials Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-xl"
            >
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-semibold text-amber-300">
                  {data.info.starterAgeYears} Yrs
                </p>
                <p className="text-xs text-[#9E9484] tracking-wider uppercase mt-1">Mother Starter</p>
              </div>
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-semibold text-amber-300">
                  {data.info.fermentationHours}h
                </p>
                <p className="text-xs text-[#9E9484] tracking-wider uppercase mt-1">Cold Ferment</p>
              </div>
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-semibold text-amber-300">
                  100%
                </p>
                <p className="text-xs text-[#9E9484] tracking-wider uppercase mt-1">Stoneground</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Glass Pastry Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Background glowing frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-600/30 to-amber-300/10 blur-xl opacity-75" />

            {/* Main Showcase Glass Card */}
            <div className="relative rounded-3xl glass-panel-glow p-4 sm:p-6 overflow-hidden">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden mb-5 group">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85"
                  alt="Golden French Butter Croissant"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Frosted badge on top of image */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl glass-panel text-amber-300 text-xs font-medium flex items-center gap-1.5 border-amber-500/30">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Out of Deck at 07:15</span>
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl glass-panel text-white text-xs font-mono tracking-wider">
                  81 Flaky Layers
                </div>
              </div>

              {/* Bottom Card Meta */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#FDF8F0]">
                    Isigny Butter Croissant
                  </h3>
                  <p className="text-xs text-[#B5ABA0] mt-0.5">
                    AOP Charentes-Poitou Butter • 72h Cold Lamination
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#9E9484] block uppercase tracking-wider">Fresh Daily</span>
                  <span className="font-editorial text-xl font-bold text-amber-400">$5.25</span>
                </div>
              </div>

              {/* Floating micro-badges */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A89F91]">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  No chemical improvers
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Organic flour only
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
