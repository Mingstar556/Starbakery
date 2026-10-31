'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Crown } from 'lucide-react';

const LOADING_STAGES = [
  { progress: 0, text: 'Waking the 2006 Solange Mother Starter...' },
  { progress: 28, text: 'Selecting Terroir Stoneground Heritage Wheat...' },
  { progress: 58, text: '36-Hour Cold Retardation & 81-Layer Lamination...' },
  { progress: 85, text: 'Pre-heating Refractory Stone Decks to 260°C...' },
  { progress: 100, text: 'Atelier Doors Unlocking...' },
];

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast, elegant 1.3-second preloader
    const startTime = Date.now();
    const duration = 1350;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => setIsDone(true), 280);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  const currentStageText = LOADING_STAGES.reduce((acc, stage) => {
    return progress >= stage.progress ? stage.text : acc;
  }, LOADING_STAGES[0].text);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -24,
            filter: 'blur(10px)',
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-99999 bg-[#fafaf9] sketch-grid-bg flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Architectural Drafting Corner Marks */}
          <div className="absolute top-8 left-8 text-xs font-mono text-[#27272a] font-medium tracking-widest hidden sm:block">
            + DRAFT ENTRY PROTOCOL
          </div>
          <div className="absolute top-8 right-8 text-xs font-mono text-[#27272a] font-medium tracking-widest hidden sm:block">
            EST. 2012 • ARCHIVES +
          </div>
          <div className="absolute bottom-8 left-8 text-xs font-mono text-[#52525b] hidden sm:block">
            SCALE 1:50 • LIVING LEAVEN
          </div>
          <div className="absolute bottom-8 right-8 text-xs font-mono text-[#52525b] hidden sm:block">
            REF. MCMXII
          </div>

          <div className="relative max-w-md w-full flex flex-col items-center text-center">
            
            {/* Animated Royal Compass & Seal */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4 flex items-center justify-center"
            >
              <svg className="w-full h-full text-[#09090b]" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
                <circle cx="32" cy="32" r="25" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
                <path d="M32 6 L35.5 28.5 L32 32 Z" fill="currentColor" />
                <path d="M32 6 L28.5 28.5 L32 32 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M58 32 L35.5 35.5 L32 32 Z" fill="currentColor" />
                <path d="M58 32 L35.5 28.5 L32 32 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M32 58 L28.5 35.5 L32 32 Z" fill="currentColor" />
                <path d="M32 58 L35.5 35.5 L32 32 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M6 32 L28.5 28.5 L32 32 Z" fill="currentColor" />
                <path d="M6 32 L28.5 35.5 L32 32 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="32" cy="32" r="2.5" fill="#fafaf9" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.div>

            {/* Fancy Curvy Brand Title */}
            <h1 className="font-curvy-script text-6xl sm:text-7xl text-[#09090b] leading-tight mb-0.5">
              Star Bakery
            </h1>
            <p className="font-editorial italic text-sm sm:text-base text-[#27272a] font-medium tracking-wide mb-6">
              Atelier de Boulangerie Traditionnelle • Est. 2012
            </p>

            {/* Architectural Leaven Progress Bar */}
            <div className="w-full max-w-xs space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#27272a] font-semibold">
                <span>HEARTH PROOFING</span>
                <span>{progress}%</span>
              </div>
              
              <div className="relative w-full h-1.5 rounded-full bg-[#e4e4e7] overflow-hidden border border-[#18181b]/15">
                <motion.div
                  className="h-full bg-[#18181b] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              {/* Dynamic leaven status text */}
              <div className="h-6 flex items-center justify-center">
                <p className="text-[11px] font-mono text-[#52525b] truncate">
                  {currentStageText}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
