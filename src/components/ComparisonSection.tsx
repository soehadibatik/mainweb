import PricingComparison from "@/components/PricingComparison";
import { getComparison, getPlans } from "@/lib/catalog";
import { ui } from "@/lib/i18n/ui";
import type { Locale } from "@/lib/i18n/config";

export default async function ComparisonSection({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const plans = await getPlans();
  const comparisonSections = await getComparison();
  const rowCount = comparisonSections.reduce((n, s) => n + s.rows.length, 0);

  return (
    <section id="perbandingan" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div className="reveal-mask">
            <div className="reveal reveal-blur">
              <p className="eyebrow">
                <span className="eyebrow-slash" aria-hidden>{"// "}</span>
                {t.comparison.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-ink-950 sm:text-5xl">
                {t.comparison.heading} <span className="text-ink-900/40">{t.comparison.headingMuted}</span>
              </h2>
            </div>
          </div>
          <p className="reveal reveal-d2 max-w-sm text-sm leading-relaxed text-ink-900/60">
            {t.comparison.intro(rowCount, plans.length)}
          </p>
        </div>

        <div className="reveal mt-12">
          <PricingComparison plans={plans} sections={comparisonSections} lang={lang} />
        </div>
      </div>
    </section>
  );
}
