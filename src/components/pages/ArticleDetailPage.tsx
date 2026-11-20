import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticle, articles } from "@/lib/articles";
import { site, waLink } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { localizePath, type Locale } from "@/lib/i18n/config";
import {
  ArticleContentRenderer,
  renderFormattedInline,
} from "@/components/ArticleContentRenderer";

export default function ArticleDetailPage({
  slug,
  lang,
  basePath = "/blog",
}: {
  slug: string;
  lang: Locale;
  basePath?: "/blog" | "/artikel";
}) {
  const article = getArticle(slug);
  if (!article) notFound();

  const isId = lang === "id";
  const otherArticles = articles.filter((a) => a.slug !== article.slug);
  const currentPath = `${basePath}/${article.slug}`;

  // Suggest articles for in-content reading: prefer same category, fallback to others
  const inContentSuggested = otherArticles
    .filter((a) => a.category === article.category)
    .concat(otherArticles.filter((a) => a.category !== article.category))
    .slice(0, 2);

  // Bottom articles: next 3 articles
  const bottomSuggested = otherArticles
    .filter((a) => !inContentSuggested.some((s) => s.slug === a.slug))
    .slice(0, 3);

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      datePublished: article.publishedAt,
      ...(article.image && { image: [article.image] }),
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
      mainEntityOfPage: `${site.url}${localizePath(lang, currentPath)}`,
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
          name: basePath === "/blog" ? "Blog" : isId ? "Artikel" : "Articles",
          item: `${site.url}${localizePath(lang, basePath)}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `${site.url}${localizePath(lang, currentPath)}`,
        },
      ],
    },
  ];

  if (article.faqs && article.faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  // Calculate midpoints for natural in-content suggestions
  const midPointIdx = Math.floor(article.sections.length / 2);

  return (
    <main className="flex-1">
      {jsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      {/* Meta Bar */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <Link
            href={localizePath(lang, basePath)}
            className="hover:text-brand-600 transition-colors"
          >
            ← {basePath === "/blog" ? (isId ? "Semua Blog & Panduan" : "All Blog & Guides") : isId ? "Semua Artikel" : "All Articles"}
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

          {/* Featured Snippet Box / Quick Answer */}
          <div className="mt-6 border-l-4 border-brand-600 bg-white p-5 shadow-sm">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-700 mb-1">
              {isId ? "Ringkasan Singkat / Quick Answer" : "Quick Summary"}
            </p>
            <p className="text-lg font-light text-ink-950 leading-relaxed">
              {renderFormattedInline(article.summary, lang)}
            </p>
          </div>

          {/* Featured Hero Illustration */}
          {article.image && (
            <div className="mt-8 overflow-hidden rounded-lg border border-line shadow-sm bg-white">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content Body */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {article.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-5">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink-950 pt-4 border-t border-line/50 first:border-t-0 first:pt-0">
                  {section.heading}
                </h2>

                {/* Structured paragraph/list renderer */}
                <ArticleContentRenderer
                  paragraphs={section.paragraphs}
                  lang={lang}
                />

                {/* Table if present */}
                {section.table && (
                  <div className="my-6 overflow-x-auto rounded border border-line bg-paper/50 p-2 sm:p-4">
                    <table className="w-full text-left text-sm text-ink-900">
                      <thead>
                        <tr className="border-b border-line/80 font-mono text-xs uppercase text-ink-950">
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-3 py-2 sm:px-4 sm:py-3 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line/50">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/80 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-3 py-2 sm:px-4 sm:py-3 leading-relaxed">
                                {renderFormattedInline(cell, lang)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* IN-CONTENT SUGGESTED ARTICLES (Di tengah-tengah artikel seperti portal berita modern) */}
                {sIdx === midPointIdx && inContentSuggested.length > 0 && (
                  <div className="my-10 border-y-2 border-brand-600/30 bg-paper/70 p-6 sm:p-7 rounded-none">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-800">
                        {isId ? "Baca Juga Wawasan Terkait:" : "Also Read Related Insights:"}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {inContentSuggested.map((sug) => (
                        <div
                          key={sug.slug}
                          className="group flex flex-col justify-between border border-line bg-white p-4 transition-all hover:border-brand-600 hover:shadow-sm"
                        >
                          <div>
                            {sug.image && (
                              <div className="relative aspect-[16/9] w-full overflow-hidden rounded mb-2.5 bg-paper">
                                <Image
                                  src={sug.image}
                                  alt={sug.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                            )}
                            <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-brand-600">
                              {sug.category}
                            </span>
                            <h4 className="mt-1 font-display text-sm font-bold text-ink-950 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
                              <Link href={localizePath(lang, `${basePath}/${sug.slug}`)}>
                                {sug.title}
                              </Link>
                            </h4>
                          </div>
                          <Link
                            href={localizePath(lang, `${basePath}/${sug.slug}`)}
                            className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-brand-700 hover:underline"
                          >
                            {isId ? "Baca selengkapnya →" : "Read more →"}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Middle Consultation CTA Box (Muncul 1 section setelah in-content suggestions) */}
                {sIdx === midPointIdx + 1 && (
                  <div className="my-8 rounded-lg border-2 border-dashed border-brand-500/50 bg-brand-50/40 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-700">
                          Konsultasi Pemetaan Solusi Gratis
                        </p>
                        <h4 className="mt-1 font-display text-lg font-bold text-ink-950">
                          Bingung menentukan paket atau spesifikasi web yang tepat?
                        </h4>
                        <p className="mt-1 text-sm text-ink-900/75">
                          Diskusikan langsung kebutuhan Anda bersama technical lead mainweb.id tanpa biaya dan tanpa kewajiban beli.
                        </p>
                      </div>
                      <a
                        href={waLink(
                          `Halo mainweb.id, saya membaca artikel "${article.title}" dan ingin konsultasi gratis mengenai kebutuhan website saya.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary whitespace-nowrap text-sm"
                      >
                        Tanya via WhatsApp →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Accordion / List */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="mt-16 border-t-2 border-line pt-12">
              <h3 className="font-display text-2xl font-bold text-ink-950 mb-6">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h3>
              <div className="space-y-6">
                {article.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="border border-line rounded-lg p-5 bg-paper/40">
                    <h4 className="font-display text-base sm:text-lg font-bold text-ink-950">
                      {faq.q}
                    </h4>
                    <div className="mt-2 text-sm sm:text-base text-ink-900/80 leading-relaxed">
                      {renderFormattedInline(faq.a, lang)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Consultation CTA Box */}
          <div className="mt-14 border border-brand-600 bg-paper p-6 sm:p-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-950">
              {isId ? "Siap Membangun Website Hand-Built dengan Harga Terbuka?" : "Ready to Build a Hand-Built Website with Transparent Pricing?"}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-ink-900/75 leading-relaxed">
              {isId
                ? "Di mainweb.id, seluruh 15 paket memiliki rincian biaya yang pasti di muka (mulai Rp 1,5 jt). Dikerjakan tangan melalui 6 tahap ketat, Core Web Vitals terjamin hijau, dan didukung CMS ramah pengelola."
                : "At mainweb.id, all 15 packages feature upfront pricing starting at Rp 1.5M. Hand-built through a rigorous 6-stage process, verified Core Web Vitals green, and powered by an easy-to-use CMS."}
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
                {isId ? "Lihat 15 Pilihan Paket" : "Explore 15 Web Plans"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel Terkait Bawah */}
      {bottomSuggested.length > 0 && (
        <section className="border-b border-line bg-paper py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="font-display text-xl font-bold text-ink-950 mb-6">
              {isId ? "Rekomendasi Panduan & Artikel Lainnya" : "More Recommended Guides"}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bottomSuggested.map((other) => (
                <div
                  key={other.slug}
                  className="border border-line bg-white p-5 transition-all hover:border-brand-600 flex flex-col justify-between"
                >
                  <div>
                    {other.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden mb-3 bg-paper">
                        <Image
                          src={other.image}
                          alt={other.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span className="font-mono text-[10px] text-brand-600 uppercase font-semibold">
                      {other.category}
                    </span>
                    <h4 className="mt-2 font-display text-base font-bold text-ink-950">
                      <Link
                        href={localizePath(lang, `${basePath}/${other.slug}`)}
                        className="hover:text-brand-600 transition-colors"
                      >
                        {other.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-xs text-ink-900/60 leading-relaxed line-clamp-3">
                      {other.summary}
                    </p>
                  </div>
                  <Link
                    href={localizePath(lang, `${basePath}/${other.slug}`)}
                    className="mt-4 font-mono text-xs text-brand-700 font-medium hover:underline inline-block"
                  >
                    Baca panduan →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
