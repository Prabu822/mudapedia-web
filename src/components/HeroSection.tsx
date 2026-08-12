"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HeroSectionProps {
  currentTheme: {
    primary: string;
    bgBtn: string;
    border: string;
    glow: string;
  };
}

export default function HeroSection({ currentTheme }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Physics Spring untuk 3D Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 35, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 35, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-300, 300], [20, -20]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-20, 20]);
  
  const glareX = useTransform(mouseXSpring, [-300, 300], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-300, 300], [0, 100]);
  const glareOpacity = useTransform(mouseXSpring, [-300, 0, 300], [0.2, 0, 0.2]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    x.set(touch.clientX - rect.left - rect.width / 2);
    y.set(touch.clientY - rect.top - rect.height / 2);
  }

  const faqData = [
    { 
      q: "Apa itu PT Mudapedia Digital Indonesia?", 
      a: "PT Mudapedia Digital Indonesia adalah perusahaan yang bergerak dibidang pengembangan teknologi dan digitalisasi. Kami menyediakan solusi inovatif untuk bisnis maupun individu, mulai dari pengembangan aplikasi, website, hingga strategi digital marketing." 
    },
    { 
      q: "Layanan apa saja yang ditawarkan?", 
      a: "Pengembangan Aplikasi Mobile: Android & iOS (native atau cross-platform). Pengembangan Website: E-commerce, company profile, portofolio, dan lainnya. Digital Marketing: SEO, SEM, Social Media Management, hingga Content Creation. Konsultasi Digital: Analisis kebutuhan & strategi digitalisasi bisnis." 
    },
    { 
      q: "Bagaimana cara kerja sama dengan PT Mudapedia?", 
      a: "Proses kerja sama dimulai dengan konsultasi awal untuk memahami kebutuhan Anda. Tim kami kemudian menyusun proposal solusi lengkap dengan estimasi biaya dan waktu pengerjaan. Setelah ada kesepakatan, pengembangan dimulai dengan komunikasi intensif dan transparansi di setiap tahap proyek." 
    },
    { 
      q: "Siapa saja klien yang bisa menggunakan layanan Mudapedia?", 
      a: "Layanan kami terbuka untuk berbagai jenis klien, mulai dari UMKM, perusahaan menengah, hingga korporasi besar. Kami juga melayani kebutuhan individu yang ingin mengembangkan produk digital." 
    },
    { 
      q: "Bagaimana cara menghubungi PT Mudapedia Digital Indonesia?", 
      a: "Anda dapat menghubungi kami melalui email, telepon, atau formular kontak di website resmi. Tim kami siap membantu Anda mendapatkan solusi terbaik sesuai kebutuhan bisnis." 
    }
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto relative z-10 py-6 sm:py-10">
      
      {/* SISI KIRI: KONTEN UTAMA */}
      <div className="lg:col-span-7 bg-zinc-950/95 border border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-2xl h-[460px] flex flex-col justify-between overflow-hidden relative">
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div
              key="slide0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 flex-1 flex flex-col justify-center"
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-zinc-400 tracking-wider font-bold">WEB3, BLOCKCHAIN & CRYPTO AGENCY</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-50 leading-snug">
                Kecepatan dalam Industri Web3, Blockchain, dan <span className={currentTheme.primary}>Kripto.</span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                Kami adalah perusahaan rintisan yang berada di jantung Web3, blockchain, dan kripto, tempat teknologi dan kreativitas berpadu. Tim kami membangun solusi inovatif yang membantu bisnis berkembang di dunia desentralisasi.
              </p>
            </motion.div>
          )}

          {currentSlide === 1 && (
            <motion.div
              key="slide1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-3 flex-1 flex flex-col justify-center overflow-y-auto pr-1"
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-zinc-400 tracking-wider font-bold">COMPANY PROFILE</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-zinc-50 tracking-wide">Tentang Kami</h2>
              
              <div className="space-y-2 text-base text-zinc-100 leading-relaxed">
                <div className="bg-zinc-900/90 p-3.5 rounded-xl border border-zinc-700 shadow-md">
                  <h3 className={`font-bold uppercase tracking-wider text-xs ${currentTheme.primary} mb-1`}>Visi</h3>
                  <p className="text-zinc-300 text-sm sm:text-base font-normal">Kami menjadi Perusahaan Digital Agency yang terdepan dalam membantu para pebisnis mengembangkan usahanya.</p>
                </div>
                <div className="bg-zinc-900/90 p-3.5 rounded-xl border border-zinc-700 shadow-md">
                  <h3 className={`font-bold uppercase tracking-wider text-xs ${currentTheme.primary} mb-1`}>Misi</h3>
                  <p className="text-zinc-300 text-sm sm:text-base font-normal">Memahami bahwa era digital telah membuka pintu menuju peluang yang tak terbatas, dan kami hadir sebagai solusi yang cerdas dan terpercaya untuk membantu Anda mengembangkan bisnis dalam dunia yang terus berubah. Sebagai perusahaan inovatif, kami menawarkan rangkaian layanan yang dirancang khusus untuk memenuhi kebutuhan bisnis modern.</p>
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 2 && (
            <motion.div
              key="slide2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-2 flex-1 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-zinc-400 tracking-wider font-bold">FAQ & SUPPORT</span>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-zinc-50 tracking-wide">Pertanyaan yang Sering Diajukan</h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 font-medium">Jika pertanyaan Anda tidak terjawab, jangan ragu untuk menghubungi tim kami.</p>
              </div>

              <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-md">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-4 py-2.5 text-left text-sm sm:text-base font-semibold text-zinc-100 flex justify-between items-center hover:bg-zinc-800 transition"
                    >
                      <span>{faq.q}</span>
                      <span className={`text-sm ${currentTheme.primary} transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-3 text-sm sm:text-base text-zinc-300 border-t border-zinc-800 pt-2 leading-relaxed bg-zinc-950 font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between pt-3 border-t border-zinc-800 mt-auto">
          <span className="text-xs font-mono text-zinc-400 font-bold">SLIDE 0{currentSlide + 1} / 03</span>
          <div className="flex space-x-1.5">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? `${currentTheme.bgBtn.split(' ')[0]} w-6 shadow-md` : "bg-zinc-700 w-2"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SISI KANAN: 3D CARD */}
      <div className="lg:col-span-5 flex flex-col items-center justify-center perspective-[1500px] mt-6 lg:mt-0">
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}>
          <motion.div
            onClick={handleNextSlide}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center cursor-pointer group select-none"
          >
            <div className={`absolute w-72 h-72 ${currentTheme.glow} rounded-full blur-3xl pointer-events-none transition-all duration-500`}></div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute w-68 h-68 sm:w-76 sm:h-76 rounded-3xl bg-zinc-900/60 border border-white/20 backdrop-blur-md pointer-events-none shadow-2xl" 
              style={{ transform: "translateZ(-40px)" }}
            ></motion.div>

            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className={`absolute w-68 h-68 sm:w-76 sm:h-76 rounded-3xl bg-zinc-900/90 border ${currentTheme.border} backdrop-blur-lg pointer-events-none shadow-2xl`} 
              style={{ transform: "translateZ(-20px)" }}
            ></motion.div>

            <div 
              style={{ transform: "translateZ(50px)" }}
              className={`relative w-68 h-68 sm:w-76 sm:h-76 rounded-3xl bg-zinc-950 border-2 ${currentTheme.border} p-6 flex flex-col items-center justify-between shadow-[0_35px_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl group-hover:border-white transition-colors duration-300 overflow-hidden`}
            >
              <motion.div
                style={{ x: glareX, y: glareY, opacity: glareOpacity }}
                className="absolute -inset-full bg-gradient-to-tr from-white via-transparent to-transparent pointer-events-none blur-xl"
              />

              <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-current to-transparent opacity-95 ${currentTheme.primary}`}></div>

              <div className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-900 border ${currentTheme.border} flex items-center justify-center p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <img src="/mudapedia-logo.webp" alt="Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              </div>

              <div className="text-center space-y-1 relative z-10">
                <h3 className="text-sm font-black text-zinc-50 tracking-widest uppercase">MUDAPEDIA</h3>
                <p className={`text-xs ${currentTheme.primary} font-mono font-bold tracking-wider`}>DIGITAL INDONESIA</p>
                <p className="text-xs text-zinc-300 font-mono italic pt-0.5 group-hover:text-white transition-calls font-medium">
                   Klik untuk mengganti halaman berikutnya 
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}