import { waLink } from "@/lib/site";
import ViewportDemo from "@/components/ViewportDemo";
import LiveClock from "@/components/LiveClock";

const stats = [
  { idx: "01", value: "9", label: "Tingkatan paket" },
  { idx: "02", value: "100%", label: "Desain responsif" },
  { idx: "03", value: "0", label: "Template acakan — semua custom" },
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
          <h1 className="font-display text-[clamp(2.75rem,7.4vw,6rem)] leading-[0.92] font-black tracking-[-0.045em] text-balance">
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
              mainweb.id merancang, membangun, dan merawat website untuk bisnis
              yang serius — dari landing page pertama hingga platform enterprise.
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
                className="group inline-flex items-center justify-center gap-2 bg-brand-600 px-7 py-4 font-mono text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-[0_24px_50px_-26px_rgb(0_71_247/0.7)] transition-all hover:-translate-y-0.5 hover:bg-brand-500"
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

            <div
              className="fade-rise mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-ink-900/60"
              style={{ animationDelay: "900ms" }}
            >
              <span className="tracking-[0.18em] text-ink-900/40 uppercase">Stack</span>
              <span aria-hidden className="text-brand-600">/</span>
              <span>Next.js</span>
              <span aria-hidden className="text-ink-900/25">·</span>
              <span>React</span>
              <span aria-hidden className="text-ink-900/25">·</span>
              <span>TypeScript</span>
              <span aria-hidden className="text-ink-900/25">·</span>
              <span>Tailwind CSS</span>
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
