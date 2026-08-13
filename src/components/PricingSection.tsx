"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tokenPricingData } from "@/data/pricingData";
import TeamSection from "@/components/TeamSection";
import AlumniSection from "@/components/AlumniSection";

interface PricingSectionProps {
  currentTheme: {
    primary: string;
    bgBtn: string;
    border: string;
    glow: string;
  };
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

export default function PricingSection({ currentTheme, currentSlide, setCurrentSlide }: PricingSectionProps) {
  const [selectedNetwork, setSelectedNetwork] = useState<"SOLANA" | "SUI" | "ETH" | "BNB" | "TRON">("SOLANA");
  const currentPricing = tokenPricingData[selectedNetwork];

  const slideTitles = [
    { label: "Paket Layanan" },
    { label: "Meet Our Team" },
    { label: "Alumni" },
    { label: "FAQ & Support" }
  ];

  // Menggunakan transisi fade murni tanpa pergerakan (y: 0) agar layar tidak naik-turun sama sekali
  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const transitionProps = { duration: 0.15, ease: "easeInOut" as const };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto my-16 lg:my-24 mb-32 py-8 px-4 sm:px-6 relative z-20 text-white"
    >
      <div className="relative w-full flex flex-col">
        
        {/* Kontainer Grid Tumpuk dengan alur tinggi stabil mutlak */}
        <div className="relative w-full grid grid-cols-1 grid-rows-1 items-start">
          <AnimatePresence mode="wait">
            
            {/* ================= SLIDE 0: PAKET LAYANAN ================= */}
            {currentSlide === 0 && (
              <motion.div
                key="slide-0"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transitionProps}
                className="w-full col-start-1 row-start-1 flex flex-col justify-center"
              >
                <div className="text-center space-y-4 mb-12">
                  <span className="text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                    Struktur Layanan Genesis
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-50 font-serif">
                    Buat Token Baru
                  </h2>
                  <p className="text-base sm:text-lg text-zinc-400 font-sans max-w-2xl mx-auto">
                    Pilih jaringan blockchain dan struktur paket layanan profesional untuk peluncuran proyek Anda.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4">
                    {(["SOLANA", "SUI", "ETH", "BNB", "TRON"] as const).map((net) => (
                      <motion.button
                        key={net}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setSelectedNetwork(net)}
                        className={`px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider transition-all shadow-md cursor-pointer ${
                          selectedNetwork === net 
                            ? `${currentTheme.bgBtn} text-zinc-950 scale-105 shadow-lg` 
                            : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                        }`}
                      >
                        {net}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-3xl p-8 flex flex-col justify-between shadow-xl backdrop-blur-md">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">Tier 1</span>
                          <h3 className="text-2xl font-bold text-zinc-100 font-serif">Paket Dasar</h3>
                        </div>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">Starter</span>
                      </div>
                      <p className="text-sm text-zinc-400 mb-6 font-sans">Fitur esensial untuk memulai peluncuran token dasar Anda.</p>
                      <div className="mb-8 bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800 text-center">
                        <span className={`text-2xl font-black ${currentTheme.primary} block font-serif`}>{currentPricing.dasar.price}</span>
                        <span className="text-xs text-zinc-500 font-mono">/proyek</span>
                      </div>
                      <div className="border-t border-zinc-800/80 pt-6 mb-8">
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4">Fasilitas Termasuk:</p>
                        <ul className="space-y-3 text-sm text-zinc-300 font-sans">
                          {currentPricing.dasar.features.map((feat: string, idx: number) => <li key={idx} className="flex items-start space-x-3"><span className="text-emerald-400 font-bold mt-0.5">✓</span><span className="leading-relaxed">{feat}</span></li>)}
                        </ul>
                      </div>
                    </div>
                    <button className="w-full py-4 rounded-xl font-bold transition shadow-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 cursor-pointer">Pilih Paket Ini</button>
                  </div>

                  <div className={`bg-zinc-950 border-2 ${currentTheme.border} rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative backdrop-blur-xl`}>
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-mono font-bold rounded-full bg-emerald-500 text-zinc-950 uppercase tracking-wider shadow-lg">Rekomendasi Utama</div>
                    <div>
                      <div className="flex justify-between items-start mb-6 pt-2">
                        <div>
                          <span className={`text-xs font-mono ${currentTheme.primary} uppercase tracking-widest block mb-1`}>Tier 2</span>
                          <h3 className="text-2xl font-bold text-zinc-50 font-serif">Paket Standar</h3>
                        </div>
                        <span className={`text-xs font-mono px-3 py-1 rounded-full border ${currentTheme.border} ${currentTheme.primary}`}>Popular</span>
                      </div>
                      <p className="text-sm text-zinc-300 mb-6 font-sans">Solusi lengkap untuk visibilitas dan pertumbuhan ekosistem token.</p>
                      <div className={`mb-8 bg-zinc-900 p-5 rounded-2xl border ${currentTheme.border} text-center shadow-inner`}>
                        <span className={`text-3xl font-black ${currentTheme.primary} block font-serif`}>{currentPricing.standar.price}</span>
                        <span className="text-xs text-zinc-400 font-mono">/proyek</span>
                      </div>
                      <div className="border-t border-zinc-800 pt-6 mb-8">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">Fasilitas Termasuk:</p>
                        <ul className="space-y-3 text-sm text-zinc-100 font-sans">
                          {currentPricing.standar.features.map((feat: string, idx: number) => <li key={idx} className="flex items-start space-x-3"><span className="text-emerald-400 font-bold mt-0.5">✓</span><span className="leading-relaxed">{feat}</span></li>)}
                        </ul>
                      </div>
                    </div>
                    <button className={`w-full py-4 rounded-xl font-bold transition shadow-xl ${currentTheme.bgBtn} cursor-pointer`}>Pilih Paket Ini</button>
                  </div>

                  <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-3xl p-8 flex flex-col justify-between shadow-xl backdrop-blur-md">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">Tier 3</span>
                          <h3 className="text-2xl font-bold text-zinc-100 font-serif">Paket Lanjutan</h3>
                        </div>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">Enterprise</span>
                      </div>
                      <p className="text-sm text-zinc-400 mb-6 font-sans">Skala penuh korporasi dengan pemasaran eksklusif & visibilitas tinggi.</p>
                      <div className="mb-8 bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800 text-center">
                        <span className={`text-2xl font-black ${currentTheme.primary} block font-serif`}>{currentPricing.lanjutan.price}</span>
                        <span className="text-xs text-zinc-500 font-mono">/proyek</span>
                      </div>
                      <div className="border-t border-zinc-800/80 pt-6 mb-8">
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4">Fasilitas Termasuk:</p>
                        <ul className="space-y-3 text-sm text-zinc-300 font-sans">
                          {currentPricing.lanjutan.features.map((feat: string, idx: number) => <li key={idx} className="flex items-start space-x-3"><span className="text-emerald-400 font-bold mt-0.5">✓</span><span className="leading-relaxed">{feat}</span></li>)}
                        </ul>
                      </div>
                    </div>
                    <button className="w-full py-4 rounded-xl font-bold transition shadow-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 cursor-pointer">Pilih Paket Ini</button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ================= SLIDE 1: TEAM ================= */}
            {currentSlide === 1 && (
              <motion.div
                key="slide-1"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transitionProps}
                className="w-full col-start-1 row-start-1"
              >
                <TeamSection currentTheme={currentTheme} />
              </motion.div>
            )}

            {/* ================= SLIDE 2: ALUMNI ================= */}
            {currentSlide === 2 && (
              <motion.div
                key="slide-2"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transitionProps}
                className="w-full col-start-1 row-start-1"
              >
                <AlumniSection currentTheme={currentTheme} />
              </motion.div>
            )}

            {/* ================= SLIDE 3: FAQ & SUPPORT ================= */}
            {currentSlide === 3 && (
              <motion.div
                key="slide-3"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transitionProps}
                className="w-full max-w-4xl mx-auto col-start-1 row-start-1 flex items-center justify-center py-12"
              >
                <div className={`w-full bg-zinc-950/90 border ${currentTheme.border} rounded-3xl p-10 shadow-2xl backdrop-blur-md`}>
                  <h3 className="text-3xl font-bold font-serif mb-4">FAQ & Support</h3>
                  <div className="space-y-4 text-zinc-400 text-sm">
                    <p>1. Bagaimana cara memulai? Hubungi kami.</p>
                    <p>2. Apakah jaringan didukung? Ya.</p>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* NAVIGASI - Aman di bawah, stabil tanpa naik-turun */}
        <div className="flex items-center justify-center gap-6 mt-16 pt-6 border-t border-zinc-800/60 z-30">
          <button onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))} disabled={currentSlide === 0} className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs hover:bg-zinc-800 disabled:opacity-30 cursor-pointer">← Sebelumnya</button>
          <div className="flex items-center gap-2">
            {slideTitles.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`px-4 py-2 rounded-lg font-mono text-xs cursor-pointer ${currentSlide === i ? `${currentTheme.bgBtn} text-zinc-950 font-bold shadow-md` : "bg-zinc-900 text-zinc-400 border border-zinc-800"}`}>0{i + 1}</button>
            ))}
          </div>
          <button onClick={() => setCurrentSlide(Math.min(slideTitles.length - 1, currentSlide + 1))} disabled={currentSlide === slideTitles.length - 1} className={`px-5 py-2.5 rounded-xl font-mono text-xs cursor-pointer ${currentTheme.bgBtn} text-zinc-950 font-bold shadow-md disabled:opacity-30`}>Selanjutnya →</button>
        </div>
      </div>
    </motion.section>
  );
}