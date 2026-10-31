'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ZoomIn, Info, Crown, Award, BookOpen } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';
import { MenuItem, GalleryItem } from '@/lib/bakery-data';

export default function MenuAndGallerySection() {
  const { data } = useBakery();
  const [activeTab, setActiveTab] = useState<'menu' | 'gallery'>('menu');
  const [menuFilter, setMenuFilter] = useState<'all' | 'sourdough' | 'viennoiserie' | 'patisserie' | 'coffee'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const menuCategories = [
    { id: 'all', label: 'Complete Reserves' },
    { id: 'sourdough', label: 'Grand Reserve Sourdough' },
    { id: 'viennoiserie', label: 'Laminated Viennoiserie' },
    { id: 'patisserie', label: 'Haute Pâtisserie' },
    { id: 'coffee', label: 'Estate Roast Espresso' },
  ];

  const filteredMenuItems = menuFilter === 'all'
    ? data.menu
    : data.menu.filter(item => item.category === menuFilter);

  return (
    <section id="menu" className="relative py-24 sm:py-32 border-t border-[#1c1917]/10 overflow-hidden bg-[#fafaf9] sketch-grid-bg">
      {/* Background ambient graphite wash */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] ambient-sketch-wash pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] ambient-sketch-wash pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#1c1917]/15 text-[#27272a] text-xs tracking-[0.2em] uppercase font-mono mb-3.5 shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#1c1917]" />
              <span>Section II • Private Reserves & Archive</span>
            </div>
            <h2 className="font-curvy-script text-5xl sm:text-7xl lg:text-8xl font-normal text-[#1c1917] tracking-tight leading-tight">
              The Menu & Private Gallery
            </h2>
            <p className="text-[#27272a] text-sm sm:text-base mt-1 max-w-xl font-light leading-relaxed font-editorial italic">
              Every loaf is shaped by hand, rested for thirty-six hours, and baked upon direct refractory hearth decks.
            </p>
          </div>

          {/* Master View Switcher (Menu vs Gallery) */}
          <div className="inline-flex p-1.5 rounded-2xl glass-panel-luxury border-[#1c1917]/15 bg-white/90 self-start md:self-auto shadow-sm">
            <button
              onClick={() => setActiveTab('menu')}
              className={`px-7 py-3 rounded-xl text-xs sm:text-sm tracking-wider uppercase font-medium transition-all cursor-pointer ${
                activeTab === 'menu'
                  ? 'bg-[#1c1917] text-white font-bold shadow-md'
                  : 'text-[#27272a] hover:text-[#1c1917]'
              }`}
            >
              Artisanal Menu ({data.menu.length})
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-7 py-3 rounded-xl text-xs sm:text-sm tracking-wider uppercase font-medium transition-all cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#1c1917] text-white font-bold shadow-md'
                  : 'text-[#27272a] hover:text-[#1c1917]'
              }`}
            >
              Atelier Gallery ({data.gallery.length})
            </button>
          </div>
        </div>

        {/* TAB 1: MENU CARDS */}
        {activeTab === 'menu' && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setMenuFilter(category.id as any)}
                  className={`px-5 py-2.5 rounded-xl text-xs tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                    menuFilter === category.id
                      ? 'bg-[#1c1917] text-white border border-[#1c1917] shadow-sm font-semibold'
                      : 'bg-white/80 border border-[#1c1917]/15 text-[#27272a] hover:text-[#1c1917] hover:border-[#1c1917]/35 shadow-xs'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              <AnimatePresence>
                {filteredMenuItems.map((item, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 32, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    key={item.id}
                    className="group relative rounded-3xl glass-panel-luxury border-[#1c1917]/15 hover:border-[#1c1917]/40 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(28,25,23,0.08)] flex flex-col bg-white"
                  >
                    {/* Item Image with subtle luxury zoom */}
                    <div className="relative h-60 w-full overflow-hidden bg-[#f5f5f4]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                        {item.badge && (
                          <span className="px-3 py-1 rounded-lg bg-white/95 text-[#1c1917] text-[11px] font-mono tracking-wider border border-[#1c1917]/20 backdrop-blur-md shadow-xs">
                            {item.badge}
                          </span>
                        )}
                        {item.isSoldOut && (
                          <span className="px-3 py-1 rounded-lg bg-stone-900/90 text-white text-[11px] font-mono tracking-wider backdrop-blur-md">
                            Reserved Out Today
                          </span>
                        )}
                      </div>

                      {/* Price Pill */}
                      <div className="absolute bottom-3.5 right-3.5 px-3.5 py-1.5 rounded-xl bg-white/95 text-[#1c1917] font-editorial font-bold text-lg border border-[#1c1917]/20 shadow-md backdrop-blur-md">
                        {item.price}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-7 flex-1 flex flex-col justify-between">
                      <div>
                        {item.frenchName && (
                          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#27272a] block mb-1">
                            {item.frenchName}
                          </span>
                        )}
                        <h3 className="font-curvy-script text-3xl font-normal text-[#1c1917] group-hover:text-[#44403c] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#27272a] mt-2 line-clamp-3 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      {/* Allergens & Details Footer */}
                      <div className="mt-6 pt-4 border-t border-[#1c1917]/10 flex items-center justify-between text-[11px] text-[#27272a]">
                        <div className="flex items-center gap-2">
                          <Award className="w-3.5 h-3.5 text-[#1c1917]" />
                          <span>Contains: {item.allergens.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* TAB 2: MASONRY PHOTO GALLERY */}
        {activeTab === 'gallery' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.gallery.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-3xl overflow-hidden glass-panel-luxury border-[#1c1917]/15 cursor-pointer aspect-4/3 sm:aspect-square hover:border-[#1c1917]/40 hover:shadow-[0_16px_36px_rgba(28,25,23,0.08)] transition-all duration-300 bg-white"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Frosted overlay reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-7 flex flex-col justify-end text-[#1c1917]">
                    <span className="text-[#27272a] text-xs uppercase tracking-widest font-mono">
                      {photo.category}
                    </span>
                    <h4 className="font-curvy-script text-2xl font-normal mt-1 text-[#1c1917]">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-[#27272a] mt-1 line-clamp-2">
                      {photo.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#1c1917] font-semibold">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Inspect High-Resolution Plate</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-50 bg-[#1c1917]/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-3xl glass-panel-luxury border-[#1c1917]/30 overflow-hidden shadow-2xl flex flex-col bg-white"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1c1917] border border-[#1c1917]/20 transition-colors cursor-pointer shadow-md"
                  aria-label="Close photo view"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative max-h-[70vh] w-full bg-[#f5f5f4] flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="max-h-[70vh] w-full object-contain"
                  />
                </div>

                <div className="p-7 bg-white border-t border-[#1c1917]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[#27272a] text-xs font-mono tracking-widest uppercase font-semibold">
                      {selectedPhoto.category}
                    </span>
                    <h3 className="font-curvy-script text-3xl font-normal text-[#1c1917] mt-0.5">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-sm text-[#27272a] mt-1 font-light">
                      {selectedPhoto.description}
                    </p>
                  </div>
                  <div className="text-xs text-[#27272a] font-mono">
                    Star Bakery Royal Archives • Plate Ref. {selectedPhoto.id}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
