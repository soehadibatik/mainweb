import type { Locale } from "@/lib/i18n/config";

type StandardItem = {
  tag: string;
  title: string;
  desc: string;
  metric: string;
};

export default function BrandStrip({ lang }: { lang: Locale }) {
  const isId = lang === "id";

  const standards: StandardItem[] = isId
    ? [
        {
          tag: "Performa",
          title: "Next.js & React Modern",
          desc: "Website dibangun dengan framework modern tanpa plugin berat. Halaman terbuka instan dan ramah kuota pengunjung.",
          metric: "Bukan WordPress lambat",
        },
        {
          tag: "Keamanan",
          title: "HTTPS SSL & Proteksi Cloud",
          desc: "Sertifikat keamanan SSL otomatis terpasang aktif. Koneksi data terenkripsi dan bebas dari celah injeksi database.",
          metric: "Enkripsi 256-bit",
        },
        {
          tag: "Layar Ponsel",
          title: "Optimasi Nyaman Satu Tangan",
          desc: "Tata letak diuji pada layar ponsel 375px sampai 412px. Target sentuh tombol minimal 44px agar mudah dioperasikan.",
          metric: "Responsif 100%",
        },
        {
          tag: "Pencarian",
          title: "Struktur Siap Mesin Pencari",
          desc: "Heading terstruktur, schema JSON-LD resmi terdaftar, serta sitemap otomatis agar produk Anda mudah ditemukan di Google.",
          metric: "Google SEO Friendly",
        },
        {
          tag: "Penjualan",
          title: "Alur WhatsApp Sekali Klik",
          desc: "Tombol WhatsApp terhubung langsung dengan pesan otomatis yang rapi, memudahkan calon pembeli segera menghubungi admin.",
          metric: "Langsung ke admin",
        },
        {
          tag: "Kemandirian",
          title: "Kemudahan Kelola Mandiri",
          desc: "Dilengkapi panduan praktis untuk mengganti teks, foto, dan memperbarui informasi produk tanpa perlu keahlian koding.",
          metric: "Panduan pemakaian",
        },
      ]
    : [
        {
          tag: "Performance",
          title: "Modern Next.js & React",
          desc: "Built with a modern framework free of heavy plugin bloat. Pages load instantly and save mobile visitors data.",
          metric: "Zero legacy bloat",
        },
        {
          tag: "Security",
          title: "HTTPS SSL & Cloud Shield",
          desc: "Automated SSL certificates included. All connections are encrypted and shielded against malicious script injections.",
          metric: "256-bit encryption",
        },
        {
          tag: "Mobile First",
          title: "One-Hand Mobile Ergonomics",
          desc: "Tested thoroughly across 375px to 412px phone screens with comfortable 44px minimum tap targets.",
          metric: "100% responsive",
        },
        {
          tag: "Search Ready",
          title: "Search Engine Infrastructure",
          desc: "Semantic HTML, registered JSON-LD structured data, and automated sitemaps for Google crawler indexation.",
          metric: "Google SEO ready",
        },
        {
          tag: "Conversion",
          title: "Direct WhatsApp Flow",
          desc: "Streamlined WhatsApp connection with pre-formatted inquiry text, guiding prospects directly to your sales line.",
          metric: "Direct chat flow",
        },
        {
          tag: "Independence",
          title: "Easy Self-Management",
          desc: "Accompanied by straightforward guides to update text, photos, and catalogs without any programming knowledge.",
          metric: "Usage handbook",
        },
      ];

  return (
    <section className="border-b border-line py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div className="reveal-mask">
            <div className="reveal reveal-blur">
              <p className="eyebrow">
                <span className="eyebrow-slash" aria-hidden>{"// "}</span>
                {isId ? "STANDAR KUALITAS" : "ENGINEERING STANDARDS"}
              </p>
              <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-ink-950 sm:text-5xl">
                {isId ? "Standar teknis di setiap situs." : "Quality standards in every project."}{" "}
                <span className="text-ink-900/40">
                  {isId ? "Bukan sekadar tampilan, tapi fondasi jangka panjang." : "Beyond visuals, a lasting foundation."}
                </span>
              </h2>
            </div>
          </div>
          <p className="reveal reveal-d2 max-w-sm text-sm leading-relaxed text-ink-900/60">
            {isId
              ? "Enam fasilitas teknis yang disertakan pada setiap paket yang kami kerjakan, tanpa biaya tersembunyi."
              : "Six engineering foundations included with every package we deliver, with zero hidden costs."}
          </p>
        </div>

        <div className="stagger mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((item) => (
            <div
              key={item.title}
              className="reveal flex flex-col justify-between bg-paper p-7 sm:p-8 transition-colors hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-line pb-3">
                  <span className="font-mono text-[11px] font-semibold text-brand-600 uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="font-mono text-[10px] text-ink-900/50">
                    {item.metric}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
