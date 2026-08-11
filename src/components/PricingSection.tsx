"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingSection() {
  const [network, setNetwork] = useState("SOLANA");

  const pricingData: Record<string, { title: string; price: string; desc: string; features: string[] }[]> = {
    SOLANA: [
      {
        title: "Paket Dasar",
        price: "Rp 35.500.000",
        desc: "Fitur penting untuk membuat token dasar.",
        features: ["Pembuatan token di jaringan SOLANA", "Supply Koin 1 Juta", "Tambahkan Likuiditas Rp. 900.000", "Media Sosial (X/Twitter)", "Telegram (5 anggota)"],
      },
      {
        title: "Paket Standar",
        price: "Rp 70.000.000",
        desc: "Fitur penting untuk membuat token standar.",
        features: ["Pembuatan token di jaringan SOLANA", "Supply Koin 5 Juta", "Tambahkan Likuiditas Rp. 1.500.000", "Media Sosial (X/Twitter)", "Telegram (50 anggota)"],
      },
      {
        title: "Paket Lanjutan",
        price: "Rp 120.000.000",
        desc: "Fitur penting untuk membuat token canggih.",
        features: ["Pembuatan token di jaringan SOLANA", "Supply Koin 10 Juta", "Tambahkan Likuiditas Rp. 5.000.000", "Media Sosial (X/Twitter), Telegram 100 anggota", "Situs Web + Domain Gratis 1 Tahun"],
      },
    ],
    SUI: [
      {
        title: "Paket Dasar",
        price: "Rp 26.000.000",
        desc: "Fitur penting untuk membuat token dasar.",
        features: ["Pembuatan token di jaringan SUI", "Supply Koin 1 Juta", "Tambahkan Likuiditas Rp. 500.000 USD", "Media Sosial Lengkap", "Buku Manual & Peta Jalan"],
      },
      {
        title: "Paket Standar",
        price: "Rp 35.000.000",
        desc: "Fitur penting untuk membuat token standar.",
        features: ["Pembuatan token di jaringan SUI", "Supply Koin 5 Juta", "Tambahkan Likuiditas Rp. 1.500.000 USD", "Media Sosial Lengkap", "Buku Manual & Peta Jalan"],
      },
      {
        title: "Paket Lanjutan",
        price: "Rp 80.000.000",
        desc: "Fitur penting untuk membuat token canggih.",
        features: ["Pembuatan token di jaringan SUI", "Supply Koin 10 Juta", "Tambahkan Likuiditas Rp. 2.000.000", "Pencatatan eksklusif di NusaDex"],
      },
    ],
  };

  const currentPackages = pricingData[network] || pricingData["SOLANA"];

  return (
    <section id="harga" className="relative py-28 px-6 bg-[#0A0A0C] text-zinc-100 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-emerald-400 uppercase tracking-widest inline-block mb-4">
            💰 Pilihan Layanan & Harga
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Buat Token Baru
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Pilih jaringan blockchain dan paket yang sesuai dengan kebutuhan pengembangan proyek desentralisasi Anda.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {["SOLANA", "SUI", "ETH", "BNB", "TRON"].map((net) => (
              <button
                key={net}
                onClick={() => setNetwork(net)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  network === net
                    ? "bg-zinc-100 text-zinc-950 shadow-md"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                }`}
              >
                {net}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPackages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-700 transition"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-xs text-zinc-400 mb-6">{pkg.desc}</p>
                <div className="text-2xl md:text-3xl font-black text-emerald-400 mb-6">
                  {pkg.price}
                  <span className="text-xs font-normal text-zinc-500 block">/proyek</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-zinc-300 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#kontak"
                className="w-full py-3 rounded-xl bg-zinc-800 text-zinc-100 font-semibold text-xs uppercase tracking-wider text-center hover:bg-zinc-100 hover:text-zinc-950 transition"
              >
                Beli Paket
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}