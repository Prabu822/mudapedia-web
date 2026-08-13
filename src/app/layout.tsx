import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mudapedia Digital Indonesia",
  description: "Web3, Blockchain & Crypto Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030305] text-white antialiased selection:bg-emerald-500 selection:text-zinc-950`}>
        <div className="w-full min-h-screen overflow-x-hidden relative" style={{ WebkitOverflowScrolling: "touch" }}>
          {children}
        </div>
      </body>
    </html>
  );
}