"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tokenPricingData } from "@/data/pricingData";

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

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto my-24 mb-32 py-16 px-4 sm:px-6 relative z-20 text-white"
    >
      {/* Kontainer Utama dengan Tinggi Stabil */}
      <div className="relative w-full min-h-[950px] flex items-center">
        <AnimatePresence mode="wait">
          
          {/* ================= SLIDE 0: PAKET LAYANAN ================= */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full flex flex-col justify-center"
            >
              {/* Header Section */}
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
                
                {/* Navigasi Jaringan */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4">
                  {(["SOLANA", "SUI", "ETH", "BNB", "TRON"] as const).map((net) => (
                    <motion.button
                      key={net}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setSelectedNetwork(net)}
                      className={`px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider transition-all shadow-md cursor-pointer ${
                        selectedNetwork === net 
                          ? `${currentTheme.bgBtn} scale-105` 
                          : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                      }`}
                    >
                      {net}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Kartu Harga */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                
                {/* KARTU 1: PAKET DASAR */}
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
                        {currentPricing.dasar.features.map((feat: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="w-full py-4 rounded-xl font-bold transition shadow-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 cursor-pointer">
                    Pilih Paket Ini
                  </button>
                </div>

                {/* KARTU 2: PAKET STANDAR */}
                <div className={`bg-zinc-950 border-2 ${currentTheme.border} rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative backdrop-blur-xl`}>
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-mono font-bold rounded-full bg-emerald-500 text-zinc-950 uppercase tracking-wider shadow-lg">
                    Rekomendasi Utama
                  </div>

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
                        {currentPricing.standar.features.map((feat: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-bold transition shadow-xl ${currentTheme.bgBtn} cursor-pointer`}>
                    Pilih Paket Ini
                  </button>
                </div>

                {/* KARTU 3: PAKET LANJUTAN */}
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
                        {currentPricing.lanjutan.features.map((feat: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="w-full py-4 rounded-xl font-bold transition shadow-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 cursor-pointer">
                    Pilih Paket Ini
                  </button>
                </div>

              </div>
            </motion.div>
          )}

          {/* ================= SLIDE 1: FAQ & SUPPORT ================= */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full max-w-4xl mx-auto flex items-center justify-center"
            >
              <div className="w-full bg-zinc-950/90 border border-zinc-800/80 rounded-3xl p-10 shadow-2xl">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">FAQ & Support</span>
                <h3 className="text-3xl font-bold font-serif mb-4">Pertanyaan yang Sering Diajukan</h3>
                <p className="text-zinc-400 text-sm mb-8">Jika pertanyaan Anda tidak terjawab, jangan ragu untuk menghubungi tim kami.</p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-300">
                    1. Bagaimana cara memulai pembuatan token di Mudapedia?
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-300">
                    2. Apakah jaringan blockchain didukung sepenuhnya?
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-300">
                    3. Berapa lama durasi proses peluncuran proyek?
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= SLIDE 2: MUDAPEDIA PROFILE ================= */}
          {currentSlide === 2 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full max-w-4xl mx-auto flex items-center justify-center"
            >
              <div className="w-full bg-zinc-950/90 border border-zinc-800/80 rounded-3xl p-12 shadow-2xl flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-3xl font-bold mb-6 shadow-xl text-zinc-950">
                  M
                </div>
                <h3 className="text-3xl font-bold font-serif mb-3">MUDAPEDIA DIGITAL INDONESIA</h3>
                <p className="text-zinc-400 text-base max-w-md">Pusat solusi teknologi blockchain, pengembangan token, dan ekosistem Web3 terdepan di Indonesia.</p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.section>
  );
}