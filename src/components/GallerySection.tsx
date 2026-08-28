"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GallerySectionProps {
  currentTheme: {
    bgBtn: string; // Warna background tombol tema aktif dari navbar utama
  };
}

const galleryPage1 = [
  { title: "Keuntungan Investasi Crypto", img: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636536/miles-morales-in-spider-man-into-the-spider-verse_3840x2160_xtrafondos.com_fg8rxe.jpg", link: "https://instagram.com" },
  { title: "Proses Design To Code", img: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786703575/sadie_sink_2026_ss0wrx.jpg", link: "https://instagram.com" },
  { title: "Dompet Crypto mirip dengan..... ??", img: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786703574/charles_leclerc_lslyhl.jpg", link: "https://instagram.com" },
  { title: "Memperingati Hari Batik Nasional", img: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786703573/Stark_byd8ap.jpg", link: "https://instagram.com" },
  { title: "Memperingati Hari Kesaktian Pancasila", img: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786703571/Star_Night_bcpfmg.jpg", link: "https://instagram.com" },
  { title: "Melek Finansial Digital", img: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786703570/PP_WA_ikks5h.jpg", link: "https://instagram.com" },
  { title: "Tren Blockchain di Masa Depan", img: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786703569/1049127675715965288_rsgg8u.jpg", link: "https://instagram.com" },
  { title: "5 Hal yang Harus Kamu Hindari", img: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786703569/ywtjstatwvukrbrgluzf.jpg", link: "https://instagram.com" },
];

const galleryPage2 = [
  { title: "5 Tips Aman Investasi Crypto", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800", link: "https://instagram.com" },
  { title: "Proses Design To Code", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800", link: "https://instagram.com" },
  { title: "Blockchain di Supply Chain", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800", link: "https://instagram.com" },
  { title: "Memperingati Maulid Nabi SAW", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800", link: "https://instagram.com" },
  { title: "Kegiatan Komunitas Kami", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800", link: "https://instagram.com" },
  { title: "SEO (Search Engine Optimize)", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800", link: "https://instagram.com" },
  { title: "Dirgahayu Republik Indonesia", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800", link: "https://instagram.com" },
];

export default function GallerySection({ currentTheme }: GallerySectionProps) {
  const [galleryPage, setGalleryPage] = useState<number>(0);
  const activeData = galleryPage === 0 ? galleryPage1 : galleryPage2;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Galeri */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 sm:mb-14 w-full flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">Galeri Instagram</h2>
        
        {/* Tombol Pindah Halaman yang warnanya sinkron dengan tema utama */}
        <div className="flex justify-center items-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setGalleryPage(0)}
            className={`px-5 py-2.5 rounded-xl font-bold transition text-sm sm:text-base cursor-pointer shadow-md ${
              galleryPage === 0 
                ? `${currentTheme?.bgBtn || "bg-white text-zinc-950"} shadow-lg` 
                : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800"
            }`}
          >
            Halaman 1  
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setGalleryPage(1)}
            className={`px-5 py-2.5 rounded-xl font-bold transition text-sm sm:text-base cursor-pointer shadow-md ${
              galleryPage === 1 
                ? `${currentTheme?.bgBtn || "bg-white text-zinc-950"} shadow-lg` 
                : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800"
            }`}
          >
            Halaman 2 
          </motion.button>
        </div>
      </motion.div>

      {/* Grid Container */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={galleryPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {activeData.map((item, index) => (
            <motion.a 
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }} 
              className="block group"
            >
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-zinc-950/60 border border-zinc-800/60 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all group-hover:border-zinc-500 backdrop-blur-sm"
              >
                <div className="w-full aspect-video sm:h-56 overflow-hidden bg-zinc-900 relative flex flex-col justify-end">
                  <motion.img 
                    src={item.img} 
                    alt={item.title} 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent z-10 pointer-events-none" />

                  <div className="p-4 relative z-20">
                    <h4 className="text-sm sm:text-base font-bold text-zinc-100 leading-snug line-clamp-2 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}