import { site, waLink } from "@/lib/site";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-600 text-white">
      <div
        className="bg-grid-dark bg-grid-parallax pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="reveal eyebrow text-white/75">
            <span className="eyebrow-slash text-white/45" aria-hidden>{"// "}</span>
            Mulai
          </p>

          <div className="reveal-mask mt-8 max-w-4xl">
            <h2 className="reveal reveal-blur reveal-d1 font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.95] font-black tracking-[-0.04em] text-balance">
              Tinggal pilih paketnya.
              <br />
              <span className="text-white/55">Kami yang mengerjakan sisanya.</span>
            </h2>
          </div>

          <div className="reveal reveal-d2 mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo mainweb.id, saya siap mulai membangun website bisnis saya!")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Konsultasi via WhatsApp
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="btn btn-outline-light"
            >
              {site.contact.email}
            </a>
          </div>

          <p className="reveal reveal-d3 mt-8 font-mono text-xs tracking-[0.02em] text-white/65">
            Respons di bawah 1×24 jam, tanpa komitmen
          </p>
      </div>
    </section>
  );
}
