"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroIntro({ onComplete }: { onComplete: () => void }) {
  const text = "MUDAPEDIA DIGITAL INDONESIA";

  // Langsung masuk tanpa lama (2 detik)
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030305] overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute w-60 h-60 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-700 p-2 flex items-center justify-center mb-6 shadow-xl overflow-hidden"
      >
        <img src="/mudapedia-logo.webp" alt="Logo" className="w-full h-full object-contain" />
      </motion.div>

      <h1 className="text-lg sm:text-2xl md:text-4xl font-black text-white text-center px-4 tracking-tight">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              x: (Math.random() - 0.5) * 300,
              y: (Math.random() - 0.5) * 300,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.01,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  );
}