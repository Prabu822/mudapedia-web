"use client";

import { motion } from "framer-motion";

interface NavbarProps {
  theme: "emerald" | "violet" | "cyan";
  setTheme: (theme: "emerald" | "violet" | "cyan") => void;
}

export default function NavbarSection({ theme, setTheme }: NavbarProps) {
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

      {/* Theme Switcher */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2 bg-zinc-900/90 border border-zinc-700 p-2 rounded-full backdrop-blur-md shadow-lg"
      >
        <span className="text-xs font-mono text-zinc-300 px-2 font-semibold">THEME</span>
        <button onClick={() => setTheme("emerald")} className={`w-5 h-5 rounded-full bg-emerald-500 transition-all ${theme === "emerald" ? "ring-2 ring-white scale-110 shadow-[0_0_10px_#10b981]" : "opacity-40"}`} />
        <button onClick={() => setTheme("violet")} className={`w-5 h-5 rounded-full bg-violet-500 transition-all ${theme === "violet" ? "ring-2 ring-white scale-110 shadow-[0_0_10px_#8b5cf6]" : "opacity-40"}`} />
        <button onClick={() => setTheme("cyan")} className={`w-5 h-5 rounded-full bg-cyan-500 transition-all ${theme === "cyan" ? "ring-2 ring-white scale-110 shadow-[0_0_10px_#06b6d4]" : "opacity-40"}`} />
      </motion.div>
    </header>
  );
}