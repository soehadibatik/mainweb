import type { Metadata } from "next";
import Link from "next/link";
import ClientLogo from "@/components/ClientLogo";
import JsonLd from "@/components/JsonLd";
import { getClients } from "@/lib/catalog";
import { caseStudies } from "@/lib/case-studies";
import { site, waLink } from "@/lib/site";
import { ogMeta } from "@/lib/og";

const pageTitle = "Klien: Portofolio Situs yang Sudah Kami Rilis";

const describe = (count: number) =>
  `Portofolio ${count} situs klien yang sudah kami rilis, mulai dari company profile dan toko online sampai dashboard internal.`;

/** Lebar col-span per item supaya baris terakhir grid penuh, tanpa sel bolong. */
function fillRow(count: number, cols: number): number[] {
  const spans = Array.from({ length: count }, () => 1);
  const rest = count % cols;
  if (rest === 0) return spans;
  // sisa item bisa dibagi rata: misal 6 item di 4 kolom -> baris akhir 2 sel lebar-penuh
  if (cols % rest === 0) {
    return spans.map((s, i) => (i >= count - rest ? cols / rest : s));
  }
  // sisa tidak bisa dibagi rata: item terakhir menyerap sisanya
  spans[count - 1] = cols - ((count - 1) % cols);
  return spans;
}

// ditulis literal, bukan template string, supaya terbaca scanner Tailwind
const SPAN = ["", "col-span-1", "col-span-2", "col-span-3", "col-span-4"];
const SPAN_MD = ["", "md:col-span-1", "md:col-span-2", "md:col-span-3", "md:col-span-4"];

export async function generateMetadata(): Promise<Metadata> {
  const { clients } = await getClients();
  const desc = describe(clients.length);

  return {
    title: pageTitle,
    description: desc,
    alternates: { canonical: "/klien" },
    ...ogMeta({
      title: `${pageTitle} | ${site.name}`,
      description: desc,
      url: "/klien",
      image: "/og/klien.png",
      alt: `Portofolio klien ${site.name}: ${clients.length} situs sudah kami rilis`,
    }),
  };
}

export default async function KlienPage() {
  const { clients, groups } = await getClients();
  const desc = describe(clients.length);

  const klienList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Klien mainweb.id",
    url: `${site.url}/klien`,
    inLanguage: "id-ID",
    description: desc,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: clients.length,
      itemListElement: clients.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        url: `https://${c.domain}`,
      })),
    },
  };

  // domain -> slug studi kasus, untuk menautkan kartu klien ke studinya
  const studyByDomain = new Map(caseStudies.map((cs) => [cs.domain, cs.slug]));

  return (
    <main className="flex-1">
      <JsonLd data={klienList} />
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <span>DOC · PORTOFOLIO / KLIEN</span>
          <span className="hidden sm:block">{clients.length} SITUS</span>
          <span className="text-brand-600">PUBLIK</span>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] text-ink-900/50 transition-colors hover:text-brand-600"
          >
            ← Beranda
          </Link>

          <div className="mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="reveal-mask">
              <div className="reveal reveal-blur">
                <p className="eyebrow"><span className="eyebrow-slash" aria-hidden>{"// "}</span>
                  Klien
                </p>
                <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] font-black tracking-[-0.035em] text-ink-950 text-balance">
                  Semua situs yang sudah kami rilis
                </h1>
              </div>
            </div>
            <p className="reveal reveal-d2 max-w-md text-sm leading-relaxed text-ink-900/60">
              Tersusun per kelompok: unggulan, ekosistem batik, dan proyek
              lain. Klik kartu untuk membuka situsnya.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {groups.map((g, gi) => {
            const base = fillRow(g.items.length, 2);
            const md = fillRow(g.items.length, 4);
            return (
            <div key={g.id} className={gi > 0 ? "mt-10" : ""}>
              <div className="reveal flex items-baseline justify-between gap-4 border-b border-line bg-paper py-3 font-mono text-[11px]">
                <span className="text-brand-600">{g.label}</span>
                <span className="text-ink-900/45">{g.items.length} situs</span>
              </div>
              <ul className="stagger grid grid-cols-2 border-l border-line md:grid-cols-4">
                {g.items.map((c, i) => {
                  const study = studyByDomain.get(c.domain);
                  return (
                  <li
                    key={c.domain}
                    className={`reveal flex min-w-0 flex-col ${SPAN[base[i]]} ${SPAN_MD[md[i]]}`}
                  >
                    <a
                      href={`https://${c.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-1 flex-col gap-4 border-r border-b border-line p-5 transition-colors hover:bg-paper hover:shadow-[inset_0_0_0_1px_rgba(0,71,210,0.35)] sm:p-6"
                    >
                      <span className="flex justify-end font-mono text-[11px]">
                        <span
                          aria-hidden
                          className="translate-x-1.5 text-transparent transition-all duration-300 group-hover:translate-x-0 group-hover:text-brand-600"
                        >
                          ↗
                        </span>
                      </span>
                      <span className="flex h-16 items-center justify-center sm:h-20">
                        <ClientLogo
                          src={c.logo}
                          alt={c.name}
                          w={c.w}
                          h={c.h}
                          className="max-h-11 w-auto max-w-full object-contain opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                        />
                      </span>
                      <span className="space-y-1.5">
                        <span className="block font-display text-sm font-bold tracking-tight text-ink-950 transition-colors group-hover:text-brand-600">
                          {c.name}
                        </span>
                        <span className="block font-mono text-[11px] break-all text-ink-900/60">
                          {c.domain}
                        </span>
                      </span>
                    </a>
                    {study && (
                      <Link
                        href={`/studi-kasus/${study}`}
                        className="border-r border-b border-line bg-paper px-5 py-3 font-mono text-[11px] text-brand-600 transition-colors hover:bg-white hover:text-ink-950"
                      >
                        Baca studi kasus
                      </Link>
                    )}
                  </li>
                  );
                })}
              </ul>
            </div>
            );
          })}

          <div className="reveal mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-ink-900/45">
              {clients.length} situs · semua logo diambil dari situsnya
              masing-masing
            </p>
            <Link
              href="/"
              className="font-mono text-[11px] text-brand-600 transition-colors hover:text-ink-950"
            >
              ← Kembali ke beranda
            </Link>
          </div>

          <div className="reveal reveal-d2 mt-8 flex flex-col gap-5 border border-ink-950 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="eyebrow"><span className="eyebrow-slash" aria-hidden>{"// "}</span>
                Proyek berikutnya
              </p>
              <p className="mt-2 font-display text-2xl font-black tracking-[-0.02em] text-ink-950 sm:text-3xl">
                Butuh situs untuk bisnis Anda?
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waLink("Halo mainweb.id, saya mau bikin situs.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Konsultasi gratis
              </a>
              <Link
                href="/#paket"
                className="btn btn-outline"
              >
                Lihat tarif
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
