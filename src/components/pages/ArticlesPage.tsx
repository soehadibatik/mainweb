import Link from "next/link";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default function ArticlesPage({ lang }: { lang: Locale }) {
  const isId = lang === "id";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isId ? "Artikel & Panduan Website" : "Articles & Web Guides",
    url: `${site.url}${localizePath(lang, "/artikel")}`,
    description: isId
      ? "Panduan praktis dan artikel edukasi seputar pembuatan website, biaya wajar, dan strategi digital untuk pemilik bisnis."
      : "Practical guides and educational articles on website development, fair pricing, and digital strategy for business owners.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}${localizePath(lang, `/artikel/${a.slug}`)}`,
        name: a.title,
      })),
    },
  };

  return (
    <main className="flex-1">
      <JsonLd data={jsonLd} />

      {/* Meta Bar */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <span>{isId ? "PANDUAN & EDUKASI WEB" : "WEB GUIDES & ARTICLES"}</span>
          <span className="text-brand-600 font-semibold">
            {articles.length} {isId ? "Artikel Diterbitkan" : "Published Articles"}
          </span>
        </div>
      </div>

      {/* Header */}
      <section className="relative overflow-hidden border-b border-line bg-paper py-16 sm:py-20">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">
            <span className="eyebrow-slash" aria-hidden>{"// "}</span>
            {isId ? "Wawasan Bisnis" : "Business Insights"}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] font-black tracking-tight text-ink-950">
            {isId ? "Panduan praktis untuk pemilik usaha." : "Practical guides for business owners."}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light text-ink-900/70 leading-relaxed">
            {isId
              ? "Tulisan ringkas dan faktual seputar biaya wajar pembuatan website, perbedaan jenis web, serta tips meningkatkan penjualan online."
              : "Concise, factual articles on fair web development costs, website types, and tips to increase online sales."}
          </p>
        </div>
      </section>

      {/* Daftar Artikel */}
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="reveal flex flex-col justify-between border border-line bg-paper p-6 sm:p-7 transition-all hover:border-brand-600/60 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-3 font-mono text-[11px]">
                    <span className="font-semibold text-brand-600 uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="text-ink-900/45">{art.readTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold tracking-tight text-ink-950 leading-snug">
                    <Link
                      href={localizePath(lang, `/artikel/${art.slug}`)}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {art.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-ink-900/65 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-line pt-4 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-ink-900/45">{art.publishedAt}</span>
                  <Link
                    href={localizePath(lang, `/artikel/${art.slug}`)}
                    className="font-semibold text-brand-600 hover:text-ink-950 transition-colors"
                  >
                    {isId ? "Baca Selengkapnya →" : "Read Article →"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
