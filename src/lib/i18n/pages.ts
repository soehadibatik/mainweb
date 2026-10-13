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
    x: {
      title: "Paket X — Sistem digital terstruktur untuk perusahaan",
      ogTitle: "Paket X — Sistem digital terstruktur",
      desc: "Paket X: sistem digital terstruktur untuk portal, dashboard, integrasi internal, dan alur kerja yang disesuaikan dengan operasional perusahaan Anda.",
      ogDesc: "Paket X: sistem digital terstruktur untuk portal, dashboard, dan alur kerja perusahaan.",
    },
    y: {
      title: "Paket Y — Website yang terhubung dengan sistem bisnis",
      ogTitle: "Paket Y — Website terintegrasi dengan operasional",
      desc: "Paket Y: website yang terhubung dengan aplikasi internal, integrasi pihak ketiga, dan alur kerja otomatis untuk perusahaan dengan kebutuhan lebih kompleks.",
      ogDesc: "Paket Y: website terintegrasi dengan sistem dan operasional bisnis Anda.",
    },
    z: {
      title: "Paket Z — Ekosistem digital menyeluruh untuk korporasi",
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
      "Professional website building & development services. 15 packages, from landing pages to billion-rupiah systems, with costs stated up front.",
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
    x: {
      title: "Package X: a structured digital system for companies",
      ogTitle: "Package X: a structured digital system",
      desc: "Package X: a structured digital system for portals, dashboards, internal integrations, and workflows tailored to your company's operations.",
      ogDesc: "Package X: a structured digital system for company portals, dashboards, and workflows.",
    },
    y: {
      title: "Package Y: a website connected to your business systems",
      ogTitle: "Package Y: a website integrated with your operations",
      desc: "Package Y: a website connected to internal applications, third-party integrations, and automated workflows for companies with more complex needs.",
      ogDesc: "Package Y: a website integrated with your business systems and operations.",
    },
    z: {
      title: "Package Z: a complete digital ecosystem for corporations",
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
    heading: "How our clients' websites are built, laid out exactly as they are",
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
    docLabel: (name) => `DOC · PACKAGE ANNEX / ${name.toUpperCase()}`,
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
