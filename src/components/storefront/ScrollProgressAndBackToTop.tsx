'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgressAndBackToTop() {
  const [visible, setVisible] = useState(false);
  const [percent, setPercent] = useState(0);

  const { scrollYProgress, scrollY } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setVisible(latest > 320);
    });
    const unsubscribePercent = scrollYProgress.on('change', (latest) => {
      setPercent(Math.round(latest * 100));
    });

    return () => {
      unsubscribe();
      unsubscribePercent();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pointer-events-auto"
        >
          <button
            onClick={scrollToTop}
            title="Return to The Hearth (Top)"
            aria-label="Scroll back to top"
            className="group relative flex items-center gap-2 pl-3.5 pr-2.5 py-2 rounded-full bg-white/95 text-[#18181b] border-2 border-[#18181b]/25 shadow-[0_8px_24px_rgba(24,24,27,0.14)] backdrop-blur-xl hover:border-[#18181b] hover:shadow-[0_12px_30px_rgba(24,24,27,0.22)] transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            {/* Scroll percentage number */}
            <span className="text-xs font-mono font-bold tracking-tight text-[#18181b]">
              {percent}%
            </span>

            {/* Circular Progress Ring with Up Arrow */}
            <div className="relative w-7 h-7 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#e4e4e7"
                  strokeWidth="3"
                />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#18181b"
                  strokeWidth="3"
                  strokeDasharray="88"
                  style={{
                    pathLength: smoothProgress,
                  }}
                  strokeLinecap="round"
                />
              </svg>
              <ArrowUp className="w-3.5 h-3.5 text-[#18181b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[60%] transition-transform duration-200" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
