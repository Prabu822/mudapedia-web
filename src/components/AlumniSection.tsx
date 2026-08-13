"use client";

import { motion } from "framer-motion";

interface AlumniSectionProps {
  currentTheme: {
    primary: string;
    bgBtn: string;
    border: string;
    glow: string;
  };
}

// Data disusun vertikal agar mudah diedit
const alumniMembers = [
  { 
    id: 1, 
    name: "Rizky", 
    role: "Ex-Developer", 
    image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636475/images_7_pafbyo.jpg", 
    bio: "Pernah berkontribusi dalam pengembangan sistem inti dan optimasi platform.",
    linkedin: "https://linkedin.com/in/alumni1",
    instagram: "https://instagram.com/alumni1"
  },
  { 
    id: 2, 
    name: "Madu", 
    role: "Ex-UI/UX Designer", 
    image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636402/1381020_xusu4c.png", 
    bio: "Membantu perancangan antarmuka pengguna pada awal rilis proyek Genesis.",
    linkedin: "https://linkedin.com/in/alumni2",
    instagram: "https://instagram.com/alumni2"
  },
  { 
    id: 3, 
    name: "Nadia", 
    role: "Ex-Marketing", 
    image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636457/download_jetvy3.jpg", 
    bio: "Berperan dalam memperluas jangkauan ekosistem dan komunitas.",
    linkedin: "https://linkedin.com/in/alumni3",
    instagram: "https://instagram.com/alumni3"
  },
];

export default function AlumniSection({ currentTheme }: AlumniSectionProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center space-y-4 mb-10 w-full">
        <span className="text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
          Jejak Kontribusi
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-50 font-serif">
          Alumni & Kontributor
        </h2>
        <p className="text-base text-zinc-400 font-sans max-w-xl mx-auto">
          Terima kasih kepada para alumni yang pernah membersamai perjalanan proyek Genesis.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch min-h-100">
        {alumniMembers.map((alumni, index) => (
          <motion.div
            key={alumni.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl backdrop-blur-md transition-all group h-full"
          >
            {/* Bagian Foto */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 relative overflow-hidden group-hover:border-zinc-700 transition">
              <div className="absolute inset-0 bg-linear-to-br from-zinc-800/20 to-transparent opacity-50" />
              {alumni.image ? (
                <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover z-10" />
              ) : (
                <span className="text-xs font-mono text-zinc-500 text-center px-2 z-10">[Foto Alumni]</span>
              )}
            </div>

            {/* Bagian Teks & Tombol */}
            <div className="flex flex-col justify-between h-full w-full text-center sm:text-left">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-xl font-bold text-zinc-100 font-serif">{alumni.name}</h3>
                  <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 ${currentTheme.primary} w-fit mx-auto sm:mx-0`}>
                    {alumni.role}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                  {alumni.bio}
                </p>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 pt-4 mt-4 border-t border-zinc-900">
                <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 hover:text-white hover:bg-zinc-800 transition">
                  in
                </a>
                <a href={alumni.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 hover:text-white hover:bg-zinc-800 transition">
                  ig
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}