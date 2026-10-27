export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readTime: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "biaya-pembuatan-website-umkm",
    title: "Berapa Biaya Pembuatan Website yang Wajar untuk Usaha Kecil di Indonesia?",
    summary:
      "Panduan memahami rincian biaya pembuatan website mulai dari domain, hosting, pengerjaan desain, hingga biaya pemeliharaan tahunan agar tidak terjebak pengeluaran tak terduga.",
    category: "Panduan Biaya",
    publishedAt: "2026-10-20",
    readTime: "4 menit baca",
    sections: [
      {
        heading: "Komponen Utama yang Selalu Ada di Setiap Website",
        paragraphs: [
          "Banyak pemilik usaha yang bingung saat melihat tawaran jasa pembuatan website. Ada yang menawarkan ratusan ribu rupiah, ada pula yang mematok puluhan juta rupiah. Untuk menilai kewajaran harga, kita perlu membedah komponen dasarnya.",
          "Setiap website yang online di internet selalu membutuhkan tiga hal pokok: nama domain (alamat web seperti usahaanda.com), server hosting (tempat menyimpan data dan file situs), serta jasa pengerjaan desain dan pemrograman sistem.",
        ],
      },
      {
        heading: "Biaya Domain dan Hosting",
        paragraphs: [
          "Domain berekstensi .com atau .id biasanya memiliki biaya sewa resmi berkisar antara Rp 150.000 hingga Rp 250.000 per tahun. Biaya ini dibayarkan ke registrar resmi setiap tahun.",
          "Sedangkan hosting untuk skala UMKM umumnya berkisar antara Rp 500.000 hingga Rp 1.500.000 per tahun, tergantung kapasitas penyimpanan dan keandalan kecepatan jaringan.",
        ],
      },
      {
        heading: "Biaya Jasa Pengerjaan Desain dan Sistem",
        paragraphs: [
          "Komponen terbesar ada pada jasa pengerjaan. Untuk landing page satu halaman yang rapi dan terhubung ke WhatsApp, rentang harga Rp 1,5 juta hingga Rp 3 juta adalah standar wajar profesional.",
          "Harga ini sudah mencakup penataan teks promosi, penyesuaian logo, optimasi tampilan layar ponsel, dan pengujian tombol pemesanan. Bila Anda butuh katalog lengkap 5 sampai 8 halaman dengan pengelolaan mandiri, kisaran Rp 5 juta hingga Rp 10 juta adalah investasi yang sepadan.",
        ],
      },
      {
        heading: "Waspadai Biaya Tersembunyi",
        paragraphs: [
          "Sebelum sepakat dengan penyedia jasa, selalu tanyakan berapa biaya perpanjangan tahun berikutnya. Pastikan kepemilikan domain atas nama Anda sendiri, dan tanyakan apakah ada biaya bulanan wajib untuk sekadar membiarkan situs tetap aktif.",
          "Di mainweb.id, seluruh biaya pembuatan, biaya maintain, dan perpanjangan tahunan tertulis transparan di muka tanpa syarat tersembunyi.",
        ],
      },
    ],
  },
  {
    slug: "landing-page-vs-website-lengkap",
    title: "Landing Page vs Website Lengkap: Mana yang Lebih Cocok untuk Bisnis Anda?",
    summary:
      "Perbandingan jelas antara halaman tunggal terfokus dengan website multi-halaman berbasis CMS untuk menentukan kebutuhan alur penjualan produk Anda.",
    category: "Strategi Web",
    publishedAt: "2026-10-22",
    readTime: "5 menit baca",
    sections: [
      {
        heading: "Karakteristik Landing Page Satu Halaman",
        paragraphs: [
          "Landing page adalah website yang seluruh informasinya dirangkum dalam satu halaman panjang yang mengalir. Mulai dari judul penawaran, keunggulan produk, foto galeri, rincian harga, hingga tombol kontak langsung.",
          "Kelebihan utama landing page adalah fokus yang sangat tinggi. Pengunjung tidak terdistraksi oleh banyak menu, sehingga alur keputusan diarahkan langsung ke satu tindakan: menghubungi admin atau memesan.",
        ],
      },
      {
        heading: "Kapan Bisnis Membutuhkan Website Lengkap?",
        paragraphs: [
          "Website lengkap multi-halaman (Company Profile atau Katalog) dibutuhkan ketika bisnis Anda memiliki banyak kategori produk yang berbeda, membutuhkan halaman artikel edukasi, atau memiliki profil tim dan legalitas yang harus ditampilkan terpisah.",
          "Website multi-halaman juga lebih unggul untuk strategi SEO jangka panjang karena Anda dapat menargetkan kata kunci pencarian Google yang berbeda pada setiap halaman spesifik.",
        ],
      },
      {
        heading: "Panduan Memilih Sesuai Kondisi Usaha",
        paragraphs: [
          "Bila usaha Anda baru mulai dan fokus mempromosikan satu produk unggulan lewat iklan media sosial atau link bio, pilihlah landing page (seperti paket Basic atau Beginner).",
          "Bila usaha Anda sudah mapan, memiliki varian produk grosir atau eceran yang banyak, atau ingin membangun reputasi korporasi resmi, pilihlah website katalog lengkap (seperti paket Elementary atau Light).",
        ],
      },
    ],
  },
  {
    slug: "kecepatan-website-dan-konversi-whatsapp",
    title: "Kenapa Kecepatan Website Sangat Berpengaruh pada Penjualan di WhatsApp?",
    summary:
      "Mengapa loading website di bawah 2 detik meningkatkan kepercayaan calon pembeli sebelum mereka menekan tombol chat WhatsApp.",
    category: "Optimasi Penjualan",
    publishedAt: "2026-10-25",
    readTime: "4 menit baca",
    sections: [
      {
        heading: "Koneksi Seluler Pengunjung Indonesia",
        paragraphs: [
          "Mayoritas calon pembeli membuka tautan website Anda saat sedang bepergian atau menggunakan jaringan seluler 4G di smartphone mereka. Di jaringan seluler, setiap detik penundaan loading terasa dua kali lebih lama.",
          "Riset perilaku pengguna membuktikan bahwa lebih dari 40% calon pengunjung akan membatalkan kunjungan dan menutup tab jika website tidak muncul dalam waktu 3 detik pertama.",
        ],
      },
      {
        heading: "Kecepatan Membentuk Kesan Pertama Kredibilitas",
        paragraphs: [
          "Ketika sebuah website terbuka dengan instan dan tanpa jeda patah-patah, calon pembeli secara bawah sadar menyimpulkan bahwa bisnis ini profesional, terkelola baik, dan responsif.",
          "Sebaliknya, website yang lambat dan berat sering disalahartikan sebagai website rusak atau tidak terawat, sehingga pengunjung ragu untuk mengirim pesan ke nomor WhatsApp yang tertera.",
        ],
      },
      {
        heading: "Pendekatan Teknis Modern Tanpa Beban",
        paragraphs: [
          "Website yang dibangun dengan teknologi modern seperti Next.js dan React menghasilkan berkas kode yang sangat ringkas tanpa beban plugin pihak ketiga yang menumpuk.",
          "Hasilnya, halaman terasa secepat aplikasi native di smartphone, gambar dioptimasi otomatis, dan tombol WhatsApp dapat diakses seketika.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
