export interface PricingPlan {
  price: string;
  features: string[];
}

export interface NetworkPricing {
  dasar: PricingPlan;
  standar: PricingPlan;
  lanjutan: PricingPlan;
}

export const tokenPricingData: Record<string, NetworkPricing> = {
  SOLANA: {
    dasar: {
      price: "Rp. 35.500.000",
      features: [
        "Pembuatan token di jaringan SOLANA",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp. 900.000",
        "Media Sosial (X/Twitter)",
        "Telegram (5 anggota)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya"
      ]
    },
    standar: {
      price: "Rp. 70.000.000",
      features: [
        "Pembuatan token di jaringan SOLANA",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp. 1.500.000",
        "Media Sosial (X/Twitter)",
        "Telegram (50 anggota)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "2 postingan pertama untuk promosi"
      ]
    },
    lanjutan: {
      price: "Rp. 120.000.000",
      features: [
        "Pembuatan token di jaringan SOLANA",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp. 5.000.000",
        "Media Sosial (X/Twitter, Telegram 100 anggota)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di Garuda Exchanger dan Bursa lainnya"
      ]
    }
  },
  SUI: {
    dasar: {
      price: "Rp. 26.000.000",
      features: [
        "Pembuatan token di jaringan SUI",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp. 500.000 USD",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya"
      ]
    },
    standar: {
      price: "Rp. 35.000.000",
      features: [
        "Pembuatan token di jaringan SUI",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp. 1.500.000 USD",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "3 postingan pertama untuk promosi"
      ]
    },
    lanjutan: {
      price: "Rp. 80.000.000",
      features: [
        "Pembuatan token di jaringan SUI",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp. 2.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di NusaDex dan Bursa lainnya",
        "Media Sosial X Terverifikasi",
        "Permintaan Supply khusus",
        "50 Pemegang Dompet"
      ]
    }
  },
  ETH: {
    dasar: {
      price: "Rp. 222.000.000",
      features: [
        "Pembuatan token di jaringan ETHEREUM",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp. 3.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya"
      ]
    },
    standar: {
      price: "Rp. 650.000.000",
      features: [
        "Pembuatan token di jaringan ETHEREUM",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp. 10.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "3 postingan pertama untuk promosi"
      ]
    },
    lanjutan: {
      price: "Rp. 1.300.000.000",
      features: [
        "Pembuatan token di jaringan ETHEREUM",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp. 15.000.000 USD",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di NusaDex dan Bursa lainnya",
        "Media Sosial X Terverifikasi",
        "Permintaan Supply khusus",
        "50 Pemegang Dompet"
      ]
    }
  },
  BNB: {
    dasar: {
      price: "Rp. 80.000.000",
      features: [
        "Pembuatan token di jaringan BNB",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp. 2.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya"
      ]
    },
    standar: {
      price: "Rp. 160.000.000",
      features: [
        "Pembuatan token di jaringan BNB",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp. 5.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "3 postingan pertama untuk promosi"
      ]
    },
    lanjutan: {
      price: "Rp. 222.000.000",
      features: [
        "Pembuatan token di jaringan BNB",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp. 100.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di NusaDex dan Bursa lainnya",
        "Media Sosial X Terverifikasi",
        "Permintaan Supply khusus",
        "50 Pemegang Dompet"
      ]
    }
  },
  TRON: {
    dasar: {
      price: "Rp. 71.000.000",
      features: [
        "Pembuatan token di jaringan TRON",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp. 3.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya"
      ]
    },
    standar: {
      price: "Rp. 125.000.000",
      features: [
        "Pembuatan token di jaringan TRON",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp. 5.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "3 postingan pertama untuk promosi"
      ]
    },
    lanjutan: {
      price: "Rp. 169.000.000",
      features: [
        "Pembuatan token di jaringan TRON",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp. 11.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di NusaDex dan Bursa lainnya",
        "Media Sosial X Terverifikasi"
      ]
    }
  }
};