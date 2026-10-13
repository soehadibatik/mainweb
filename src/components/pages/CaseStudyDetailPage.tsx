import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import {
  localizeCaseStudies,
  localizeCaseStudy,
} from "@/lib/i18n/case-studies-text";
import { getPlan } from "@/lib/catalog";
import { localizePlan } from "@/lib/i18n/plans-text";
import { site, waLink } from "@/lib/site";
import { pages } from "@/lib/i18n/pages";
import JsonLd from "@/components/JsonLd";
import ClientLogo from "@/components/ClientLogo";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default async function CaseStudyDetailPage({
  lang,
  slug,
}: {
  lang: Locale;
  slug: string;
}) {
  const raw = getCaseStudy(slug);
  if (!raw) notFound();

  const p = pages[lang].studiDetail;
  const study = localizeCaseStudy(lang, raw);
  const rawPlan = await getPlan(study.planId);
  const plan = rawPlan ? localizePlan(lang, rawPlan) : undefined;
  const others = localizeCaseStudies(
    lang,
    caseStudies.filter((c) => c.slug !== study.slug),
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: study.headline,
      description: study.summary,
      inLanguage: lang === "id" ? "id-ID" : "en-US",
      author: { "@type": "Organization", name: site.name, url: site.url },
      publisher: { "@type": "Organization", name: site.name, url: site.url },
      about: {
        "@type": "WebSite",
        name: study.client,
        url: `https://${study.domain}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: p.breadcrumbHome,
          item: `${site.url}${localizePath(lang, "/")}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: p.breadcrumbCases,
          item: `${site.url}${localizePath(lang, "/studi-kasus")}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: study.client,
          item: `${site.url}${localizePath(lang, `/studi-kasus/${study.slug}`)}`,
        },
      ],
    },
  ];

  return (
    <main className="flex-1">
      {jsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      {/* Meta bar dokumen — konsisten dengan halaman lain */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <span>{p.docLabel(study.client)}</span>
          <span className="hidden sm:block">
            <a
              href={`https://${study.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-600"
            >
              {study.domain}
            </a>
          </span>
          <span className="text-brand-600">{study.category}</span>
        </div>
      </div>

      {/* Header studi kasus */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href={localizePath(lang, "/studi-kasus")}
            className="reveal inline-flex items-center gap-2 font-mono text-[11px] text-ink-900/50 transition-colors hover:text-brand-600"
          >
            {p.backAll}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="reveal-mask">
                <h1 className="reveal reveal-blur max-w-2xl font-display text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] font-black tracking-[-0.035em] text-balance text-ink-950">
                  {study.headline}
                </h1>
              </div>
              <p className="reveal reveal-d2 mt-6 max-w-[58ch] text-lg leading-relaxed font-light text-ink-900/70">
                {study.summary}
              </p>
            </div>
            <div className="reveal reveal-d3 lg:col-span-4">
              <div className="border border-line bg-white p-6">
                <p className="font-mono text-[11px] text-ink-900/45">
                  {p.clientLabel}
                </p>
                <div className="mt-4 flex h-14 items-center">
                  <ClientLogo
                    src={study.logo}
                    alt={study.client}
                    w={study.logoW}
                    h={study.logoH}
                    className="max-h-12 w-auto max-w-full object-contain"
                  />
                </div>
                <a
                  href={`https://${study.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-mono text-[11px] text-brand-600 transition-colors hover:text-ink-950"
                >
                  {p.visit(study.domain)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narasi: kebutuhan klien */}
      <section className="border-b border-line bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-ink-950">
                {p.needsHeading}
              </h2>
            </div>
            <div className="max-w-[62ch] space-y-5 leading-relaxed text-ink-900/75 lg:col-span-7 lg:col-start-6">
              {study.intro.map((par) => (
                <p key={par.slice(0, 32)}>{par}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Yang kami kerjakan */}
      <section className="border-b border-line py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-ink-950">
                {p.scopeHeading}
              </h2>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-900/60">
                {p.scopeIntro}
              </p>
            </div>
            <div className="space-y-10 lg:col-span-7 lg:col-start-6">
              {study.scope.map((group) => (
                <div key={group.title}>
                  <h3 className="border-b border-line pb-3 font-mono text-[11px] font-semibold text-brand-600">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item.slice(0, 32)}
                        className="flex gap-3 text-[15px] leading-relaxed text-ink-900/75"
                      >
                        <span aria-hidden className="mt-[9px] h-px w-4 shrink-0 bg-brand-600/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rekomendasi paket untuk kebutuhan serupa */}
      {plan && (
        <section className="border-b border-line bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border border-ink-950 bg-paper">
              <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 lg:flex-row lg:items-center">
                <div className="max-w-xl">
                  <p className="eyebrow"><span className="eyebrow-slash" aria-hidden>{"// "}</span>
                    {p.planCtaEyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-black tracking-[-0.02em] text-ink-950 sm:text-3xl">
                    {p.planHeading(plan.name)}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-900/65">
                    {study.planReason} {p.planBuildLabel}{" "}
                    <span className="font-mono font-semibold text-ink-950">{plan.build}</span>.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                  <a
                    href={waLink(p.consultWaMessage(study.client))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {p.consultWa}
                  </a>
                  <Link
                    href={localizePath(lang, `/paket/${plan.id}`)}
                    className="btn btn-outline"
                  >
                    {p.planDetail(plan.name)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Studi kasus lainnya */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-mono text-[11px] font-semibold text-ink-900/50">
            {p.othersHeading}
          </h2>
          <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <li key={c.slug} className="bg-white">
                <Link
                  href={localizePath(lang, `/studi-kasus/${c.slug}`)}
                  className="group flex h-full flex-col gap-3 p-6 transition-colors hover:bg-paper"
                >
                  <span className="font-mono text-[11px] text-ink-900/45">
                    {c.category}
                  </span>
                  <span className="font-display text-lg font-bold tracking-tight text-ink-950 transition-colors group-hover:text-brand-600">
                    {c.client}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-900/60">
                    {c.headline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
