import Link from "next/link";
import { getPlans } from "@/lib/catalog";
import type { Plan } from "@/lib/plans";
import { tiers, plansOfTier, fullPrice } from "@/lib/tiers";
import { waLink } from "@/lib/site";
import CategoryChooser from "@/components/CategoryChooser";

const included = ["SSL (https)", "Desain responsif", "SEO dasar", "Google Analytics"];

/*
 * Hierarchy kartu mengikuti alur keputusan pembeli awam:
 * nama paket, lalu harga (elemen terbesar setelah nama), deskripsi singkat,
 * biaya lanjutan, baru CTA. Detail fitur penuh tinggal di halaman paket.
 */
function PlanCard({ plan, featured }: { plan: Plan; featured: boolean }) {
  return (
    <article
      id={`paket-${plan.id}`}
      className={`plan-row relative flex flex-col p-5 sm:p-6 ${
        featured
          ? "border-2 border-brand-600 bg-brand-600/[0.04]"
          : "border border-line bg-white"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2.5">
        <h4 className="font-display text-xl font-bold tracking-tight">
          {plan.name}
        </h4>
        {plan.highlight && (
          <span className="bg-brand-600 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.14em] text-white uppercase">
            Populer
          </span>
        )}
      </div>

      {/* Harga: angka penuh, paling menonjol setelah nama, tanpa perlu buka detail */}
      <p
        className={`mt-3 font-display font-extrabold tracking-[-0.02em] tabular-nums ${
          featured
            ? "text-3xl text-brand-600 sm:text-4xl"
            : "text-2xl text-ink-950 sm:text-3xl"
        }`}
      >
        {fullPrice(plan.build)}
      </p>
      <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-ink-900/45 uppercase">
        biaya pembuatan
      </p>

      <p className="mt-3 text-sm leading-relaxed text-ink-900/60">
        {plan.tagline}
      </p>

      {/* Biaya lanjutan tetap terbaca di kartu, bukan tersembunyi di detail */}
      <dl className="mt-4 space-y-1 border-t border-line pt-3 font-mono text-[11px]">
        <div className="flex items-baseline justify-between gap-3">
          <dt className="tracking-[0.1em] text-ink-900/45 uppercase">Maintain</dt>
          <dd className="font-semibold text-ink-900">
            {plan.maintain}
            {plan.renewal ? "/bln" : ""}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="tracking-[0.1em] text-ink-900/45 uppercase">Perpanjangan</dt>
          <dd className="font-semibold text-ink-900">
            {plan.renewal ? `${plan.renewal}/th` : "Termasuk"}
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-col gap-2 pt-1 sm:flex-row">
        <a
          href={waLink(
            `Halo mainweb.id, saya tertarik dengan paket ${plan.name} (${fullPrice(plan.build)}).`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`min-h-11 flex-1 px-4 py-3 text-center font-mono text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors ${
            featured
              ? "bg-brand-600 text-white hover:bg-brand-500"
              : "border border-ink-900/25 text-ink-950 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
          }`}
        >
          Pesan via WhatsApp
        </a>
        <Link
          href={`/paket/${plan.id}`}
          className="min-h-11 flex-1 border border-ink-900/20 px-4 py-3 text-center font-mono text-[11px] tracking-[0.12em] text-ink-900/60 uppercase transition-colors hover:border-ink-900/60 hover:text-ink-950"
        >
          Fitur lengkap
        </Link>
      </div>
    </article>
  );
}

export default async function Pricing() {
  const plans = await getPlans();

  const chooserTiers = tiers.map((tier) => ({
    id: tier.id,
    name: tier.name,
    hint: tier.hint,
    plans: plansOfTier(tier, plans).map(({ id, name, build, tagline }) => ({
      id,
      name,
      build,
      tagline,
    })),
  }));

  return (
    <section id="paket" className="border-y border-line bg-white text-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="border-b border-line pb-10">
          <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
            Tarif
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-black tracking-[-0.03em] text-balance sm:text-5xl">
            Pilih website sesuai kebutuhan bisnis Anda
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-900/65">
            Tidak perlu memahami teknologi. Pilih berdasarkan kondisi usaha
            atau perusahaan Anda.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-900/50">
            Sembilan paket, semua biaya tertulis di muka: pembuatan dibayar di
            awal, maintain tiap bulan, perpanjangan tahunan agar situs tetap
            online.{" "}
            <a
              href="#perbandingan"
              className="font-mono text-[11px] tracking-[0.14em] text-brand-600 uppercase hover:text-ink-950"
            >
              Bandingkan semua paket ↓
            </a>
          </p>
        </div>

        {/* Termasuk di semua paket */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[10px] tracking-[0.18em] text-ink-900/45 uppercase">
            Termasuk semua paket:
          </span>
          {included.map((item) => (
            <span
              key={item}
              className="border border-line bg-paper px-3 py-1.5 font-mono text-[10px] tracking-[0.1em] text-ink-900/70 uppercase"
            >
              {item}
            </span>
          ))}
        </div>

        <CategoryChooser tiers={chooserTiers} />

        {/* Tiga kategori kondisi bisnis, masing-masing berisi tiga paket */}
        <div className="mt-14 space-y-14">
          {tiers.map((tier) => {
            const tierPlans = plansOfTier(tier, plans);
            return (
              <section
                key={tier.id}
                id={`kategori-${tier.id}`}
                aria-labelledby={`kategori-${tier.id}-judul`}
                className="scroll-mt-24"
              >
                <div className="grid gap-3 border-b border-ink-950/70 pb-5 sm:grid-cols-12 sm:items-end sm:gap-6">
                  <div className="sm:col-span-5">
                    <h3
                      id={`kategori-${tier.id}-judul`}
                      className="font-display text-2xl font-black tracking-tight sm:text-3xl"
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] tracking-[0.12em] text-brand-600 uppercase">
                      {tier.hint}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-900/60 sm:col-span-7">
                    {tier.desc}
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
                  {tierPlans.map((plan) => (
                    <PlanCard
                      key={plan.id}
                      plan={plan}
                      featured={plan.id === tier.featured}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <p className="mt-12 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-ink-900/45">
          * Basic: maintain termasuk maks. 1 bulan pertama. Semua paket termasuk SSL,
          desain responsif &amp; SEO dasar.{" "}
          <a
            href={waLink("Halo mainweb.id, saya butuh paket custom.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:text-ink-950"
          >
            Butuh custom? Konsultasi gratis →
          </a>
        </p>
      </div>
    </section>
  );
}
