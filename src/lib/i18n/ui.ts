import type { Locale } from "./config";

/**
 * Kamus teks antarmuka (chrome) untuk semua komponen bersama: navbar, footer,
 * hero, section, tombol. Sengaja dipisah dari data katalog (paket/studi kasus)
 * karena yang ini hidup di repo webmainweb, bukan di BO.
 *
 * Struktur: tiap kunci punya nilai per-locale. Tambah kunci baru = tambah di
 * kedua locale supaya tipe memaksa terjemahan lengkap.
 */

export type UIStrings = {
  brand: { wordmark: string; arialabel: string; logoAlt: string };
  nav: {
    items: { href: string; label: string }[];
    cta: string;
    ctaMobile: string;
    waMessage: string;
    waFloating: string;
    openMenu: string;
  };
  hero: {
    sheet: string;
    sheetProject: string;
    wib: string;
    srHeading: string;
    paragraphs: string;
    ctaPrimary: string;
    ctaPrimaryWa: string;
    ctaSecondary: string;
    dimensionNote: string;
    responsiveBadge: string;
    stats: { value: string; label: string }[];
  };
  features: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    intro: string;
    items: { title: string; desc: string; meta: string }[];
  };
  pricing: {
    eyebrow: string;
    heading: string;
    intro: string;
    note: string;
    compareAll: string;
    includedLabel: string;
    included: string[];
    buildCost: string;
    maintain: string;
    renewal: string;
    includedShort: string;
    perMonth: string;
    perYear: string;
    popular: string;
    orderWa: string;
    fullFeatures: string;
    orderWaMessage: (name: string, build: string) => string;
    footnote: string;
    customCta: string;
  };
  chooser: {
    question: string;
    groupLabel: string;
    unicornNote: string;
    status: (name: string, count: number, from: string) => string;
    clear: string;
  };
  comparison: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    intro: (rows: number, plans: number) => string;
    showPlans: string;
    clickHint: string;
    showAll: string;
    showing: (visible: number, total: number) => string;
    allHidden: string;
    showAllPlans: string;
    featurePerPlan: string;
    popular: string;
    build: string;
    included: string;
    notIncluded: string;
    order: string;
    orderShort: string;
    detail: string;
    orderWaMessage: (name: string, build: string) => string;
    footnote: string;
    consultFree: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    intro: string;
    steps: { title: string; desc: string }[];
  };
  clients: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    intro: (count: number) => string;
    viewAll: string;
    viewCases: string;
    countNote: (shown: number, total: number) => string;
    clickNewTab: string;
  };
  faq: { q: string; a: string }[];
  faqSection: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    intro: string;
    askDirectly: string;
    waMessage: string;
  };
  brandstrip: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    intro: string;
    logotype: string;
    logoAlt: string;
    logoWhiteAlt: string;
    logoCaption: string;
    palette: string;
    swatches: { name: string; note: string }[];
    typography: string;
    monoCaption: string;
    sansCaption: string;
  };
  cta: {
    eyebrow: string;
    heading: string;
    headingMuted: string;
    waCta: string;
    waMessage: string;
    response: string;
  };
  footer: {
    tagline: string;
    index: string;
    kontak: string;
    links: { href: string; label: string }[];
    addressLabel: string;
    copyright: string;
    privacy: string;
    terms: string;
    doc: string;
  };
  common: { backHome: string; home: string };
  notfound: {
    title: string;
    doc: string;
    notRegistered: string;
    status: string;
    eyebrow: string;
    body: string;
    backHome: string;
    askDirectly: string;
    waMessage: string;
    archive: string;
    docCount: (n: number) => string;
    notFound2: string;
    whatsapp: string;
  };
};

const id: UIStrings = {
  brand: {
    wordmark: "MainWeb",
    arialabel: "mainweb.id, beranda",
    logoAlt: "mainweb.id, jasa pembuatan website",
  },
  nav: {
    items: [
      { href: "/#keunggulan", label: "Keunggulan" },
      { href: "/#paket", label: "Paket" },
      { href: "/#perbandingan", label: "Perbandingan" },
      { href: "/#proses", label: "Cara Kerja" },
      { href: "/klien", label: "Klien" },
      { href: "/#faq", label: "FAQ" },
    ],
    cta: "Konsultasi",
    ctaMobile: "Konsultasi Gratis",
    waMessage: "Halo mainweb.id, saya ingin konsultasi pembuatan website.",
    waFloating: "Halo mainweb.id, saya mau konsultasi soal pembuatan website.",
    openMenu: "Buka menu",
  },
  hero: {
    sheet: "Lembar kerja",
    sheetProject: "proyek web Anda",
    wib: "WIB",
    srHeading:
      "Jasa pembuatan website profesional, mulai Rp 1,5 jt, harga tertulis di muka.",
    paragraphs:
      "Lima belas paket dengan semua biaya tertulis di muka, dari landing page dan company profile sampai platform enterprise. Termasuk paket Startup untuk startup berpendanaan dan paket Unicorn untuk sistem yang berjalan sebagai infrastruktur bisnis. Konsultasi gratis, tanpa komitmen apa pun.",
    ctaPrimary: "Konsultasi gratis via WhatsApp",
    ctaPrimaryWa: "Halo mainweb.id, saya ingin konsultasi gratis untuk website saya.",
    ctaSecondary: "Lihat 12 harga paket",
    dimensionNote: "Dikerjakan tangan, diukur berulang: 6 tahap dari brief hingga rilis",
    responsiveBadge: "Uji responsif",
    stats: [
      { value: "31", label: "Situs klien sudah tayang" },
      { value: "Rp 1,5 jt", label: "Paket termurah, semua biaya terbuka" },
      { value: "0", label: "Template dipakai ulang" },
      { value: "Gratis", label: "Konsultasi awal via WhatsApp" },
    ],
  },
  features: {
    eyebrow: "Keunggulan",
    heading: "Yang selalu kami kerjakan.",
    headingMuted: "Enam hal, di setiap proyek, tanpa kecuali.",
    intro: "Semuanya bisa Anda periksa sendiri sebelum memesan, bukan cuma dibaca di halaman ini.",
    items: [
      { title: "Jadwal jelas sejak hari pertama", desc: "Timeline di setiap fase, dari blueprint sampai peluncuran.", meta: "Jadwal" },
      { title: "Desain responsif, diuji betulan", desc: "Desktop, tablet, dan smartphone. Tipografi serta spasi menyesuaikan tiap layar.", meta: "Desain" },
      { title: "Ringan dan ramah pencarian", desc: "Core Web Vitals hijau dan struktur konten siap mesin pencari sejak awal.", meta: "Performa" },
      { title: "Anda bisa ubah sendiri", desc: "CMS lengkap untuk mengganti konten kapan saja, tanpa menyentuh kode.", meta: "CMS" },
      { title: "Tim yang sudah lama di lapangan", desc: "Developer dan desainer yang menangani berbagai industri, dari UMKM sampai korporasi.", meta: "Tim" },
      { title: "Konsultasi dulu, bayar kemudian", desc: "Kami petakan solusinya lebih dulu, baru Anda putuskan.", meta: "Gratis" },
    ],
  },
  pricing: {
    eyebrow: "Tarif",
    heading: "Pilih website sesuai kebutuhan bisnis Anda",
    intro: "Tidak perlu memahami teknologi. Pilih berdasarkan kondisi usaha atau perusahaan Anda.",
    note: "Lima belas paket, semua biaya tertulis di muka: pembuatan dibayar di awal, maintain tiap bulan, perpanjangan tahunan agar situs tetap online.",
    compareAll: "Bandingkan semua paket",
    includedLabel: "Termasuk semua paket:",
    included: ["SSL (https)", "Desain responsif", "SEO dasar", "Google Analytics"],
    buildCost: "biaya pembuatan",
    maintain: "Maintain",
    renewal: "Perpanjangan",
    includedShort: "Termasuk",
    perMonth: "/bln",
    perYear: "/th",
    popular: "Populer",
    orderWa: "Pesan via WhatsApp",
    fullFeatures: "Fitur lengkap",
    orderWaMessage: (name, build) => `Halo mainweb.id, saya tertarik dengan paket ${name} (${build}).`,
    footnote:
      "* Basic: maintain termasuk maks. 1 bulan pertama. Semua paket termasuk SSL, desain responsif & SEO dasar. Unicorn: sistem skala besar dikerjakan bersama sesuai kesepakatan operasional.",
    customCta: "Butuh custom? Konsultasi gratis",
  },
  chooser: {
    question: "Bisnis saya masuk kategori mana?",
    groupLabel: "Pilih kategori berdasarkan kondisi bisnis Anda",
    unicornNote: "Sistem sebagai infrastruktur bisnis · 3 paket",
    status: (name, count, from) => `Kategori ${name}: ${count} paket, mulai ${from}.`,
    clear: "Hapus pilihan",
  },
  comparison: {
    eyebrow: "Perbandingan",
    heading: "Bandingkan semua paket.",
    headingMuted: "Baris per baris.",
    intro: (rows, plans) => `${rows} baris spesifikasi, ${plans} paket. Sembunyikan baris yang tidak relevan, lalu bandingkan sisanya.`,
    showPlans: "Tampilkan paket",
    clickHint: "klik untuk sembunyikan / tampilkan",
    showAll: "Tampilkan semua",
    showing: (visible, total) => `Menampilkan ${visible} dari ${total} paket`,
    allHidden: "Semua paket sedang disembunyikan",
    showAllPlans: "Tampilkan semua paket",
    featurePerPlan: "Fitur / Paket",
    popular: "Populer",
    build: "pembuatan",
    included: "termasuk",
    notIncluded: "tidak termasuk",
    order: "Pesan",
    orderShort: "Pesan",
    detail: "Detail",
    orderWaMessage: (name, build) => `Halo mainweb.id, saya tertarik dengan paket ${name} (${build}).`,
    footnote: "* Maintain paket Basic termasuk hingga 1 bulan pertama. Spesifikasi dapat disesuaikan;",
    consultFree: "konsultasikan gratis",
  },
  process: {
    eyebrow: "Cara kerja",
    heading: "Dari obrolan pertama sampai situs tayang.",
    headingMuted: "Enam langkah, satu alur.",
    intro: "Alurnya sama untuk paket Basic maupun Pro Max; yang berubah hanya skalanya.",
    steps: [
      { title: "Konsultasi ide", desc: "Ceritakan tujuan bisnis Anda. Kami petakan kebutuhannya, tanpa biaya." },
      { title: "Paket & domain", desc: "Tentukan tingkatan paket dan nama domain yang paling menguntungkan." },
      { title: "Pemesanan", desc: "Konfirmasi ruang lingkup dan pembayaran, lalu pengerjaan dijadwalkan." },
      { title: "Penyerahan konten", desc: "Kirim teks, foto, dan aset brand. Kami menatanya jadi halaman." },
      { title: "Pengerjaan", desc: "Desain, kode, dan pengujian berjalan dalam satu alur." },
      { title: "Peluncuran", desc: "Situs tayang, langsung dipantau, maintenance pun dimulai." },
    ],
  },
  clients: {
    eyebrow: "Klien",
    heading: "Situs yang sudah kami rilis.",
    headingMuted: "Klik untuk membukanya.",
    intro: (count) => `Di sini kami tampilkan ${count} pilihan, dari toko online sampai situs monitoring. Logo diambil dari situsnya sendiri.`,
    viewAll: "Lihat semua klien",
    viewCases: "Lihat studi kasus",
    countNote: (shown, total) => `${shown} dari ${total} situs, klik logo untuk membuka di tab baru`,
    clickNewTab: "klik logo untuk membuka di tab baru",
  },
  faq: [
    { q: "Mengapa bisnis saya harus punya website?", a: "Kebanyakan pelanggan baru mengecek Anda lewat Google sebelum menelepon. Kalau bisnis Anda tidak muncul di sana, yang mereka temukan adalah kompetitor." },
    { q: "Apa bedanya paket Basic dengan yang lain?", a: "Basic adalah landing page satu halaman, paling hemat, dan biaya maintain sudah termasuk untuk bulan pertama. Paket di atasnya menambah jumlah halaman, CMS, dan maintenance bulanan." },
    { q: "Apa itu biaya maintain dan perpanjangan?", a: "Maintain adalah layanan bulanan: pembaruan konten, monitoring, dan dukungan teknis. Perpanjangan adalah biaya tahunan agar website tetap online dan selalu mendapat pembaruan keamanan." },
    { q: "Berapa lama proses pembuatan website?", a: "Tergantung kompleksitas. Landing page bisa selesai dalam hitungan hari; platform dengan fitur custom memerlukan waktu lebih panjang. Estimasi detail diberikan saat konsultasi gratis." },
    { q: "Apakah saya bisa membawa desain sendiri?", a: "Tentu. Bawa referensi, mockup, atau identitas brand Anda; tim kami menerapkannya apa adanya, atau menyempurnakannya kalau diminta." },
    { q: "Bagaimana jika terjadi kendala setelah tayang?", a: "Semua paket punya dukungan teknis. Paket dengan maintenance bulanan dibantu terus selama masa kontrak; Basic dilayani penuh selama bulan pertama." },
  ],
  faqSection: {
    eyebrow: "FAQ",
    heading: "Pertanyaan yang paling sering masuk.",
    headingMuted: "Seputar jasa pembuatan website.",
    intro: "Belum ketemu jawabannya? Tim kami merespons cepat di jam kerja.",
    askDirectly: "Tanya langsung",
    waMessage: "Halo mainweb.id, saya punya pertanyaan seputar jasa pembuatan website.",
  },
  brandstrip: {
    eyebrow: "Identitas",
    heading: "Satu identitas, semua halaman.",
    headingMuted: "Warna dan hurufnya diambil dari logo.",
    intro: "Warna dan tipografi di bawah diambil langsung dari logo utama mainweb.id, lalu dipakai konsisten di setiap halaman.",
    logotype: "Logotype / logo.png",
    logoAlt: "Logo utama mainweb.id",
    logoWhiteAlt: "Logo mainweb.id versi putih di latar gelap",
    logoCaption: "Dua varian, orisinal dan putih, 1670×942 px, RGBA",
    palette: "Palet / hasil ekstraksi logo",
    swatches: [
      { name: "Brand utama", note: "diekstrak dari logo" },
      { name: "Sky aksen", note: "ekstraksi logo" },
      { name: "Violet aksen", note: "ekstraksi logo" },
      { name: "Ink", note: "teks & panel gelap" },
      { name: "Paper", note: "latar halaman" },
    ],
    typography: "Tipografi",
    monoCaption: "IBM Plex Mono, harga & metadata",
    sansCaption: "IBM Plex Sans untuk body teks.",
  },
  cta: {
    eyebrow: "Mulai",
    heading: "Tinggal pilih paketnya.",
    headingMuted: "Kami yang mengerjakan sisanya.",
    waCta: "Konsultasi via WhatsApp",
    waMessage: "Halo mainweb.id, saya siap mulai membangun website bisnis saya!",
    response: "Respons di bawah 1×24 jam, tanpa komitmen",
  },
  footer: {
    tagline: "Jasa pembuatan & pengembangan website profesional untuk bisnis Anda.",
    index: "Indeks",
    kontak: "Kontak",
    links: [
      { href: "/#keunggulan", label: "Keunggulan" },
      { href: "/#paket", label: "Tarif" },
      { href: "/#perbandingan", label: "Perbandingan" },
      { href: "/#proses", label: "Cara kerja" },
      { href: "/klien", label: "Klien" },
      { href: "/studi-kasus", label: "Studi kasus" },
      { href: "/#faq", label: "FAQ" },
    ],
    addressLabel: "",
    copyright: "hak cipta dilindungi",
    privacy: "Kebijakan privasi",
    terms: "Syarat layanan",
    doc: "dibuat di Indonesia",
  },
  common: { backHome: "Beranda", home: "Beranda" },
  notfound: {
    title: "404: Halaman tidak ditemukan",
    doc: "DOC · ERROR",
    notRegistered: "HALAMAN TIDAK TERDAFTAR",
    status: "STATUS 404",
    eyebrow: "Dokumen tidak ditemukan",
    body: "Halaman yang Anda cari mungkin sudah dipindah atau memang belum pernah dibuat. Yang tersedia ada di bawah.",
    backHome: "Kembali ke beranda",
    askDirectly: "Tanya kami langsung",
    waMessage: "Halo mainweb.id, saya tidak menemukan halaman yang saya cari.",
    archive: "Arsip paket",
    docCount: (n) => `${n} dokumen tersedia`,
    notFound2: "Tidak menemukan yang Anda cari? Bicarakan langsung dengan kami lewat",
    whatsapp: "WhatsApp",
  },
};

const en: UIStrings = {
  brand: {
    wordmark: "MainWeb",
    arialabel: "mainweb.id, home",
    logoAlt: "mainweb.id, professional website services",
  },
  nav: {
    items: [
      { href: "/#keunggulan", label: "Why us" },
      { href: "/#paket", label: "Packages" },
      { href: "/#perbandingan", label: "Comparison" },
      { href: "/#proses", label: "How it works" },
      { href: "/klien", label: "Clients" },
      { href: "/#faq", label: "FAQ" },
    ],
    cta: "Consult",
    ctaMobile: "Free consultation",
    waMessage: "Hello mainweb.id, I'd like a website consultation.",
    waFloating: "Hello mainweb.id, I'd like a website consultation.",
    openMenu: "Open menu",
  },
  hero: {
    sheet: "Worksheet",
    sheetProject: "for your web project",
    wib: "WIB",
    srHeading:
      "Professional website services, starting at Rp 1.5M, with costs stated up front.",
    paragraphs:
      "Fifteen packages with every cost stated up front, from landing pages and company profiles to enterprise platforms. Including a Startup package for funded startups and a Unicorn package for systems that run as business infrastructure. Free consultation, no commitment of any kind.",
    ctaPrimary: "Free consultation via WhatsApp",
    ctaPrimaryWa: "Hello mainweb.id, I'd like a free consultation for my website.",
    ctaSecondary: "See 12 package prices",
    dimensionNote: "Hand-built, measured repeatedly: 6 stages from brief to launch",
    responsiveBadge: "Responsive test",
    stats: [
      { value: "31", label: "Client sites already live" },
      { value: "Rp 1.5M", label: "Cheapest package, all costs open" },
      { value: "0", label: "Templates reused" },
      { value: "Free", label: "Initial consultation via WhatsApp" },
    ],
  },
  features: {
    eyebrow: "Why us",
    heading: "What we always do.",
    headingMuted: "Six things, on every project, no exceptions.",
    intro: "You can verify all of it yourself before ordering, not just read it on this page.",
    items: [
      { title: "A clear schedule from day one", desc: "A timeline for every phase, from blueprint to launch.", meta: "Schedule" },
      { title: "Responsive design, genuinely tested", desc: "Desktop, tablet, and smartphone. Typography and spacing adapt to every screen.", meta: "Design" },
      { title: "Lightweight and search-friendly", desc: "Green Core Web Vitals and content structure search-ready from the start.", meta: "Performance" },
      { title: "You can edit it yourself", desc: "A full CMS to change content anytime, without touching code.", meta: "CMS" },
      { title: "A team that's been in the field", desc: "Developers and designers handling a range of industries, from small businesses to corporations.", meta: "Team" },
      { title: "Consult first, pay later", desc: "We map out the solution first, then you decide.", meta: "Free" },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Choose a website that fits your business needs",
    intro: "No need to understand technology. Choose based on the condition of your business or company.",
    note: "Fifteen packages, every cost stated up front: build paid upfront, monthly maintenance, annual renewal to keep the site online.",
    compareAll: "Compare all packages",
    includedLabel: "Included in every package:",
    included: ["SSL (https)", "Responsive design", "Basic SEO", "Google Analytics"],
    buildCost: "build cost",
    maintain: "Maintenance",
    renewal: "Renewal",
    includedShort: "Included",
    perMonth: "/mo",
    perYear: "/yr",
    popular: "Popular",
    orderWa: "Order via WhatsApp",
    fullFeatures: "Full features",
    orderWaMessage: (name, build) => `Hello mainweb.id, I'm interested in the ${name} package (${build}).`,
    footnote:
      "* Basic: maintenance included for the first month. Every package includes SSL, responsive design & basic SEO. Unicorn: large-scale systems are built together per operational agreement.",
    customCta: "Need something custom? Free consultation",
  },
  chooser: {
    question: "Which category does my business fall into?",
    groupLabel: "Choose a category based on your business condition",
    unicornNote: "Systems as business infrastructure · 3 packages",
    status: (name, count, from) => `Category ${name}: ${count} packages, starting at ${from}.`,
    clear: "Clear selection",
  },
  comparison: {
    eyebrow: "Comparison",
    heading: "Compare every package.",
    headingMuted: "Line by line.",
    intro: (rows, plans) => `${rows} specification rows, ${plans} packages. Hide the rows that aren't relevant, then compare the rest.`,
    showPlans: "Show packages",
    clickHint: "click to hide / show",
    showAll: "Show all",
    showing: (visible, total) => `Showing ${visible} of ${total} packages`,
    allHidden: "All packages are hidden",
    showAllPlans: "Show all packages",
    featurePerPlan: "Feature / Package",
    popular: "Popular",
    build: "build",
    included: "included",
    notIncluded: "not included",
    order: "Order",
    orderShort: "Order",
    detail: "Detail",
    orderWaMessage: (name, build) => `Hello mainweb.id, I'm interested in the ${name} package (${build}).`,
    footnote: "* Basic maintenance is included for the first month. Specifications can be adjusted;",
    consultFree: "consult for free",
  },
  process: {
    eyebrow: "How it works",
    heading: "From the first conversation to a live site.",
    headingMuted: "Six steps, one flow.",
    intro: "The flow is the same for the Basic and Pro Max packages; only the scale changes.",
    steps: [
      { title: "Idea consultation", desc: "Tell us your business goals. We map the needs, at no cost." },
      { title: "Package & domain", desc: "Decide the package tier and the most advantageous domain name." },
      { title: "Ordering", desc: "Confirm scope and payment, then the work is scheduled." },
      { title: "Content handover", desc: "Send text, photos, and brand assets. We arrange them into pages." },
      { title: "Production", desc: "Design, code, and testing run in a single flow." },
      { title: "Launch", desc: "The site goes live, is monitored right away, and maintenance begins." },
    ],
  },
  clients: {
    eyebrow: "Clients",
    heading: "Sites we've already launched.",
    headingMuted: "Click to open them.",
    intro: (count) => `Here we show ${count} selections, from online stores to monitoring sites. Logos are taken from the sites themselves.`,
    viewAll: "See all clients",
    viewCases: "See case studies",
    countNote: (shown, total) => `${shown} of ${total} sites, click a logo to open in a new tab`,
    clickNewTab: "click a logo to open in a new tab",
  },
  faq: [
    { q: "Why does my business need a website?", a: "Most new customers check you on Google before calling. If your business doesn't show up there, what they find is your competitor." },
    { q: "How is the Basic package different from the rest?", a: "Basic is a one-page landing site, the most economical, and maintenance is included for the first month. Higher packages add more pages, a CMS, and monthly maintenance." },
    { q: "What are the maintenance and renewal fees?", a: "Maintenance is a monthly service: content updates, monitoring, and technical support. Renewal is an annual fee to keep the website online and always receiving security updates." },
    { q: "How long does it take to build a website?", a: "It depends on complexity. A landing page can be done in days; a platform with custom features takes longer. A detailed estimate is given during the free consultation." },
    { q: "Can I bring my own design?", a: "Of course. Bring references, mockups, or your brand identity; our team applies them as-is, or refines them if you ask." },
    { q: "What if there's an issue after launch?", a: "Every package has technical support. Packages with monthly maintenance are assisted throughout the contract; Basic is fully served during the first month." },
  ],
  faqSection: {
    eyebrow: "FAQ",
    heading: "The questions we get most often.",
    headingMuted: "About our website services.",
    intro: "Can't find the answer? Our team responds quickly during business hours.",
    askDirectly: "Ask us directly",
    waMessage: "Hello mainweb.id, I have a question about your website services.",
  },
  brandstrip: {
    eyebrow: "Identity",
    heading: "One identity, every page.",
    headingMuted: "Colors and type taken from the logo.",
    intro: "The colors and typography below come straight from the mainweb.id logo, then used consistently on every page.",
    logotype: "Logotype / logo.png",
    logoAlt: "Main mainweb.id logo",
    logoWhiteAlt: "mainweb.id logo in white on a dark background",
    logoCaption: "Two variants, original and white, 1670×942 px, RGBA",
    palette: "Palette / extracted from the logo",
    swatches: [
      { name: "Primary brand", note: "extracted from logo" },
      { name: "Sky accent", note: "logo extraction" },
      { name: "Violet accent", note: "logo extraction" },
      { name: "Ink", note: "text & dark panels" },
      { name: "Paper", note: "page background" },
    ],
    typography: "Typography",
    monoCaption: "IBM Plex Mono, prices & metadata",
    sansCaption: "IBM Plex Sans for body text.",
  },
  cta: {
    eyebrow: "Get started",
    heading: "Just pick a package.",
    headingMuted: "We'll handle the rest.",
    waCta: "Consult via WhatsApp",
    waMessage: "Hello mainweb.id, I'm ready to start building my business website!",
    response: "Response within 1×24 hours, no commitment",
  },
  footer: {
    tagline: "Professional website building & development services for your business.",
    index: "Index",
    kontak: "Contact",
    links: [
      { href: "/#keunggulan", label: "Why us" },
      { href: "/#paket", label: "Pricing" },
      { href: "/#perbandingan", label: "Comparison" },
      { href: "/#proses", label: "How it works" },
      { href: "/klien", label: "Clients" },
      { href: "/studi-kasus", label: "Case studies" },
      { href: "/#faq", label: "FAQ" },
    ],
    addressLabel: "",
    copyright: "all rights reserved",
    privacy: "Privacy policy",
    terms: "Terms of service",
    doc: "made in Indonesia",
  },
  common: { backHome: "Home", home: "Home" },
  notfound: {
    title: "404: Page not found",
    doc: "DOC · ERROR",
    notRegistered: "PAGE NOT REGISTERED",
    status: "STATUS 404",
    eyebrow: "Document not found",
    body: "The page you're looking for may have been moved or never existed. What's available is below.",
    backHome: "Back to home",
    askDirectly: "Ask us directly",
    waMessage: "Hello mainweb.id, I couldn't find the page I was looking for.",
    archive: "Package archive",
    docCount: (n) => `${n} documents available`,
    notFound2: "Can't find what you're looking for? Talk to us directly via",
    whatsapp: "WhatsApp",
  },
};

export const ui: Record<Locale, UIStrings> = { id, en };
