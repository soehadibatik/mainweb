"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { site, waLink } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default function ArticlesPage({ lang }: { lang: Locale }) {
  const isId = lang === "id";
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(articles.map((a) => a.category));
    return Array.from(set);
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchCat =
        activeCategory === "all" || a.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured Hero Article (Pillar 1 or the first matching article)
  const heroArticle =
    filteredArticles.find(
      (a) => a.slug === "biaya-pembuatan-website-bisnis-2026"
    ) || filteredArticles[0];

  // Secondary highlights next to hero
  const secondaryHeroArticles = useMemo(() => {
    return articles
      .filter(
        (a) =>
          a.slug === "perbedaan-company-profile-landing-page-web-app" ||
          a.slug === "jasa-pembuatan-website-solo-karanganyar-jawa-tengah"
      )
      .slice(0, 2);
  }, []);

  // Editorial Highlights (Sorotan Redaksi / Top 5)
  const editorialHighlights = useMemo(() => {
    return [
      "biaya-pembuatan-website-bisnis-2026",
      "perbedaan-company-profile-landing-page-web-app",
      "pentingnya-core-web-vitals-untuk-seo-bisnis",
      "rincian-biaya-maintenance-website",
      "jasa-website-murah-vs-profesional",
    ]
      .map((slug) => articles.find((a) => a.slug === slug))
      .filter((a): a is (typeof articles)[0] => Boolean(a));
  }, []);

  // Grid list (exclude heroArticle from the main grid if viewing all without search)
  const gridArticles = useMemo(() => {
    if (activeCategory === "all" && !searchQuery) {
      return filteredArticles.filter((a) => a.slug !== heroArticle?.slug);
    }
    return filteredArticles;
  }, [filteredArticles, heroArticle, activeCategory, searchQuery]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isId ? "Artikel & Panduan Website" : "Articles & Web Guides",
    url: `${site.url}${localizePath(lang, "/artikel")}`,
    description: isId
      ? "Portal berita dan panduan praktis seputar pembuatan website hand-built, biaya wajar, arsitektur teknis, dan strategi digital untuk pemilik bisnis."
      : "News portal and practical guides on hand-built website development, fair pricing, technical architecture, and digital strategy.",
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
    <main className="flex-1 bg-paper/30">
      <JsonLd data={jsonLd} />

      {/* Meta Bar */}
      <div className="border-b border-line pt-14 bg-paper/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-3 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <span>{isId ? "PORTAL BERITA & PANDUAN WEB" : "WEB NEWS & INSIGHTS PORTAL"}</span>
          <div className="flex items-center gap-4">
            <span className="text-brand-600 font-semibold">
              {articles.length} {isId ? "Artikel Diterbitkan" : "Published Articles"}
            </span>
            <span className="hidden sm:inline text-ink-900/30">|</span>
            <span className="hidden sm:inline">{isId ? "Update Mingguan" : "Weekly Updates"}</span>
          </div>
        </div>
      </div>

      {/* Portal Header (Ruang Redaksi style seperti batiksoehadi.com) */}
      <section className="border-b border-line bg-paper py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
                {isId ? "Ruang Redaksi mainweb.id" : "mainweb.id Editorial Room"}
              </p>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-950">
                {isId ? "Wawasan Web & Rekayasa Digital" : "Web Insights & Digital Engineering"}
              </h1>
              <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-ink-900/70">
                {isId
                  ? "Panduan komprehensif biaya pembuatan web, standar performa Core Web Vitals, dan strategi arsitektur digital teruji untuk pemilik bisnis."
                  : "Comprehensive guides on web development pricing, Core Web Vitals standards, and proven digital architectures."}
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-900/40 pointer-events-none">
                <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isId ? "Cari topik atau keyword..." : "Search topics or keywords..."}
                className="w-full border border-line bg-white py-2.5 pl-10 pr-4 font-sans text-sm text-ink-950 placeholder:text-ink-900/40 outline-none transition-colors focus:border-brand-600"
              />
            </div>
          </div>

          {/* Kanal / Category Horizontal Nav Filter */}
          <nav aria-label="Kanal artikel" className="mt-8 flex items-center gap-2 overflow-x-auto border-t border-line pt-4 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                activeCategory === "all"
                  ? "bg-ink-950 text-white"
                  : "border border-line bg-white/70 text-ink-900/70 hover:border-brand-600 hover:text-ink-950"
              }`}
            >
              {isId ? "Semua Topik" : "All Topics"}
              <span className={`ml-1.5 font-mono text-[11px] font-bold ${activeCategory === "all" ? "text-brand-400" : "text-ink-900/40"}`}>
                {articles.length}
              </span>
            </button>

            {categories.map((cat) => {
              const count = articles.filter((a) => a.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "bg-ink-950 text-white"
                      : "border border-line bg-white/70 text-ink-900/70 hover:border-brand-600 hover:text-ink-950"
                  }`}
                >
                  {cat}
                  <span className={`ml-1.5 font-mono text-[11px] font-bold ${isActive ? "text-brand-400" : "text-ink-900/40"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Featured Lead Section (Headline Hero Portal) */}
      {!searchQuery && activeCategory === "all" && heroArticle && (
        <section className="border-b border-line bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Main Lead Story */}
              <div className="lg:col-span-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-line pb-8 lg:pb-0 lg:pr-10">
                <div>
                  {heroArticle.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-6 border border-line bg-paper">
                      <Image
                        src={heroArticle.image}
                        alt={heroArticle.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <span className="bg-brand-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                      {isId ? "LAPORAN UTAMA" : "LEAD STORY"}
                    </span>
                    <span className="font-mono text-xs text-brand-700 font-semibold uppercase">
                      {heroArticle.category}
                    </span>
                    <span className="text-ink-900/40 text-xs">• {heroArticle.readTime}</span>
                  </div>

                  <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-black text-ink-950 leading-tight">
                    <Link
                      href={localizePath(lang, `/artikel/${heroArticle.slug}`)}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {heroArticle.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-base sm:text-lg text-ink-900/75 leading-relaxed">
                    {heroArticle.summary}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-900/50">
                    {heroArticle.publishedAt}
                  </span>
                  <Link
                    href={localizePath(lang, `/artikel/${heroArticle.slug}`)}
                    className="font-mono text-xs font-bold text-brand-700 hover:text-ink-950 transition-colors inline-flex items-center gap-1"
                  >
                    {isId ? "Baca Laporan Lengkap →" : "Read Full Story →"}
                  </Link>
                </div>
              </div>

              {/* Secondary Lead Stories */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <div className="border-b-2 border-ink-950 pb-2 mb-4">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-950">
                      {isId ? "Pilihan Redaksi" : "Editor's Picks"}
                    </h3>
                  </div>

                  <div className="divide-y divide-line">
                    {secondaryHeroArticles.map((sub) => (
                      <div key={sub.slug} className="py-4 first:pt-0 last:pb-0">
                        {sub.image && (
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded mb-3 bg-paper">
                            <Image
                              src={sub.image}
                              alt={sub.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="font-mono text-[10px] font-semibold uppercase text-brand-600">
                          {sub.category}
                        </span>
                        <h4 className="mt-1 font-display text-base font-bold text-ink-950 leading-snug">
                          <Link
                            href={localizePath(lang, `/artikel/${sub.slug}`)}
                            className="hover:text-brand-600 transition-colors"
                          >
                            {sub.title}
                          </Link>
                        </h4>
                        <p className="mt-2 text-xs text-ink-900/65 line-clamp-2 leading-relaxed">
                          {sub.summary}
                        </p>
                        <span className="mt-2 block font-mono text-[10px] text-ink-900/40">
                          {sub.publishedAt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Banner CTA Box */}
                <div className="border border-brand-500/40 bg-brand-50/50 p-5 rounded">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-800">
                    {isId ? "KONSULTASI TEKNIS" : "TECHNICAL CONSULTATION"}
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-ink-950">
                    {isId ? "Butuh rekomendasi arsitektur web untuk bisnis Anda?" : "Need web architecture recommendations?"}
                  </p>
                  <a
                    href={waLink("Halo mainweb.id, saya ingin konsultasi gratis mengenai kebutuhan website bisnis saya.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-mono text-xs font-semibold text-brand-700 hover:underline"
                  >
                    {isId ? "Chat WhatsApp Tech Lead →" : "Chat WhatsApp Tech Lead →"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Two-Column Layout: Feed Berita (Left 8 Cols) + Sidebar Sorotan Redaksi (Right 4 Cols) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Left 8 Cols: Daftar Berita Terkini */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink-950 pb-2 mb-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-ink-950">
                  {searchQuery
                    ? `${isId ? "Hasil Pencarian" : "Search Results"}: "${searchQuery}"`
                    : activeCategory === "all"
                    ? (isId ? "Berita Terkini" : "Latest Articles")
                    : activeCategory}
                </h2>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-900/50">
                  {gridArticles.length} {isId ? "artikel ditemukan" : "articles found"}
                </span>
              </div>

              {gridArticles.length === 0 ? (
                <div className="border border-dashed border-line p-12 text-center bg-white">
                  <p className="text-base text-ink-900/60">
                    {isId ? "Tidak ada artikel yang cocok dengan pencarian Anda." : "No articles matched your search."}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="btn btn-outline mt-4 text-xs"
                  >
                    {isId ? "Reset Filter" : "Reset Filter"}
                  </button>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {gridArticles.map((art) => (
                    <article
                      key={art.slug}
                      className="group flex flex-col justify-between border border-line bg-white p-6 transition-all duration-200 hover:border-brand-600 hover:shadow-md"
                    >
                      <div>
                        {art.image && (
                          <div className="relative aspect-[16/10] w-full overflow-hidden rounded mb-4 bg-paper">
                            <Image
                              src={art.image}
                              alt={art.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}

                        <div className="flex items-center justify-between border-b border-line/60 pb-2.5 font-mono text-[10px]">
                          <span className="font-semibold text-brand-600 uppercase tracking-wider">
                            {art.category}
                          </span>
                          <span className="text-ink-900/40">{art.readTime}</span>
                        </div>

                        <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink-950 leading-snug group-hover:text-brand-600 transition-colors">
                          <Link href={localizePath(lang, `/artikel/${art.slug}`)}>
                            {art.title}
                          </Link>
                        </h3>

                        <p className="mt-2.5 text-xs text-ink-900/70 leading-relaxed line-clamp-3">
                          {art.summary}
                        </p>
                      </div>

                      <div className="mt-6 border-t border-line/60 pt-3 flex items-center justify-between font-mono text-[11px]">
                        <span className="text-ink-900/40">{art.publishedAt}</span>
                        <Link
                          href={localizePath(lang, `/artikel/${art.slug}`)}
                          className="font-semibold text-brand-600 hover:text-ink-950 transition-colors"
                        >
                          {isId ? "Baca →" : "Read →"}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Right 4 Cols: Sticky Sidebar (Sorotan Redaksi Top 5 + Navigasi Solusi) */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Sorotan Redaksi (Numbered 1-5 List) */}
                <div className="border border-line bg-white p-6">
                  <div className="flex items-center gap-2 border-b-2 border-ink-950 pb-2 mb-4">
                    <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink-950">
                      {isId ? "Sorotan Redaksi" : "Trending Highlights"}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {editorialHighlights.map((art, idx) => (
                      <Link
                        key={art.slug}
                        href={localizePath(lang, `/artikel/${art.slug}`)}
                        className="group flex gap-3.5 border-b border-line/60 pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className="w-5 shrink-0 font-display text-2xl font-black leading-none text-brand-600/40 transition-colors group-hover:text-brand-600">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <span className="font-mono text-[9px] font-semibold uppercase text-brand-600">
                            {art.category}
                          </span>
                          <h3 className="text-xs font-bold leading-snug text-ink-950 transition-colors group-hover:text-brand-600 line-clamp-2">
                            {art.title}
                          </h3>
                          <time className="mt-1 block font-mono text-[10px] text-ink-900/40">
                            {art.publishedAt}
                          </time>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Navigasi Layanan & Solusi Bisnis (Piramida Money Pages) */}
                <div className="border border-line bg-paper p-6">
                  <div className="border-b-2 border-ink-950 pb-2 mb-4">
                    <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink-950">
                      {isId ? "Layanan & Solusi Web" : "Web Services & Solutions"}
                    </h2>
                  </div>
                  <p className="text-xs text-ink-900/70 mb-4 leading-relaxed">
                    {isId
                      ? "Lihat pilihan solusi hand-built siap pakai dengan rincian biaya pasti di muka:"
                      : "Explore hand-built web solutions with upfront transparent pricing:"}
                  </p>
                  <ul className="space-y-2 font-mono text-xs">
                    <li>
                      <Link
                        href={localizePath(lang, "/layanan/landing-page")}
                        className="block py-1.5 px-2 bg-white border border-line text-ink-950 font-medium hover:border-brand-600 hover:text-brand-600 transition-colors"
                      >
                        → Jasa Landing Page (Rp 1,5 jt)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={localizePath(lang, "/layanan/company-profile")}
                        className="block py-1.5 px-2 bg-white border border-line text-ink-950 font-medium hover:border-brand-600 hover:text-brand-600 transition-colors"
                      >
                        → Jasa Company Profile (Rp 5 jt)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={localizePath(lang, "/layanan/toko-online")}
                        className="block py-1.5 px-2 bg-white border border-line text-ink-950 font-medium hover:border-brand-600 hover:text-brand-600 transition-colors"
                      >
                        → Jasa Toko Online (Rp 10 jt)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={localizePath(lang, "/layanan/web-app-custom")}
                        className="block py-1.5 px-2 bg-white border border-line text-ink-950 font-medium hover:border-brand-600 hover:text-brand-600 transition-colors"
                      >
                        → Jasa Web App & Sistem Kustom
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={localizePath(lang, "/layanan/jasa-website-solo")}
                        className="block py-1.5 px-2 bg-white border border-line text-ink-950 font-medium hover:border-brand-600 hover:text-brand-600 transition-colors"
                      >
                        → Jasa Web Solo Raya & Jateng
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
