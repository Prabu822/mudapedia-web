"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Member {
  id: number;
  name: string;
  role: string;
  batch: string;
  avatar: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
  contributions: string[];
  isActiveTop?: boolean;
}

const membersData: Member[] = [
  {
    id: 1,
    name: "Aina",
    role: "Lead Frontend Developer",
    batch: "2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    socials: { linkedin: "#", instagram: "#", github: "#" },
    contributions: ["Membangun Smart Contract UI", "Optimasi Kecepatan Website", "Integrasi Web3 Wallet"],
    isActiveTop: true,
  },
  {
    id: 2,
    name: "Firda",
    role: "UI/UX & Web3 Researcher",
    batch: "2026",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
    socials: { linkedin: "#", instagram: "#" },
    contributions: ["Desain Sistem Tokenomics", "Wireframe Dashboard Kripto", "User Testing & Research"],
    isActiveTop: true,
  },
  {
    id: 3,
    name: "Joko",
    role: "Backend & Smart Contract",
    batch: "2025",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
    socials: { linkedin: "#", github: "#" },
    contributions: ["Deploy Kontrak Solana", "Manajemen Database MongoDB", "API Gateway Integration"],
  },
  {
    id: 4,
    name: "Zulfa",
    role: "Digital Marketing & Content",
    batch: "2025",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    socials: { instagram: "#", linkedin: "#" },
    contributions: ["Kampanye Media Sosial Web3", "Whitepaper & Dokumentasi Proyek"],
  },
];

export default function TeamSection() {
  const [filter, setFilter] = useState("Semua");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const filteredMembers = membersData.filter((member) => {
    if (filter === "Semua") return true;
    return member.batch === filter;
  });

  return (
    <section id="tim" className="relative py-28 px-6 bg-[#0A0A0C] text-zinc-100">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Talenta & Alumni Berbakat</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Team & Alumni</span>
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-sm md:text-base font-normal">
            Kolaborasi generasi muda terbaik yang siap menghadirkan solusi digital dan teknologi desentralisasi masa depan.
          </p>

          {/* Tombol Filter Selaras */}
          <div className="flex justify-center gap-3 mt-8">
            {["Semua", "2026", "2025"].map((batchYear) => (
              <button
                key={batchYear}
                onClick={() => setFilter(batchYear)}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === batchYear
                    ? "bg-zinc-100 text-zinc-950 shadow-md"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                }`}
              >
                {batchYear === "Semua" ? "Semua Angkatan" : `Angkatan ${batchYear}`}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Kartu */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 cursor-pointer hover:border-zinc-700 transition"
              >
                {member.isActiveTop && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold bg-zinc-800 text-zinc-200 border border-zinc-700 uppercase tracking-wider">
                    Top Active
                  </span>
                )}
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 border border-zinc-800 group-hover:border-zinc-600 transition">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-white group-hover:text-zinc-200 transition">{member.name}</h3>
                  <p className="text-xs text-zinc-400 mb-3">{member.role}</p>
                  <span className="inline-block px-3 py-1 rounded-lg bg-zinc-950 text-[11px] font-semibold text-zinc-400 border border-zinc-800">
                    Batch {member.batch}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MODAL POPUP DETAIL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 text-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:bg-zinc-100 hover:text-zinc-950 font-bold transition"
              >
                ✕
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-zinc-700"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-sm text-zinc-300">{selectedMember.role}</p>
                  <p className="text-xs text-zinc-500">Angkatan / Batch {selectedMember.batch}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-3">
                  Kontribusi Proyek Utama:
                </h4>
                <ul className="space-y-2">
                  {selectedMember.contributions.map((item, index) => (
                    <li key={index} className="text-xs font-medium bg-zinc-950 px-4 py-2.5 rounded-xl border border-zinc-800 flex items-center space-x-3 text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-3">
                  Tautan Sosial / Profesional:
                </h4>
                <div className="flex space-x-3">
                  {selectedMember.socials.linkedin && (
                    <a href={selectedMember.socials.linkedin} className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs font-semibold hover:bg-zinc-100 hover:text-zinc-950 transition">
                      LinkedIn
                    </a>
                  )}
                  {selectedMember.socials.instagram && (
                    <a href={selectedMember.socials.instagram} className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs font-semibold hover:bg-zinc-100 hover:text-zinc-950 transition">
                      Instagram
                    </a>
                  )}
                  {selectedMember.socials.github && (
                    <a href={selectedMember.socials.github} className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs font-semibold hover:bg-zinc-100 hover:text-zinc-950 transition">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}