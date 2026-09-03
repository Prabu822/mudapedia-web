"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    { 
      q: "Apa itu PT Mudapedia Digital Indonesia?", 
      a: "PT Mudapedia Digital Indonesia adalah perusahaan yang bergerak dibidang pengembangan teknologi dan digitalisasi. Kami menyediakan solusi inovatif untuk bisnis maupun individu, mulai dari pengembangan aplikasi, website, hingga strategi digital marketing." 
    },
    { 
      q: "Layanan apa saja yang ditawarkan?", 
      a: "• Pengembangan Aplikasi Mobile: Android & iOS (native atau cross-platform).\n• Pengembangan Website: E-commerce, company profile, portofolio, dan lainnya.\n• Digital Marketing: SEO, SEM, Social Media Management, hingga Content Creation.\n• Konsultasi Digital: Analisis kebutuhan & strategi digitalisasi bisnis." 
    },
    { 
      q: "Bagaimana cara kerja sama dengan PT Mudapedia?", 
      a: "Proses kerja sama dimulai dengan konsultasi awal untuk memahami kebutuhan Anda. Tim kami kemudian menyusun proposal solusi lengkap dengan estimasi biaya dan waktu pengerjaan. Setelah ada kesepakatan, pengembangan dimulai dengan komunikasi intensif dan transparansi di setiap tahap proyek." 
    },
    { 
      q: "Siapa saja klien yang bisa menggunakan layanan Mudapedia?", 
      a: "Layanan kami terbuka untuk berbagai jenis klien, mulai dari UMKM, perusahaan menengah, hingga korporasi besar. Kami juga melayani kebutuhan individu yang ingin mengembangkan produk digital." 
    },
    { 
      q: "Bagaimana cara menghubungi PT Mudapedia Digital Indonesia?", 
      a: "Anda dapat menghubungi kami melalui email, telepon, atau formular kontak di website resmi. Tim kami siap membantu Anda mendapatkan solusi terbaik sesuai kebutuhan bisnis." 
    }
  ];

  return (
    <div className="w-full relative pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 pb-4">
          
          {/* KIRI: TENTANG KAMI */}
          <div className="lg:col-span-5 flex flex-col space-y-5 self-start">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-serif uppercase">
              Tentang Kami
            </h2>
            
            <div className="bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-7 rounded-3xl shadow-xl backdrop-blur-md space-y-5">
              <div>
                <h3 className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span> Visi
                </h3>
                {/* Warna disamakan persis dengan teks paragraf hero section (text-zinc-300) */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                  Kami menjadi Perusahaan Digital Agency yang terdepan dalam membantu para pebisnis mengembangkan usahanya.
                </p>
              </div>

              <div className="border-t border-zinc-900 pt-4">
                <h3 className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span> Misi
                </h3>
                {/* Warna disamakan persis dengan teks paragraf hero section (text-zinc-300) */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                  Memahami bahwa era digital telah membuka pintu menuju peluang yang tak terbatas, dan kami hadir sebagai solusi yang cerdas dan terpercaya untuk membantu Anda mengembangkan bisnis dalam dunia yang terus berubah. Sebagai perusahaan inovatif, kami menawarkan rangkaian layanan yang dirancang khusus untuk memenuhi kebutuhan bisnis modern.
                </p>
              </div>
            </div>
          </div>

          {/* KANAN: PERTANYAAN YANG SERING DIAJUKAN (FAQ) */}
          <div className="lg:col-span-7 flex flex-col space-y-5 self-start">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-serif uppercase">
              Pertanyaan yang Sering Diajukan
            </h2>

            <div className="flex flex-col space-y-3">
              {faqData.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-zinc-950/90 border border-zinc-800/80 rounded-2xl overflow-hidden shadow-lg">
                    {/* Tombol aksi klik hanya pada area pertanyaan dan ikon panah */}
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 py-4 text-left text-xs sm:text-sm font-semibold text-white flex justify-between items-center hover:bg-zinc-900/50 transition cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <motion.span 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="text-xs text-emerald-400 font-semibold"
                      >
                        ▼
                      </motion.span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ 
                            height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.25, delay: 0.05 }
                          }}
                        >
                          <div className="px-5 pb-4 text-xs sm:text-sm text-zinc-300 border-t border-zinc-900 pt-3 leading-relaxed bg-zinc-950 font-normal whitespace-pre-line">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* GARIS PEMBATAS BAWAH */}
      <div className="w-full h-[1px] bg-zinc-900 absolute bottom-0 left-0 right-0 pointer-events-none"></div>
    </div>
  );
}   