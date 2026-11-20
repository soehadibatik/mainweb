import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default function HomeArticlesSection({ lang }: { lang: Locale }) {
  const isId = lang === "id";
  // Ambil 3 artikel teratas yang punya gambar
  const featuredArticles = articles.filter((a) => a.image).slice(0, 3);

  return (
    <section className="border-b border-line bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-slash" aria-hidden>{"// "}</span>
              {isId ? "Wawasan & Otoritas Digital" : "Insights & Digital Authority"}
            </p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-balance text-ink-950 sm:text-5xl">
              {isId ? "Edukasi & Analisis " : "Insights & Analysis "}
              <span className="text-ink-900/40">
                {isId ? "Teknologi Web Modern" : "Modern Web Engineering"}
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="max-w-md text-sm leading-relaxed text-ink-900/60">
              {isId
                ? "Pelajari arsitektur performa, strategi SEO komersial, dan perbandingan biaya infrastruktur untuk memaksimalkan ROI website bisnis Anda."
                : "Explore performance architecture, commercial SEO strategies, and cloud infrastructure cost comparisons to maximize your website ROI."}
            </p>
            <Link
              href={localizePath(lang, "/artikel")}
              className="font-mono text-xs font-semibold text-brand-600 transition-colors hover:text-ink-950 inline-flex items-center gap-1.5"
            >
              {isId ? "Buka Semua Artikel & Panduan" : "Browse All Articles & Guides"} →
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:border-brand-600 hover:shadow-lg"
            >
              <Link
                href={localizePath(lang, `/artikel/${article.slug}`)}
                className="relative aspect-[16/9] w-full overflow-hidden bg-ink-900/5"
              >
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <span className="absolute top-3 left-3 bg-paper/90 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-ink-950 uppercase backdrop-blur-sm border border-line/50">
                  {article.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-ink-900/50">
                    <time dateTime={article.publishedAt}>{article.publishedAt}</time>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-ink-950 group-hover:text-brand-600 transition-colors line-clamp-2">
                    <Link href={localizePath(lang, `/artikel/${article.slug}`)}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-900/65 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-line/60 pt-4 flex items-center justify-between font-mono text-xs">
                  <Link
                    href={localizePath(lang, `/artikel/${article.slug}`)}
                    className="font-semibold text-brand-600 transition-colors group-hover:text-ink-950 inline-flex items-center gap-1"
                  >
                    {isId ? "Baca Selengkapnya" : "Read Article"} →
                  </Link>
                  <span className="text-[11px] text-ink-900/40">MainWeb Lab</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
