import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { plans, getPlan } from "@/lib/plans";
import { site, waLink } from "@/lib/site";

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return plans.map((plan) => ({ id: plan.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const plan = getPlan(id);
  if (!plan) return {};

  const title = `Paket ${plan.name} — ${plan.build}`;
  const description = `${plan.tagline} Pembuatan ${plan.build}, maintain ${plan.maintain}${
    plan.renewal ? `, perpanjangan ${plan.renewal}/th` : ""
  }. Lihat spesifikasi lengkap di ${site.name}.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function PlanDetailPage({ params }: Params) {
  const { id } = await params;
  const plan = getPlan(id);
  if (!plan) notFound();

  const idx = plans.findIndex((p) => p.id === plan.id);
  const prev = idx > 0 ? plans[idx - 1] : null;
  const next = idx < plans.length - 1 ? plans[idx + 1] : null;

  const waMessage = `Halo ${site.name}, saya tertarik dengan paket ${plan.name} (${plan.build}). Bisa info lebih lanjut?`;

  return (
    <main className="flex-1">
      {/* Meta bar dokumen */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] tracking-[0.14em] text-ink-900/50 uppercase sm:px-6 lg:px-8">
          <span>
            DOC — LAMPIRAN PAKET / {plan.name.toUpperCase()}
          </span>
          <span className="hidden sm:block">PAKET {plan.name.toUpperCase()}</span>
          <span className="text-brand-600">AKTIF</span>
        </div>
      </div>

      {/* Header paket */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid-light pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/#paket"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-ink-900/50 uppercase transition-colors hover:text-brand-600"
          >
            ← Semua paket
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
                Paket {plan.name}
              </p>
              <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] font-black tracking-[-0.035em] text-ink-950 text-balance">
                {plan.tagline}
              </h1>
              <p className="mt-7 max-w-[58ch] leading-relaxed text-ink-900/70">
                <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-ink-900/50 uppercase">
                  Ideal untuk —{" "}
                </span>
                {plan.idealFor}
              </p>
            </div>

            {/* Kartu harga */}
            <div className="lg:col-span-5">
              <div className="border border-ink-900/12 bg-white shadow-[0_32px_64px_-32px_rgb(11_18_32/0.3)]">
                <div className="flex items-center justify-between border-b border-line px-6 py-3 font-mono text-[10px] tracking-[0.16em] text-ink-900/45 uppercase">
                  <span>RINGKASAN BIAYA</span>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-ink-900/45 uppercase">
                    Biaya pembuatan
                  </p>
                  <p className="mt-2 font-mono text-5xl font-semibold tracking-tight text-ink-950">
                    {plan.build}
                  </p>

                  <dl className="mt-7 space-y-3 border-t border-line pt-6 font-mono text-xs">
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="tracking-[0.14em] text-ink-900/45 uppercase">Maintain</dt>
                      <dd className="font-semibold text-ink-950">{plan.maintain}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="tracking-[0.14em] text-ink-900/45 uppercase">Perpanjangan</dt>
                      <dd className="font-semibold text-ink-950">
                        {plan.renewal ? `${plan.renewal}/th` : "—"}
                      </dd>
                    </div>
                  </dl>

                  <a
                    href={waLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 flex items-center justify-center gap-3 bg-brand-600 px-6 py-4 font-mono text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-brand-700"
                  >
                    Pesan paket {plan.short}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <p className="mt-3 text-center font-mono text-[10px] tracking-[0.14em] text-ink-900/40 uppercase">
                    Konsultasi gratis — tanpa komitmen
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
              Spesifikasi lengkap
            </h2>
            <span className="font-mono text-[11px] tracking-[0.16em] text-ink-900/45 uppercase">
              {plan.featureGroups.reduce((n, g) => n + g.items.length, 0)} butir — 3 kategori
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
                href={`/paket/${prev.id}`}
                className="group font-mono text-[11px] tracking-[0.14em] text-ink-900/55 uppercase transition-colors hover:text-brand-600"
              >
                ← Sebelumnya: {prev.name}
              </Link>
            ) : (
              <span className="font-mono text-[11px] tracking-[0.14em] text-ink-900/25 uppercase">
                — Awal daftar
              </span>
            )}
            {next ? (
              <Link
                href={`/paket/${next.id}`}
                className="group font-mono text-[11px] tracking-[0.14em] text-ink-900/55 uppercase transition-colors hover:text-brand-600 sm:text-right"
              >
                Selanjutnya: {next.name} →
              </Link>
            ) : (
              <span className="font-mono text-[11px] tracking-[0.14em] text-ink-900/25 uppercase sm:text-right">
                Akhir daftar —
              </span>
            )}
          </nav>

          <div className="mt-8">
            <h3 className="font-mono text-[10px] font-semibold tracking-[0.2em] text-ink-900/45 uppercase">
              Lihat paket lainnya
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {plans
                .filter((p) => p.id !== plan.id)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/paket/${p.id}`}
                    className="border border-line bg-white px-3.5 py-2 font-mono text-[10px] font-semibold tracking-[0.12em] text-ink-900/70 uppercase transition-colors hover:border-brand-600 hover:text-brand-600"
                  >
                    {p.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
