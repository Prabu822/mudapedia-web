"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">// TENTANG KAMI</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">Visi & Misi</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-zinc-900/20 border border-zinc-800/60 p-8 rounded-3xl backdrop-blur-sm">
        
        {/* Gambar / Ilustrasi Sisi Kiri */}
        <div className="lg:col-span-5">
          <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-zinc-800 relative bg-zinc-950 flex items-center justify-center">
            {/* Ilustrasi Visual (bisa diganti gambar kota nanti) */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#07070A_25%,#111_50%,#07070A_75%)] opacity-50"></div>
            <img src="/mudapedia-logo.webp" alt="Logo" className="w-20 h-20 opacity-80" />
            <span className="absolute bottom-4 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Digital City Landscape</span>
          </div>
        </div>

        {/* Visi & Misi Sisi Kanan */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">Visi</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Kami menjadi Perusahaan Digital Agency yang terdepan dalam membantu para pebisnis mengembangkan usahanya di era digital.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">Misi</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Memahami bahwa era digital telah membuka pintu menuju peluang yang tak terbatas, dan kami hadir sebagai solusi yang cerdas dan terpercaya untuk membantu Anda mengembangkan bisnis dalam dunia yang terus berubah. Sebagai perusahaan inovatif, kami menawarkan rangkaian layanan yang dirancang khusus untuk memenuhi kebutuhan bisnis modern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}