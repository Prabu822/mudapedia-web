"use client";

import { motion } from "framer-motion";

interface FooterSectionProps {
  setCurrentSlide?: (slide: number) => void;
}

export default function FooterSection({ setCurrentSlide }: FooterSectionProps) {
  const handleNavigation = (sectionId: string, slideIndex?: number) => {
    // Jika ada perintah pindah slide (untuk Tim, Harga, atau Galeri)
    if (slideIndex !== undefined && setCurrentSlide) {
      setCurrentSlide(slideIndex);
    }

    // Cari elemen berdasarkan ID dan lakukan scroll mulus
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto border-t border-zinc-800 pt-8 pb-6 relative z-30 pointer-events-auto text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between items-start mb-8 text-center md:text-left">
        
        {/* Kolom 1: Logo & Info */}
        <div className="md:col-span-5 space-y-3 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center p-1.5 shadow-md">
              <img src="/mudapedia-logo.webp" alt="Logo" className="w-full h-full object-contain filter drop-shadow-md" />
            </div>
            <span className="font-bold text-sm tracking-wider text-zinc-100">Mudapedia Digital Indonesia</span>
          </div>
          <p className="text-base text-zinc-300 font-medium">
            Mari ciptakan obsesi baru dengan diri kita!
          </p>
          <div className="text-sm text-zinc-400 space-y-1 font-mono pt-1">
            <p className="font-bold text-zinc-200">Senin – Jum'at</p>
            <p>08.00 – 16.00 WIB</p>
          </div>
        </div>

        {/* Kolom 2: Kontak & Alamat */}
        <div className="md:col-span-4 space-y-2 text-sm">
          <h4 className="font-bold text-zinc-100 uppercase tracking-wider mb-2 font-mono text-base">Informasi</h4>
          <p className="text-zinc-300">Telepon : 0851-1983-6002</p>
          <p className="text-zinc-300">Email : mudapediadigitalindonesia.com</p>
          <div className="pt-1.5">
            <p className="font-bold text-zinc-200">Banyuwangi</p>
            <p className="text-zinc-400 leading-relaxed text-sm">Perum Gedong Blok. Dis No.5 Kertosari, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68418</p>
          </div>
        </div>

        {/* Kolom 3: Perusahaan / Tautan dengan Animasi Klik */}
        <div className="md:col-span-3 space-y-2 text-sm">
          <h4 className="font-bold text-zinc-100 uppercase tracking-wider mb-2 font-mono text-base">Perusahaan</h4>
          <ul className="space-y-2 text-zinc-400 font-medium text-sm flex flex-col items-center md:items-start">
            
            {/* Tentang Kami */}
            <li>
              <motion.button 
                whileHover={{ x: 4, color: "#ffffff" }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="button"
                onClick={() => handleNavigation("tentang-kami")}
                className="hover:text-white cursor-pointer transition text-left select-none"
              >
                Tentang Kami
              </motion.button>
            </li>

            {/* Tim Kami (Slide 1) */}
            <li>
              <motion.button 
                whileHover={{ x: 4, color: "#ffffff" }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="button"
                onClick={() => handleNavigation("harga", 1)}
                className="hover:text-white cursor-pointer transition text-left select-none"
              >
                Tim Kami
              </motion.button>
            </li>

            {/* Harga (Slide 0) */}
            <li>
              <motion.button 
                whileHover={{ x: 4, color: "#ffffff" }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="button"
                onClick={() => handleNavigation("harga", 0)}
                className="hover:text-white cursor-pointer transition text-left select-none"
              >
                Harga
              </motion.button>
            </li>

            {/* Galeri (Slide 2) - Sekarang langsung diarahkan ke slider index 2 */}
            <li>
              <motion.button 
                whileHover={{ x: 4, color: "#ffffff" }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="button"
                onClick={() => handleNavigation("harga", 2)}
                className="hover:text-white cursor-pointer transition text-left select-none"
              >
                Galeri
              </motion.button>
            </li>

          </ul>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-zinc-400 border-t border-zinc-800/80 pt-6 font-medium gap-4">
        <p>© 2026 MudaPedia. All rights reserved.</p>
        <div className="flex space-x-4">
          <span className="hover:text-white cursor-pointer transition text-base">in</span>
          <span className="hover:text-white cursor-pointer transition text-base">📷</span>
        </div>
      </div>
    </motion.footer>
  );
}