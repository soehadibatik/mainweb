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
          "Tombol WhatsApp langsung terhubung",
          "1x revisi desain",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Website ringan, cepat dibuka termasuk di jaringan seluler",
          "SEO dasar (meta tag, heading terstruktur)",
          "SSL certificate (https)",
          "Integrasi Google Analytics",
          "Favicon & branding dari logo Anda",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Biaya maintain sudah termasuk maks. 1 bulan",
          "Konsultasi gratis sebelum pengerjaan",
          "Panduan singkat pengelolaan website",
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
          "Desain responsif penuh",
          "Halaman: Beranda, Tentang, Layanan, Galeri, Kontak",
          "Form kontak terhubung ke email",
          "Integrasi Google Maps lokasi bisnis",
          "2x revisi desain",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "SEO dasar + sitemap otomatis",
          "SSL certificate (https)",
          "Integrasi Google Analytics & Search Console",
          "Optimasi kecepatan loading",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance bulanan Rp 300 rb/bln",
          "Update konten minor sebulan sekali",
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
          "Halaman portfolio dengan galeri foto",
          "Blog sederhana untuk artikel",
          "3x revisi desain",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "SEO on-page lengkap",
          "SSL certificate (https)",
          "Google Analytics & Search Console",
          "Email profesional (1 akun)",
          "Backup data rutin",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 500 rb/bln",
          "Update konten 2x sebulan",
          "Perpanjangan tahunan Rp 1 jt/th termasuk maintenance",
          "Prioritas dukungan teknis",
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
    id: "intermediate",
    name: "Intermediate",
    short: "Intermediate",
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
          "Kelola artikel, halaman, dan galeri sendiri",
          "Kategori & tag konten",
          "Multi-user dengan hak akses berbeda",
          "3x revisi desain",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "SEO on-page + schema markup",
          "SSL certificate (https)",
          "Email profesional (3 akun)",
          "Backup otomatis mingguan",
          "Keamanan dasar (firewall & anti-spam)",
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
    id: "advance",
    name: "Advance",
    short: "Advance",
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
          "CMS penuh + custom post type",
          "Katalog produk atau layanan lengkap",
          "Blog profesional dengan kategori",
          "Halaman landing page kampanye",
          "Newsletter & form lead generation",
          "Unlimited revisi desain selama pengerjaan",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "SEO lanjutan + schema markup",
          "Kecepatan loading optimal (Core Web Vitals)",
          "Integrasi tools pihak ketiga (WhatsApp API, Google Workspace, dsb)",
          "Email profesional (5 akun)",
          "Backup otomatis harian",
          "Monitoring uptime website",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 1,5 jt/bln",
          "Update konten tanpa batas wajar",
          "Perpanjangan tahunan Rp 3,5 jt/th termasuk maintenance",
          "Dukungan prioritas + laporan bulanan",
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
    id: "proficient",
    name: "Proficient",
    short: "Proficient",
    tagline: "Platform custom: portal, booking, dan sistem internal.",
    build: "Rp 30 jt",
    maintain: "Rp 3 jt",
    renewal: "Rp 5 jt",
    idealFor: "Perusahaan yang butuh sistem khusus: portal informasi, sistem booking, membership, atau aplikasi internal.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "Website custom sesuai blueprint bisnis",
          "Sistem booking / reservasi online",
          "Sistem membership & login pengguna",
          "Dashboard admin lengkap",
          "Notifikasi email otomatis",
          "Multi-bahasa (opsional)",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Pengembangan backend custom",
          "Database terstruktur & optimal",
          "REST API untuk integrasi eksternal",
          "SEO lanjutan + performa tinggi",
          "SSL premium & hardening keamanan",
          "Backup terpisah (harian & mingguan)",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 3 jt/bln",
          "Monitoring, security & patching berkala",
          "Perpanjangan tahunan Rp 5 jt/th termasuk maintenance",
          "SLA respons cepat untuk kendala kritikal",
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
    id: "pro-proficient",
    name: "Pro Proficient",
    short: "Pro Prof.",
    tagline: "Web app kompleks dengan integrasi API & dashboard.",
    build: "Rp 40 jt",
    maintain: "Rp 5 jt",
    renewal: "Rp 7 jt",
    idealFor: "Bisnis digital yang butuh web app kompleks: marketplace internal, sistem operasional, atau integrasi banyak API.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "Web application kompleks custom",
          "Dashboard analitik & pelaporan",
          "Sistem peran & izin (role-based access)",
          "Alur kerja otomatis (workflow)",
          "Integrasi payment gateway",
          "Notifikasi multi-kanal (email & WhatsApp)",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Arsitektur aplikasi skalabel",
          "Integrasi API pihak ketiga (payment, logistik, dsb)",
          "Database cluster dengan replikasi",
          "Caching layer untuk performa maksimal",
          "Audit keamanan & penetration test dasar",
          "Backup real-time + disaster recovery",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 5 jt/bln",
          "Monitoring 24/7 & incident response",
          "Perpanjangan tahunan Rp 7 jt/th termasuk maintenance",
          "Dedicated account manager",
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
    id: "max-proficient",
    name: "Max Proficient",
    short: "Max Prof.",
    tagline: "Platform enterprise dengan performa & keamanan tinggi.",
    build: "Rp 50 jt",
    maintain: "Rp 10 jt",
    renewal: "Rp 8 jt",
    idealFor: "Perusahaan besar / enterprise yang menangani data sensitif dan trafik tinggi dengan standar keamanan ketat.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "Platform enterprise skala besar",
          "Sistem multi-tenant / multi-cabang",
          "Dashboard eksekutif real-time",
          "Integrasi ERP / CRM internal",
          "Sistem antrian & notifikasi terjadwal",
          "White-label (branding kustom penuh)",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Infrastruktur high-availability",
          "Load balancing & auto-scaling",
          "Enkripsi data end-to-end",
          "Compliance keamanan (OWASP standar enterprise)",
          "Log audit lengkap & activity tracking",
          "Backup multi-region",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 10 jt/bln",
          "Tim dedikasi & monitoring 24/7",
          "Perpanjangan tahunan Rp 8 jt/th termasuk maintenance",
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
    id: "pro-max-proficient",
    name: "Pro Max Proficient",
    short: "Pro Max Prof.",
    tagline: "Paket terbesar, dikerjakan tim tersendiri untuk Anda.",
    build: "Rp 100 jt",
    maintain: "Rp 50 jt",
    renewal: "Rp 20 jt",
    idealFor: "Korporasi & grup usaha yang butuh ekosistem digital menyeluruh, dari situs korporat sampai aplikasi internal, dengan tim khusus.",
    featureGroups: [
      {
        title: "Desain & Halaman",
        items: [
          "Ekosistem digital menyeluruh (bisa lebih dari 1 platform)",
          "Super-app: web + integrasi mobile-ready",
          "Sistem enterprise penuh dengan modularitas",
          "AI & automation workflow (opsional)",
          "Integrasi lintas sistem (ERP, CRM, HRIS, API mitra)",
          "Roadmap pengembangan jangka panjang",
        ],
      },
      {
        title: "Teknis & Performa",
        items: [
          "Arsitektur microservices",
          "Skalabilitas jutaan pengguna",
          "Keamanan standar enterprise + compliance audit",
          "DevOps pipeline CI/CD penuh",
          "Disaster recovery & business continuity plan",
          "Performance tuning berkelanjutan",
        ],
      },
      {
        title: "Dukungan",
        items: [
          "Maintenance Rp 50 jt/bln, tim khusus untuk Anda",
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
];

export function getPlan(id: string): Plan | undefined {
  return plans.find((p) => p.id === id);
}
