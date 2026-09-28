import { waLink } from "@/lib/site";
import ViewportDemo from "@/components/ViewportDemo";
import LiveClock from "@/components/LiveClock";

const stats = [
  { idx: "01", value: "9", label: "Tingkatan paket" },
  { idx: "02", value: "100%", label: "Desain responsif" },
  { idx: "03", value: "0", label: "Template dipakai ulang" },
  { idx: "04", value: "GRATIS", label: "Konsultasi awal" },
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
      {/* Lapisan latar: grid, butir, garis pindai */}
      <div aria-hidden className="bg-grid-light pointer-events-none absolute inset-0" />
      <div aria-hidden className="bg-noise pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/50 to-transparent"
      />
      <div aria-hidden className="scan-line pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bidang biru — membelah kontainer dari 52% ke tepi kanan layar */}
        <div
          aria-hidden
          className="absolute inset-y-0 right-[-50vw] left-[52%] hidden border-l border-brand-600/25 bg-brand-50 lg:block"
        />

        {/* Strip status — dibaca seperti baris log sistem */}
        <div className="relative flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-line py-4 font-mono text-[11px] tracking-[0.14em] text-ink-900/45 uppercase">
          <span className="flex items-center gap-2">
            <span className="text-brand-600">~/mainweb</span>
            <span className="hidden text-ink-900/25 sm:inline">·</span>
            <span className="hidden sm:inline">build 2026.09</span>
          </span>
          <span className="hidden items-center gap-2 md:flex">
            <span className="text-ink-900/30">jkt</span>
            <LiveClock />
            <span className="text-ink-900/30">wib</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
            slot proyek dibuka
          </span>
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
                className="word-rise bg-gradient-to-r from-brand-500 to-brand-800 bg-clip-text text-transparent"
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
                className="group inline-flex items-center justify-center gap-2 bg-brand-600 px-7 py-4 font-mono text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-[0_24px_50px_-26px_rgb(0_71_210/0.7)] transition-all hover:-translate-y-0.5 hover:bg-brand-500"
              >
                Mulai konsultasi gratis
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#paket"
                className="inline-flex items-center justify-center border border-ink-900/25 px-7 py-4 font-mono text-xs font-semibold tracking-[0.14em] text-ink-950 uppercase transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-white"
              >
                Lihat tarif
              </a>
            </div>

            {/* Kartu terminal — build log yang mengetik sendiri, murni CSS tanpa JS */}
            <div
              className="fade-rise mt-8 max-w-md overflow-hidden border border-ink-950 bg-ink-950 shadow-[0_28px_56px_-28px_rgb(11_18_32/0.55)]"
              style={{ animationDelay: "860ms" }}
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 font-mono text-[10px] tracking-[0.14em] text-white/35 uppercase">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="ml-2 truncate">~/mainweb · zsh</span>
                <span className="ml-auto hidden shrink-0 items-center gap-1.5 text-emerald-400/80 sm:flex">
                  <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ci passing
                </span>
              </div>

              {/* Progress build — transform sekali jalan, sinkron dengan ketikan */}
              <div className="h-0.5 w-full bg-white/5" aria-hidden>
                <div className="term-progress h-full w-full origin-left bg-gradient-to-r from-brand-500 to-emerald-400" />
              </div>

              <div className="scanlines space-y-2 px-4 py-4 font-mono text-[11px] leading-relaxed text-white/70 sm:text-xs">
                <p>
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="term-type">npm run build</span>
                </p>
                <p className="fade-rise text-white/45" style={{ animationDelay: "2.6s" }}>
                  <span className="text-emerald-400">✓</span> compiled
                  successfully in 2.4s
                </p>
                <p className="fade-rise text-white/45" style={{ animationDelay: "2.75s" }}>
                  <span className="text-emerald-400">✓</span> 16/16 pages
                  prerendered
                </p>
                <p
                  className="fade-rise font-semibold text-emerald-400 [text-shadow:0_0_14px_rgb(52_211_153/0.45)]"
                  style={{ animationDelay: "2.9s" }}
                >
                  <span className="animate-pulse-dot mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
                  live at mainweb.id
                </p>
                <p className="fade-rise" style={{ animationDelay: "3.15s" }}>
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="term-caret" aria-hidden />
                </p>
              </div>
            </div>
          </div>

          <div
            className="fade-rise relative z-10 lg:col-span-7 lg:-ml-4"
            style={{ animationDelay: "880ms" }}
          >
            {/* Label yang menabrak sudut kartu */}
            <span className="absolute -top-3.5 -left-3 z-20 bg-brand-600 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.16em] text-white uppercase lg:-left-5">
              Live viewport
            </span>
            <ViewportDemo />
          </div>
        </div>

        {/* Telemetri — dua sel terakhir duduk di atas bidang biru */}
        <dl
          className="fade-rise relative mt-14 grid grid-cols-2 border-t border-line lg:mt-20 lg:grid-cols-4"
          style={{ animationDelay: "1020ms" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative border-r border-b border-line px-5 py-6 first:border-l lg:border-b-0"
            >
              <span className="absolute top-6 right-5 font-mono text-[10px] tracking-[0.16em] text-ink-900/25 transition-colors group-hover:text-brand-600">
                {s.idx}
              </span>
              <dt className="pr-8 font-mono text-[10px] tracking-[0.16em] text-ink-900/45 uppercase">
                {s.label}
              </dt>
              <dd className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink-950">
                {s.value}
              </dd>
              <span
                aria-hidden
                className="mt-3 block h-px w-0 bg-brand-600 transition-all duration-500 group-hover:w-full"
              />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
