import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlan, getPlans } from "@/lib/catalog";
import { site, waLink } from "@/lib/site";
import { ogMeta } from "@/lib/og";
import JsonLd from "@/components/JsonLd";
import { fullPrice } from "@/lib/tiers";

type Params = { params: Promise<{ id: string }> };

const PAGE_TITLES: Record<string, { title: string; ogTitle: string; desc: string; ogDesc: string }> = {
  x: {
    title: "Paket X — Sistem digital terstruktur untuk perusahaan",
    ogTitle: "Paket X — Sistem digital terstruktur",
    desc: "Paket X: sistem digital terstruktur untuk portal, dashboard, integrasi internal, dan alur kerja yang disesuaikan dengan operasional perusahaan Anda.",
    ogDesc: "Paket X: sistem digital terstruktur untuk portal, dashboard, dan alur kerja perusahaan.",
  },
  y: {
    title: "Paket Y — Website yang terhubung dengan sistem bisnis",
    ogTitle: "Paket Y — Website terintegrasi dengan operasional",
    desc: "Paket Y: website yang terhubung dengan aplikasi internal, integrasi pihak ketiga, dan alur kerja otomatis untuk perusahaan dengan kebutuhan lebih kompleks.",
    ogDesc: "Paket Y: website terintegrasi dengan sistem dan operasional bisnis Anda.",
  },
  z: {
    title: "Paket Z — Ekosistem digital menyeluruh untuk korporasi",
    ogTitle: "Paket Z — Ekosistem digital perusahaan",
    desc: "Paket Z: ekosistem digital menyeluruh untuk korporasi atau grup usaha yang mengoperasikan platform digital sebagai infrastruktur utama.",
    ogDesc: "Paket Z: ekosistem digital menyeluruh untuk korporasi dan grup usaha.",
  },
};


/**
 * Gambar OG per paket ada sebagai berkas statis di public/og/. Paket yang
 * belum punya berkasnya (mis. Unicorn X/Y/Z) jangan ditulis ke metadata —
 * og:image yang 404 membuat kartu share rusak, lebih baik pakai gambar
 * bawaan dari ogMeta.
 */
function ogImage(id: string): string | undefined {
  const file = `/og/paket-${id}.png`;
  return existsSync(path.join(process.cwd(), "public", file)) ? file : undefined;
}

// Static export: slug yang tidak dikenal harus 404, bukan dirender saat runtime.
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  const plans = await getPlans();
  return plans.map((plan) => ({ id: plan.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const plan = await getPlan(id);
  if (!plan) return {};

  const t = PAGE_TITLES[id];
  const title = t
    ? t.title
    : `Paket ${plan.name}: ${plan.build}`;
  const description = t
    ? t.desc
    : `Paket ${plan.name}. ${plan.tagline} Lihat spesifikasi dan biaya yang tertulis di muka.`;
  const description_withoutTagline = t
    ? t.ogDesc
    : `Paket ${plan.name}: ${plan.build}. Lihat spesifikasi dan biaya yang tertulis di muka.`;

  return {
    title,
    description,
    alternates: { canonical: `/paket/${plan.id}` },
    ...ogMeta({
      url: `/paket/${plan.id}`,
      title: t && t.ogTitle
        ? `${t.ogTitle} | ${site.name}`
        : `${title} | ${site.name}`,
      description: t ? t.ogDesc : description_withoutTagline,
      image: ogImage(plan.id),
      alt: `Paket ${plan.name} ${plan.build}: ${plan.tagline}`,
    }),
  };
}


export default async function PlanDetailPage({ params }: Params) {
  const { id } = await params;
  const plans = await getPlans();
  const plan = await getPlan(id);
  if (!plan) notFound();

  const idx = plans.findIndex((p) => p.id === plan.id);
  const prev = idx > 0 ? plans[idx - 1] : null;
  const next = idx < plans.length - 1 ? plans[idx + 1] : null;

  const waMessage = `Halo ${site.name}, saya melihat paket ${plan.name} (${fullPrice(plan.build)}). Boleh jelaskan lebih detail?`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: `Paket ${plan.name}`,
        item: `${site.url}/paket/${plan.id}`,
      },
    ],
  };

  return (
    <main className="flex-1">
      <JsonLd data={breadcrumb} />
      {/* Meta bar dokumen */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <span>
            DOC · LAMPIRAN PAKET / {plan.name.toUpperCase()}
          </span>
          <span className="hidden sm:block">PAKET {plan.name.toUpperCase()}</span>
          <span className="text-brand-600">AKTIF</span>
        </div>
      </div>

      {/* Header paket */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/#paket"
            className="reveal inline-flex items-center gap-2 font-mono text-[11px] text-ink-900/50 transition-colors hover:text-brand-600"
          >
            ← Semua paket
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="reveal-mask">
                <div className="reveal reveal-blur">
                  <p className="eyebrow"><span className="eyebrow-slash" aria-hidden>{"// "}</span>
                    Paket {plan.name}
                  </p>
                  <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] font-black tracking-[-0.035em] text-ink-950 text-balance">
                    {plan.tagline}
                  </h1>
                </div>
              </div>
              <p className="reveal reveal-d2 mt-7 max-w-[58ch] leading-relaxed text-ink-900/70">
                <span className="font-mono text-[11px] font-semibold text-ink-900/50">
                  Ideal untuk:{" "}
                </span>
                {plan.idealFor}
              </p>
            </div>

            {/* Kartu harga */}
            <div className="reveal reveal-d3 lg:col-span-5">
              <div className="border border-ink-900/12 bg-white shadow-[0_32px_64px_-32px_rgb(11_18_32/0.3)]">
                <div className="flex items-center justify-between border-b border-line px-6 py-3 font-mono text-[11px] text-ink-900/45">
                  <span>RINGKASAN BIAYA</span>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[11px] text-ink-900/45">
                    Biaya pembuatan
                  </p>
                  <p className="mt-2 font-mono text-5xl font-semibold tracking-tight text-ink-950">
                    {fullPrice(plan.build)}
                  </p>

                  <dl className="mt-7 space-y-3 border-t border-line pt-6 font-mono text-xs">
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="tracking-[0.14em] text-ink-900/45">Maintain</dt>
                      <dd className="font-semibold text-ink-950">{fullPrice(plan.maintain)}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="tracking-[0.14em] text-ink-900/45">Perpanjangan</dt>
                      <dd className="font-semibold text-ink-950">
                        {plan.renewal ? `${fullPrice(plan.renewal)}/th` : "Termasuk"}
                      </dd>
                    </div>
                  </dl>

                  <a
                    href={waLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-8 w-full"
                  >
                    Pesan paket {plan.short}
                  </a>
                  <p className="mt-3 text-center font-mono text-[11px] text-ink-900/40">
                    Konsultasi gratis, tanpa komitmen
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
            <span className="font-mono text-[11px] text-ink-900/45">
              {plan.featureGroups.reduce((n, g) => n + g.items.length, 0)} butir, {plan.featureGroups.length} kategori
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
                className="group font-mono text-[11px] text-ink-900/55 transition-colors hover:text-brand-600"
              >
                ← Sebelumnya: {prev.name}
              </Link>
            ) : (
              <span className="font-mono text-[11px] text-ink-900/25">
                Awal daftar
              </span>
            )}
            {next ? (
              <Link
                href={`/paket/${next.id}`}
                className="group font-mono text-[11px] text-ink-900/55 transition-colors hover:text-brand-600 sm:text-right"
              >
                Selanjutnya: {next.name} →
              </Link>
            ) : (
              <span className="font-mono text-[11px] text-ink-900/25 sm:text-right">
                Akhir daftar
              </span>
            )}
          </nav>

          <div className="mt-8">
            <p className="font-mono text-[11px] font-semibold text-ink-900/45">
              Lihat paket lainnya
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {plans
                .filter((p) => p.id !== plan.id)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/paket/${p.id}`}
                    className="border border-line bg-white px-3.5 py-2 font-mono text-[11px] font-semibold text-ink-900/70 transition-colors hover:border-brand-600 hover:text-brand-600"
                  >
                    {p.name} · {fullPrice(p.build)}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
