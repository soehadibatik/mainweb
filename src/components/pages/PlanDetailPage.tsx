import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlan, getPlans } from "@/lib/catalog";
import { localizePlan, localizePlans } from "@/lib/i18n/plans-text";
import { site, waLink } from "@/lib/site";
import { pages } from "@/lib/i18n/pages";
import { fullPrice } from "@/lib/tiers";
import { tPrice } from "@/lib/i18n/price";
import JsonLd from "@/components/JsonLd";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default async function PlanDetailPage({
  lang,
  id,
}: {
  lang: Locale;
  id: string;
}) {
  const p = pages[lang].paket;

  const all = localizePlans(lang, await getPlans());
  const rawPlan = await getPlan(id);
  if (!rawPlan) notFound();
  const plan = localizePlan(lang, rawPlan);

  const idx = all.findIndex((x) => x.id === plan.id);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx > -1 && idx < all.length - 1 ? all[idx + 1] : null;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: pages[lang].studiDetail.breadcrumbHome,
        item: `${site.url}${localizePath(lang, "/")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: p.eyebrow(plan.name),
        item: `${site.url}${localizePath(lang, `/paket/${plan.id}`)}`,
      },
    ],
  };

  const specCount = plan.featureGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <main className="flex-1">
      <JsonLd data={breadcrumb} />
      {/* Meta bar dokumen */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <span>{p.docLabel(plan.name)}</span>
          <span className="hidden sm:block">{p.docPaket(plan.name)}</span>
          <span className="text-brand-600">{p.active}</span>
        </div>
      </div>

      {/* Header paket */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href={`${localizePath(lang, "/")}#paket`}
            className="reveal inline-flex items-center gap-2 font-mono text-[11px] text-ink-900/50 transition-colors hover:text-brand-600"
          >
            {p.backAll}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="reveal-mask">
                <div className="reveal reveal-blur">
                  <p className="eyebrow"><span className="eyebrow-slash" aria-hidden>{"// "}</span>
                    {p.eyebrow(plan.name)}
                  </p>
                  <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] font-black tracking-[-0.035em] text-ink-950 text-balance">
                    {plan.tagline}
                  </h1>
                </div>
              </div>
              <p className="reveal reveal-d2 mt-7 max-w-[58ch] leading-relaxed text-ink-900/70">
                <span className="font-mono text-[11px] font-semibold text-ink-900/50">
                  {p.idealFor}{" "}
                </span>
                {plan.idealFor}
              </p>
            </div>

            {/* Kartu harga */}
            <div className="reveal reveal-d3 lg:col-span-5">
              <div className="border border-ink-900/12 bg-white shadow-[0_32px_64px_-32px_rgb(11_18_32/0.3)]">
                <div className="flex items-center justify-between border-b border-line px-6 py-3 font-mono text-[11px] text-ink-900/45">
                  <span>{p.summaryLabel}</span>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[11px] text-ink-900/45">
                    {p.buildCostLabel}
                  </p>
                  <p className="mt-2 font-mono text-5xl font-semibold tracking-tight text-ink-950">
                    {tPrice(lang, fullPrice(plan.build))}
                  </p>

                  <dl className="mt-7 space-y-3 border-t border-line pt-6 font-mono text-xs">
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="tracking-[0.14em] text-ink-900/45">{p.maintainLabel}</dt>
                      <dd className="font-semibold text-ink-950">{tPrice(lang, fullPrice(plan.maintain))}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="tracking-[0.14em] text-ink-900/45">{p.renewalLabel}</dt>
                      <dd className="font-semibold text-ink-950">
                        {plan.renewal
                          ? `${tPrice(lang, fullPrice(plan.renewal))}${lang === "id" ? "/th" : "/yr"}`
                          : p.includedShort}
                      </dd>
                    </div>
                  </dl>

                  <a
                    href={waLink(p.orderWaMessage(plan.name, plan.build))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-8 w-full"
                  >
                    {p.order(plan.name)}
                  </a>
                  <p className="mt-3 text-center font-mono text-[11px] text-ink-900/40">
                    {p.consultNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spesifikasi */}
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 border-b border-line pb-8 lg:flex-row lg:items-end">
            <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-ink-950 sm:text-4xl">
              {p.specsHeading}
            </h2>
            <span className="font-mono text-[11px] text-ink-900/45">
              {p.specsCount(specCount, plan.featureGroups.length)}
            </span>
          </div>

          <div className="grid gap-px bg-line lg:grid-cols-3">
            {plan.featureGroups.map((group) => (
              <div key={group.title} className="bg-paper p-7 sm:p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink-950">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-900/70">
                      <span aria-hidden className="mt-0.5 font-mono text-xs font-semibold text-brand-600">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigasi paket */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-col justify-between gap-4 border-b border-line pb-8 sm:flex-row">
            {prev ? (
              <Link
                href={localizePath(lang, `/paket/${prev.id}`)}
                className="group font-mono text-[11px] text-ink-900/55 transition-colors hover:text-brand-600"
              >
                {p.prev(prev.name)}
              </Link>
            ) : (
              <span className="font-mono text-[11px] text-ink-900/25">
                {p.first}
              </span>
            )}
            {next ? (
              <Link
                href={localizePath(lang, `/paket/${next.id}`)}
                className="group font-mono text-[11px] text-ink-900/55 transition-colors hover:text-brand-600 sm:text-right"
              >
                {p.next(next.name)}
              </Link>
            ) : (
              <span className="font-mono text-[11px] text-ink-900/25 sm:text-right">
                {p.last}
              </span>
            )}
          </nav>

          <div className="mt-8">
            <p className="font-mono text-[11px] font-semibold text-ink-900/45">
              {p.othersLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {all
                .filter((x) => x.id !== plan.id)
                .map((x) => (
                  <Link
                    key={x.id}
                    href={localizePath(lang, `/paket/${x.id}`)}
                    className="border border-line bg-white px-3.5 py-2 font-mono text-[11px] font-semibold text-ink-900/70 transition-colors hover:border-brand-600 hover:text-brand-600"
                  >
                    {x.name} · {tPrice(lang, fullPrice(x.build))}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
