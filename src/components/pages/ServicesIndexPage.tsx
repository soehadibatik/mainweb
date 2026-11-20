import Link from "next/link";
import { services } from "@/lib/services";
import { site, waLink } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default function ServicesIndexPage({ lang }: { lang: Locale }) {
  const isId = lang === "id";

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isId ? "Beranda" : "Home",
        item: `${site.url}${localizePath(lang, "/")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isId ? "Layanan" : "Services",
        item: `${site.url}${localizePath(lang, "/layanan")}`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isId ? "Layanan Pembuatan Website Hand-Built" : "Hand-Built Web Development Services",
    url: `${site.url}${localizePath(lang, "/layanan")}`,
    description: isId
      ? "Layanan pembuatan landing page, company profile, toko online mandiri, web app kustom, dan solusi lokal Solo Raya berstandar Core Web Vitals hijau."
      : "High-performance web services: landing pages, company profiles, online stores, custom web apps, and local web development.",
  };

  return (
    <main className="flex-1">
      <JsonLd data={breadcrumb} />
      <JsonLd data={collectionSchema} />

      {/* Meta Bar */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <span>{isId ? "LAYANAN UTAMA & SOLUSI BISNIS" : "CORE SERVICES & SOLUTIONS"}</span>
          <span className="text-brand-600 font-semibold">{services.length} {isId ? "Kategori Layanan" : "Service Categories"}</span>
        </div>
      </div>

      {/* Header */}
      <section className="relative overflow-hidden border-b border-line bg-paper py-16 sm:py-24">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">
            <span className="eyebrow-slash" aria-hidden>{"// "}</span>
            {isId ? "Solusi Web Hand-Built" : "Hand-Built Web Solutions"}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5vw,4.2rem)] font-black tracking-tight text-ink-950 leading-[1.08]">
            {isId ? "Layanan Pembuatan Website Sesuai Kebutuhan Nyata Bisnis Anda." : "Professional Web Services Tailored to Your Business Goals."}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light text-ink-900/70 leading-relaxed">
            {isId
              ? "Dari landing page cepat berkonversi tinggi, company profile korporasi bonafide, toko online mandiri tanpa komisi, hingga web app kustom terintegrasi. 100% hand-built tanpa template lambat."
              : "From high-converting landing pages and credible corporate company profiles to commission-free online stores and custom web apps. 100% hand-built, zero templates."}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((srv) => (
              <div
                key={srv.slug}
                className="flex flex-col justify-between border border-line bg-paper/20 p-8 transition-all hover:border-brand-600 hover:shadow-lg"
              >
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                    {srv.badge}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-ink-950">
                    <Link
                      href={localizePath(lang, `/layanan/${srv.slug}`)}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {srv.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-ink-900/75 leading-relaxed">
                    {srv.heroSubheadline}
                  </p>

                  <div className="mt-6 border-t border-line/60 pt-4">
                    <p className="font-mono text-[11px] text-ink-900/50 uppercase">
                      {isId ? "Mulai Investasi:" : "Starting From:"}
                    </p>
                    <p className="font-mono text-2xl font-bold text-ink-950">
                      {srv.startingPrice}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  <Link
                    href={localizePath(lang, `/layanan/${srv.slug}`)}
                    className="btn btn-outline w-full text-center text-xs"
                  >
                    {isId ? "Pelajari Solusi & Paket →" : "Explore Solutions & Plans →"}
                  </Link>
                  <a
                    href={waLink(
                      isId
                        ? `Halo mainweb.id, saya tertarik berkonsultasi mengenai "${srv.title}".`
                        : `Hello mainweb.id, I would like to consult about "${srv.title}".`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full text-center text-xs"
                  >
                    {isId ? "Konsultasi via WhatsApp" : "Consult via WhatsApp"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
