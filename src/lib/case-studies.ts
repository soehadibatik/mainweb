/**
 * Studi kasus klien unggulan. Semua fakta (fitur situs, jenis usaha, domain,
 * paket yang direkomendasikan) diverifikasi dari situs klien yang tayang dan
 * katalog paket internal. Tidak ada metrik hasil yang dikarang: halaman ini
 * menjabarkan apa yang dibangun, bukan klaim angka yang tidak bisa dibuktikan.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  domain: string;
  logo: string;
  logoW: number;
  logoH: number;
  category: string;
  headline: string;
  summary: string;
  /** Paragraf pembuka: siapa klien & apa kebutuhannya (fakta publik). */
  intro: string[];
  /** Apa yang dikerjakan pada situs, berdasar fitur yang benar-benar tayang. */
  scope: { title: string; items: string[] }[];
  /** Paket internal yang paling cocok untuk kebutuhan serupa + alasannya. */
  planId: string;
  planReason: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cisc-solo-raya",
    client: "CISC Solo Raya",
    domain: "ciscsolo.com",
    logo: "/clients/cisc-solo.png",
    logoW: 2172,
    logoH: 724,
    category: "Website komunitas",
    headline: "Website komunitas dengan toko merchandise dan checkout WhatsApp",
    summary:
      "Komunitas pendukung Chelsea FC Solo Raya butuh situs yang bisa menjual kaos anggota tanpa payment gateway. Solusinya: katalog produk dengan varian dan checkout langsung ke admin via WhatsApp.",
    intro: [
      "CISC Solo Raya adalah komunitas pendukung Chelsea FC untuk warga Solo Raya. Kegiatannya rutin (nobar, gathering, keanggotaan) dan salah satu needs utamanya adalah menjual kaos anggota: ada edisi utama, edisi biru, dan edisi putih, lengkap dengan tabel ukuran.",
      "Tantangannya, komunitas tidak punya badan usaha untuk payment gateway. Proses pemesanan harus tetap bisa jalan lewat jalur yang sudah dipakai anggota sehari-hari: WhatsApp admin.",
    ],
    scope: [
      {
        title: "Katalog merchandise dengan varian",
        items: [
          "Halaman produk per edisi kaos (utama, biru, putih) dengan galeri foto",
          "Pilihan ukuran dan lengan panjang/pendek sebelum checkout",
          "Tabel ukuran tersedia langsung di halaman produk",
          "Harga varian dihitung otomatis (lengan panjang dan ukuran di atas XL punya selisih harga)",
        ],
      },
      {
        title: "Checkout tanpa payment gateway",
        items: [
          "Ringkasan pesanan disusun di situs, pembayaran dikonfirmasi ke admin",
          "Checkout lewat WhatsApp dengan detail pesanan sudah terisi",
          "Status member tercatat di alur pemesanan",
        ],
      },
    ],
    planId: "advance",
    planReason:
      "Alur pemesanan dengan varian produk dan logika harga masuk kategori sistem custom, bukan sekadar company profile.",
  },
  {
    slug: "batik-soehadi",
    client: "Batik Soehadi",
    domain: "batiksoehadi.com",
    logo: "/clients/batik-soehadi.png",
    logoW: 2194,
    logoH: 717,
    category: "Katalog produk B2B",
    headline: "Katalog produk dan pusat konten untuk produsen kain batik nasional",
    summary:
      "Produsen dan supplier kain batik di Indonesia butuh satu tempat yang menjelaskan produk (tulis, cap, printing), melayani retail sampai tender B2B, dan mendidik pasar lewat konten.",
    intro: [
      "Batik Soehadi memproduksi dan mensuplai kain batik di Indonesia: batik tulis, batik cap, batik printing, dan kombinasi, untuk pasar retail, grosir, custom, seragam, hingga B2B dan tender.",
      "Pembeli mereka datang dengan pertanyaan teknis: motif apa yang cocok, bahan apa yang dipakai, berapa harga per meter. Jawaban atas pertanyaan itu menjadi fondasi situsnya.",
    ],
    scope: [
      {
        title: "Struktur produk yang memisahkan tiap lini",
        items: [
          "Halaman terpisah untuk kain batik, produsen, grosir, konveksi, seragam, dan batik custom",
          "Setiap lini punya halaman target sendiri agar mudah ditemukan di mesin pencari",
        ],
      },
      {
        title: "Kalkulator dan daftar harga",
        items: [
          "Daftar harga kain batik per meter untuk semua bahan",
          "Kalkulator estimasi harga sesuai kebutuhan pembeli",
        ],
      },
      {
        title: "Pusat pengetahuan batik",
        items: [
          "Konten motif, bahan kain, teknik pembuatan, dan batik per daerah",
          "Halaman perusahaan: sejarah, proses produksi, komitmen",
        ],
      },
    ],
    planId: "intermediate",
    planReason:
      "Katalog multi-lini plus blog aktif dengan banyak halaman konten adalah profil khas paket Intermediate.",
  },
  {
    slug: "bikin-batik",
    client: "Bikin Batik",
    domain: "bikinbatik.com",
    logo: "/clients/bikin-batik.png",
    logoW: 1064,
    logoH: 256,
    category: "Website produksi custom",
    headline: "Website produksi batik custom dari pabrik di Laweyan, Solo",
    summary:
      "Pabrik batik di Laweyan melayani pesanan kain printing, cap, tulis, dan seragam untuk instansi, sekolah, dan perusahaan. Situsnya menjelaskan tiap metode produksi dan memudahkan penawaran via WhatsApp.",
    intro: [
      "Bikin Batik adalah jasa produksi batik custom dari Laweyan, Solo, yang mengirim ke seluruh Indonesia. Pelangannya beragam: instansi yang butuh motif logo rumit, sekolah yang pesan seragam, sampai perusahaan dengan orderan korporat.",
      "Setiap metode produksi punya karakter berbeda. Batik printing cocok untuk motif detail dan gradasi warna; batik cap dan tulis punya nilainya sendiri. Situs bertugas menjelaskan perbedaan itu sebelum calon pembeli menghubungi.",
    ],
    scope: [
      {
        title: "Penjelasan metode produksi per halaman",
        items: [
          "Kain batik printing untuk motif detail, gradasi warna, dan logo instansi",
          "Info teknis praktis langsung di katalog: lebar kain, harga mulai per meter",
          "Halaman seragam batik untuk instansi, sekolah, dan perusahaan",
        ],
      },
      {
        title: "Jalur pesanan langsung ke pabrik",
        items: [
          "Kontak produksi via WhatsApp dari tiap halaman produk",
          "Posisi pabrik di Laweyan, Solo, ditampilkan sebagai identitas",
        ],
      },
    ],
    planId: "intermediate",
    planReason:
      "Katalog produk dengan halaman per metode produksi dan tanpa transaksi online cukup dilayani CMS Intermediate.",
  },
  {
    slug: "daster-murah",
    client: "Daster Murah",
    domain: "dastermurah.com",
    logo: "/clients/daster-murah.png",
    logoW: 1120,
    logoH: 440,
    category: "Toko online grosir",
    headline: "Toko online grosir daster dengan harga per kodi dan minimum order",
    summary:
      "Grosir daster langsung dari pabrik menjual dengan aturan main sendiri: harga per kodi, minimum order per jenis, gratis ongkir cargo di atas jumlah tertentu. Situsnya memuat semua aturan itu dengan jelas.",
    intro: [
      "Daster Murah adalah pusat grosir daster langsung pabrik: daster rayon, jumbo, busui, dan batik, dikirim ke seluruh Indonesia.",
      "Grosir punya logika harga yang berbeda dari retail: harga dihitung per kodi (20 pcs), ada minimum order per jenis, dan biaya kirim berbeda untuk volume besar. Situs harus menampilkan aturan ini apa adanya supaya pembeli tidak salah paham sebelum order.",
    ],
    scope: [
      {
        title: "Katalog dengan aturan grosir yang jujur",
        items: [
          "Harga per kodi dan konversi harga per pcs ditampilkan berdampingan",
          "Minimum order per jenis (1 kodi = 20 pcs) tertulis di produk",
          "Program gratis ongkir cargo untuk order besar diinformasikan di halaman utama",
          "Label Best Seller menandai produk terlaris",
        ],
      },
      {
        title: "Order via jalur penjualan yang sudah jalan",
        items: [
          "Pemesanan diteruskan ke admin sesuai alur grosir yang sudah berjalan",
          "Info pengiriman seluruh Indonesia tersedia tanpa perlu login",
        ],
      },
    ],
    planId: "intermediate",
    planReason:
      "Katalog besar dengan aturan harga berlapis dan pembaruan produk rutin cocok dengan Intermediate dan CMS-nya.",
  },
  {
    slug: "bahan-kain",
    client: "Bahan Kain",
    domain: "bahankain.id",
    logo: "/clients/bahan-kain.webp",
    logoW: 640,
    logoH: 320,
    category: "Portal konten + katalog",
    headline: "Portal edukasi tekstil dengan katalog bahan untuk industri kreatif",
    summary:
      "BahanKain.id memosisikan diri sebagai pusat bahan kain Indonesia: katalog produk di satu sisi, konten edukasi fashion dan tekstil yang terbit rutin di sisi lain.",
    intro: [
      "BahanKain.id menyediakan kain, benang, tekstil, dan aksesori untuk industri tekstil, garmen, dan kerajinan. Sebagian pembeli datang karena butuh bahan; sebagian datang karena mencari pengetahuan.",
      "Karena itu situsnya dibangun sebagai dua mesin sekaligus: katalog untuk yang siap beli, dan konten edukasi yang terbit hampir setiap hari untuk yang masih riset. Konten itu pula yang menarik pengunjung baru dari mesin pencari.",
    ],
    scope: [
      {
        title: "Publikasi konten rutin multi-rubrik",
        items: [
          "Rubrik News & Event, Tips & Trick, Culture, Knowledge, dan Education",
          "Artikel terbit hampir setiap hari dengan jadwal yang konsisten",
          "Konten tren (misalnya liputan New York Fashion Week) berdampingan dengan konten teknis kain",
        ],
      },
      {
        title: "Katalog dan pemeringkatan konten",
        items: [
          "Katalog bahan, benang, dan aksesori per kategori",
          "Trending chart konten untuk menunjukkan artikel terpopuler",
        ],
      },
    ],
    planId: "intermediate",
    planReason:
      "Blog multi-penulis dengan publikasi harian menuntut CMS penuh, kategori, dan performa: wilayah Intermediate.",
  },
  {
    slug: "monitoring-batik",
    client: "Monitoring Batik",
    domain: "batiksoehadi.my.id",
    logo: "/clients/monitoring-batik.png",
    logoW: 800,
    logoH: 168,
    category: "Sistem internal (back office)",
    headline: "Back office internal untuk transaksi, invoice, dan supplier",
    summary:
      "Di balik ekosistem Batik Soehadi ada sistem internal yang mengelola transaksi, invoice, purchase order, dan supplier, dengan login per peran. Ini contoh pekerjaan di sisi yang tidak dilihat pelanggan.",
    intro: [
      "Tidak semua website yang kami kerjakan berupa situs publik. Batik Soehadi menjalankan banyak transaksi B2B, dan operasionalnya butuh sistem pencatatan sendiri.",
      "Monitoring Batik adalah back office tersebut: tempat tim mengelola transaksi, invoice, purchase order, dan data supplier. Halaman publiknya hanya satu pintu login; sisanya adalah aplikasi kerja harian tim.",
    ],
    scope: [
      {
        title: "Aplikasi internal dengan autentikasi",
        items: [
          "Login terpisah dari situs publik",
          "Modul transaksi, invoice, purchase order, dan supplier",
          "Monitoring aktivitas ekosistem website dari satu tempat",
        ],
      },
      {
        title: "Dibangun untuk pengguna harian",
        items: [
          "Alur kerja mengikuti proses bisnis nyata, bukan tampilan sekadar cantik",
          "Keamanan dan hak akses menjadi prioritas karena menampung data transaksi",
        ],
      },
    ],
    planId: "proficient",
    planReason:
      "Sistem internal dengan login, modul transaksi, dan REST API masuk wilayah Proficient.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
