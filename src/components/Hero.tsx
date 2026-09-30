import { waLink } from "@/lib/site";
import ViewportDemo from "@/components/ViewportDemo";
import LiveClock from "@/components/LiveClock";

const stats = [
  { value: "9", label: "Tingkatan paket" },
  { value: "100%", label: "Desain responsif" },
  { value: "0", label: "Template dipakai ulang" },
  { value: "GRATIS", label: "Konsultasi awal" },
];

const line1 = [
  { text: "Website", delay: "120ms" },
  { text: "bisnis", delay: "210ms" },
  { text: "Anda,", delay: "300ms" },
];

const line2 = [
  { text: "dibangun", delay: "390ms" },
  { text: "dengan", delay: "480ms" },
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
          className="absolute inset-y-0 right-[-50vw] left-[52%] hidden border-l border-brand-600/25 bg-brand-50 lg:block"
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
            <span className="flex items-center gap-2.5 py-1 text-[13px] text-ink-900/70">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              slot proyek dibuka
            </span>
            <span className="hidden items-center py-1 text-[13px] tabular-nums text-ink-900/70 md:flex">
              <LiveClock />
              <span className="ml-1.5 text-ink-900/40">WIB</span>
            </span>
          </div>
          <div aria-hidden className="ruler-x h-2 w-full" />
        </div>

        {/* Judul — membulat penuh lebar, melewati tepi bidang biru */}
        <div className="relative pt-12 sm:pt-16">
          <h1 className="font-display text-[clamp(2.25rem,7.4vw,6rem)] leading-[0.92] font-black tracking-[-0.045em] text-balance">
            <span className="word-mask"><span className="word-rise" style={{ animationDelay: line1[0].delay }}>{line1[0].text}</span></span>{" "}
            <span className="word-mask"><span className="word-rise" style={{ animationDelay: line1[1].delay }}>{line1[1].text}</span></span>{" "}
            <span className="word-mask"><span className="word-rise" style={{ animationDelay: line1[2].delay }}>{line1[2].text}</span></span>
            <br />
            <span className="word-mask"><span className="word-rise" style={{ animationDelay: line2[0].delay }}>{line2[0].text}</span></span>{" "}
            <span className="word-mask"><span className="word-rise" style={{ animationDelay: line2[1].delay }}>{line2[1].text}</span></span>{" "}
            <span className="word-mask">
              <span
                className="word-rise brand-wordmark"
                style={{ animationDelay: "570ms" }}
              >
                presisi.
              </span>
            </span>
          </h1>
        </div>

        {/* Isi — kolom teks sempit di kiri, bidang demo menabrak ke bawah kanan */}
        <div className="relative mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pr-6">
            <p
              className="fade-rise max-w-[46ch] text-lg leading-relaxed font-light text-ink-900/70"
              style={{ animationDelay: "720ms" }}
            >
              mainweb.id merancang dan membangun website untuk bisnis yang
              serius, dari landing page pertama hingga platform enterprise.
              Sembilan tingkatan paket, satu standar kualitas.
            </p>

            <div
              className="fade-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "820ms" }}
            >
              <a
                href={waLink("Halo mainweb.id, saya ingin konsultasi gratis untuk website saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center justify-center gap-2.5 bg-brand-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_24px_50px_-26px_rgb(0_71_210/0.7)] transition-colors hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Mulai konsultasi gratis
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" aria-hidden className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#paket"
                className="inline-flex min-h-11 items-center justify-center border border-ink-900/25 px-7 py-4 text-sm font-semibold text-ink-950 transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-950"
              >
                Lihat tarif
              </a>
            </div>

            {/* Catatan dimensi — satu label terukur, cara kerja studio, bukan dekorasi mono */}
            <p
              className="fade-rise mt-8 flex items-center gap-2.5 text-[13px] text-ink-900/60"
              style={{ animationDelay: "860ms" }}
            >
              <svg width="34" height="8" viewBox="0 0 34 8" fill="none" aria-hidden className="shrink-0 text-brand-600">
                <path d="M0.5 1v6M33.5 1v6M0.5 4h33" stroke="currentColor" strokeWidth="1" />
              </svg>
              Dikerjakan tangan, diukur berulang: 9 tahap dari brief hingga rilis
            </p>
          </div>

          <div
            className="fade-rise relative z-10 lg:col-span-7 lg:-ml-4"
            style={{ animationDelay: "880ms" }}
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

        {/* Tabel ukuran — data nyata tentang hasil kerja, bukan penomoran dekoratif */}
        <dl
          className="fade-rise relative mt-14 grid grid-cols-2 border-t border-ink-950/70 lg:mt-20 lg:grid-cols-4"
          style={{ animationDelay: "1020ms" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative flex flex-col border-r border-line px-5 py-6 first:border-l lg:border-b-0"
            >
              <dd className="order-1 font-display text-3xl font-extrabold tracking-tight text-ink-950">
                {s.value}
              </dd>
              <dt className="order-2 mt-1.5 text-sm text-ink-900/55">{s.label}</dt>
              <span
                aria-hidden
                className="mt-3 block h-0.5 w-0 bg-brand-600 transition-all duration-500 group-hover:w-8"
              />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
