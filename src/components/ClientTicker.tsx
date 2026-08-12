"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Zap, Diamond, Rocket, Cpu } from "lucide-react";

const partners = [
  { name: "Official Pavo", icon: Globe },
  { name: "Nagapara", icon: Shield },
  { name: "Gaswin Artha Suar", icon: Zap },
  { name: "Digital Blockchain Indonesia", icon: Diamond },
  { name: "PT Mudapedia Digital", icon: Rocket },
  { name: "Core Engine", icon: Cpu },
];

export default function ClientTicker() {
  // Gandakan array agar pergerakan infinitenya mulus
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="w-full bg-[#030305] border-y border-zinc-900 py-4 overflow-hidden relative z-20 my-4">
      {/* Efek gradasi pudar di sisi kiri dan kanan */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex space-x-12 items-center min-w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Durasi lebih lambat agar lebih elegan
          }}
          style={{ willChange: "transform" }}
        >
          {duplicatedPartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-3 px-4 py-1.5 rounded-lg bg-zinc-950/40 border border-zinc-900/60 hover:border-zinc-800 transition-all"
              >
                {/* Ikon dengan warna aksen */}
                <Icon className="w-4 h-4 text-emerald-500/80" />
                
                <span className="text-xs sm:text-sm font-mono tracking-wider font-medium text-zinc-300">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}