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

        <ul className="stagger mt-10 grid grid-cols-2 border-t border-l border-line sm:grid-cols-3 lg:grid-cols-6">
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
