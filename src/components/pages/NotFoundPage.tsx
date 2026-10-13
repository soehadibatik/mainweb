import Link from "next/link";
import { getPlans } from "@/lib/catalog";
import { localizePlans } from "@/lib/i18n/plans-text";
import { waLink } from "@/lib/site";
import { ui } from "@/lib/i18n/ui";
import { fullPrice } from "@/lib/tiers";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default async function NotFoundPage({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const n = t.notfound;
  const plans = localizePlans(lang, await getPlans());

  return (
    <main className="flex-1">
      {/* Meta bar dokumen */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <span>{n.doc}</span>
          <span className="hidden sm:block">{n.notRegistered}</span>
          <span className="text-brand-600">{n.status}</span>
        </div>
      </div>

      {/* Display error */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="reveal eyebrow"><span className="eyebrow-slash" aria-hidden>{"// "}</span>
            {n.eyebrow}
          </p>
          <p className="reveal reveal-blur mt-6 font-mono text-[clamp(5rem,18vw,13rem)] leading-none font-semibold tracking-tight text-ink-950">
            404
          </p>
          <p className="reveal reveal-d2 mt-6 max-w-[52ch] text-lg leading-relaxed font-light text-ink-900/70">
            {n.body}
          </p>

          <div className="reveal reveal-d3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={localizePath(lang, "/")}
              className="btn btn-primary"
            >
              {n.backHome}
            </Link>
            <a
              href={waLink(n.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {n.askDirectly}
            </a>
          </div>
        </div>
      </section>

      {/* Arsip paket */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col justify-between gap-4 border-b border-line pb-8 lg:flex-row lg:items-end">
            <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-ink-950 sm:text-4xl">
              {n.archive}
            </h2>
            <span className="font-mono text-[11px] text-ink-900/45">
              {n.docCount(plans.length)}
            </span>
          </div>

          <ul className="stagger grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <li key={plan.id} className="reveal border-b border-line">
                <Link
                  href={localizePath(lang, `/paket/${plan.id}`)}
                  className="group flex items-baseline justify-between gap-4 py-5 transition-colors hover:bg-white"
                >
                  <span>
                    <span className="block font-display text-lg font-bold tracking-tight text-ink-950 transition-transform duration-300 group-hover:translate-x-1">
                      {plan.name}
                    </span>
                    <span className="mt-0.5 block text-sm text-ink-900/55">
                      {plan.tagline}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-sm font-semibold text-ink-950">
                    {fullPrice(plan.build)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-[11px] leading-relaxed text-ink-900/50">
            {n.notFound2}{" "}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 hover:underline"
            >
              {n.whatsapp}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
