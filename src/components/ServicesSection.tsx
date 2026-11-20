import Link from "next/link";
import { services } from "@/lib/services";
import { localizePath, type Locale } from "@/lib/i18n/config";

const icons = {
  "landing-page": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "company-profile": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  "toko-online": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  "web-app-custom": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "jasa-website-solo": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function ServicesSection({ lang }: { lang: Locale }) {
  const isId = lang === "id";

  return (
    <section id="layanan" className="border-b border-line bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-slash" aria-hidden>{"// "}</span>
              {isId ? "Spesialisasi & Solusi Digital" : "Specialization & Digital Solutions"}
            </p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-balance text-ink-950 sm:text-5xl">
              {isId ? "Layanan Pembuatan Website " : "Website Development Services "}
              <span className="text-ink-900/40">
                {isId ? "Tepat Sasaran Bisnis" : "Built for Real Growth"}
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="max-w-md text-sm leading-relaxed text-ink-900/60">
              {isId
                ? "Bukan sekadar instal tema WordPress. Kami rekayasa arsitektur web berperforma tinggi sesuai model bisnis dan target konversi Anda."
                : "Not just installing WordPress themes. We engineer high-performance web architecture tailored to your business model and conversion goals."}
            </p>
            <Link
              href={localizePath(lang, "/layanan")}
              className="font-mono text-xs font-semibold text-brand-600 transition-colors hover:text-ink-950 inline-flex items-center gap-1.5"
            >
              {isId ? "Eksplor Semua Solusi" : "Explore All Solutions"} →
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => {
            const icon = icons[svc.slug as keyof typeof icons] || icons["landing-page"];
            return (
              <div
                key={svc.slug}
                className="group relative flex flex-col justify-between border border-line bg-white p-7 transition-all duration-300 hover:border-brand-600 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      {icon}
                    </span>
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-ink-900/40 uppercase">
                      {svc.startingPrice}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink-950 group-hover:text-brand-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-900/65 line-clamp-3">
                    {svc.metaDesc}
                  </p>

                  <div className="mt-5 space-y-1.5">
                    {svc.features.slice(0, 2).map((feat) => (
                      <div
                        key={feat.title}
                        className="flex items-start gap-2 text-xs text-ink-900/75"
                      >
                        <span className="text-brand-600 font-bold shrink-0">✓</span>
                        <span className="line-clamp-1">{feat.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-line/60 pt-4 flex items-center justify-between">
                  <Link
                    href={localizePath(lang, `/layanan/${svc.slug}`)}
                    className="font-mono text-xs font-semibold text-brand-600 transition-colors group-hover:text-ink-950 inline-flex items-center gap-1"
                  >
                    {isId ? "Pelajari Fitur & Estimasi" : "View Features & Pricing"} →
                  </Link>
                  <span className="font-mono text-[10px] text-ink-900/40">
                    Next.js + Fast CDN
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
