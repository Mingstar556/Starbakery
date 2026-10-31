'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, History, Award, Feather, Sparkles } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';

export default function StorySection() {
  const { data } = useBakery();

  return (
    <section id="story" className="relative py-28 sm:py-36 border-t border-[#1c1917]/10 overflow-hidden bg-[#fafaf9] sketch-grid-bg">
      {/* Ambient background washes */}
      <div className="absolute top-1/3 right-10 w-96 h-96 ambient-sketch-wash pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] ambient-sketch-wash pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#1c1917]/15 text-[#27272a] text-xs tracking-[0.2em] uppercase font-mono mb-4 shadow-xs">
              <History className="w-3.5 h-3.5 text-[#1c1917]" />
              <span>Section III • Heritage & Architectural Lineage</span>
            </div>

            <h2 className="font-curvy-script text-5xl sm:text-7xl lg:text-8xl font-normal text-[#1c1917] tracking-tight leading-tight mb-5">
              {data.info.storyTitle}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#27272a] font-light leading-relaxed">
              {data.info.storyBody.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Credo badges */}
            <div className="mt-10 pt-8 border-t border-[#1c1917]/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3.5">
                <Crown className="w-5 h-5 text-[#1c1917] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#1c1917] uppercase tracking-wider font-editorial">Zero Commercial Additives</h4>
                  <p className="text-xs text-[#27272a] mt-1 leading-relaxed">Fermented purely by our living mother starter Solange, nurtured since 2006.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Award className="w-5 h-5 text-[#1c1917] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#1c1917] uppercase tracking-wider font-editorial">Stoneground Terroir Grains</h4>
                  <p className="text-xs text-[#27272a] mt-1 leading-relaxed">Preserving wholesome wheat germ oil, complex micronutrients, and noble crust aroma.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hand-sketched Botanical Wheat & Heritage Archival Plate */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl glass-panel-luxury p-6 sm:p-8 bg-white border-[#1c1917]/15 shadow-xl">
              
              {/* Corner crosshairs */}
              <div className="absolute top-3 left-3 text-xs font-mono text-[#52525b]">+</div>
              <div className="absolute top-3 right-3 text-xs font-mono text-[#52525b]">+</div>
              <div className="absolute bottom-3 left-3 text-xs font-mono text-[#52525b]">+</div>
              <div className="absolute bottom-3 right-3 text-xs font-mono text-[#52525b]">+</div>

              {/* Hand-sketched Wheat & Heraldry Sketch */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-6 border border-[#1c1917]/10 bg-[#fafaf9]">
                <Image
                  src="/sketches/wheat-heraldry-sketch.jpg"
                  alt="Heritage Wheat Stalks and Aristocratic Seal Graphite Sketch"
                  fill
                  className="object-contain p-2"
                  sizes="(max-w: 600px) 100vw, 500px"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-white/90 border border-[#1c1917]/15 text-xs text-[#1c1917] font-mono shadow-xs">
                  Archive Ref: Terroir Wheat Specimen
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-curvy-script text-3xl font-normal text-[#1c1917]">The 36-Hour Discipline</h3>
                <p className="text-xs text-[#27272a] mt-2 font-light leading-relaxed">
                  Real sourdough demands uncompromised patience. The prolonged fermentation dismantles complex starch chains into easily digestible, fragrant nourishment.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* The 36-Hour Fermentation Timeline */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#27272a] font-mono font-medium">The Noble Method</span>
            <h3 className="font-curvy-script text-4xl sm:text-6xl font-normal text-[#1c1917] mt-1">
              Four Stages of Estate Baking
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {data.timeline.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl glass-panel-luxury border-[#1c1917]/15 p-7 flex flex-col justify-between hover:border-[#1c1917]/40 transition-all hover:-translate-y-2 bg-white shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-curvy-script text-5xl font-normal text-[#1c1917] leading-none">
                      {step.step}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#f5f5f4] border border-[#1c1917]/15 text-[11px] font-mono text-[#27272a]">
                      {step.timeframe}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#1c1917] mb-2 tracking-wide font-editorial">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#27272a] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1c1917]/10 text-[11px] text-[#27272a] italic font-editorial">
                  "{step.craftDetail}"
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
