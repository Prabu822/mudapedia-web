"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroIntro from "@/components/HeroIntro";
import NavbarSection from "@/components/NavbarSection";
import ClientTicker from "@/components/ClientTicker";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [theme, setTheme] = useState<"emerald" | "violet" | "cyan">("emerald");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = {
    emerald: {
      primary: "text-emerald-400 font-semibold",
      bgBtn: "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]",
      border: "border-emerald-500/40",
      glow: "bg-emerald-500/15",
    },
    violet: {
      primary: "text-violet-400 font-semibold",
      bgBtn: "bg-violet-500 text-zinc-950 hover:bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.3)]",
      border: "border-violet-500/40",
      glow: "bg-violet-500/15",
    },
    cyan: {
      primary: "text-cyan-400 font-semibold",
      bgBtn: "bg-cyan-500 text-zinc-950 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]",
      border: "border-cyan-500/40",
      glow: "bg-cyan-500/15",
    },
  };

  const currentTheme = themes[theme];

  return (
    <main className="min-h-screen bg-[#030305] text-white flex flex-col justify-between p-4 sm:p-6 md:p-8 relative overflow-x-hidden antialiased">
      <AnimatePresence>{showIntro && <HeroIntro onComplete={() => setShowIntro(false)} />}</AnimatePresence>

      <NavbarSection theme={theme} setTheme={setTheme} />

      <ClientTicker />

      <HeroSection currentTheme={currentTheme} />

      {/* Komponen Pricing dengan Indikator Kapsul di dalamnya */}
      <PricingSection 
        currentTheme={currentTheme} 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
      />

      <FooterSection />
    </main>
  );
}