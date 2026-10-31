'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Clock, MapPin, Menu as MenuIcon, X, Star } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';

export default function GlassNavbar() {
  const { data } = useBakery();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Smooth liquid scroll progress indicator along the bottom of the navbar
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.5,
  });

  const navLinks = [
    { name: 'I. The Hearth', href: '#home', id: 'home' },
    { name: 'II. Private Menu', href: '#menu', id: 'menu' },
    { name: 'III. Heritage & Lineage', href: '#story', id: 'story' },
    { name: 'IV. The Atelier', href: '#contact', id: 'contact' },
  ];

  // Liquid scrollspy: Detects which section of the page the customer is on
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'menu', 'story', 'contact'];
      const scrollPosition = window.scrollY + 220; // Offset for navbar height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      {/* Top ambient announcement banner */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, height: 0, margin: 0, padding: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white/95 border-b border-[#1c1917]/15 text-xs py-2 px-4 text-center text-[#27272a] flex items-center justify-center gap-3 backdrop-blur-md shadow-[0_1px_4px_rgba(28,25,23,0.02)] pointer-events-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1c1917]/8 border border-[#1c1917]/20 text-[#18181b] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <Star className="w-2.5 h-2.5 text-[#18181b] fill-[#18181b]" />
              Private Batch Fired
            </span>
            <span className="hidden sm:inline font-medium tracking-wider text-[#27272a]">{data.info.announcement}</span>
            <span className="sm:hidden font-medium truncate text-[#27272a]">{data.info.announcement}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Luxury Glass Navbar with Liquid State Indicator */}
      <header className={`px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300 pointer-events-auto ${isScrolled ? 'pt-2.5' : 'pt-3'}`}>
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full rounded-2xl transition-all duration-300 px-6 sm:px-8 flex items-center justify-between overflow-hidden ${
            isScrolled
              ? 'glass-panel-luxury border-[#18181b]/25 shadow-[0_16px_40px_-6px_rgba(24,24,27,0.12)] bg-white/95 backdrop-blur-2xl py-2.5'
              : 'glass-panel-subtle border-[#18181b]/15 bg-white/90 backdrop-blur-xl py-3.5'
          }`}
        >
          {/* Brand Logo with Old Money Curvy Script */}
          <Link href="/" className="group flex items-baseline gap-2.5 cursor-pointer z-10">
            <span className="font-curvy-script text-3xl sm:text-4xl text-[#09090b] group-hover:text-[#27272a] transition-colors leading-none pt-1">
              {data.info.name}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#3f3f46] hidden md:inline font-mono font-bold">
              EST. 2012
            </span>
          </Link>

          {/* Desktop Nav Items with Morphing Liquid Pill Indicator */}
          <div
            className="hidden lg:flex items-center gap-1.5 p-1 rounded-2xl bg-[#f4f4f5] border border-[#18181b]/15 relative shadow-inner"
            onMouseLeave={() => setHoveredSection(null)}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              const isHovered = hoveredSection === link.href;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredSection(link.href)}
                  onClick={() => setActiveSection(link.href)}
                  className="relative px-4 py-2 text-xs tracking-[0.12em] uppercase font-semibold rounded-xl transition-colors cursor-pointer select-none"
                >
                  {/* LIQUID MOVING BACKGROUND PILL ACCORDING TO CURRENT PAGE SECTION */}
                  {isActive && (
                    <motion.div
                      layoutId="liquid-nav-indicator"
                      className="absolute inset-0 rounded-xl bg-[#18181b] shadow-[0_4px_16px_rgba(24,24,27,0.22)]"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 32,
                        mass: 0.7,
                      }}
                    >
                      {/* Fluid droplet sheen reflection */}
                      <span className="absolute inset-x-3 top-1 h-[1px] bg-white/35 rounded-full" />
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#18181b]/30 blur-[1px] rounded-full" />
                    </motion.div>
                  )}

                  {/* Soft fluid hover highlight when hovering other items */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="liquid-hover-indicator"
                      className="absolute inset-0 rounded-xl bg-[#18181b]/8"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Text label - deep readable charcoal when inactive, crisp white when active */}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-[#27272a] hover:text-[#09090b]'
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3 z-10">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium tracking-wider uppercase text-white glass-button-graphite cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5 text-stone-300" />
              <span>Private Reserves</span>
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl glass-button-outline text-[#1c1917] cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

          {/* FLUID PROGRESS BAR UNDER THE ENTIRE TOP BAR */}
          <motion.div
            style={{ scaleX: smoothProgress }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#78716c]/30 via-[#1c1917] to-[#78716c]/30 origin-left pointer-events-none"
          />
        </motion.nav>

        {/* Mobile Flyout Menu with Active Indicator */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-2 p-6 rounded-2xl glass-panel-luxury border-[#1c1917]/20 bg-white/95 backdrop-blur-2xl shadow-xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.href);
                        setMobileMenuOpen(false);
                      }}
                      className={`relative px-4 py-3 rounded-xl text-sm font-medium tracking-wider uppercase transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-[#1c1917] text-white font-semibold shadow-md'
                          : 'text-[#57534e] hover:text-[#1c1917] hover:bg-[#f5f5f4]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="mobile-liquid-dot"
                          className="w-2 h-2 rounded-full bg-white shadow-xs"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </a>
                  );
                })}
                <div className="pt-3 flex flex-col gap-3 border-t border-[#1c1917]/10 mt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#1c1917]"
                  >
                    Private Reserves & Inquiries
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
