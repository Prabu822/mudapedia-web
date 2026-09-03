"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AboutFaq from "./AboutFaq";

export default function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 40, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 40, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-10, 10]);
  
  const glareX = useTransform(mouseXSpring, [-300, 300], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-300, 300], [0, 100]);
  const glareOpacity = useTransform(mouseXSpring, [-300, 0, 300], [0.25, 0, 0.25]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="w-full relative z-10">
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAGIAN ATAS: Teks & 3D */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center pt-12 pb-12">
          
          {/* KIRI: KOTAK TEKS UTAMA */}
          <div className="flex-1 w-full bg-zinc-950/95 border border-zinc-800 p-8 sm:p-10 rounded-3xl shadow-xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex space-x-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>

              <span className="text-xs font-mono text-zinc-400 tracking-wider font-bold uppercase">
                WEB3, BLOCKCHAIN & CRYPTO AGENCY
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-50 leading-snug mt-2">
                Kecepatan dalam Industri Web3, Blockchain, dan <span className="text-emerald-400 font-semibold">Kripto.</span>
              </h1>
            </div>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mt-4">
              Kami adalah perusahaan rintisan yang berada di jantung Web3, blockchain, dan kripto, tempat teknologi dan kreativitas berpadu. Tim kami membangun solusi inovatif yang membantu bisnis berkembang di dunia desentralisasi.
            </p>
          </div>

          {/* KANAN: 3 LAPIS KOTAK 3D */}
          <div className="flex-1 w-full flex flex-col items-center justify-center perspective-[1500px] py-4">
            <motion.div 
              animate={{ y: [-6, 6, -6] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center"
            >
              
              {/* LAPISAN KETIGA (BELAKANG) */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-full h-full rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800/70 shadow-2xl"></div>
              </motion.div>

              {/* LAPISAN KEDUA (TENGAH) */}
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-full h-full rounded-[2.5rem] bg-zinc-900/60 border border-zinc-700/75 shadow-2xl"></div>
              </motion.div>

              {/* LAPISAN PERTAMA (DEPAN) */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full h-full rounded-[2.5rem] bg-zinc-950 border-2 border-emerald-500/65 p-6 sm:p-8 flex flex-col items-center justify-center space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-2xl overflow-hidden z-10 cursor-default select-none"
              >
                <motion.div
                  style={{ x: glareX, y: glareY, opacity: glareOpacity }}
                  className="absolute -inset-full bg-linear-to-tr from-emerald-500/20 via-transparent to-transparent pointer-events-none blur-xl"
                />

                {/* Logo */}
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900/90 border border-emerald-500/40 flex items-center justify-center p-3 shadow-inner">
                  <img src="/mudapedia-logo.webp" alt="Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                </div>

                {/* Teks Utama */}
                <div className="text-center space-y-1 relative z-10">
                  <h3 className="text-xs sm:text-sm font-black text-zinc-50 tracking-[0.2em] uppercase font-mono">MUDAPEDIA</h3>
                  <p className="text-[11px] sm:text-xs text-emerald-400 font-bold font-mono tracking-wider">DIGITAL INDONESIA</p>
                  
                  {/* Teks diubah menjadi lebih terang, jelas, dan tidak miring */}
                  <p className="text-[10px] sm:text-xs text-zinc-200 font-mono font-medium tracking-wide pt-1">
                    Official Web3 & Blockchain Partner
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>

      {/* GARIS PEMBATAS FULL DARI UJUNG KIRI KE KANAN LAYAR */}
      <div className="w-full h-[1px] bg-zinc-900 my-4"></div>

      {/* BAGIAN BAWAH: TENTANG KAMI & FAQ (DIAMBIL DARI FILE TERPISAH) */}
      <AboutFaq />

    </div>
  );
}