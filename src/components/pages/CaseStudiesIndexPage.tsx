import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { localizeCaseStudies } from "@/lib/i18n/case-studies-text";
import { site, waLink } from "@/lib/site";
import { pages } from "@/lib/i18n/pages";
import JsonLd from "@/components/JsonLd";
import ClientLogo from "@/components/ClientLogo";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default function CaseStudiesIndexPage({ lang }: { lang: Locale }) {
  const p = pages[lang].studiIndex;
  const studies = localizeCaseStudies(lang, caseStudies);

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: p.metaTitle,
    url: `${site.url}${localizePath(lang, "/studi-kasus")}`,
    inLanguage: p.inLanguage,
    description: p.metaDesc(studies.length),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: studies.length,
      itemListElement: studies.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.headline,
        url: `${site.url}${localizePath(lang, `/studi-kasus/${c.slug}`)}`,
      })),
    },
  };

  return (
    <main className="flex-1">
      <JsonLd data={collection} />

      {/* Meta bar dokumen — konsisten dengan halaman lain */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <span>{p.docLabel}</span>
          <span className="hidden sm:block">{p.projectsCount(studies.length)}</span>
          <span className="text-brand-600">{p.status}</span>
        </div>
      </div>

      {/* Header */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href={localizePath(lang, "/")}
            className="inline-flex items-center gap-2 font-mono text-[11px] text-ink-900/50 transition-colors hover:text-brand-600"
          >
            {p.backHome}
          </Link>

          <div className="mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="reveal-mask">
              <div className="reveal reveal-blur">
                <p className="eyebrow"><span className="eyebrow-slash" aria-hidden>{"// "}</span>
                  {p.eyebrow}
                </p>
                <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] font-black tracking-[-0.035em] text-balance text-ink-950">
                  {p.heading}
                </h1>
              </div>
            </div>
            <p className="reveal reveal-d2 max-w-md text-sm leading-relaxed text-ink-900/60">
              {p.introBefore}
              <Link
                href={localizePath(lang, "/klien")}
                className="font-semibold text-brand-600 hover:text-ink-950"
              >
                {p.introLink}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Daftar studi kasus */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="stagger grid gap-px border border-line bg-line lg:grid-cols-2">
            {studies.map((c) => (
              <li key={c.slug} className="reveal bg-white">
                <Link
                  href={localizePath(lang, `/studi-kasus/${c.slug}`)}
                  className="group flex h-full flex-col gap-4 p-7 transition-colors hover:bg-paper sm:p-9"
                >
                  <span className="flex items-center justify-between gap-4 font-mono text-[11px] text-ink-900/45">
                    {c.category}
                    <span className="hidden sm:block">{c.domain}</span>
                  </span>

                  <span className="flex h-12 items-center">
                    <ClientLogo
                      src={c.logo}
                      alt={c.client}
                      w={c.logoW}
                      h={c.logoH}
                      className="max-h-10 w-auto max-w-[180px] object-contain opacity-85 transition duration-300 group-hover:opacity-100"
                    />
                  </span>

                  <span className="mt-1 block font-display text-xl font-black tracking-[-0.02em] text-balance text-ink-950 transition-colors group-hover:text-brand-600 sm:text-2xl">
                    {c.headline}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-900/60">
                    {c.summary}
                  </span>

                  <span className="mt-auto pt-2 font-mono text-[11px] text-brand-600 transition-colors group-hover:text-ink-950">
                    {p.readCase}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA penutup */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col gap-5 border border-ink-950 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="eyebrow"><span className="eyebrow-slash" aria-hidden>{"// "}</span>
                {p.ctaEyebrow}
              </p>
              <p className="mt-2 font-display text-2xl font-black tracking-[-0.02em] text-ink-950 sm:text-3xl">
                {p.ctaHeading}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waLink(p.ctaWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {p.ctaWa}
              </a>
              <Link
                href={`${localizePath(lang, "/")}#paket`}
                className="btn btn-outline"
              >
                {p.ctaPricing}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
