'use client';

import React, { useEffect, useState } from 'react';
import { ShieldAlert, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function SecurityGuard() {
  const [warningVisible, setWarningVisible] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      // If user right-clicks on an image or gallery asset, protect and show respectful copyright notice
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('.glass-panel-luxury')) {
        e.preventDefault();
        setWarningVisible(true);
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  useEffect(() => {
    if (warningVisible) {
      const timer = setTimeout(() => setWarningVisible(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [warningVisible]);

  return (
    <AnimatePresence>
      {warningVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl glass-panel-luxury border-[#1c1917]/20 p-4 shadow-xl bg-white/95 text-xs text-[#1c1917] flex items-start gap-3"
        >
          <div className="p-2 rounded-xl bg-[#f5f5f4] text-[#1c1917] shrink-0 border border-[#1c1917]/15">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h5 className="font-semibold text-[#1c1917]">Copyright & Architectural Asset Protection</h5>
            <p className="text-[11px] text-[#78716c] mt-0.5 leading-relaxed">
              Architectural sketches, photography, and proprietary recipes of Star Bakery Atelier are protected under copyright. Direct extraction is prohibited.
            </p>
          </div>
          <button
            onClick={() => setWarningVisible(false)}
            className="text-[#78716c] hover:text-[#1c1917] p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
