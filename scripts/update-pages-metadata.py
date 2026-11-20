import re

path = "webmainweb/src/lib/i18n/pages.ts"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Define comprehensive 15-plan metadata for Indonesian
id_paket_special = """  paketSpecial: {
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
  },"""

# Define comprehensive 15-plan metadata for English
en_paket_special = """  paketSpecial: {
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
  },"""

# Replace in content using regex
# First ID paketSpecial
content = re.sub(r"paketSpecial:\s*\{[\s\S]*?\},(\s*klien:)", id_paket_special + r"\1", content, count=1)

# Second EN paketSpecial
content = re.sub(r"paketSpecial:\s*\{[\s\S]*?\},(\s*klien:)", en_paket_special + r"\1", content, count=1)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated pages.ts successfully.")
