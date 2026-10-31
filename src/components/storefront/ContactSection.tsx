'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Sparkles, Crown } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';

export default function ContactSection() {
  const { data } = useBakery();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Private Loaf Allocation & Weekend Reserve',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', serviceType: 'Private Loaf Allocation & Weekend Reserve', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-[#1c1917]/10 overflow-hidden bg-[#fafaf9] sketch-grid-bg">
      {/* Ambient background washes */}
      <div className="absolute -bottom-20 left-1/4 w-[600px] h-[600px] ambient-sketch-wash pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#1c1917]/15 text-[#27272a] text-xs tracking-[0.2em] uppercase font-mono mb-3.5 shadow-xs">
            <Crown className="w-3.5 h-3.5 text-[#1c1917]" />
            <span>Section IV • Atelier & Commissions</span>
          </div>
          <h2 className="font-curvy-script text-5xl sm:text-7xl lg:text-8xl font-normal text-[#1c1917] tracking-tight leading-tight">
            The Atelier & Inquiries
          </h2>
          <p className="text-[#27272a] text-sm sm:text-base mt-2 font-light leading-relaxed font-editorial italic">
            Visit our private stone hearth counter or transmit an inquiry for private weekend batch reservations and private dining allocations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* Left Column: Hours, Location, Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            
            {/* Opening Hours Glass Card */}
            <div className="rounded-3xl glass-panel-luxury border-[#1c1917]/15 p-7 sm:p-9 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#1c1917]" />
                  <h3 className="font-editorial text-xl font-bold text-[#1c1917]">Deck Oven Schedule</h3>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f4] border border-[#1c1917]/15 text-[#1c1917] text-xs font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1c1917] animate-pulse" />
                  Hearth Active
                </span>
              </div>

              <div className="space-y-4">
                {data.info.hours.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2.5 border-b border-[#1c1917]/10 last:border-b-0 text-sm"
                  >
                    <span className="text-[#44403c] font-medium tracking-wide">{schedule.days}</span>
                    <span className="text-[#1c1917] font-mono text-xs font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Contacts */}
            <div className="rounded-3xl glass-panel-luxury border-[#1c1917]/15 p-7 sm:p-9 flex flex-col gap-6 bg-white shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#f5f5f4] border border-[#1c1917]/15 text-[#1c1917] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#27272a] font-mono font-bold">The Atelier Grounds</h4>
                  <p className="text-sm text-[#292524] mt-1 leading-relaxed font-light">{data.info.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#f5f5f4] border border-[#1c1917]/15 text-[#1c1917] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#27272a] font-mono font-bold">Direct Atelier Line</h4>
                  <p className="text-sm text-[#292524] mt-1 font-mono font-medium">{data.info.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#f5f5f4] border border-[#1c1917]/15 text-[#1c1917] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#27272a] font-mono font-bold">Private Dispatch</h4>
                  <p className="text-sm text-[#292524] mt-1 font-mono font-medium">{data.info.email}</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Custom Order & Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl glass-panel-luxury border-[#1c1917]/15 p-8 sm:p-12 bg-white shadow-md">
              <div className="mb-8">
                <h3 className="font-curvy-script text-3xl sm:text-4xl font-normal text-[#1c1917]">
                  Private Inquiry & Reservation Dispatch
                </h3>
                <p className="text-xs text-[#27272a] mt-1 font-light leading-relaxed">
                  For private standing loaf reservations, custom viennoiserie platters, or private cellar wholesale partnerships.
                </p>
              </div>

              {submitted ? (
                <div className="py-14 text-center flex flex-col items-center justify-center">
                  <div className="p-4 rounded-full bg-[#f5f5f4] border border-[#1c1917]/20 text-[#1c1917] mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-curvy-script text-3xl font-normal text-[#1c1917]">Dispatch Confirmed</h4>
                  <p className="text-xs text-[#27272a] mt-1.5 max-w-sm font-light">
                    Your allocation request has reached our master baker. A personal response will be dispatched within one baking cycle.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#27272a] mb-2 font-mono">
                        Client Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Lord / Lady Stirling"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl glass-input-luxury text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#27272a] mb-2 font-mono">
                        Electronic Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="stirling@estate.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl glass-input-luxury text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#27272a] mb-2 font-mono">
                      Allocation Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl glass-input-luxury text-sm bg-white text-[#1c1917]"
                    >
                      <option value="Private Loaf Allocation & Weekend Reserve">Private Loaf Allocation & Weekend Reserve</option>
                      <option value="Executive Viennoiserie Platter (Private Salon)">Executive Viennoiserie Platter (Private Salon)</option>
                      <option value="Fine Dining Wholesale Partnership">Fine Dining Wholesale Partnership</option>
                      <option value="General Inquiry for Head Baker">General Inquiry for Head Baker</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#27272a] mb-2 font-mono">
                      Dispatch Details & Required Date
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please prepare 6 Grand Reserve Country Boules and 12 Isigny Butter Croissants for private collection on Saturday morning..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl glass-input-luxury text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#1c1917] hover:bg-[#292524] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-[0_8px_20px_rgba(28,25,23,0.15)] flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Transmit Private Commission</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#27272a] pt-2 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1c1917]" />
                    <span>Private encrypted ledger. Strict confidentiality respected.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
