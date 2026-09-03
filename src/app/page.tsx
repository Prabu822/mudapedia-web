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
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    setMounted(true);

    const isReturningFromAlumni = sessionStorage.getItem("returnFromAlumni");
    if (isReturningFromAlumni === "true") {
      setShowIntro(false);
      setCurrentSlide(1);
      sessionStorage.removeItem("returnFromAlumni");

      setTimeout(() => {
        const element = document.getElementById("team-section-wrapper");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 bg-[#030305] z-9999" />;
  }

  return (
    <main 
      className={`w-full min-h-screen bg-[#030305] text-white p-4 sm:p-6 md:p-8 relative space-y-16 ${
        showIntro ? "h-screen overflow-hidden" : "overflow-x-hidden"
      }`}
    >
      <AnimatePresence>
        {showIntro && <HeroIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <NavbarSection />

      {/* Garis pemisah minimalis di bawah Navbar */}
      <div className="w-full border-t border-zinc-900 my-4" />

      <ClientTicker />

      {/* Bagian Tentang Kami / Hero */}
      <section id="tentang-kami">
        <HeroSection />
      </section>

      {/* Bagian Tim Kami */}
      <section id="tim-kami">
        {/* Tempat komponen tim Anda */}
      </section>

      {/* Bagian Harga & Slide Utama */}
      <section id="harga">
        <PricingSection 
          currentSlide={currentSlide} 
          setCurrentSlide={setCurrentSlide} 
        />
      </section>

      {/* Bagian Galeri */}
      <section id="galeri" className="w-full py-2">
        {/* Tempat komponen galeri */}
      </section>

      <FooterSection setCurrentSlide={setCurrentSlide} />
    </main>
  );
}