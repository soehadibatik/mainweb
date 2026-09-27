import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { clients } from "@/lib/clients";
import { site } from "@/lib/site";

const desc = `Portofolio ${clients.length} situs klien yang sudah kami rilis — dari company profile, toko online, hingga dashboard internal.`;

export const metadata: Metadata = {
  title: "Klien — Portofolio Situs yang Sudah Kami Rilis",
  description: desc,
  alternates: { canonical: "/klien" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/klien",
    siteName: "mainweb.id",
    title: `Klien — Portofolio Situs yang Sudah Kami Rilis | mainweb.id`,
    description: desc,
    images: [{ url: "/logo-mainweb.png", width: 1672, height: 941, alt: "mainweb.id" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Klien — Portofolio Situs yang Sudah Kami Rilis | mainweb.id`,
    description: desc,
    images: ["/logo-mainweb.png"],
  },
};

const klienList = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Klien — mainweb.id",
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

export default function KlienPage() {
  return (
    <main className="flex-1">
      <JsonLd data={klienList} />
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] tracking-[0.14em] text-ink-900/50 uppercase sm:px-6 lg:px-8">
          <span>DOC — PORTOFOLIO / KLIEN</span>
          <span className="hidden sm:block">{clients.length} SITUS</span>
          <span className="text-brand-600">PUBLIK</span>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid-light pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-ink-900/50 uppercase transition-colors hover:text-brand-600"
          >
            ← Beranda
          </Link>

          <div className="mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
                Klien
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] font-black tracking-[-0.035em] text-ink-950 text-balance">
                Semua situs yang sudah kami rilis
              </h1>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-900/60">
              Setiap logo diambil langsung dari situs masing-masing klien. Klik
              kartu untuk membuka situsnya di tab baru.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 border-t border-l border-line md:grid-cols-4">
            {clients.map((c) => (
              <li key={c.domain}>
                <a
                  href={`https://${c.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-4 border-r border-b border-line p-5 transition-colors hover:bg-paper sm:p-6"
                >
                  <span className="flex h-16 items-center justify-center sm:h-20">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      unoptimized={c.logo.endsWith(".svg")}
                      className="max-h-11 w-auto max-w-full object-contain opacity-85 transition duration-300 group-hover:opacity-100"
                    />
                  </span>
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-sm font-bold tracking-tight text-ink-950">
                      {c.name}
                    </span>
                    <span
                      aria-hidden
                      className="text-ink-900/30 transition-colors group-hover:text-brand-600"
                    >
                      ↗
                    </span>
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.12em] break-all text-ink-900/45 uppercase">
                    {c.domain}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] tracking-[0.14em] text-ink-900/45 uppercase">
              {clients.length} situs tampil · klik kartu untuk membuka
            </p>
            <Link
              href="/"
              className="font-mono text-[11px] tracking-[0.14em] text-brand-600 uppercase transition-colors hover:text-ink-950"
            >
              ← Kembali ke beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
