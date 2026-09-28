import PricingComparison from "@/components/PricingComparison";
import { getComparison, getPlans } from "@/lib/catalog";

export default async function ComparisonSection() {
  const plans = await getPlans();
  const comparisonSections = await getComparison();
  const rowCount = comparisonSections.reduce((n, s) => n + s.rows.length, 0);

  return (
    <section id="perbandingan" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
              Matriks
            </p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-ink-950 sm:text-5xl">
              Bandingkan semua paket
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-900/60">
            {rowCount} baris spesifikasi, {plans.length} paket. Sembunyikan
            baris yang tidak relevan, lalu bandingkan sisanya.
          </p>
        </div>

        <div className="mt-12">
          <PricingComparison plans={plans} sections={comparisonSections} />
        </div>
      </div>
    </section>
  );
}
