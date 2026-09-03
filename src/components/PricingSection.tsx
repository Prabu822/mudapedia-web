"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tokenPricingData } from "@/data/pricingData";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";

interface PricingSectionProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

export default function PricingSection({ currentSlide, setCurrentSlide }: PricingSectionProps) {
  const [selectedNetwork, setSelectedNetwork] = useState<"SOLANA" | "SUI" | "ETH" | "BNB" | "TRON">("SOLANA");
  const currentPricing = tokenPricingData[selectedNetwork];
  const [galleryPage, setGalleryPage] = useState<number>(0);

  // Total 8 urutan tahap langkah slide
  const totalSlides = [
    { type: "pricing", network: "SOLANA", label: "Paket Solana" },
    { type: "pricing", network: "SUI", label: "Paket Sui" },
    { type: "pricing", network: "ETH", label: "Paket Eth" },
    { type: "pricing", network: "BNB", label: "Paket Bnb" },
    { type: "pricing", network: "TRON", label: "Paket Tron" },
    { type: "team", label: "Meet Our Team" },
    { type: "gallery", page: 0, label: "Galeri Halaman 1" },
    { type: "gallery", page: 1, label: "Galeri Halaman 2" }
  ];

  const isTransitioning = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Ref untuk mendeteksi nilai terbaru di dalam event listener
  const currentSlideRef = useRef(currentSlide);
  currentSlideRef.current = currentSlide;

  const touchStartY = useRef<number>(0);

  // --- LOGIKA SCROLL-LOCKING & TOUCH SWIPE (DESKTOP & MOBILE) ---
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    // 1. Handler untuk Mouse Wheel (Desktop)
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        if (currentSlideRef.current < totalSlides.length - 1) {
          e.preventDefault(); 
          if (isTransitioning.current) return;
          isTransitioning.current = true;

          const next = currentSlideRef.current + 1;
          setCurrentSlide(next);

          if (totalSlides[next].type === "pricing") {
            setSelectedNetwork(totalSlides[next].network as any);
          } else if (totalSlides[next].type === "gallery") {
            setGalleryPage(totalSlides[next].page as number);
          }

          setTimeout(() => {
            isTransitioning.current = false;
          }, 400);
        }
      } else if (e.deltaY < 0) {
        if (currentSlideRef.current > 0) {
          e.preventDefault(); 
          if (isTransitioning.current) return;
          isTransitioning.current = true;

          const prev = currentSlideRef.current - 1;
          setCurrentSlide(prev);

          if (totalSlides[prev].type === "pricing") {
            setSelectedNetwork(totalSlides[prev].network as any);
          } else if (totalSlides[prev].type === "gallery") {
            setGalleryPage(totalSlides[prev].page as number);
          }

          setTimeout(() => {
            isTransitioning.current = false;
          }, 400);
        }
      }
    };

    // 2. Handler untuk Touch Screen (Mobile / HP)
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      // Berikan batas ambang (threshold) minimal geseran jari agar tidak terlalu sensitif
      if (Math.abs(diff) > 30) {
        // Swipe ke atas (artinya pengguna ingin lanjut ke slide berikutnya / scroll ke bawah)
        if (diff > 0) {
          if (currentSlideRef.current < totalSlides.length - 1) {
            e.preventDefault(); // Kunci layar agar tidak turun bebas
            if (isTransitioning.current) return;
            isTransitioning.current = true;

            const next = currentSlideRef.current + 1;
            setCurrentSlide(next);

            if (totalSlides[next].type === "pricing") {
              setSelectedNetwork(totalSlides[next].network as any);
            } else if (totalSlides[next].type === "gallery") {
              setGalleryPage(totalSlides[next].page as number);
            }

            touchStartY.current = touchEndY; // Reset titik tumpu sentuhan
            setTimeout(() => {
              isTransitioning.current = false;
            }, 450);
          }
        } 
        // Swipe ke bawah (artinya pengguna ingin kembali ke slide sebelumnya / scroll ke atas)
        else if (diff < 0) {
          if (currentSlideRef.current > 0) {
            e.preventDefault(); // Kunci layar agar tidak naik bebas
            if (isTransitioning.current) return;
            isTransitioning.current = true;

            const prev = currentSlideRef.current - 1;
            setCurrentSlide(prev);

            if (totalSlides[prev].type === "pricing") {
              setSelectedNetwork(totalSlides[prev].network as any);
            } else if (totalSlides[prev].type === "gallery") {
              setGalleryPage(totalSlides[prev].page as number);
            }

            touchStartY.current = touchEndY;
            setTimeout(() => {
              isTransitioning.current = false;
            }, 450);
          }
        }
      }
    };

    sectionEl.addEventListener('wheel', handleWheel, { passive: false });
    sectionEl.addEventListener('touchstart', handleTouchStart, { passive: true });
    sectionEl.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      sectionEl.removeEventListener('wheel', handleWheel);
      sectionEl.removeEventListener('touchstart', handleTouchStart);
      sectionEl.removeEventListener('touchmove', handleTouchMove);
    };
  }, [setCurrentSlide]);

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.98, y: -10 }
  };

  const transitionProps = { duration: 0.2, ease: "easeInOut" as const };
  const currentStep = totalSlides[currentSlide];

  return (
    <motion.section 
      ref={sectionRef}
      id="team-section-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto my-12 lg:my-16 pb-20 px-4 sm:px-6 relative z-20 text-white"
    >
      <div className="relative w-full flex flex-col">
        
        <div className="relative w-full min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {currentStep.type === "pricing" && (
              <motion.div
                key={`pricing-${selectedNetwork}`}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transitionProps}
                className="w-full flex flex-col justify-center"
              >
                <div className="text-center space-y-4 mb-10">
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
                    {(["SOLANA", "SUI", "ETH", "BNB", "TRON"] as const).map((net) => {
                      const targetIndex = totalSlides.findIndex(s => s.network === net);
                      return (
                        <motion.button
                          key={net}
                          whileHover={{ scale: 1.06, y: -2 }}
                          whileTap={{ scale: 0.92 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          onClick={() => {
                            setSelectedNetwork(net);
                            setCurrentSlide(targetIndex);
                          }}
                          className={`px-5 py-2 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors shadow-md cursor-pointer select-none ${
                            selectedNetwork === net 
                              ? "bg-emerald-500 text-zinc-950 scale-105 shadow-lg shadow-emerald-500/30" 
                              : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                          }`}
                        >
                          {net}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {/* Paket Dasar */}
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
                        <span className="text-2xl text-emerald-400 font-semibold block font-serif">{currentPricing.dasar.price}</span>
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
                    <button className="w-full py-3.5 rounded-xl font-bold transition shadow-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 cursor-pointer">
                      Pilih Paket Ini
                    </button>
                  </div>

                  {/* Paket Standar */}
                  <div className="bg-zinc-950 border-2 border-emerald-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative backdrop-blur-xl">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-mono font-bold rounded-full bg-emerald-500 text-zinc-950 uppercase tracking-wider shadow-lg">
                      Rekomendasi Utama
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-6 pt-2">
                        <div>
                          <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-widest block mb-1">Tier 2</span>
                          <h3 className="text-2xl font-bold text-zinc-50 font-serif">Paket Standar</h3>
                        </div>
                        <span className="text-xs font-mono px-3 py-1 rounded-full border border-emerald-500/40 text-emerald-400 font-semibold">Popular</span>
                      </div>
                      <p className="text-sm text-zinc-300 mb-6 font-sans">Solusi lengkap untuk visibilitas dan pertumbuhan ekosistem token.</p>
                      <div className="mb-8 bg-zinc-900 p-5 rounded-2xl border border-emerald-500/40 text-center shadow-inner">
                        <span className="text-3xl text-emerald-400 font-semibold block font-serif">{currentPricing.standar.price}</span>
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
                    <button className="w-full py-3.5 rounded-xl font-bold transition shadow-xl bg-emerald-500 text-zinc-950 hover:bg-emerald-400 cursor-pointer">
                      Pilih Paket Ini
                    </button>
                  </div>

                  {/* Paket Lanjutan */}
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
                        <span className="text-2xl text-emerald-400 font-semibold block font-serif">{currentPricing.lanjutan.price}</span>
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
                    <button className="w-full py-3.5 rounded-xl font-bold transition shadow-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 cursor-pointer">
                      Pilih Paket Ini
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep.type === "team" && (
              <motion.div
                key="slide-team"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transitionProps}
                className="w-full"
              >
                <TeamSection />
              </motion.div>
            )}

            {currentStep.type === "gallery" && (
              <motion.div
                key={`slide-gallery-${galleryPage}`}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transitionProps}
                className="w-full"
              >
                <GallerySection initialPage={galleryPage} />
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Tombol Navigasi Antar Slide Bawah */}
        <div className="flex items-center justify-center gap-6 mt-16 pt-4 z-30">
          <button 
            onClick={() => {
              if (currentSlide > 0) {
                const prev = currentSlide - 1;
                setCurrentSlide(prev);
                if (totalSlides[prev].type === "pricing") setSelectedNetwork(totalSlides[prev].network as any);
                if (totalSlides[prev].type === "gallery") setGalleryPage(totalSlides[prev].page as number);
              }
            }} 
            disabled={currentSlide === 0} 
            className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs hover:bg-zinc-800 disabled:opacity-30 cursor-pointer"
          >
            ← Sebelumnya
          </button>
          
          <div className="flex items-center gap-1 overflow-x-auto py-2">
            {totalSlides.map((s, i) => (
              <button 
                key={i} 
                onClick={() => {
                  setCurrentSlide(i);
                  if (s.type === "pricing") setSelectedNetwork(s.network as any);
                  if (s.type === "gallery") setGalleryPage(s.page as number);
                }} 
                className={`px-3 py-1.5 rounded-lg font-mono text-xs cursor-pointer whitespace-nowrap ${
                  currentSlide === i 
                    ? "bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/30" 
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                }`}
              >
                {s.type === "pricing" ? s.network : (s.type === "team" ? "Tim" : `Galeri ${s.page! + 1}`)}
              </button>
            ))}
          </div>

          <button 
            onClick={() => {
              if (currentSlide < totalSlides.length - 1) {
                const next = currentSlide + 1;
                setCurrentSlide(next);
                if (totalSlides[next].type === "pricing") setSelectedNetwork(totalSlides[next].network as any);
                if (totalSlides[next].type === "gallery") setGalleryPage(totalSlides[next].page as number);
              }
            }} 
            disabled={currentSlide === totalSlides.length - 1} 
            className="px-5 py-2.5 rounded-xl font-mono text-xs cursor-pointer bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/30 disabled:opacity-30"
          >
            Selanjutnya →
          </button>
        </div>

        <div className="w-full border-t border-zinc-800/60 mt-8" />

      </div>
    </motion.section>
  );
}