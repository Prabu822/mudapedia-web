export default function FooterSection() {
  return (
    <footer id="tentang" className="bg-[#050507] text-zinc-400 border-t border-zinc-800/80 pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Tentang Kami</h3>
          <p className="text-xs md:text-sm leading-relaxed mb-4 text-zinc-300">
            Kami menjadi Perusahaan Digital Agency yang terdepan dalam membantu para pebisnis mengembangkan usahanya di era digital yang terus berubah, menawarkan rangkaian layanan khusus untuk memenuhi kebutuhan bisnis modern.
          </p>
          <p className="text-xs text-zinc-500">
            Senin – Jum’at: 08.00 – 16.00 WIB
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Banyuwangi Office</h3>
          <p className="text-xs md:text-sm leading-relaxed mb-2 text-zinc-300">
            Perum Gedong Blok. D No.5, Kertosari, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68418
          </p>
          <p className="text-xs text-zinc-400 mt-2">
            Telepon: 0851-1983-6002<br />
            Email: mudapediadigitalindonesia.com
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-600">
        <p>© 2026 MudaPedia. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <span className="hover:text-zinc-400 cursor-pointer">LinkedIn</span>
          <span className="hover:text-zinc-400 cursor-pointer">Instagram</span>
        </div>
      </div>
    </footer>
  );
}