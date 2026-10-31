'use client';

import React from 'react';
import { ShieldCheck, Copyright, Crown } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';

export default function GlassFooter() {
  const { data } = useBakery();

  return (
    <footer className="relative border-t border-[#1c1917]/10 bg-white py-16 px-4 sm:px-6 lg:px-8 text-xs text-[#27272a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Brand & Mission */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-[#1c1917]" />
            <span className="font-curvy-script text-3xl font-normal text-[#1c1917] tracking-tight">
              {data.info.name}
            </span>
          </div>
          <span className="text-xs text-[#27272a] font-mono tracking-[0.2em] uppercase mt-1">
            {data.info.tagline}
          </span>
          <p className="text-[11px] text-[#27272a] mt-2 max-w-sm font-light leading-relaxed">
            Cultivated with unhurried patience, wild leaven, and stoneground terroir grains. Baked daily on refractory hearth decks.
          </p>
        </div>

        {/* Quick Links & Licensing */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-[#27272a] text-xs uppercase tracking-widest font-mono">
          <a href="#home" className="hover:text-[#1c1917] transition-colors">I. The Hearth</a>
          <a href="#menu" className="hover:text-[#1c1917] transition-colors">II. Private Menu</a>
          <a href="#story" className="hover:text-[#1c1917] transition-colors">III. Heritage</a>
          <a href="#contact" className="hover:text-[#1c1917] transition-colors">IV. The Atelier</a>
        </div>

        {/* Legal, Security & Copyright Badge */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right text-[11px] space-y-1.5">
          <div className="flex items-center gap-1.5 text-[#1c1917]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-mono uppercase tracking-wider text-[10px]">Strict Cryptographic Assurance</span>
          </div>
          <div className="flex items-center gap-1 text-[#27272a]">
            <Copyright className="w-3 h-3" />
            <span>2026 {data.info.name} Atelier. All rights reserved.</span>
          </div>
          <p className="text-[10px] text-[#52525b] font-mono">
            Proprietary fermentation cultures & architectural sketches protected under copyright.
          </p>
        </div>

      </div>
    </footer>
  );
}
