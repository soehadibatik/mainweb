import type { Locale } from "./config";

/**
 * Teks halaman non-beranda per locale: judul/deskripsi metadata, label bar
 * dokumen, judul section, dan pesan WhatsApp. Sumber teks Indonesia diambil
 * apa adanya dari halaman (id) yang ada sekarang supaya tidak ada dua sumber
 * kebenaran untuk copy yang sama.
 */

export type PageStrings = {
  /** Metadata beranda + tagline deskriptif situs. */
  site: {
    tagline: string;
    description: string;
    keywords: string[];
  };
  /** Judul/deskripsi khusus halaman paket (x/y/z) di luar fallback. */
  paketSpecial: Record<string, { title: string; ogTitle: string; desc: string; ogDesc: string }>;
  klien: {
    metaTitle: string;
    metaDesc: (count: number) => string;
    ogAlt: (count: number) => string;
    docLabel: string;
    sitesCount: (count: number) => string;
    status: string;
    backHome: string;
    backToHome: string;
    eyebrow: string;
    heading: string;
    intro: string;
    readCase: string;
    note: (count: number) => string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaWa: string;
    ctaWaMessage: string;
    ctaPricing: string;
    jsonLdName: string;
    inLanguage: string;
  };
  studiIndex: {
    metaTitle: string;
    metaDesc: (count: number) => string;
    ogAlt: (count: number) => string;
    docLabel: string;
    projectsCount: (count: number) => string;
    status: string;
    backHome: string;
    eyebrow: string;
    heading: string;
    introBefore: string;
    introLink: string;
    readCase: string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaWa: string;
    ctaWaMessage: string;
    ctaPricing: string;
    inLanguage: string;
  };
  studiDetail: {
    metaTitle: (client: string, category: string) => string;
    docLabel: (client: string) => string;
    backAll: string;
    clientLabel: string;
    visit: (domain: string) => string;
    needsHeading: string;
    scopeHeading: string;
    scopeIntro: string;
    planCtaEyebrow: string;
    planHeading: (name: string) => string;
    planBuildLabel: string;
    consultWa: string;
    consultWaMessage: (client: string) => string;
    planDetail: (name: string) => string;
    othersHeading: string;
    breadcrumbHome: string;
    breadcrumbCases: string;
  };
  paket: {
    metaTitleFallback: (name: string, build: string) => string;
    metaDescFallback: (name: string, tagline: string) => string;
    metaDescNoTagline: (name: string, build: string) => string;
    docLabel: (name: string) => string;
    docPaket: (name: string) => string;
    active: string;
    backAll: string;
    eyebrow: (name: string) => string;
    idealFor: string;
    summaryLabel: string;
    buildCostLabel: string;
    maintainLabel: string;
    renewalLabel: string;
    includedShort: string;
    order: (name: string) => string;
    consultNote: string;
    specsHeading: string;
    specsCount: (items: number, groups: number) => string;
    prev: (name: string) => string;
    next: (name: string) => string;
    first: string;
    last: string;
    othersLabel: string;
    orderWaMessage: (name: string, build: string) => string;
  };
  legal: {
    privacyTitle: string;
    privacyDesc: string;
    privacyAlt: string;
    termsTitle: string;
    termsDesc: string;
    termsAlt: string;
    updatedLabel: string;
    question: string;
    contact: string;
  };
  notfound: {
    metaTitle: string;
  };
};

const id: PageStrings = {
  site: {
    tagline: "Jasa Pembuatan Website Profesional",
    description:
      "Jasa pembuatan & pengembangan website profesional. 15 paket, dari landing page sampai sistem skala miliaran, dengan harga yang tertulis di muka.",
    keywords: [
      "jasa pembuatan website",
      "buat website profesional",
      "web developer indonesia",
      "jasa website murah",
      "company profile",
      "toko online",
      "mainweb.id",
    ],
  },
    paketSpecial: {
    basic: {
      title: "Jasa Pembuatan Landing Page Murah Rp 1,5 Jt (Paket Basic) — Hand-Built Cepat",
      ogTitle: "Paket Basic: Jasa Pembuatan Landing Page Rp 1,5 Jt Hand-Built",
      desc: "Jasa pembuatan landing page hand-built Rp 1,5 jt (Paket Basic). 1 halaman responsif, tombol direct WhatsApp cepat, 0 template, dan Core Web Vitals hijau terjamin.",
      ogDesc: "Landing page hand-built profesional Rp 1,5 jt. Cepat dibuka, direct WhatsApp, tanpa template pasaran.",
    },
    beginner: {
      title: "Jasa Pembuatan Landing Page Bisnis & Showcase Rp 3 Jt (Paket Beginner)",
      ogTitle: "Paket Beginner: Landing Page Lengkap & Showcase Rp 3 Jt",
      desc: "Paket Beginner Rp 3 jt: Jasa pembuatan landing page bisnis multi-seksi dengan galeri showcase produk, formulir kontak, dan alur konversi WhatsApp teroptimasi.",
      ogDesc: "Landing page bisnis multi-seksi Rp 3 jt. Showcase produk dan konversi WhatsApp cepat.",
    },
    elementary: {
      title: "Jasa Pembuatan Website Company Profile Rp 5 Jt (Paket Elementary) — 5 Halaman",
      ogTitle: "Paket Elementary: Website Company Profile Rp 5 Jt",
      desc: "Paket Elementary Rp 5 jt: Jasa pembuatan website company profile 5 halaman profesional. Tampil bonafide di mata klien B2B, SEO-friendly, dan loading instan.",
      ogDesc: "Website company profile 5 halaman Rp 5 jt. Standar B2B, SEO friendly, dan loading instan.",
    },
    light: {
      title: "Jasa Pembuatan Website Profil & Katalog Bisnis Rp 10 Jt (Paket Light) — CMS",
      ogTitle: "Paket Light: Website Katalog & CMS Mandiri Rp 10 Jt",
      desc: "Paket Light Rp 10 jt: Website bisnis multi-halaman dengan sistem CMS mandiri, modul katalog produk dinamis, dan artikel blog siap rangking Google.",
      ogDesc: "Website bisnis & katalog dinamis dengan CMS mandiri Rp 10 jt. Mudah dikelola sendiri.",
    },
    intermediate: {
      title: "Jasa Pembuatan Website Toko Online & Bisnis Rp 20 Jt (Paket Intermediate)",
      ogTitle: "Paket Intermediate: Website Toko Online & Bisnis Rp 20 Jt",
      desc: "Paket Intermediate Rp 20 jt: Jasa pembuatan website toko online & bisnis full-fitur. Multi-kategori produk, direct order WA, sistem CMS, dan blog edukasi.",
      ogDesc: "Website toko online & bisnis multi-kategori Rp 20 jt. Siap skala dan mudah dikelola.",
    },
    advance: {
      title: "Jasa Pembuatan Web App & Sistem Kustom Rp 30 Jt (Paket Advance)",
      ogTitle: "Paket Advance: Web App & Sistem Portal Kustom Rp 30 Jt",
      desc: "Paket Advance Rp 30 jt: Jasa pembuatan aplikasi web custom, integrasi payment gateway / API, modul booking, dan sistem operasional internal bisnis.",
      ogDesc: "Sistem web kustom & integrasi API Rp 30 jt untuk otomatisasi operasional bisnis Anda.",
    },
    proficient: {
      title: "Jasa Pembuatan Portal Korporasi Multi-Cabang Rp 50 Jt (Paket Proficient)",
      ogTitle: "Paket Proficient: Portal Korporasi Perusahaan Rp 50 Jt",
      desc: "Paket Proficient Rp 50 jt: Solusi portal korporasi tingkat lanjut dengan arsitektur headless, multi-bahasa global, dan integrasi rantai pasok multi-cabang.",
      ogDesc: "Portal korporat multi-cabang Rp 50 jt. Kinerja tinggi dan arsitektur enterprise.",
    },
    max: {
      title: "Jasa Pembuatan Ekosistem B2B & Portal Mitra Rp 75 Jt (Paket Max)",
      ogTitle: "Paket Max: Ekosistem Digital B2B & Mitra Rp 75 Jt",
      desc: "Paket Max Rp 75 jt: Sistem digital terintegrasi untuk portal kemitraan B2B, kalkulator penawaran harga otomatis, dan dashboard manajemen rekanan.",
      ogDesc: "Ekosistem B2B dan portal mitra terintegrasi Rp 75 jt.",
    },
    "pro-max": {
      title: "Jasa Pembuatan Platform Korporat Komprehensif Rp 100 Jt (Paket Pro Max)",
      ogTitle: "Paket Pro Max: Platform Korporat Komprehensif Rp 100 Jt",
      desc: "Paket Pro Max Rp 100 jt: Platform digital korporat berskala tinggi dengan kepatuhan audit keamanan ketat, toleransi beban tinggi, dan SLA khusus.",
      ogDesc: "Platform digital enterprise Rp 100 jt dengan standar kepatuhan dan performa ketat.",
    },
    beta: {
      title: "Jasa Pembuatan MVP Platform Digital Startup Rp 1 Miliar (Paket Beta)",
      ogTitle: "Paket Beta: MVP Platform Startup Rp 1 Miliar",
      desc: "Paket Beta Rp 1 miliar: Pengembangan platform MVP pertama untuk startup berpendanaan. Autentikasi user, backend terukur, dan dashboard analitik.",
      ogDesc: "MVP platform digital pertama untuk startup berpendanaan Rp 1 miliar.",
    },
    theta: {
      title: "Jasa Pembuatan Platform Digital Terdistribusi Rp 2 Miliar (Paket Theta)",
      ogTitle: "Paket Theta: Sistem Platform Digital Rp 2 Miliar",
      desc: "Paket Theta Rp 2 miliar: Arsitektur platform digital terdistribusi dengan integrasi perbankan/fintech, microservices, dan keandalan tinggi.",
      ogDesc: "Sistem produk digital terdistribusi skala nasional Rp 2 miliar.",
    },
    alpha: {
      title: "Jasa Pembuatan Infrastruktur Platform Startup Skala Besar Rp 3 Miliar (Paket Alpha)",
      ogTitle: "Paket Alpha: Infrastruktur Platform Digital Rp 3 Miliar",
      desc: "Paket Alpha Rp 3 miliar: Infrastruktur platform digital berkapasitas jutaan pengguna terdaftar, arsitektur cloud terdistribusi, siap ekspansi global.",
      ogDesc: "Infrastruktur platform digital siap skala jutaan pengguna Rp 3 miliar.",
    },
    x: {
      title: "Paket X: Sistem Digital Terstruktur untuk Perusahaan (Rp 20 Miliar)",
      ogTitle: "Paket X — Sistem digital terstruktur",
      desc: "Paket X: sistem digital terstruktur untuk portal, dashboard, integrasi internal, dan alur kerja yang disesuaikan dengan operasional perusahaan Anda.",
      ogDesc: "Paket X: sistem digital terstruktur untuk portal, dashboard, dan alur kerja perusahaan.",
    },
    y: {
      title: "Paket Y: Website & Infrastruktur Terintegrasi Bisnis (Rp 50 Miliar)",
      ogTitle: "Paket Y — Website terintegrasi dengan operasional",
      desc: "Paket Y: website yang terhubung dengan aplikasi internal, integrasi pihak ketiga, dan alur kerja otomatis untuk perusahaan dengan kebutuhan lebih kompleks.",
      ogDesc: "Paket Y: website terintegrasi dengan sistem dan operasional bisnis Anda.",
    },
    z: {
      title: "Paket Z: Ekosistem Kedaulatan Digital Korporasi (Rp 100 Miliar)",
      ogTitle: "Paket Z — Ekosistem digital perusahaan",
      desc: "Paket Z: ekosistem digital menyeluruh untuk korporasi atau grup usaha yang mengoperasikan platform digital sebagai infrastruktur utama.",
      ogDesc: "Paket Z: ekosistem digital untuk korporasi dan grup usaha.",
    },
  },
  klien: {
    metaTitle: "Klien: Portofolio Situs yang Sudah Kami Rilis",
    metaDesc: (count) =>
      `Portofolio ${count} situs klien yang sudah kami rilis, mulai dari company profile dan toko online sampai dashboard internal.`,
    ogAlt: (count) => `Portofolio klien mainweb.id: ${count} situs sudah kami rilis`,
    docLabel: "DOC · PORTOFOLIO / KLIEN",
    sitesCount: (count) => `${count} SITUS`,
    status: "PUBLIK",
    backHome: "← Beranda",
    backToHome: "← Kembali ke beranda",
    eyebrow: "Klien",
    heading: "Semua situs yang sudah kami rilis",
    intro:
      "Tersusun per kelompok: unggulan, ekosistem batik, dan proyek lain. Klik kartu untuk membuka situsnya.",
    readCase: "Baca studi kasus",
    note: (count) => `${count} situs · semua logo diambil dari situsnya masing-masing`,
    ctaEyebrow: "Proyek berikutnya",
    ctaHeading: "Butuh situs untuk bisnis Anda?",
    ctaWa: "Konsultasi gratis",
    ctaWaMessage: "Halo mainweb.id, saya mau bikin situs.",
    ctaPricing: "Lihat tarif",
    jsonLdName: "Klien mainweb.id",
    inLanguage: "id-ID",
  },
  studiIndex: {
    metaTitle: "Studi Kasus Website: Proyek Nyata yang Sudah Kami Rilis",
    metaDesc: (count) =>
      `${count} studi kasus proyek website nyata: komunitas dengan toko merchandise, katalog B2B produsen batik, toko grosir, portal konten, sampai sistem back office internal.`,
    ogAlt: (count) => `Studi kasus website: ${count} proyek yang sudah kami rilis`,
    docLabel: "DOC · STUDI KASUS",
    projectsCount: (count) => `${count} PROYEK`,
    status: "PUBLIK",
    backHome: "← Beranda",
    eyebrow: "Studi kasus",
    heading: "Bagaimana website klien kami dibangun, dijabarkan apa adanya",
    introBefore:
      "Setiap studi kasus menjabarkan kebutuhan klien dan fitur yang benar-benar tayang di situsnya, ditutup rekomendasi paket untuk kebutuhan serupa. Daftar lengkap situs ada di ",
    introLink: "halaman klien",
    readCase: "Baca studi kasus",
    ctaEyebrow: "Proyek berikutnya",
    ctaHeading: "Butuh website seperti ini untuk bisnis Anda?",
    ctaWa: "Konsultasi gratis",
    ctaWaMessage:
      "Halo mainweb.id, saya membaca studi kasus Anda dan ingin diskusi proyek serupa.",
    ctaPricing: "Lihat tarif",
    inLanguage: "id-ID",
  },
  studiDetail: {
    metaTitle: (client, category) => `Studi kasus ${client}: ${category}`,
    docLabel: (client) => `DOC · STUDI KASUS / ${client.toUpperCase()}`,
    backAll: "← Semua studi kasus",
    clientLabel: "Klien",
    visit: (domain) => `Kunjungi ${domain}`,
    needsHeading: "Kebutuhannya",
    scopeHeading: "Yang dikerjakan",
    scopeIntro:
      "Dijabarkan dari fitur yang benar-benar tayang di situsnya, bukan janji di brosur.",
    planCtaEyebrow: "Butuh yang serupa?",
    planHeading: (name) => `Paket ${name} adalah titik mulai yang tepat`,
    planBuildLabel: "Biaya pembuatan",
    consultWa: "Konsultasi via WhatsApp",
    consultWaMessage: (client) =>
      `Halo mainweb.id, saya melihat studi kasus ${client} dan butuh website serupa.`,
    planDetail: (name) => `Detail paket ${name}`,
    othersHeading: "Studi kasus lainnya",
    breadcrumbHome: "Beranda",
    breadcrumbCases: "Studi kasus",
  },
  paket: {
    metaTitleFallback: (name, build) => `Paket ${name}: ${build}`,
    metaDescFallback: (name, tagline) =>
      `Paket ${name}: ${tagline} Lihat spesifikasi dan biaya yang tertulis di muka.`,
    metaDescNoTagline: (name, build) =>
      `Paket ${name}: ${build}. Lihat spesifikasi dan biaya yang tertulis di muka.`,
    docLabel: (name) => `DOC · LAMPIRAN PAKET / ${name.toUpperCase()}`,
    docPaket: (name) => `PAKET ${name.toUpperCase()}`,
    active: "AKTIF",
    backAll: "← Semua paket",
    eyebrow: (name) => `Paket ${name}`,
    idealFor: "Ideal untuk:",
    summaryLabel: "RINGKASAN BIAYA",
    buildCostLabel: "Biaya pembuatan",
    maintainLabel: "Maintain",
    renewalLabel: "Perpanjangan",
    includedShort: "Termasuk",
    order: (name) => `Pesan paket ${name}`,
    consultNote: "Konsultasi gratis, tanpa komitmen",
    specsHeading: "Spesifikasi lengkap",
    specsCount: (items, groups) => `${items} butir, ${groups} kategori`,
    prev: (name) => `← Sebelumnya: ${name}`,
    next: (name) => `Selanjutnya: ${name} →`,
    first: "Awal daftar",
    last: "Akhir daftar",
    othersLabel: "Lihat paket lainnya",
    orderWaMessage: (name, build) =>
      `Halo mainweb.id, saya melihat paket ${name} (${build}). Boleh jelaskan lebih detail?`,
  },
  legal: {
    privacyTitle: "Kebijakan Privasi",
    privacyDesc:
      "Bagaimana mainweb.id menangani data pengunjung situs dan data klien: tanpa cookie pelacak, data klien hanya untuk pengerjaan proyek.",
    privacyAlt:
      "Kebijakan Privasi mainweb.id: tanpa cookie pelacak, data klien hanya untuk pengerjaan proyek",
    termsTitle: "Syarat Layanan",
    termsDesc:
      "Syarat penggunaan situs mainweb.id dan ketentuan jasa pembuatan website: cakupan pekerjaan, pembayaran, revisi, dan keberlangsungan layanan.",
    termsAlt:
      "Syarat Layanan mainweb.id: cakupan pekerjaan, pembayaran, revisi, dan keberlangsungan layanan",
    updatedLabel: "Terakhir diperbarui:",
    question: "Ada pertanyaan soal dokumen ini?",
    contact: "Hubungi kami",
  },
  notfound: {
    metaTitle: "404: Halaman tidak ditemukan",
  },
};

const en: PageStrings = {
  site: {
    tagline: "Professional Website Services",
    description:
      "Professional website design & development services. 15 packages, from landing pages to billion-rupiah systems, with costs stated up front.",
    keywords: [
      "website development services",
      "professional web developer",
      "custom website",
      "company profile website",
      "online store website",
      "website pricing",
      "mainweb.id",
    ],
  },
    paketSpecial: {
    basic: {
      title: "Hand-Built Landing Page Services Rp 1.5M (Basic Package) — Fast & Clean",
      ogTitle: "Basic Package: Hand-Built Landing Page Rp 1.5M",
      desc: "Hand-built landing page services starting at Rp 1.5M (Basic Package). 1 responsive page, instant WhatsApp conversion, 0 templates, and verified green Core Web Vitals.",
      ogDesc: "Professional hand-built landing page Rp 1.5M. Fast loading, direct WhatsApp, zero templates.",
    },
    beginner: {
      title: "Business Landing Page & Showcase Services Rp 3M (Beginner Package)",
      ogTitle: "Beginner Package: Full Landing Page & Showcase Rp 3M",
      desc: "Beginner Package Rp 3M: Multi-section business landing page with product showcase gallery, contact forms, and optimized WhatsApp sales flow.",
      ogDesc: "Multi-section business landing page Rp 3M. Product showcase and instant WhatsApp conversion.",
    },
    elementary: {
      title: "Professional Company Profile Website Rp 5M (Elementary Package) — 5 Pages",
      ogTitle: "Elementary Package: Company Profile Website Rp 5M",
      desc: "Elementary Package Rp 5M: Professional 5-page company profile website. Built for B2B credibility, SEO-ready structure, and instant loading speeds.",
      ogDesc: "5-page company profile website Rp 5M. B2B standard, SEO friendly, and instant load.",
    },
    light: {
      title: "Business Website with CMS & Product Catalog Rp 10M (Light Package)",
      ogTitle: "Light Package: Catalog Website & Self-Managed CMS Rp 10M",
      desc: "Light Package Rp 10M: Multi-page business website featuring a lightweight headless CMS, dynamic product catalog, and SEO-optimized blog module.",
      ogDesc: "Business website & dynamic catalog with CMS Rp 10M. Easily managed in-house.",
    },
    intermediate: {
      title: "Full-Featured Online Store & Business Website Rp 20M (Intermediate Package)",
      ogTitle: "Intermediate Package: Online Store & Business Website Rp 20M",
      desc: "Intermediate Package Rp 20M: Complete e-commerce catalog & business website. Multi-category products, direct WhatsApp order flow, CMS, and blog.",
      ogDesc: "Full-featured e-commerce catalog & business website Rp 20M. Scalable and easy to operate.",
    },
    advance: {
      title: "Custom Web App & Internal Portal Development Rp 30M (Advance Package)",
      ogTitle: "Advance Package: Custom Web App & Portal Rp 30M",
      desc: "Advance Package Rp 30M: Custom web application development, payment gateway / API integrations, booking modules, and internal business workflow automation.",
      ogDesc: "Custom web system & API integrations Rp 30M to automate your business operations.",
    },
    proficient: {
      title: "Enterprise Multi-Branch Corporate Portal Rp 50M (Proficient Package)",
      ogTitle: "Proficient Package: Corporate Portal Rp 50M",
      desc: "Proficient Package Rp 50M: High-performance corporate portal featuring headless architecture, global multi-language support, and multi-branch integrations.",
      ogDesc: "Multi-branch corporate portal Rp 50M. High-performance enterprise architecture.",
    },
    max: {
      title: "B2B Digital Ecosystem & Partner Portal Rp 75M (Max Package)",
      ogTitle: "Max Package: B2B Digital Ecosystem Rp 75M",
      desc: "Max Package Rp 75M: Integrated digital system for B2B partner portals, automated quotation estimators, and vendor management dashboards.",
      ogDesc: "Integrated B2B digital ecosystem and partner portal Rp 75M.",
    },
    "pro-max": {
      title: "Comprehensive Corporate Digital Platform Rp 100M (Pro Max Package)",
      ogTitle: "Pro Max Package: Corporate Platform Rp 100M",
      desc: "Pro Max Package Rp 100M: High-scale corporate digital platform with rigorous security audit compliance, extreme traffic tolerance, and dedicated SLA.",
      ogDesc: "Enterprise digital platform Rp 100M with strict compliance and performance standards.",
    },
    beta: {
      title: "Startup MVP Digital Platform Development Rp 1 Billion (Beta Package)",
      ogTitle: "Beta Package: Startup MVP Platform Rp 1 Billion",
      desc: "Beta Package Rp 1B: First MVP digital platform development for venture-backed startups. User authentication, scalable backend, and analytics dashboard.",
      ogDesc: "First digital platform MVP for venture-backed startups Rp 1 billion.",
    },
    theta: {
      title: "Distributed Digital Platform System Rp 2 Billion (Theta Package)",
      ogTitle: "Theta Package: Distributed Digital Platform Rp 2 Billion",
      desc: "Theta Package Rp 2B: Distributed digital product architecture with fintech/banking integrations, microservices, and high fault tolerance.",
      ogDesc: "Nationwide distributed digital product system Rp 2 billion.",
    },
    alpha: {
      title: "Large-Scale Startup Digital Infrastructure Rp 3 Billion (Alpha Package)",
      ogTitle: "Alpha Package: Digital Platform Infrastructure Rp 3 Billion",
      desc: "Alpha Package Rp 3B: Digital platform infrastructure built for millions of registered users, distributed cloud architecture, ready for global scale.",
      ogDesc: "Digital platform infrastructure scaled for millions of users Rp 3 billion.",
    },
    x: {
      title: "Package X: A Structured Digital System for Enterprises (Rp 20 Billion)",
      ogTitle: "Package X: a structured digital system",
      desc: "Package X: a structured digital system for portals, dashboards, internal integrations, and workflows tailored to your company's operations.",
      ogDesc: "Package X: a structured digital system for company portals, dashboards, and workflows.",
    },
    y: {
      title: "Package Y: Website & Integrated Business Infrastructure (Rp 50 Billion)",
      ogTitle: "Package Y: a website integrated with your operations",
      desc: "Package Y: a website connected to internal applications, third-party integrations, and automated workflows for companies with more complex needs.",
      ogDesc: "Package Y: a website integrated with your business systems and operations.",
    },
    z: {
      title: "Package Z: Complete Corporate Digital Ecosystem (Rp 100 Billion)",
      ogTitle: "Package Z: a corporate digital ecosystem",
      desc: "Package Z: a complete digital ecosystem for corporations or business groups running digital platforms as their core infrastructure.",
      ogDesc: "Package Z: a digital ecosystem for corporations and business groups.",
    },
  },
  klien: {
    metaTitle: "Clients: the Portfolio of Sites We've Already Launched",
    metaDesc: (count) =>
      `A portfolio of ${count} client sites we've already launched, from company profiles and online stores to internal dashboards.`,
    ogAlt: (count) => `mainweb.id client portfolio: ${count} sites already launched`,
    docLabel: "DOC · PORTFOLIO / CLIENTS",
    sitesCount: (count) => `${count} SITES`,
    status: "PUBLIC",
    backHome: "← Home",
    backToHome: "← Back to home",
    eyebrow: "Clients",
    heading: "Every site we've already launched",
    intro:
      "Grouped by category: featured, the batik ecosystem, and other projects. Click a card to open the site.",
    readCase: "Read the case study",
    note: (count) => `${count} sites · every logo is taken from its own site`,
    ctaEyebrow: "Next project",
    ctaHeading: "Need a site for your business?",
    ctaWa: "Free consultation",
    ctaWaMessage: "Hello mainweb.id, I'd like a website built.",
    ctaPricing: "See pricing",
    jsonLdName: "mainweb.id clients",
    inLanguage: "en-US",
  },
  studiIndex: {
    metaTitle: "Website Case Studies: Real Projects We've Already Launched",
    metaDesc: (count) =>
      `${count} case studies of real website projects: a community with a merchandise store, a B2B catalog for a batik producer, a wholesale store, a content portal, and an internal back-office system.`,
    ogAlt: (count) => `Website case studies: ${count} projects we've already launched`,
    docLabel: "DOC · CASE STUDIES",
    projectsCount: (count) => `${count} PROJECTS`,
    status: "PUBLIC",
    backHome: "← Home",
    eyebrow: "Case studies",
    heading: "How our clients' websites are built, explained exactly as they are",
    introBefore:
      "Each case study lays out the client's needs and the features that are actually live on their site, ending with a package recommendation for similar needs. The full site list is on the ",
    introLink: "clients page",
    readCase: "Read the case study",
    ctaEyebrow: "Next project",
    ctaHeading: "Need a website like this for your business?",
    ctaWa: "Free consultation",
    ctaWaMessage:
      "Hello mainweb.id, I read your case studies and would like to discuss a similar project.",
    ctaPricing: "See pricing",
    inLanguage: "en-US",
  },
  studiDetail: {
    metaTitle: (client, category) => `Case study ${client}: ${category}`,
    docLabel: (client) => `DOC · CASE STUDY / ${client.toUpperCase()}`,
    backAll: "← All case studies",
    clientLabel: "Client",
    visit: (domain) => `Visit ${domain}`,
    needsHeading: "What they needed",
    scopeHeading: "What we built",
    scopeIntro:
      "Laid out from the features that are actually live on their site, not promises in a brochure.",
    planCtaEyebrow: "Need something similar?",
    planHeading: (name) => `Package ${name} is the right starting point`,
    planBuildLabel: "Build cost",
    consultWa: "Consult via WhatsApp",
    consultWaMessage: (client) =>
      `Hello mainweb.id, I saw the ${client} case study and need a similar website.`,
    planDetail: (name) => `${name} package details`,
    othersHeading: "More case studies",
    breadcrumbHome: "Home",
    breadcrumbCases: "Case studies",
  },
  paket: {
    metaTitleFallback: (name, build) => `Package ${name}: ${build}`,
    metaDescFallback: (name, tagline) =>
      `Package ${name}: ${tagline} See the specifications and costs stated up front.`,
    metaDescNoTagline: (name, build) =>
      `Package ${name}: ${build}. See the specifications and costs stated up front.`,
    docLabel: (name) => `DOC · PACKAGE SHEET / ${name.toUpperCase()}`,
    docPaket: (name) => `PACKAGE ${name.toUpperCase()}`,
    active: "ACTIVE",
    backAll: "← All packages",
    eyebrow: (name) => `Package ${name}`,
    idealFor: "Ideal for:",
    summaryLabel: "COST SUMMARY",
    buildCostLabel: "Build cost",
    maintainLabel: "Maintenance",
    renewalLabel: "Renewal",
    includedShort: "Included",
    order: (name) => `Order the ${name} package`,
    consultNote: "Free consultation, no commitment",
    specsHeading: "Full specifications",
    specsCount: (items, groups) => `${items} items, ${groups} categories`,
    prev: (name) => `← Previous: ${name}`,
    next: (name) => `Next: ${name} →`,
    first: "Start of list",
    last: "End of list",
    othersLabel: "See other packages",
    orderWaMessage: (name, build) =>
      `Hello mainweb.id, I saw the ${name} package (${build}). Could you explain more details?`,
  },
  legal: {
    privacyTitle: "Privacy Policy",
    privacyDesc:
      "How mainweb.id handles site visitor data and client data: no tracking cookies, client data used only for project work.",
    privacyAlt:
      "mainweb.id privacy policy: no tracking cookies, client data used only for project work",
    termsTitle: "Terms of Service",
    termsDesc:
      "Terms of using the mainweb.id site and general terms of our website services: scope, payment, revisions, and service continuity.",
    termsAlt:
      "mainweb.id terms of service: scope, payment, revisions, and service continuity",
    updatedLabel: "Last updated:",
    question: "Questions about this document?",
    contact: "Contact us",
  },
  notfound: {
    metaTitle: "404: Page not found",
  },
};

export const pages: Record<Locale, PageStrings> = { id, en };
