import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { site, waLink } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import ClientLogo from "@/components/ClientLogo";

const pageTitle = "Studi Kasus Website: Proyek Nyata yang Sudah Kami Rilis";

const describe = () =>
  `${caseStudies.length} studi kasus proyek website nyata: komunitas dengan toko merchandise, katalog B2B produsen batik, toko grosir, portal konten, sampai sistem back office internal.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: describe(),
  alternates: { canonical: "/studi-kasus" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/studi-kasus",
    siteName: site.name,
    title: `${pageTitle} | ${site.name}`,
    description: describe(),
    images: [{ url: "/logo.png", width: 1670, height: 942, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${site.name}`,
    description: describe(),
    images: ["/logo.png"],
  },
};

export default function StudiKasusIndex() {
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    url: `${site.url}/studi-kasus`,
    inLanguage: "id-ID",
    description: describe(),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: caseStudies.length,
      itemListElement: caseStudies.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.headline,
        url: `${site.url}/studi-kasus/${c.slug}`,
      })),
    },
  };

  return (
    <main className="flex-1">
      <JsonLd data={collection} />

      {/* Meta bar dokumen — konsisten dengan halaman lain */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] tracking-[0.14em] text-ink-900/50 uppercase sm:px-6 lg:px-8">
          <span>DOC · STUDI KASUS</span>
          <span className="hidden sm:block">{caseStudies.length} PROYEK</span>
          <span className="text-brand-600">PUBLIK</span>
        </div>
      </div>

      {/* Header */}
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
                Studi kasus
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] font-black tracking-[-0.035em] text-balance text-ink-950">
                Bagaimana website klien kami dibangun, dijabarkan apa adanya
              </h1>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-900/60">
              Setiap studi kasus menjabarkan kebutuhan klien dan fitur yang
              benar-benar tayang di situsnya, ditutup rekomendasi paket untuk
              kebutuhan serupa. Daftar lengkap situs ada di{" "}
              <Link
                href="/klien"
                className="font-semibold text-brand-600 hover:text-ink-950"
              >
                halaman klien
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Daftar studi kasus */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-px border border-line bg-line lg:grid-cols-2">
            {caseStudies.map((c) => (
              <li key={c.slug} className="bg-white">
                <Link
                  href={`/studi-kasus/${c.slug}`}
                  className="group flex h-full flex-col gap-4 p-7 transition-colors hover:bg-paper sm:p-9"
                >
                  <span className="flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.16em] text-ink-900/45 uppercase">
                    {c.category}
                    <span className="hidden sm:block">{c.domain}</span>
                  </span>

                  <span className="flex h-12 items-center">
                    <ClientLogo
                      src={c.logo}
                      alt={c.client}
                      w={c.logoW}
                      h={c.logoH}
                      className="max-h-10 w-auto max-w-[180px] object-contain opacity-85 transition duration-300 group-hover:opacity-100"
                    />
                  </span>

                  <span className="mt-1 block font-display text-xl font-black tracking-[-0.02em] text-balance text-ink-950 transition-colors group-hover:text-brand-600 sm:text-2xl">
                    {c.headline}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-900/60">
                    {c.summary}
                  </span>

                  <span className="mt-auto pt-2 font-mono text-[10px] tracking-[0.16em] text-brand-600 uppercase transition-colors group-hover:text-ink-950">
                    Baca studi kasus
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA penutup */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 border border-ink-950 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
                Proyek berikutnya
              </p>
              <p className="mt-2 font-display text-2xl font-black tracking-[-0.02em] text-ink-950 sm:text-3xl">
                Butuh website seperti ini untuk bisnis Anda?
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waLink(
                  "Halo mainweb.id, saya membaca studi kasus Anda dan ingin diskusi proyek serupa.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-600 px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-brand-500"
              >
                Konsultasi gratis
              </a>
              <Link
                href="/#paket"
                className="border border-ink-900/25 px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-ink-950 uppercase transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-white"
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
