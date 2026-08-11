"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import HeroIntro from "@/components/HeroIntro";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [theme, setTheme] = useState<"emerald" | "violet" | "cyan">("emerald");
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = {
    emerald: {
      primary: "text-emerald-400 font-semibold",
      bgBtn: "bg-emerald-500 text-zinc-950",
      border: "border-emerald-500/50",
      glow: "bg-emerald-500/20",
    },
    violet: {
      primary: "text-violet-400 font-semibold",
      bgBtn: "bg-violet-500 text-zinc-950",
      border: "border-violet-500/50",
      glow: "bg-violet-500/20",
    },
    cyan: {
      primary: "text-cyan-400 font-semibold",
      bgBtn: "bg-cyan-500 text-zinc-950",
      border: "border-cyan-500/50",
      glow: "bg-cyan-500/20",
    },
  };

  const currentTheme = themes[theme];

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
    <main className="min-h-screen bg-[#030305] text-white flex flex-col justify-between p-6 relative overflow-x-hidden antialiased subpixel-antialiased">
      <AnimatePresence>{showIntro && <HeroIntro onComplete={() => setShowIntro(false)} />}</AnimatePresence>

      {/* Header Atas (Ukuran Normal/Sedang) */}
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center z-20">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center p-2 shadow-md">
            <img src="/mudapedia-logo.webp" alt="Logo" className="w-full h-full object-contain filter drop-shadow-md" />
          </div>
          <div>
            <span className="font-bold text-xs tracking-wider text-zinc-100 block">MUDAPEDIA</span>
            <span className="text-[9px] text-zinc-300 font-mono tracking-widest uppercase block font-medium">Digital Indonesia</span>
          </div>
        </div>

        {/* Theme Switcher */}
        <div className="flex items-center space-x-2 bg-zinc-900/90 border border-zinc-700 p-1.5 rounded-full backdrop-blur-md shadow-lg">
          <span className="text-[9px] font-mono text-zinc-200 px-2 hidden sm:inline font-semibold">THEME</span>
          <button onClick={() => setTheme("emerald")} className={`w-4 h-4 rounded-full bg-emerald-500 transition-all ${theme === "emerald" ? "ring-2 ring-white scale-110 shadow-[0_0_10px_#10b981]" : "opacity-40"}`} />
          <button onClick={() => setTheme("violet")} className={`w-4 h-4 rounded-full bg-violet-500 transition-all ${theme === "violet" ? "ring-2 ring-white scale-110 shadow-[0_0_10px_#8b5cf6]" : "opacity-40"}`} />
          <button onClick={() => setTheme("cyan")} className={`w-4 h-4 rounded-full bg-cyan-500 transition-all ${theme === "cyan" ? "ring-2 ring-white scale-110 shadow-[0_0_10px_#06b6d4]" : "opacity-40"}`} />
        </div>
      </header>

      {/* Main Content Area (Ukuran Normal/Sedang) */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto relative z-10 py-10">
        
        {/* SISI KIRI: KONTEN UTAMA */}
        <div className="lg:col-span-7 bg-zinc-950/95 border border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-2xl min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="popLayout">
            
            {/* --- SLIDE 0: BERANDA UTAMA --- */}
            {currentSlide === 0 && (
              <motion.div
                key="slide0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-300 tracking-wider font-bold">WEB3, BLOCKCHAIN & CRYPTO AGENCY</span>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-50 leading-snug">
                  Kecepatan dalam Industri Web3, Blockchain, dan <span className={currentTheme.primary}>Kripto.</span>
                </h1>

                <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed font-normal">
                  Kami adalah perusahaan rintisan yang berada di jantung Web3, blockchain, dan kripto, tempat teknologi dan kreativitas berpadu. Tim kami membangun solusi inovatif yang membantu bisnis berkembang di dunia desentralisasi.
                </p>
              </motion.div>
            )}

            {/* --- SLIDE 1: TENTANG KAMI (VISI & MISI) --- */}
            {currentSlide === 1 && (
              <motion.div
                key="slide1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-300 tracking-wider font-bold">COMPANY PROFILE</span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-zinc-50 tracking-wide">Tentang Kami</h2>
                
                <div className="space-y-2.5 text-xs sm:text-sm text-zinc-100 leading-relaxed">
                  <div className="bg-zinc-900/90 p-3 rounded-xl border border-zinc-700 shadow-md">
                    <h3 className={`font-bold uppercase tracking-wider text-[10px] ${currentTheme.primary} mb-0.5`}>Visi</h3>
                    <p className="text-zinc-200 text-xs font-normal">Kami menjadi Perusahaan Digital Agency yang terdepan dalam membantu para pebisnis mengembangkan usahanya.</p>
                  </div>
                  <div className="bg-zinc-900/90 p-3 rounded-xl border border-zinc-700 shadow-md">
                    <h3 className={`font-bold uppercase tracking-wider text-[10px] ${currentTheme.primary} mb-0.5`}>Misi</h3>
                    <p className="text-zinc-200 text-xs font-normal">Memahami bahwa era digital telah membuka pintu menuju peluang yang tak terbatas, dan kami hadir sebagai solusi yang cerdas dan terpercaya untuk membantu Anda mengembangkan bisnis dalam dunia yang terus berubah. Sebagai perusahaan inovatif, kami menawarkan rangkaian layanan yang dirancang khusus untuk memenuhi kebutuhan bisnis modern.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- SLIDE 2: PERTANYAAN YANG SERING DIAJUKAN (FAQ) --- */}
            {currentSlide === 2 && (
              <motion.div
                key="slide2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-300 tracking-wider font-bold">FAQ & SUPPORT</span>
                </div>

                <div>
                  <h2 className="text-base sm:text-lg font-bold text-zinc-50 tracking-wide">Pertanyaan yang Sering Diajukan</h2>
                  <p className="text-[10px] text-zinc-300 mt-0.5 font-medium">Jika pertanyaan Anda tidak terjawab, jangan ragu untuk menghubungi tim kami.</p>
                </div>

                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                  {faqData.map((faq, idx) => (
                    <div key={idx} className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-md">
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full px-3.5 py-2 text-left text-xs font-semibold text-zinc-100 flex justify-between items-center hover:bg-zinc-800 transition"
                      >
                        <span>{faq.q}</span>
                        <span className={`text-xs ${currentTheme.primary} transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-3.5 pb-2.5 text-[11px] text-zinc-200 border-t border-zinc-800 pt-2 leading-relaxed bg-zinc-950 font-normal">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Indikator Slide Bawah Kiri */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800 mt-4">
            <span className="text-[10px] font-mono text-zinc-300 font-bold">SLIDE 0{currentSlide + 1} / 03</span>
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
        <div className="lg:col-span-5 flex flex-col items-center justify-center perspective-[1500px]">
          
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
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

                <div className="w-full flex justify-between items-center text-[10px] font-mono text-zinc-100 relative z-10 font-bold">
                  <span></span>
                  <span className={`${currentTheme.primary} tracking-wider`}></span>
                </div>

                <div className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-900 border ${currentTheme.border} flex items-center justify-center p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <img src="/mudapedia-logo.webp" alt="Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                </div>

                <div className="text-center space-y-1 relative z-10">
                  <h3 className="text-xs font-black text-zinc-50 tracking-widest uppercase">MUDAPEDIA</h3>
                  <p className={`text-[10px] ${currentTheme.primary} font-mono font-bold tracking-wider`}>
                    DIGITAL INDONESIA
                  </p>
                  <p className="text-[9px] text-zinc-200 font-mono italic pt-0.5 group-hover:text-white transition-colors font-medium">
                     Klik untuk mengganti halaman berikutnya 
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Footer Bawah: Bagian bawah saja yang disesuaikan proporsional, rapi, dan tidak terlalu lebar ke kanan */}
      <footer className="w-full max-w-7xl mx-auto border-t border-zinc-800 pt-8 pb-6 z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between items-start mb-8">
          
          {/* Kolom 1: Logo & Info Perusahaan */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center p-1.5 shadow-md">
                <img src="/mudapedia-logo.webp" alt="Logo" className="w-full h-full object-contain filter drop-shadow-md" />
              </div>
              <span className="font-bold text-xs tracking-wider text-zinc-100">Mudapedia Digital Indonesia</span>
            </div>
            <p className="text-xs text-zinc-300 font-medium">
              Mari ciptakan obsesi baru dengan diri kita!
            </p>
            <div className="text-[11px] text-zinc-400 space-y-1 font-mono pt-1">
              <p className="font-bold text-zinc-200">Senin – Jum'at</p>
              <p>08.00 – 16.00 WIB</p>
            </div>
          </div>

          {/* Kolom 2: Galeri / Alamat */}
          <div className="md:col-span-4 space-y-1.5 text-xs">
            <h4 className="font-bold text-zinc-100 uppercase tracking-wider mb-2 font-mono">Galeri</h4>
            <p className="text-zinc-300">Telepon : 0851-1983-6002</p>
            <p className="text-zinc-300">Email : mudapediadigitalindonesia.com</p>
            <div className="pt-1.5">
              <p className="font-bold text-zinc-200">Banyuwangi</p>
              <p className="text-zinc-400 leading-relaxed text-[11px]">Perum Gedong Blok. D No.5 Kertosari, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68418</p>
            </div>
          </div>

          {/* Kolom 3: Perusahaan / Tautan */}
          <div className="md:col-span-3 space-y-1.5 text-xs">
            <h4 className="font-bold text-zinc-100 uppercase tracking-wider mb-2 font-mono">Perusahaan</h4>
            <ul className="space-y-1 text-zinc-400 font-medium text-[11px]">
              <li className="hover:text-white cursor-pointer transition">Tentang Kami</li>
              <li className="hover:text-white cursor-pointer transition">Tim Kami</li>
              <li className="hover:text-white cursor-pointer transition">Harga</li>
              <li className="hover:text-white cursor-pointer transition">Galeri</li>
            </ul>
          </div>

        </div>

        {/* Hak Cipta & Sosmed */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-400 border-t border-zinc-800/80 pt-6 font-medium">
          <p>© 2026 MudaPedia. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <span className="hover:text-white cursor-pointer transition text-sm">in</span>
            <span className="hover:text-white cursor-pointer transition text-sm">📷</span>
          </div>
        </div>
      </footer>
    </main>
  );
}