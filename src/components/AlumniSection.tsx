"use client";

import { motion } from "framer-motion";

interface AlumniSectionProps {
  currentTheme: {
    primary: string;
    bgBtn: string;
    border: string;
    glow: string;
  };
  onBackToTeam?: () => void;
}

// Data galeri foto alumni
const alumniPhotos = [
  { id: 1, image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636475/images_7_pafbyo.jpg" },
  { id: 2, image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636402/1381020_xusu4c.png" },
  { id: 3, image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636457/download_jetvy3.jpg" },
  // Tambahkan foto alumni lainnya di sini jika ada:
  // { id: 4, image: "URL_CLOUDINARY_BARU" },
];

export default function AlumniSection({ currentTheme, onBackToTeam }: AlumniSectionProps) {
  return (
    <div className="w-full flex flex-col items-center px-4 py-10">
      <div className="text-center space-y-4 mb-12 w-full max-w-2xl">
        {onBackToTeam && (
          <button
            onClick={onBackToTeam}
            className={`mb-4 px-4 py-2 rounded-xl bg-zinc-900 border ${currentTheme.border} text-zinc-300 font-mono text-xs uppercase hover:bg-zinc-800 transition cursor-pointer`}
          >
            ← Kembali ke Meet Our Team
          </button>
        )}
        <span className="text-sm font-mono tracking-widest uppercase px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
          Galeri Kenangan
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-50 font-serif">
          Alumni & Kontributor
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-sans">
          Dokumentasi visual para alumni yang pernah membersamai perjalanan proyek Genesis.
        </p>
      </div>

      {/* Grid Khusus Galeri Foto Alumni Saja */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {alumniPhotos.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className={`aspect-square rounded-3xl bg-zinc-900 border ${currentTheme.border} overflow-hidden relative shadow-xl group cursor-pointer`}
          >
            <img 
              src={item.image} 
              alt="Foto Alumni" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            {/* Efek gradasi transparan dan glow yang menyesuaikan tema utama */}
            <div className={`absolute inset-0 bg-linear-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className={`absolute inset-0 ${currentTheme.glow} opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}