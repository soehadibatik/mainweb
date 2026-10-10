export type PlanFeatureGroup = {
  title: string;
  items: string[];
};

export type Plan = {
  id: string;
  name: string;
  short: string;
  tagline: string;
  build: string;
  maintain: string;
  renewal: string | null;
  highlight?: boolean;
  idealFor: string;
  featureGroups: PlanFeatureGroup[];
  accent: {
    bar: string;
    chip: string;
    price: string;
    cta: string;
  };
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    short: "Basic",
    tagline: "Landing page 1 halaman untuk mulai tampil online.",
    build: "Rp 1,5 jt",
    maintain: "Termasuk (maks. 1 bln)",
    renewal: null,
    idealFor: "Usaha baru, personal branding, atau promosi satu produk/layanan yang butuh kehadiran online cepat dan hemat.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "1 halaman landing page profesional",
          "Desain responsif (desktop, tablet, mobile)",
          "Section: Hero, Layanan, Keunggulan, Testimoni, Kontak",
          "Tombol WhatsApp langsung terhubung — sekali klik, langsung chat",
          "Galeri foto / portofolio singkat",
          "Form kontak (nama, pesan) terkirim ke email Anda",
          "1x revisi desain",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Website ringan, cepat dibuka termasuk di jaringan seluler",
          "SEO dasar: meta title & deskripsi, heading terstruktur, sitemap",
          "SSL certificate (https)",
          "Integrasi Google Analytics — tahu siapa yang berkunjung",
          "Favicon & warna situs mengikuti logo Anda",
          "Terhubung ke domain Anda sendiri (contoh: usahaanda.com)",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Biaya maintain sudah termasuk maks. 1 bulan pertama",
          "Konsultasi gratis sebelum pengerjaan — arahan singkat apa yang paling cocok",
          "Panduan singkat: cara ganti teks & foto sendiri",
          "Bantuan via WhatsApp selama masa maintain",
        ],
      },
    ],
    accent: {
      bar: "from-sky-400 to-sky-600",
      chip: "bg-sky-100 text-sky-700",
      price: "text-sky-700",
      cta: "border-sky-200 text-sky-700 hover:border-sky-300 hover:bg-sky-50",
    },
  },
  {
    id: "beginner",
    name: "Beginner",
    short: "Beginner",
    tagline: "Website profil sederhana: tentang, layanan, dan kontak.",
    build: "Rp 3 jt",
    maintain: "Rp 300 rb",
    renewal: null,
    idealFor: "Bisnis kecil yang sudah butuh lebih dari satu halaman: profil usaha, layanan, galeri, dan halaman kontak.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "3–5 halaman website profesional",
          "Desain responsif penuh (HP, tablet, desktop)",
          "Halaman: Beranda, Tentang, Layanan, Galeri, Kontak",
          "Galeri foto layanan / produk dengan tampilan grid rapi",
          "Form kontak terhubung ke email Anda",
          "Tombol WhatsApp di setiap halaman",
          "Integrasi Google Maps lokasi bisnis",
          "2x revisi desain",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "SEO dasar: meta tag per halaman + sitemap otomatis",
          "SSL certificate (https)",
          "Google Analytics & Search Console — lihat sumber pengunjung",
          "Optimasi kecepatan loading",
          "Struktur siap ditambah blog / katalog di kemudian hari",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance bulanan Rp 300 rb/bln",
          "Update konten minor sebulan sekali (ganti teks, foto, harga)",
          "Backup konten berkala",
          "Dukungan via WhatsApp jam kerja",
        ],
      },
    ],
    accent: {
      bar: "from-cyan-400 to-cyan-600",
      chip: "bg-cyan-100 text-cyan-700",
      price: "text-cyan-700",
      cta: "border-cyan-200 text-cyan-700 hover:border-cyan-300 hover:bg-cyan-50",
    },
  },
  {
    id: "elementary",
    name: "Elementary",
    short: "Elementary",
    tagline: "Company profile multi-halaman yang profesional.",
    build: "Rp 5 jt",
    maintain: "Rp 500 rb",
    renewal: "Rp 1 jt",
    idealFor: "Perusahaan yang butuh citra profesional di mata klien dan mitra, lengkap dengan portfolio dan profil tim.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "5–8 halaman company profile",
          "Halaman: Beranda, Tentang Kami, Layanan, Portfolio, Tim, Blog, Kontak",
          "Halaman portfolio dengan galeri foto & filter per kategori",
          "Blog sederhana untuk artikel & pengumuman",
          "Profil tim / daftar pengurus",
          "3x revisi desain",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "SEO on-page lengkap per halaman",
          "SSL certificate (https)",
          "Google Analytics & Search Console",
          "Email profesional 1 akun (nama@domainanda.com)",
          "Backup data rutin",
          "Terhubung ke domain Anda sendiri",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 500 rb/bln",
          "Update konten 2x sebulan (artikel, portfolio, info harga)",
          "Perpanjangan tahunan Rp 1 jt/th termasuk maintenance",
          "Prioritas dukungan teknis via WhatsApp",
          "Panduan pengelolaan blog & gallery",
        ],
      },
    ],
    accent: {
      bar: "from-teal-400 to-teal-600",
      chip: "bg-teal-100 text-teal-700",
      price: "text-teal-700",
      cta: "border-teal-200 text-teal-700 hover:border-teal-300 hover:bg-teal-50",
    },
  },
  {
    id: "light",
    name: "Light",
    short: "Light",
    tagline: "Website bisnis dengan CMS agar mudah dikelola sendiri.",
    build: "Rp 10 jt",
    maintain: "Rp 750 rb",
    renewal: "Rp 2 jt",
    idealFor: "Bisnis yang ingin update konten sendiri tanpa coding: artikel, produk, dan galeri diatur dari dashboard.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "8–12 halaman website profesional",
          "Content Management System (CMS) penuh",
          "Kelola artikel, halaman, dan galeri sendiri — tanpa coding",
          "Kategori & tag konten",
          "Multi-user dengan hak akses berbeda (admin, editor)",
          "Halaman layanan / produk fleksibel ditambah sendiri",
          "3x revisi desain",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "SEO on-page + schema markup (rich result di Google)",
          "SSL certificate (https)",
          "Email profesional 3 akun",
          "Backup otomatis mingguan",
          "Keamanan dasar: firewall & anti-spam",
          "Performa dioptimasi untuk jaringan seluler",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 750 rb/bln",
          "Update konten 4x sebulan",
          "Perpanjangan tahunan Rp 2 jt/th termasuk maintenance",
          "Training dasar penggunaan CMS (online)",
        ],
      },
    ],
    accent: {
      bar: "from-emerald-400 to-emerald-600",
      chip: "bg-emerald-100 text-emerald-700",
      price: "text-emerald-700",
      cta: "border-emerald-200 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50",
    },
  },
  {
    id: "intermediate",
    name: "Intermediate",
    short: "Intermediate",
    tagline: "Website bisnis full-fitur: blog, katalog, integrasi dasar.",
    build: "Rp 20 jt",
    maintain: "Rp 1,5 jt",
    renewal: "Rp 3,5 jt",
    highlight: true,
    idealFor: "Bisnis yang tumbuh cepat dan butuh fitur lanjutan: katalog produk, blog aktif, dan integrasi tools pihak ketiga.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "12–20 halaman website premium",
          "CMS penuh + custom post type (program, agen, event, dsb)",
          "Katalog produk / layanan: foto, harga, pencarian & filter",
          "Blog profesional dengan kategori & tag",
          "Halaman landing page kampanye (bisa lebih dari satu)",
          "Form newsletter & lead generation terhubung email / sheet",
          "Unlimited revisi desain selama pengerjaan",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "SEO lanjutan + schema markup (produk, artikel, FAQ)",
          "Kecepatan loading optimal (Core Web Vitals)",
          "Integrasi tools pihak ketiga: WhatsApp API, Google Workspace, dsb",
          "Email profesional 5 akun",
          "Backup otomatis harian",
          "Monitoring uptime website — dipantau 24 jam",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 1,5 jt/bln",
          "Update konten tanpa batas untuk kebutuhan wajar",
          "Perpanjangan tahunan Rp 3,5 jt/th termasuk maintenance",
          "Dukungan prioritas + laporan performa bulanan",
        ],
      },
    ],
    accent: {
      bar: "from-amber-400 to-orange-500",
      chip: "bg-amber-100 text-amber-700",
      price: "text-brand-600",
      cta: "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700",
    },
  },
  {
    id: "advance",
    name: "Advance",
    short: "Advance",
    tagline: "Platform custom: portal, booking, dan sistem internal.",
    build: "Rp 30 jt",
    maintain: "Rp 3 jt",
    renewal: "Rp 5 jt",
    idealFor: "Perusahaan yang butuh sistem khusus: portal informasi, sistem booking, membership, atau aplikasi internal.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "Website custom sesuai alur bisnis — direncanakan dari blueprint, bukan template",
          "Sistem booking / reservasi online dengan jadwal & konfirmasi otomatis",
          "Sistem membership & login pengguna (registrasi, lupa sandi, profil)",
          "Dashboard admin lengkap: kelola data, pengguna, dan konten dalam satu layar",
          "Notifikasi email otomatis (pendaftaran, pemesanan, pengingat)",
          "Multi-bahasa (opsional)",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Pengembangan backend custom — logika sesuai kebutuhan, bukan template",
          "Database terstruktur & terindeks agar cepat meski data bertambah",
          "REST API untuk integrasi eksternal",
          "SEO lanjutan + performa tinggi",
          "SSL premium & hardening keamanan",
          "Backup terpisah harian & mingguan",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 3 jt/bln",
          "Monitoring, security patch, dan update berkala",
          "Perpanjangan tahunan Rp 5 jt/th termasuk maintenance",
          "SLA respons cepat untuk kendala kritikal",
          "Laporan insiden & tindak lanjut",
        ],
      },
    ],
    accent: {
      bar: "from-orange-400 to-orange-600",
      chip: "bg-orange-100 text-orange-700",
      price: "text-orange-700",
      cta: "border-orange-200 text-orange-700 hover:border-orange-300 hover:bg-orange-50",
    },
  },
  {
    id: "proficient",
    name: "Proficient",
    short: "Proficient",
    tagline: "Web app kompleks dengan integrasi API & dashboard.",
    build: "Rp 50 jt",
    maintain: "Rp 5 jt",
    renewal: "Rp 10 jt",
    idealFor: "Bisnis digital yang butuh web app kompleks: marketplace internal, sistem operasional, atau integrasi banyak API.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "Web application kompleks custom (portal, sistem operasional, marketplace internal)",
          "Dashboard analitik & pelaporan dengan grafik real-time",
          "Sistem peran & izin (role-based access) untuk tiap tim",
          "Alur kerja otomatis (workflow): persetujuan, tugas, pengingat",
          "Integrasi payment gateway (midtrans, xendit, dsb)",
          "Notifikasi multi-kanal: email & WhatsApp",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Arsitektur aplikasi skalabel — siap tumbuh tanpa bangun ulang",
          "Integrasi API pihak ketiga: payment, logistik, dsb",
          "Database cluster dengan replikasi",
          "Caching layer untuk performa maksimal",
          "Audit keamanan & penetration test dasar",
          "Backup real-time + rencana pemulihan bencana (DR)",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 5 jt/bln",
          "Monitoring 24/7 & incident response",
          "Perpanjangan tahunan Rp 10 jt/th termasuk maintenance",
          "Dedicated account manager",
          "Review performa berkala bersama tim",
        ],
      },
    ],
    accent: {
      bar: "from-rose-400 to-rose-600",
      chip: "bg-rose-100 text-rose-700",
      price: "text-rose-700",
      cta: "border-rose-200 text-rose-700 hover:border-rose-300 hover:bg-rose-50",
    },
  },
  {
    id: "max",
    name: "Max",
    short: "Max",
    tagline: "Platform enterprise dengan performa & keamanan tinggi.",
    build: "Rp 75 jt",
    maintain: "Rp 7,5 jt",
    renewal: "Rp 15 jt",
    idealFor: "Perusahaan besar / enterprise yang menangani data sensitif dan trafik tinggi dengan standar keamanan ketat.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "Platform enterprise skala besar",
          "Sistem multi-tenant / multi-cabang dengan data terpisah tapi terpusat",
          "Dashboard eksekutif real-time (angka utama dalam satu layar)",
          "Integrasi ERP / CRM internal",
          "Sistem antrian & notifikasi terjadwal",
          "White-label (branding kustom penuh)",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Infrastruktur high-availability — layanan tetap jalan saat satu server bermasalah",
          "Load balancing & auto-scaling saat trafik naik tiba-tiba",
          "Enkripsi data end-to-end (data sensitif tidak telanjang)",
          "Compliance keamanan OWASP standar enterprise",
          "Log audit lengkap & activity tracking — siapa ubah apa, kapan",
          "Backup multi-region",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 7,5 jt/bln",
          "Tim dedikasi & monitoring 24/7",
          "Perpanjangan tahunan Rp 15 jt/th termasuk maintenance",
          "SLA uptime 99,9% dengan penalti",
          "Training tim internal di kantor Anda",
        ],
      },
    ],
    accent: {
      bar: "from-violet-400 to-violet-600",
      chip: "bg-violet-100 text-violet-700",
      price: "text-violet-700",
      cta: "border-violet-200 text-violet-700 hover:border-violet-300 hover:bg-violet-50",
    },
  },
  {
    id: "pro-max",
    name: "Pro Max",
    short: "Pro Max",
    tagline: "Paket terbesar, dikerjakan tim tersendiri untuk Anda.",
    build: "Rp 100 jt",
    maintain: "Rp 10 jt",
    renewal: "Rp 20 jt",
    idealFor: "Korporasi & grup usaha yang butuh ekosistem digital menyeluruh, dari situs korporat sampai aplikasi internal, dengan tim khusus.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "Ekosistem digital menyeluruh: situs korporat, portal, aplikasi internal — lebih dari 1 platform",
          "Super-app: web + integrasi mobile-ready",
          "Sistem enterprise penuh dengan modularitas — modul baru bisa ditambah tanpa ganggu yang lama",
          "AI & automation workflow (opsional)",
          "Integrasi lintas sistem: ERP, CRM, HRIS, API mitra",
          "Roadmap pengembangan jangka panjang",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Arsitektur microservices — bagian bermasalah diperbaiki tanpa mematikan seluruh sistem",
          "Skalabilitas jutaan pengguna",
          "Keamanan standar enterprise + compliance audit",
          "DevOps pipeline CI/CD penuh — rilis teruji, bisa ditarik mundur bila bermasalah",
          "Disaster recovery & business continuity plan",
          "Performance tuning berkelanjutan",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 10 jt/bln, tim khusus untuk Anda",
          "Squad dedikasi: PM, engineer, QA, designer",
          "Perpanjangan tahunan Rp 20 jt/th termasuk maintenance",
          "SLA tertinggi + meeting strategi bulanan",
          "Dukungan 24/7 termasuk hari libur",
        ],
      },
    ],
    accent: {
      bar: "from-fuchsia-400 to-purple-600",
      chip: "bg-fuchsia-100 text-fuchsia-700",
      price: "text-fuchsia-700",
      cta: "border-fuchsia-200 text-fuchsia-700 hover:border-fuchsia-300 hover:bg-fuchsia-50",
    },
  },
  // Unicorn — 3 paket enterprise: X / Y / Z
  // Harga & maintain/renewal mengikuti aturan 10%/bln & 20%/th dari harga build.
  {
    id: "x",
    name: "X",
    short: "X",
    tagline:
      "Portal, dashboard, dan alur kerja yang disusun sesuai operasional Anda.",
    build: "Rp 1 miliar",
    maintain: "Rp 100 jt",
    renewal: "Rp 200 jt",
    idealFor:
      "Perusahaan yang mengandalkan portal, dashboard, atau alur kerja internal dengan skala di luar jangkauan website standar.",
    featureGroups: [
      {
        title: "Apa yang dibangun",
        items: [
          "Website yang jadi panduan utama, bukan sekadar halaman profil",
          "Sebagian alur kerja dibuat lebih tertib: siapa masuk, apa yang dibutuhkan, kapan info berpindah",
          "Integrasi dengan kerja sehari-hari kalau memang perlu",
          "Desain mengikuti cara orang sebenarnya memakai sistem, bukan cara selesainya",
          "Konten bisa dikelola tim internal tanpa menyentuh kode",
        ],
      },
      {
        title: "Bagaimana hasilnya",
        items: [
          "Tampil lebih tertib dari versi ‘cukup website’ yang Anda punya sekarang",
          "Informasi tidak tersesat antar aplikasi dan grup WhatsApp",
          "Tim internal punya langkah yang lebih jelas saat sesuatu berubah",
          "Klien atau mitra lebih mudah menemukan apa yang mereka cari",
        ],
      },
      {
        title: "Apa yang tidak termasuk",
        items: [
          "Bukan program custom yang butuh tim khusus selama setahun",
          "Bukan infrastruktur kompleks untuk jutaan pengguna sekaligus",
          "Bukan ekosistem penuh; ini langkah di depannya",
        ],
      },
    ],
    accent: {
      bar: "from-sky-400 to-sky-600",
      chip: "bg-sky-100 text-sky-700",
      price: "text-sky-700",
      cta: "border-sky-200 text-sky-700 hover:border-sky-300 hover:bg-sky-50",
    },
  },
  {
    id: "y",
    name: "Y",
    short: "Y",
    tagline:
      "Website yang terhubung langsung dengan sistem dan operasional bisnis Anda.",
    build: "Rp 2 miliar",
    maintain: "Rp 200 jt",
    renewal: "Rp 400 jt",
    idealFor:
      "Perusahaan yang website-nya harus menyatu dengan aplikasi internal, tools pihak ketiga, dan alur kerja otomatis.",
    featureGroups: [
      {
        title: "Apa yang dibangun",
        items: [
          "Website yang terhubung dengan alur kerja yang sudah kamu jalankan",
          "Beberapa sistem atau tools terhubung kalau memang menguntungkan",
          "Tata kelola konten lebih matang dari versi sebelumnya",
          "Halaman kampanye yang bisa menyambung ke sistem, bukan hanya mengarahkan ke formulir",
        ],
      },
      {
        title: "Bagaimana hasilnya",
        items: [
          "Orang di luar tidak perlu menebak cara menghubungi atau meminta sesuatu",
          "Informasi dari website bisa sampai ke tempat yang dipakai internal",
          "Konten lebih mudah dikelola karena tidak sembarangan",
          "Kurang ‘menyambung saluran’ manual antara website dan sisinya",
        ],
      },
      {
        title: "Apa yang tidak termasuk",
        items: [
          "Bukan proyek ‘semua sistem digabung jadi satu’ tanpa batas",
          "Bukan infrastruktur enterprise penuh",
          "Bukan otomatisasi segala sesuatu tanpa acuan",
        ],
      },
    ],
    accent: {
      bar: "from-amber-400 to-orange-500",
      chip: "bg-amber-100 text-amber-700",
      price: "text-brand-600",
      cta: "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700",
    },
  },
  {
    id: "z",
    name: "Z",
    short: "Z",
    tagline:
      "Website, aplikasi internal, dan alur kerja lintas unit dalam satu ekosistem.",
    build: "Rp 3 miliar",
    maintain: "Rp 300 jt",
    renewal: "Rp 600 jt",
    idealFor:
      "Korporasi atau grup usaha yang menjalankan banyak sistem sekaligus dan membutuhkannya saling terhubung, dikerjakan bersama account manager berdedikasi.",
    featureGroups: [
      {
        title: "Apa yang dibangun",
        items: [
          "Satu ekosistem yang disepakati bersama dari awal, bukan kumpulan halaman atau tools yang ditumpuk",
          "Website dan sistem internal sejajar, bukan dipisah-pisah",
          "Alur kerja antar unit lebih mudah dilacak dan diteruskan",
          "Integrasi ke sistem mitra atau internal kalau memang diperlukan",
          "Akun & penasihat berdedikasi — satu orang yang paham konteks bisnis Anda",
          "Ada langkah pengembangan yang disepakati, bukan hanya ‘selesai ketika dev selesai’",
        ],
      },
      {
        title: "Bagaimana hasilnya",
        items: [
          "Lebih sulit ada ‘ini tidak sinkron dengan itu’ karena disusun dalam satu kerangka",
          "Informasi dan proses lebih mudah diikuti oleh orang yang perlu mengikutinya",
          "Lebih jelas siapa yang punya peran di setiap bagian proses",
          "Lebih tinggi kualitas kerjasama karena ada bidang yang disepakati, bukan hanya janji",
        ],
      },
      {
        title: "Apa yang tidak termasuk",
        items: [
          "Bukan pengganti tim IT internal — ini sistem yang disusun bersama lalu diserahkan dengan panduan",
          "Bukan proyek sekali jadi tanpa arah: ada roadmap, bukan hanya serah terima",
          "Bukan lingkup tanpa batas: cakupan disepakati dulu sebelum harga final",
        ],
      },
    ],
    accent: {
      bar: "from-violet-400 to-violet-600",
      chip: "bg-violet-100 text-violet-700",
      price: "text-violet-700",
      cta: "border-violet-200 text-violet-700 hover:border-violet-300 hover:bg-violet-50",
    },
  },
];


export function getPlan(id: string): Plan | undefined {
  return plans.find((p) => p.id === id);
}
