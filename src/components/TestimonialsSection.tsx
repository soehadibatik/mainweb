import { type Locale } from "@/lib/i18n/config";

const testimonials = [
  {
    name: "Hadi Santoso",
    role: "Owner & Founder",
    company: "Batik Soehadi (batiksoehadi.com)",
    content: {
      id: "Sebelumnya katalog online kami berat dan lambat saat diakses lewat HP pelanggan. Setelah didesain ulang oleh tim MainWeb dengan Next.js, loading langsung instan < 0.8 detik. Pelanggan grosir kami jauh lebih nyaman pesan via WhatsApp.",
      en: "Previously our online catalog was heavy and slow on mobile. After MainWeb rebuilt it with Next.js, loading is instantaneous under 0.8s. Our wholesale clients love ordering through WhatsApp now.",
    },
    metric: "100% PageSpeed Score",
  },
  {
    name: "Arif Kurniawan",
    role: "Kepala Koordinator",
    company: "CISC Solo Raya (ciscsolo.com)",
    content: {
      id: "MainWeb mengeksekusi website fans club dan katalog merchandise kami dengan sangat presisi. Desainnya modern, responsif di HP, dan memudahkan anggota melihat jadwal nobar dan pesan jersey.",
      en: "MainWeb executed our fan club and merchandise catalog with immense precision. Modern design, crisp mobile responsiveness, and easy order flow for our members.",
    },
    metric: "3x Traffic Organik",
  },
  {
    name: "Rina Wijaya",
    role: "Operational Lead",
    company: "Daster Murah Grosir (dastermurah.com)",
    content: {
      id: "Alur pemesanan langsung terintegrasi otomatis ke WhatsApp admin kami. Tidak perlu ribet setting plugin e-commerce berat, konversi penjualan kami justru naik signifikan karena prosesnya tanpa hambatan.",
      en: "The checkout flow hooks directly into our WhatsApp admins without bloated plugins. Our sales conversion skyrocketed because the buying experience is frictionless.",
    },
    metric: "0 Biaya Maintenance Hosting Bulanan",
  },
];

const guarantees = [
  {
    title: { id: "Skor PageSpeed 95+ Dijamin", en: "Guaranteed 95+ PageSpeed" },
    desc: {
      id: "Website Anda lolos uji Google Core Web Vitals dengan ranking performa tertinggi.",
      en: "Pass Google Core Web Vitals with flawless top-tier performance rankings.",
    },
    icon: "⚡",
  },
  {
    title: { id: "Bebas Biaya Server Berat", en: "Zero Server Overkill" },
    desc: {
      id: "Arsitektur statis Next.js & Edge CDN gratis selamanya tanpa takut server jebol.",
      en: "Static Next.js & Edge CDN architecture with zero server downtime worries.",
    },
    icon: "🛡️",
  },
  {
    title: { id: "100% Kode Milik Anda", en: "100% Code Ownership" },
    desc: {
      id: "Akses penuh ke repositori Git & aset, tanpa terkunci lisensi tema tahunan.",
      en: "Full Git repo & asset ownership, never locked into recurring theme subscriptions.",
    },
    icon: "💎",
  },
  {
    title: { id: "Pendampingan & Garansi Tayang", en: "Launch Assurance" },
    desc: {
      id: "Dukungan penuh hingga domain kustom, SSL, dan Google Search Console aktif.",
      en: "End-to-end guidance until your custom domain, SSL, and Search Console go live.",
    },
    icon: "🤝",
  },
];

export default function TestimonialsSection({ lang }: { lang: Locale }) {
  const isId = lang === "id";

  return (
    <section className="border-b border-line bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Guarantees Strip */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g) => (
            <div
              key={g.title.id}
              className="border border-line bg-paper p-6 transition-all hover:border-brand-600/50"
            >
              <span className="text-2xl" aria-hidden>{g.icon}</span>
              <h4 className="mt-3 font-display text-base font-bold text-ink-950">
                {isId ? g.title.id : g.title.en}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-ink-900/65">
                {isId ? g.desc.id : g.desc.en}
              </p>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-slash" aria-hidden>{"// "}</span>
              {isId ? "Kepuasan Klien & Hasil Nyata" : "Real Client Stories & Impact"}
            </p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-balance text-ink-950 sm:text-5xl">
              {isId ? "Dipercaya Bisnis & Brand " : "Trusted by Modern Brands "}
              <span className="text-ink-900/40">
                {isId ? "Untuk Go-Digital" : "to Scale Online"}
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-900/60">
            {isId
              ? "Ulasan nyata dari pengusaha, kreator, dan manajer komunitas yang merasakan lonjakan kecepatan dan penjualan."
              : "Unfiltered reviews from founders and business leaders experiencing tangible speed and sales growth."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between border border-line bg-paper p-8 transition-all hover:border-ink-950/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  {"★".repeat(5)}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-ink-900/80 italic">
                  &ldquo;{isId ? t.content.id : t.content.en}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 border-t border-line/60 pt-4">
                <p className="font-display text-sm font-bold text-ink-950">{t.name}</p>
                <p className="text-xs text-ink-900/60">{t.role}</p>
                <p className="font-mono text-[11px] font-medium text-brand-600 mt-0.5">{t.company}</p>
                <div className="mt-3 inline-block rounded bg-white px-2 py-1 font-mono text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                  ✓ {t.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
