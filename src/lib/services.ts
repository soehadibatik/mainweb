export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceFeature = {
  title: string;
  desc: string;
};

export type ServicePageData = {
  slug: string;
  primaryKeyword: string;
  badge: string;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDesc: string;
  startingPrice: string;
  priceNumeric: number;
  highlightPlanIds: string[];
  features: ServiceFeature[];
  whyUsPoints: { title: string; desc: string }[];
  faqs: ServiceFaq[];
  relatedBlogSlugs: string[];
};

export const services: ServicePageData[] = [
  {
    slug: "landing-page",
    primaryKeyword: "jasa pembuatan landing page",
    badge: "LAYANAN KHUSUS KONVERSI TINGGI",
    title: "Jasa Pembuatan Landing Page",
    heroHeadline: "Jasa Pembuatan Landing Page Cepat, Elegan & Siap Iklan.",
    heroSubheadline:
      "Tingkatkan konversi penjualan iklan Google Ads & Meta Ads Anda. 100% hand-built Next.js tanpa template lambat, loading instan di bawah 1 detik, direct WhatsApp sales flow, mulai Rp 1,5 jt transparan di muka.",
    metaTitle: "Jasa Pembuatan Landing Page Murah & Cepat Rp 1,5 Jt — Hand-Built",
    metaDesc:
      "Jasa pembuatan landing page hand-built berkecepatan tinggi mulai Rp 1,5 jt. Desain konversi tinggi, direct WhatsApp, tanpa template lambat, Core Web Vitals hijau.",
    startingPrice: "Rp 1,5 jt",
    priceNumeric: 1500000,
    highlightPlanIds: ["basic", "beginner"],
    features: [
      {
        title: "Struktur Copywriting Berorientasi Konversi (AIDA)",
        desc: "Tata letak narasi disusun sistematis dari penangkapan perhatian (Attention), penjelasan solusi (Interest), pembuktian testimoni (Desire), hingga aksi beli cepat (Action).",
      },
      {
        title: "Performa Kilat Skor Google 95–100",
        desc: "Landing page hand-built tanpa beban plugin. Menghemat biaya per klik (CPC) iklan Google Ads Anda berkat Quality Score halaman yang tinggi.",
      },
      {
        title: "Direct WhatsApp Sales Funnel",
        desc: "Tombol mengambang (floating CTA) yang langsung membuka WhatsApp admin dengan pesan pre-filled yang sudah mencantumkan penawaran terkait.",
      },
      {
        title: "Integrasi Pelacakan Pixel Iklan",
        desc: "Siap dipasangi Meta Pixel, Google Analytics 4, dan Google Tag Manager untuk mempermudah tracking konversi dan retargeting iklan.",
      },
    ],
    whyUsPoints: [
      {
        title: "0 Template Pasaran",
        desc: "Tidak ada kode curah atau tema WordPress bajakan. Setiap halaman dirakit khusus mencerminkan kelas merek Anda.",
      },
      {
        title: "Bebas Biaya Tersembunyi",
        desc: "Harga paket Basic (Rp 1,5 jt) dan Beginner (Rp 3 jt) sudah mencakup setup domain, hosting, dan pemeliharaan awal.",
      },
      {
        title: "Pengerjaan Singkat 3–7 Hari",
        desc: "Landing page siap tayang dan menerima klik iklan dalam hitungan hari kerja tanpa bertele-tele.",
      },
    ],
    faqs: [
      {
        q: "Berapa biaya pembuatan landing page di mainweb.id?",
        a: "Biaya pembuatan landing page mulai Rp 1.500.000 untuk paket Basic (1 halaman responsif + direct WhatsApp) dan Rp 3.000.000 untuk paket Beginner (multi-seksi lengkap dengan katalog showcase).",
      },
      {
        q: "Mengapa landing page hand-built lebih unggul untuk kampanye iklan?",
        a: "Karena kecepatan muatnya di bawah 1,5 detik di jaringan seluler gawai. Google Ads memberikan skor kualitas (Quality Score) lebih tinggi pada landing page cepat, memangkas biaya per klik (CPC) hingga 30-50%.",
      },
      {
        q: "Apakah saya bisa mengganti promo dan teks sendiri di kemudian hari?",
        a: "Tentu bisa. Kami menyediakan akses dashboard CMS yang sangat praktis atau bantuan pemeliharaan teknis dari tim kami.",
      },
      {
        q: "Berapa lama waktu pengerjaan landing page hingga online?",
        a: "Rata-rata selesai dalam 3 hingga 7 hari kerja sejak materi teks dan foto produk diserahkan.",
      },
    ],
    relatedBlogSlugs: [
      "biaya-pembuatan-website-bisnis-2026",
      "perbedaan-company-profile-landing-page-web-app",
      "template-instan-vs-website-hand-built",
    ],
  },
  {
    slug: "company-profile",
    primaryKeyword: "jasa pembuatan company profile",
    badge: "KREDIBILITAS KORPORAT & B2B",
    title: "Jasa Pembuatan Website Company Profile",
    heroHeadline: "Jasa Pembuatan Website Company Profile Profesional & Bonafide.",
    heroSubheadline:
      "Bangun otoritas merek di mata klien korporat, mitra B2B, dan investor. Website multi-halaman berstandar internasional, arsitektur SEO Google prima, dan manajemen konten CMS mandiri mulai Rp 5 jt.",
    metaTitle: "Jasa Pembuatan Website Company Profile Perusahaan Rp 5 Jt — SEO Friendly",
    metaDesc:
      "Jasa pembuatan website company profile perusahaan profesional mulai Rp 5 jt. Arsitektur multi-halaman SEO friendly, reputasi B2B bonafide, Core Web Vitals terjamin.",
    startingPrice: "Rp 5 jt",
    priceNumeric: 5000000,
    highlightPlanIds: ["elementary", "light", "intermediate"],
    features: [
      {
        title: "Arsitektur Reputasi B2B Lengkap",
        desc: "Halaman resmi Profil Perusahaan, Visi Misi, Sejarah, Tim Manajemen, Legalitas Usaha, Galeri Fasilitas, dan Lembar Data Layanan.",
      },
      {
        title: "Pondasi SEO Google Multi-Halaman",
        desc: "Struktur URL hierarkis yang ramah mesin pencari, memungkinkan setiap lini layanan Anda merangking kata kunci tersendiri di Google.",
      },
      {
        title: "Sistem Manajemen Konten (CMS) Mandiri",
        desc: "Staf internal Anda dapat menerbitkan siaran pers, portofolio proyek terbaru, atau lowongan karir secara mandiri tanpa coding.",
      },
      {
        title: "Formulir Penawaran & Tender (RFQ)",
        desc: "Formulir interaktif bagi calon klien corporate untuk mengajukan permintaan proposal penawaran harga langsung ke email manajemen.",
      },
    ],
    whyUsPoints: [
      {
        title: "Pengerjaan Hand-Built 6 Tahap",
        desc: "Dikerjakan melalui tahapan briefing, information architecture, perancangan UI/UX eksklusif, hingga audit kepatuhan keamanan.",
      },
      {
        title: "Dukungan Multi-Bahasa Cepat (i18n)",
        desc: "Siap disajikan dalam bahasa Indonesia dan bahasa Inggris instan untuk menarik kepercayaan klien multinasional.",
      },
      {
        title: "Keamanan Tanpa Celah Malware",
        desc: "Bebas dari database terbuka yang rentan peretasan judi online, menjaga reputasi nama domain korporasi Anda.",
      },
    ],
    faqs: [
      {
        q: "Berapa biaya pembuatan website company profile di mainweb.id?",
        a: "Paket Elementary (5 halaman standar) dipatok Rp 5.000.000. Untuk company profile lengkap dengan CMS dinamis dan katalog layanan adalah paket Light (Rp 10.000.000) atau Intermediate (Rp 20.000.000).",
      },
      {
        q: "Apakah website company profile ini ramah untuk SEO Google?",
        a: "Sangat ramah. Setiap halaman memiliki meta tags unik, peta situs XML otomatis, dan struktur kode bersih yang sangat disukai bot perayap Google.",
      },
      {
        q: "Apakah saya mendapatkan email bisnis dengan domain perusahaan (nama@perusahaan.com)?",
        a: "Ya, kami membantu integrasi alamat email resmi perusahaan Anda dengan penyedia email korporat pilihan Anda.",
      },
      {
        q: "Berapa lama proses pembuatan website company profile?",
        a: "Untuk paket 5 halaman rata-rata memakan waktu 10 hingga 14 hari kerja melalui standar pengawasan mutu kami.",
      },
    ],
    relatedBlogSlugs: [
      "perbedaan-company-profile-landing-page-web-app",
      "biaya-pembuatan-website-bisnis-2026",
      "pentingnya-core-web-vitals-untuk-seo-bisnis",
    ],
  },
  {
    slug: "toko-online",
    primaryKeyword: "jasa pembuatan website toko online",
    badge: "E-COMMERCE & KATALOG UMKM",
    title: "Jasa Pembuatan Website Toko Online",
    heroHeadline: "Jasa Pembuatan Website Toko Online & Katalog Mandiri: 0% Komisi.",
    heroSubheadline:
      "Bebaskan bisnis Anda dari potongan komisi marketplace yang mencekik. Website toko online mandiri berkecepatan tinggi, integrasi direct WhatsApp checkout, dan pengelolaan stok CMS mudah mulai Rp 10 jt.",
    metaTitle: "Jasa Pembuatan Website Toko Online UMKM Rp 10 Jt — 0% Komisi",
    metaDesc:
      "Jasa pembuatan website toko online mandiri & katalog produk mulai Rp 10 jt. Alur direct WhatsApp order cepat, 0% potongan admin, mudah kelola stok di ponsel.",
    startingPrice: "Rp 10 jt",
    priceNumeric: 10000000,
    highlightPlanIds: ["light", "intermediate", "advance"],
    features: [
      {
        title: "100% Margin Laba Tanpa Potongan",
        desc: "0% potongan komisi marketplace. Seluruh hasil penjualan dari pembeli langsung masuk utuh ke rekening bank bisnis Anda.",
      },
      {
        title: "Direct WhatsApp Order Flow",
        desc: "Pelanggan memilih varian produk di website dan ringkasan pesanan otomatis terkirim rapi ke WhatsApp admin toko dalam hitungan detik.",
      },
      {
        title: "Katalog Multi-Kategori Ultra-Cepat",
        desc: "Foto produk tajam dengan kompresi WebP/AVIF modern. Pembeli dapat menjelajahi ratusan produk tanpa lag di koneksi internet seluler.",
      },
      {
        title: "Panel Pengelolaan Stok Praktis",
        desc: "Ubah harga promo coret, tandai status stok habis, dan unggah foto varian baru semudah mengirim pesan di smartphone Anda.",
      },
    ],
    whyUsPoints: [
      {
        title: "Bebas Biaya Langganan Bulanan Platform Asing",
        desc: "Anda memiliki sistem secara utuh tanpa perlu membayar sewa bulanan ratusan ribu hingga jutaan rupiah ke platform pihak ketiga.",
      },
      {
        title: "Database Pelanggan Menjadi Milik Anda",
        desc: "Kumpulkan riwayat nomor WhatsApp pembeli untuk strategi broadcast promo dan repeat order jangka panjang.",
      },
      {
        title: "Beban Server Ringan & Stabil",
        desc: "Website sanggup menampung ribuan calon pembeli serentak saat kampanye promo diskon sedang viral.",
      },
    ],
    faqs: [
      {
        q: "Berapa biaya pembuatan website toko online di mainweb.id?",
        a: "Paket pembuatan toko online mulai dari paket Light seharga Rp 10.000.000 (katalog produk mandiri) dan paket Intermediate seharga Rp 20.000.000 (full-fitur multi-lini produk dan blog edukasi).",
      },
      {
        q: "Apakah ada potongan komisi penjualan per transaksi?",
        a: "Sama sekali tidak ada 0% komisi transaksi. Semua pembayaran pelanggan adalah 100% hak milik Anda.",
      },
      {
        q: "Bagaimana cara pembeli menyelesaikan transaksi pesanan?",
        a: "Pembeli dapat langsung terhubung via WhatsApp dengan ringkasan pesanan terformat otomatis, atau diarahkan ke modul pembayaran payment gateway otomatis pada paket tingkat lanjut.",
      },
      {
        q: "Apakah toko online ini bisa menampung ribuan produk?",
        a: "Bisa. Arsitektur data kami dirancang modular dan scalable, mampu memuat ribuan varian produk dengan kecepatan akses stabil.",
      },
    ],
    relatedBlogSlugs: [
      "biaya-bikin-toko-online-sendiri-vs-developer",
      "biaya-pembuatan-website-bisnis-2026",
      "pentingnya-core-web-vitals-untuk-seo-bisnis",
    ],
  },
  {
    slug: "web-app-custom",
    primaryKeyword: "jasa pembuatan web app",
    badge: "SISTEM KUSTOM & OTOMASI BISNIS",
    title: "Jasa Pembuatan Web App & Sistem Kustom",
    heroHeadline: "Jasa Pembuatan Web App, Dashboard Admin & Integrasi API Kustom.",
    heroSubheadline:
      "Otomatisasi operasional bisnis Anda yang rumit. Sistem aplikasi web kustom untuk portal klien, manajemen inventori, integrasi sistem perbankan/payment gateway, dan sinkronisasi cabang perusahaan.",
    metaTitle: "Jasa Pembuatan Web App & Sistem Custom Perusahaan — Hand-Built",
    metaDesc:
      "Jasa pembuatan web app custom, portal klien, dan dashboard admin perusahaan. Integrasi API perbankan, arsitektur scalable, keamanan data standar korporasi.",
    startingPrice: "Rp 30 jt",
    priceNumeric: 30000000,
    highlightPlanIds: ["advance", "proficient", "max"],
    features: [
      {
        title: "Integrasi API Pihak Ketiga Tanpa Batas",
        desc: "Sinkronisasi otomatis dengan payment gateway (Virtual Account / QRIS), sistem logistik kurir, perbankan, WhatsApp API, hingga sistem ERP internal.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        desc: "Pengaturan hak akses bertingkat yang ketat untuk staf operasional, admin gudang, divisi keuangan, dan jajaran direksi.",
      },
      {
        title: "Dashboard Analitik & Pelaporan Real-Time",
        desc: "Pantau performa penjualan, arus barang, dan status operasional 24/7 melalui grafik visual interaktif tanpa repot rekap Excel.",
      },
      {
        title: "Arsitektur Scalable & Enkripsi Tingkat Tinggi",
        desc: "Dibangun dengan TypeScript, Node.js/Go, dan basis data terdistribusi yang aman dari kebocoran data dan siap scale-up jutaan transaksi.",
      },
    ],
    whyUsPoints: [
      {
        title: "Perjanjian Kerahasiaan Data (NDA)",
        desc: "Kami menjamin kerahasiaan logika bisnis dan data sensitif perusahaan Anda melalui kontrak hukum resmi.",
      },
      {
        title: "Transisi Sistem yang Mulus",
        desc: "Antarmuka dirancang ergonomis sehingga staf Anda dapat langsung mengoperasikan sistem tanpa hambatan adaptasi rumit.",
      },
      {
        title: "Dukungan SLA & Maintenance Khusus",
        desc: "Dukungan teknis prioritas dan pemantauan sistem 24/7 untuk menjamin kontinuitas operasional bisnis Anda.",
      },
    ],
    faqs: [
      {
        q: "Berapa biaya pembuatan sistem web app custom di mainweb.id?",
        a: "Biaya pembuatan sistem web custom mulai dari paket Advance Rp 30.000.000 hingga kategori Perwujudan (Rp 50 jt – Rp 100 jt) dan kategori Startup/Unicorn untuk platform berskala besar.",
      },
      {
        q: "Berapa lama waktu pengembangan aplikasi web custom?",
        a: "Pengembangan rata-rata memakan waktu 1 hingga 3 bulan tergantung pada kedalaman logika bisnis dan jumlah integrasi API eksternal.",
      },
      {
        q: "Apakah tim mainweb.id menyediakan pelatihan untuk karyawan kami?",
        a: "Ya. Setiap proyek web app menyertakan sesi pelatihan langsung (live training) serta dokumen petunjuk penggunaan sistem.",
      },
      {
        q: "Apakah arsitektur sistem ini bisa dikembangkan lagi di masa depan?",
        a: "Mutlak bisa. Kode sumber disusun modular dan terdokumentasi rapi sesuai standar clean code industri perangkat lunak global.",
      },
    ],
    relatedBlogSlugs: [
      "kapan-bisnis-butuh-website-custom-integrasi-api",
      "perbedaan-company-profile-landing-page-web-app",
      "template-instan-vs-website-hand-built",
    ],
  },
  {
    slug: "jasa-website-solo",
    primaryKeyword: "jasa pembuatan website solo",
    badge: "SOLUSI LOKAL SOLO RAYA & JATENG",
    title: "Jasa Pembuatan Website Solo Raya & Jawa Tengah",
    heroHeadline: "Jasa Pembuatan Website Profesional di Solo & Karanganyar.",
    heroSubheadline:
      "Rekan teknologi terpercaya untuk UMKM, pabrik, dan korporasi di Surakarta, Karanganyar, Boyolali, Sukoharjo, Klaten, dan sekitarnya. Bisa diskusi tatap muka, harga transparan mulai Rp 1,5 jt, dan Core Web Vitals hijau.",
    metaTitle: "Jasa Pembuatan Website Solo & Karanganyar Rp 1,5 Jt — Bisa Tatap Muka",
    metaDesc:
      "Jasa pembuatan website profesional di Solo, Karanganyar & Jawa Tengah mulai Rp 1,5 jt. Bisa diskusi tatap muka langsung, harga jujur di muka, 0 template bajakan.",
    startingPrice: "Rp 1,5 jt",
    priceNumeric: 1500000,
    highlightPlanIds: ["basic", "elementary", "intermediate"],
    features: [
      {
        title: "Bisa Konsultasi Tatap Muka Langsung",
        desc: "Kami siap bertemu langsung di kantor atau lokasi usaha Anda di wilayah Solo Raya untuk mendiskusikan kebutuhan sistem digital secara matang.",
      },
      {
        title: "Pemahaman Kultur Pasar Jawa Tengah",
        desc: "Desain dan alur komunikasi WhatsApp dirancang ramah, santun, dan sesuai dengan preferensi interaksi konsumen lokal.",
      },
      {
        title: "Pilihan 15 Paket Harga Tertulis di Muka",
        desc: "Mulai dari landing page Babad Alas Rp 1,5 jt hingga website korporasi multi-halaman tanpa markup fiktif.",
      },
      {
        title: "Pendampingan Pasca-Rilis Jangka Panjang",
        desc: "Tim teknis kami berada di Solo Raya dan selalu siap dihubungi untuk pemeliharaan rutin maupun ekspansi sistem di kemudian hari.",
      },
    ],
    whyUsPoints: [
      {
        title: "Portofolio Lokal Nyata",
        desc: "Telah dipercaya oleh institusi dan entitas terkemuka di Solo seperti CISC Solo Raya dan produsen Batik Soehadi.",
      },
      {
        title: "Kejujuran & Amanah",
        desc: "Memegang teguh etika bisnis luhur: aset kode dan kepemilikan domain 100% diserahkan resmi atas nama Anda.",
      },
      {
        title: "Skor PageSpeed Hijau 95–100",
        desc: "Website klien kami terbukti cepat dibuka di smartphone calon pembeli di seluruh penjuru Jawa Tengah.",
      },
    ],
    faqs: [
      {
        q: "Apakah tim mainweb.id bisa datang ke kantor saya di Solo atau Karanganyar?",
        a: "Bisa sekali. Kami sangat menyambut baik sesi pertemuan langsung di kawasan Solo Raya untuk membedah rencana website Anda secara tatap muka.",
      },
      {
        q: "Berapa biaya pembuatan website untuk UMKM di Solo?",
        a: "Mulai Rp 1.500.000 untuk paket landing page Basic dan Rp 5.000.000 untuk company profile 5 halaman Elementary.",
      },
      {
        q: "Apakah biaya sudah termasuk domain .com dan hosting?",
        a: "Sudah lengkap. Biaya pembuatan sudah mencakup registrasi domain, server hosting berkecepatan tinggi, sertifikat SSL, dan garansi pemeliharaan awal.",
      },
      {
        q: "Bagaimana cara menjadwalkan pertemuan konsultasi?",
        a: "Cukup hubungi tim kami via WhatsApp. Kami akan langsung mengonfirmasi jadwal pertemuan di waktu dan lokasi yang nyaman bagi Anda.",
      },
    ],
    relatedBlogSlugs: [
      "jasa-pembuatan-website-solo-karanganyar-jawa-tengah",
      "biaya-pembuatan-website-bisnis-2026",
      "jasa-website-murah-vs-profesional",
    ],
  },
];

export function getService(slug: string): ServicePageData | undefined {
  return services.find((s) => s.slug === slug);
}
