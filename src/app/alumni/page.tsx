"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

export default function AlumniPage() {
  const [currentThemeKey, setCurrentThemeKey] = useState<"emerald" | "violet" | "cyan">("emerald");

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") as "emerald" | "violet" | "cyan";
    if (savedTheme && themes[savedTheme]) {
      setCurrentThemeKey(savedTheme);
    }
  }, []);

  const currentTheme = themes[currentThemeKey];

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-16 px-4 sm:px-6 flex flex-col items-center">
      {/* Tombol kembali langsung mengarah ke beranda bagian team */}
      <div className="w-full max-w-5xl mb-10">
        <Link 
          href="/" 
          onClick={() => sessionStorage.setItem("returnFromAlumni", "true")}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-mono text-base uppercase hover:bg-zinc-800 transition mb-6 cursor-pointer"
        >
          ← Kembali ke Meet Our Team
        </Link>
      </div>

      <div className="text-center space-y-4 mb-12 w-full max-w-2xl">
        <span className="text-base font-mono tracking-widest uppercase px-5 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200">
          Jejak Kontribusi
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif">
          Alumni & Kontributor
        </h2>
        <p className="text-lg sm:text-xl text-zinc-300 font-sans leading-relaxed">
          Para talenta hebat yang pernah membersamai perjalanan dan perkembangan proyek Genesis.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {alumniMembers.map((alumni, index) => (
          <motion.div
            key={alumni.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className={`w-full bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl backdrop-blur-md transition-all group`}
          >
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 relative overflow-hidden group-hover:border-zinc-700 transition">
              <div className="absolute inset-0 bg-linear-to-br from-zinc-800/20 to-transparent opacity-50" />
              {alumni.image ? (
                <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover z-10" />
              ) : (
                <span className="text-base font-mono text-zinc-300 text-center px-2 z-10">[Foto Alumni]</span>
              )}
            </div>

            <div className="flex flex-col justify-between w-full text-center sm:text-left">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-serif">{alumni.name}</h3>
                  <span className={`text-xs sm:text-sm font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 ${currentTheme.primary} whitespace-nowrap w-fit mx-auto sm:mx-0`}>
                    {alumni.role}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-zinc-300 mt-3 font-sans leading-relaxed">
                  {alumni.bio}
                </p>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3 pt-4 mt-4 border-t border-zinc-900">
                <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-base font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition">
                  in
                </a>
                <a href={alumni.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-base font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition">
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