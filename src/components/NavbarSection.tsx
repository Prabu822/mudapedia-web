"use client";

import { motion } from "framer-motion";

export default function NavbarSection() {
  return (
    <header className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 z-20">
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-3"
      >
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center p-2 shadow-md">
          <img src="/mudapedia-logo.webp" alt="Logo" className="w-full h-full object-contain filter drop-shadow-md" />
        </div>
        <div>
          <span className="font-bold text-base tracking-wider text-zinc-100 block">MUDAPEDIA</span>
          <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase block font-medium">Digital Indonesia</span>
        </div>
      </motion.div>
    </header>
  );
}