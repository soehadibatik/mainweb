import Link from "next/link";
import ClientLogo from "@/components/ClientLogo";
import { getClients } from "@/lib/catalog";
import { ui } from "@/lib/i18n/ui";
import { localizePath, type Locale } from "@/lib/i18n/config";

// Domain -> studi kasus, sesuai metadata di ./lib/case-studies
const STUDY_BY_DOMAIN: Record<string, string> = {
  "ciscsolo.com": "cisc-solo-raya",
  "batiksoehadi.com": "batik-soehadi",
  "bikinbatik.com": "bikin-batik",
  "dastermurah.com": "daster-murah",
  "bahankain.id": "bahan-kain",
  "batiksoehadi.my.id": "monitoring-batik",
};

export default async function Clients({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const { clients, featured } = await getClients();

  return (
    <section id="klien" className="border-b border-line bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div className="reveal-mask">
            <div className="reveal reveal-blur">
              <p className="eyebrow">
                <span className="eyebrow-slash" aria-hidden>{"// "}</span>
                {t.clients.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-balance text-ink-950 sm:text-5xl">
                {t.clients.heading}{" "}
                <span className="text-ink-900/40">{t.clients.headingMuted}</span>
              </h2>
            </div>
          </div>
          <div className="reveal reveal-d2 flex flex-col items-start gap-4">
            <p className="max-w-sm text-sm leading-relaxed text-ink-900/60">
              {t.clients.intro(featured.length)}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href={localizePath(lang, "/klien")} className="btn btn-outline">
                {t.clients.viewAll}
              </Link>
              <Link
                href={localizePath(lang, "/studi-kasus")}
                className="font-mono text-[11px] text-brand-600 transition-colors hover:text-ink-950"
              >
                {t.clients.viewCases}
              </Link>
            </div>
          </div>
        </div>

        {/* Showcase hasil karya nyata dengan screenshot langsung */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Batik Soehadi",
              domain: "batiksoehadi.com",
              tag: lang === "id" ? "Katalog & Brand Produsen" : "Catalog & Brand Producer",
              slug: "batik-soehadi",
              metric: "0.7s Mobile Load",
              stack: "Next.js + S3 CDN",
            },
            {
              name: "CISC Solo Raya",
              domain: "ciscsolo.com",
              tag: lang === "id" ? "Komunitas & Toko Merchandise" : "Community & Merchandise Store",
              slug: "cisc-solo-raya",
              metric: "100% PageSpeed",
              stack: "Next.js Static Export",
            },
            {
              name: "Bahan Kain ID",
              domain: "bahankain.id",
              tag: lang === "id" ? "B2B Tekstil & Supplier" : "B2B Textile & Supplier",
              slug: "bahan-kain",
              metric: "SEO Peringkat #1",
              stack: "Edge Network + SEO",
            },
            {
              name: "Daster Murah",
              domain: "dastermurah.com",
              tag: lang === "id" ? "Grosir Fashion & Alur WA" : "Fashion Wholesale & WA Checkout",
              slug: "daster-murah",
              metric: "Konversi WA Tinggi",
              stack: "Optimized Landing",
            },
            {
              name: "Bikin Batik Solo",
              domain: "bikinbatik.com",
              tag: lang === "id" ? "Custom Seragam & Maklon" : "Custom Uniforms & Manufacturing",
              slug: "bikin-batik",
              metric: "Desain Interaktif",
              stack: "Dynamic UI Component",
            },
            {
              name: "Monitoring Batik Prod",
              domain: "batiksoehadi.my.id",
              tag: lang === "id" ? "Internal Web App & Dashboard" : "Internal App & Operations Dashboard",
              slug: "monitoring-batik",
              metric: "Real-time Tracking",
              stack: "Custom Web App SaaS",
            },
          ].map((item) => (
            <article
              key={item.domain}
              className="reveal flex flex-col overflow-hidden border border-line bg-paper transition-all duration-300 hover:border-brand-600 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Browser bar */}
              <div className="flex items-center justify-between border-b border-line bg-white px-3.5 py-2 font-mono text-[11px] text-ink-900/60">
                <div className="flex items-center gap-1.5" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <span className="truncate px-2 text-[10px] text-ink-900/70 font-semibold">
                  https://{item.domain}
                </span>
                <span className="font-mono text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 uppercase">
                  Live
                </span>
              </div>
              {/* Screenshot */}
              <Link
                href={localizePath(lang, `/studi-kasus/${item.slug}`)}
                className="group relative aspect-[16/10] overflow-hidden bg-ink-900/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/case-studies/${item.domain}.webp`}
                  alt={`Tampilan situs ${item.name}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink-950/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded bg-paper px-3 py-1.5 font-mono text-xs font-semibold text-ink-950 shadow-md">
                    {lang === "id" ? "Buka Studi Kasus →" : "View Case Study →"}
                  </span>
                </div>
              </Link>
              {/* Info & link */}
              <div className="flex flex-1 flex-col justify-between p-5 bg-white">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-[10px] font-semibold text-brand-600 uppercase tracking-wider">
                      {item.tag}
                    </p>
                    <span className="rounded bg-brand-50 px-1.5 py-0.5 font-mono text-[10px] font-bold text-brand-700 border border-brand-200">
                      ⚡ {item.metric}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink-950 group-hover:text-brand-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-ink-900/50">
                    Stack: {item.stack}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 font-mono text-[11px]">
                  <a
                    href={`https://${item.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-900/60 transition-colors hover:text-brand-600 flex items-center gap-1 font-medium"
                  >
                    <span>{item.domain}</span>
                    <span aria-hidden>↗</span>
                  </a>
                  <Link
                    href={localizePath(lang, `/studi-kasus/${item.slug}`)}
                    className="font-bold text-brand-600 transition-colors hover:text-ink-950"
                  >
                    {t.clients.viewCases} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <ul className="stagger mt-12 grid grid-cols-2 border-t border-l border-line sm:grid-cols-3 lg:grid-cols-6">
          {featured.map((c) => {
            const study = STUDY_BY_DOMAIN[c.domain] ?? null;
            return (
              <li key={c.domain} className="reveal flex flex-col">
                <a
                  href={`https://${c.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-col gap-3 border-r border-b border-line px-4 py-6 text-center transition-colors hover:bg-paper hover:shadow-[inset_0_0_0_1px_rgba(0,71,210,0.35)] sm:py-7"
                >
                  <span className="flex h-14 w-full items-center justify-center sm:h-16">
                    <ClientLogo
                      src={c.logo}
                      alt={c.name}
                      w={c.w}
                      h={c.h}
                      className="max-h-12 w-auto max-w-full object-contain opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100 sm:max-h-14"
                    />
                  </span>
                  <span className="space-y-1.5">
                    <span className="block font-mono text-xs text-ink-900/75 transition-colors group-hover:text-ink-950">
                      {c.name}
                    </span>
                    <span className="block font-mono text-[11px] break-all text-ink-900/60 transition-colors group-hover:text-ink-900">
                      {c.domain}
                    </span>
                  </span>
                </a>
                {study ? (
                  <Link
                    href={localizePath(lang, `/studi-kasus/${study}`)}
                    className="reveal reveal-d3 mt-3 block rounded-b-sm border-t border-line px-2 py-2 font-mono text-[11px] text-brand-600 transition-colors hover:text-ink-950"
                  >
                    {t.clients.viewCases}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>

        <p className="reveal mt-6 font-mono text-xs text-ink-900/50">
          {t.clients.countNote(featured.length, clients.length)}
        </p>
      </div>
    </section>
  );
}
