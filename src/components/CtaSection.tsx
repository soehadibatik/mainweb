import { site, waLink } from "@/lib/site";

export default function CtaSection() {
  return (
    <section className="relative bg-brand-600 text-white">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.22em] text-white/70 uppercase">
            Mulai
          </p>

          <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.95] font-black tracking-[-0.04em] text-balance">
            Dokumen tarif sudah Anda baca.
            <br />
            <span className="text-white/55">Sekarang tulis babak baru bisnis Anda.</span>
          </h2>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo mainweb.id, saya siap mulai membangun website bisnis saya!")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 font-mono text-xs font-semibold tracking-[0.14em] text-ink-950 uppercase transition-colors hover:bg-ink-950 hover:text-white"
            >
              Konsultasi via WhatsApp
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center justify-center border border-white/45 px-8 py-4 font-mono text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:border-white hover:bg-white/10"
            >
              {site.contact.email}
            </a>
          </div>

          <p className="mt-8 font-mono text-[11px] tracking-[0.14em] text-white/60 uppercase">
            Respons &lt; 1×24 jam — tanpa komitmen
          </p>
      </div>
    </section>
  );
}
