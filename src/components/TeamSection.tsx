"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const teamMembers = [
  { 
    id: 1, 
    name: "Joko", 
    role: "Internship", 
    category: "magang", 
    image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636264/Screenshot_2025.12.22_11.34.05.209_i4e6e5.png", 
    bio: "Fokus pada pengembangan frontend & optimasi UI/UX.",
    linkedin: "https://linkedin.com/in/joko",
    instagram: "https://instagram.com/joko"
  },
  { 
    id: 2, 
    name: "Izza", 
    role: "Internship", 
    category: "magang", 
    image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636262/Screenshot_2025.12.11_12.58.21.235_ouoie9.png", 
    bio: "Mendukung integrasi sistem dan riset data proyek.",
    linkedin: "https://linkedin.com/in/izza",
    instagram: "https://instagram.com/izza"
  },
  { 
    id: 3, 
    name: "Zulfa", 
    role: "Internship", 
    category: "magang", 
    image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1786636256/Screenshot_2025.11.29_09.53.15.070_xvm4et.png", 
    bio: "Mengelola dokumentasi dan kebutuhan fungsional aplikasi.",
    linkedin: "https://linkedin.com/in/zulfa",
    instagram: "https://instagram.com/zulfa"
  },
  { 
    id: 4, 
    name: "Ahmad", 
    role: "Developer", 
    category: "tim", 
    image: "https://res.cloudinary.com/slqx0rzq/image/upload/v1782289057/Screenshot_2026.03.16_00.57.31.882_kqnhpf.png", 
    bio: "Bertanggung jawab atas arsitektur backend & performa server.",
    linkedin: "https://linkedin.com/in/ahmad",
    instagram: "https://instagram.com/ahmad"
  },
];

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"semua" | "tim" | "magang">("semua");

  const filteredMembers = teamMembers.filter((member) => {
    if (activeTab === "semua") return true;
    return member.category === activeTab;
  });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center space-y-4 mb-10 w-full">
        <span className="text-sm font-mono tracking-widest uppercase px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
          Direktori Talenta
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-50 font-serif">
          Meet Our Team
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-sans max-w-xl mx-auto">
          Orang-orang hebat di balik inovasi dan kesuksesan proyek Genesis.
        </p>

        <div className="pt-2">
          <Link
            href="/alumni"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-mono text-sm uppercase tracking-wider bg-emerald-500 text-zinc-950 font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 hover:bg-emerald-400 transition-all cursor-pointer"
          >
            <span>Lihat Halaman Alumni</span>
            <span>→</span>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {(["semua", "tim", "magang"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl font-mono text-sm uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-emerald-500 text-zinc-950 font-bold shadow-lg shadow-emerald-500/30 scale-105"
                  : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-items-center min-h-[400px]">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member, index) => (
            <div key={member.id} className="w-full max-w-md">
              {placeholderCard(member, index)}
            </div>
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center py-20 text-zinc-400 font-mono text-base">
            Tidak ada data untuk kategori ini.
          </div>
        )}
      </div>
    </div>
  );
}

function placeholderCard(member: any, index: number) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="w-full bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl backdrop-blur-md transition-all group"
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 relative overflow-hidden group-hover:border-zinc-700 transition">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-50" />
        {member.image ? (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover z-10" />
        ) : (
          <span className="text-sm font-mono text-zinc-400 text-center px-2 z-10">[Foto Anggota]</span>
        )}
      </div>

      <div className="flex flex-col justify-between w-full text-center sm:text-left">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
            <h3 className="text-2xl font-bold text-zinc-100 font-serif">{member.name}</h3>
            <span className="text-sm font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 font-semibold w-fit mx-auto sm:mx-0">
              {member.role}
            </span>
          </div>
          <p className="text-sm sm:text-base text-zinc-300 mt-3 font-sans leading-relaxed">
            {member.bio}
          </p>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-3 pt-4 mt-4 border-t border-zinc-900">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition">
            in
          </a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition">
            ig
          </a>
        </div>
      </div>
    </motion.div>
  );
}