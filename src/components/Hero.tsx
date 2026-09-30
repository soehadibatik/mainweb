import { waLink } from "@/lib/site";
import ViewportDemo from "@/components/ViewportDemo";
import LiveClock from "@/components/LiveClock";
import CoderHeading from "@/components/CoderHeading";

const stats = [ // table-like dl; borders handled per-cell below
  { value: "31", label: "Situs klien sudah tayang" },
  { value: "Rp 1,5 jt", label: "Paket termurah, semua biaya terbuka" },
  { value: "0", label: "Template dipakai ulang" },
  { value: "Gratis", label: "Konsultasi awal via WhatsApp" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-14 text-ink-950">
      {/* Lapisan latar: grid drafting halus */}
      <div aria-hidden className="bg-grid-light pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bidang biru — membelah kontainer dari 52% ke tepi kanan layar */}
        <div
          aria-hidden
          className="absolute inset-y-0 right-[-50vw] left-[41.4%] hidden border-l border-brand-600/25 bg-brand-50 lg:block"
        />

        {/* Title block — pembuka lembar kerja teknis, ditutup pita penggaris */}
        <div className="relative border-b border-ink-950/70">
          <div className="flex flex-wrap items-stretch justify-between gap-x-10 gap-y-0 py-3">
            <span className="flex items-center gap-3 py-1 text-[13px] text-ink-900/70">
              <svg width="30" height="14" viewBox="0 0 30 14" fill="none" aria-hidden className="shrink-0 text-brand-600">
                <path d="M0 7h11M11 1l6 6-6 6M17 7h13" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span className="font-medium text-ink-950">Lembar kerja</span>
              <span className="h-3.5 w-px bg-ink-900/20" aria-hidden />
              <span>proyek web Anda</span>
            </span>
            <span className="hidden items-center py-1 text-[13px] tabular-nums text-ink-900/70 md:flex">
              <LiveClock />
              <span className="ml-1.5 text-ink-900/40">WIB</span>
            </span>
          </div>
          <div aria-hidden className="ruler-x h-2 w-full" />
        </div>

        {/* Judul — membulat penuh lebar, melewati tepi bidang biru */}
        <div className="relative pt-9 sm:pt-12 lg:pt-12">
          <h1 className="font-display text-[clamp(2rem,7.4vw,5.5rem)] leading-[0.95] font-black tracking-[-0.04em] text-balance">
            {/* Keyword SEO lengkap untuk mesin pencari & screen reader, tak tampak visual */}
            <span className="sr-only">
              Jasa pembuatan website profesional, mulai Rp 1,5 jt, harga
              tertulis di muka.
            </span>
            {/* Versi visual — baris terminal coder, diketik berulang tempo santai */}
            <CoderHeading />
          </h1>
        </div>

        {/* Isi — kolom teks sempit di kiri, bidang demo menabrak ke bawah kanan */}
        <div className="relative mt-10 flex flex-col gap-10 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="order-first lg:order-none lg:col-span-5 lg:pr-6">
            <p
              className="fade-rise order-last max-w-[46ch] text-lg leading-relaxed font-light text-ink-900/70 lg:order-none"
              style={{ animationDelay: "920ms" }}
            >
              Sembilan paket dengan semua biaya tertulis di muka, dari
              landing page dan company profile sampai toko online dan platform
              enterprise. Konsultasi gratis, tanpa komitmen apa pun.
            </p>

            <div
              className="fade-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "1020ms" }}
            >
              <a
                href={waLink("Halo mainweb.id, saya ingin konsultasi gratis untuk website saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center justify-center gap-2.5 bg-brand-600 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Konsultasi gratis via WhatsApp
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" aria-hidden className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#paket"
                className="inline-flex min-h-11 items-center justify-center border border-ink-900/25 px-7 py-4 text-sm font-semibold text-ink-950 transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-950"
              >
                Lihat 9 harga paket
              </a>
            </div>

            {/* Catatan dimensi — satu label terukur, cara kerja studio, bukan dekorasi mono */}
            <p
              className="fade-rise mt-8 hidden items-center gap-2.5 text-[13px] text-ink-900/70 sm:flex"
              style={{ animationDelay: "1060ms" }}
            >
              <svg width="34" height="8" viewBox="0 0 34 8" fill="none" aria-hidden className="shrink-0 text-brand-600">
                <path d="M0.5 1v6M33.5 1v6M0.5 4h33" stroke="currentColor" strokeWidth="1" />
              </svg>
              Dikerjakan tangan, diukur berulang: 9 tahap dari brief hingga rilis
            </p>

            {/* Tabel ukuran versi kolom — mengisi kaki kolom kiri di desktop,
                bukan menyisakan ruang kosong di bawah catatan dimensi */}
            <dl
              className="fade-rise relative mt-10 grid grid-cols-2 border-t border-ink-950/70 lg:mt-12 lg:grid-cols-1"
              style={{ animationDelay: "1220ms" }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative flex flex-col border-r border-b border-line px-5 py-5 first:border-l even:border-r-0 lg:flex-row lg:items-baseline lg:justify-between lg:gap-6 lg:border-r-0 lg:px-0 lg:py-4 lg:first:border-l-0"
                >
                  <dd
                    className={`order-1 font-display font-extrabold tracking-tight text-ink-950 lg:order-none ${
                      s.value.length > 6 ? "text-2xl sm:text-3xl" : "text-3xl"
                    }`}
                  >
                    {s.value}
                  </dd>
                  <dt className="order-2 mt-1.5 text-sm text-ink-900/70 lg:mt-0 lg:text-right">
                    {s.label}
                  </dt>
                  <span
                    aria-hidden
                    className="mt-3 block h-0.5 w-0 bg-brand-600 transition-all duration-500 group-hover:w-8 lg:hidden"
                  />
                </div>
              ))}
            </dl>
          </div>

          <div
            className="fade-rise relative z-10 order-3 lg:order-none lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:-ml-4"
            style={{ animationDelay: "1080ms" }}
          >
            {/* Nameplate — badge pendek di sudut, persis di atas tepi handle drag */}
            <span className="absolute -top-3.5 -left-3 z-20 flex items-center gap-1.5 bg-brand-600 px-2.5 py-1.5 text-[11px] font-semibold text-white lg:-left-5">
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" aria-hidden>
                <path d="M3.5 1.5 1 5l2.5 3.5M7.5 1.5 10 5 7.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Uji responsif
            </span>
            <ViewportDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
