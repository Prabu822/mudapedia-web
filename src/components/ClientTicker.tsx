"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Official Pavo", img: "/pavo.webp" },
  { name: "Nagapara", img: "/nagapara.webp" },
  { name: "Gaswin Artha Suar", img: "/gasvin.webp" },
  { name: "Digital Blockchain Indonesia", img: "/blockchain.webp" },
  { name: "PT Mudapedia Digital", img: "/mudapedia-logo.webp" },
];

export default function ClientTicker() {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="w-full bg-[#030305] border-y border-zinc-950 py-4 overflow-hidden relative z-20 my-4">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#030305] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex space-x-14 items-center min-w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          style={{ willChange: "transform" }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 px-3 py-1 group cursor-default"
            >
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                <img 
                  src={partner.img} 
                  alt={partner.name} 
                  className="w-full h-full object-contain filter contrast-125 brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform" 
                />
              </div>
              
              <span className="text-xs sm:text-sm font-mono tracking-wider font-semibold text-zinc-300 group-hover:text-emerald-400 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}