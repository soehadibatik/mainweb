import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, articles } from "@/lib/articles";
import { site, waLink } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default function ArticleDetailPage({
  slug,
  lang,
}: {
  slug: string;
  lang: Locale;
}) {
  const article = getArticle(slug);
  if (!article) notFound();

  const isId = lang === "id";
  const otherArticles = articles.filter((a) => a.slug !== article.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      datePublished: article.publishedAt,
      author: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      mainEntityOfPage: `${site.url}${localizePath(lang, `/artikel/${article.slug}`)}`,
    },
    {
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
          name: isId ? "Artikel" : "Articles",
          item: `${site.url}${localizePath(lang, "/artikel")}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `${site.url}${localizePath(lang, `/artikel/${article.slug}`)}`,
        },
      ],
    },
  ];

  return (
    <main className="flex-1">
      {jsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      {/* Meta Bar */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <Link
            href={localizePath(lang, "/artikel")}
            className="hover:text-brand-600 transition-colors"
          >
            ← {isId ? "Semua Artikel" : "All Articles"}
          </Link>
          <span className="text-brand-600 font-semibold">{article.category}</span>
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="relative overflow-hidden border-b border-line bg-paper py-14 sm:py-20">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-brand-600 font-semibold uppercase tracking-wider">
            {article.category} • {article.publishedAt}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-tight text-ink-950 leading-[1.08]">
            {article.title}
          </h1>
          <p className="mt-6 text-lg font-light text-ink-900/75 leading-relaxed border-l-2 border-brand-600 pl-4 bg-white/50 py-2">
            {article.summary}
          </p>
        </div>
      </section>

      {/* Content Body */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {article.sections.map((section) => (
              <div key={section.heading} className="space-y-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink-950">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base text-ink-900/80 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Consultation CTA Box */}
          <div className="mt-14 border border-brand-600 bg-paper p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-ink-950">
              {isId ? "Punya pertanyaan seputar pembuatan website Anda?" : "Have questions about building your website?"}
            </h3>
            <p className="mt-2 text-sm text-ink-900/70 leading-relaxed">
              {isId
                ? "Diskusikan rencana dan anggaran situs bisnis Anda bersama tim kami. Konsultasi awal gratis via WhatsApp tanpa komitmen apa pun."
                : "Discuss your project scope and budget with our team. Initial consultation is free via WhatsApp with zero commitment."}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <a
                href={waLink(
                  isId
                    ? `Halo mainweb.id, saya membaca artikel "${article.title}" dan ingin konsultasi pembuatan website.`
                    : `Hello mainweb.id, I read the article "${article.title}" and would like to consult about website development.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {isId ? "Konsultasi Gratis via WhatsApp" : "Free WhatsApp Consultation"}
              </a>
              <Link
                href={localizePath(lang, "/#paket")}
                className="btn btn-outline"
              >
                {isId ? "Lihat 15 Paket Web" : "Explore 15 Web Plans"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel Terkait */}
      {otherArticles.length > 0 && (
        <section className="border-b border-line bg-paper py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="font-display text-xl font-bold text-ink-950 mb-6">
              {isId ? "Artikel Lainnya" : "More Articles"}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {otherArticles.slice(0, 2).map((other) => (
                <div
                  key={other.slug}
                  className="border border-line bg-white p-5 transition-all hover:border-brand-600"
                >
                  <span className="font-mono text-[10px] text-brand-600 uppercase font-semibold">
                    {other.category}
                  </span>
                  <h4 className="mt-2 font-display text-base font-bold text-ink-950">
                    <Link
                      href={localizePath(lang, `/artikel/${other.slug}`)}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {other.title}
                    </Link>
                  </h4>
                  <p className="mt-2 text-xs text-ink-900/60 leading-relaxed line-clamp-2">
                    {other.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
