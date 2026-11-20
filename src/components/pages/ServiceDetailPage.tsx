import Link from "next/link";
import { notFound } from "next/navigation";
import { getService } from "@/lib/services";
import { getPlans } from "@/lib/catalog";
import { localizePlans } from "@/lib/i18n/plans-text";
import { site, waLink } from "@/lib/site";
import { fullPrice } from "@/lib/tiers";
import { tPrice } from "@/lib/i18n/price";
import JsonLd from "@/components/JsonLd";
import { localizePath, type Locale } from "@/lib/i18n/config";
import { articles } from "@/lib/articles";

export default async function ServiceDetailPage({
  slug,
  lang,
}: {
  slug: string;
  lang: Locale;
}) {
  const service = getService(slug);
  if (!service) notFound();

  const isId = lang === "id";
  const allPlans = localizePlans(lang, await getPlans());
  const selectedPlans = allPlans.filter((p) => service.highlightPlanIds.includes(p.id));

  // Breadcrumb Schema
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
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${site.url}${localizePath(lang, `/layanan/${service.slug}`)}`,
      },
    ],
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} — ${site.name}`,
    description: service.heroSubheadline,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: service.priceNumeric,
      availability: "https://schema.org/InStock",
      url: `${site.url}${localizePath(lang, `/layanan/${service.slug}`)}`,
    },
    serviceType: service.primaryKeyword,
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const relatedBlogArticles = articles.filter((a) =>
    service.relatedBlogSlugs.includes(a.slug)
  );

  return (
    <main className="flex-1">
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Meta Bar */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] text-ink-900/50 sm:px-6 lg:px-8">
          <Link
            href={localizePath(lang, "/layanan")}
            className="hover:text-brand-600 transition-colors"
          >
            ← {isId ? "Semua Layanan Website" : "All Web Services"}
          </Link>
          <span className="font-semibold text-brand-600">{service.badge}</span>
          <span>{isId ? "Mulai " : "Starting from "} {service.startingPrice}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-paper py-16 sm:py-24">
        <div aria-hidden className="bg-grid-light bg-grid-parallax pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">
            <span className="eyebrow-slash" aria-hidden>{"// "}</span>
            {service.badge}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.3rem,5vw,4.2rem)] font-black tracking-tight text-ink-950 leading-[1.06] text-balance">
            {service.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-ink-900/75 leading-relaxed">
            {service.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink(
                isId
                  ? `Halo mainweb.id, saya tertarik dengan layanan "${service.title}" dan ingin konsultasi kebutuhan website saya.`
                  : `Hello mainweb.id, I am interested in the "${service.title}" service and would like to consult about my website.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {isId ? "Konsultasi Gratis via WhatsApp" : "Free WhatsApp Consultation"}
            </a>
            <a href="#paket-rekomendasi" className="btn btn-outline">
              {isId ? "Lihat Pilihan Paket Terkait" : "View Related Packages"}
            </a>
          </div>
        </div>
      </section>

      {/* Fitur Utama */}
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-600">
              {isId ? "STANDAR TEKNIS LAYANAN" : "TECHNICAL SERVICE STANDARDS"}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              {isId ? "Fitur & Keunggulan Khusus yang Anda Dapatkan" : "Special Features & Benefits Included"}
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feat, idx) => (
              <div key={idx} className="border border-line bg-paper/30 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-sm font-bold text-brand-600">0{idx + 1}.</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink-950">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-900/70 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rekomendasi Paket Terkait */}
      <section id="paket-rekomendasi" className="border-b border-line bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line pb-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-600">
                {isId ? "PILIHAN PAKET TERBUKA" : "TRANSPARENT PACKAGES"}
              </p>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-ink-950">
                {isId ? `Pilihan Paket untuk ${service.title}` : `Recommended Packages for ${service.title}`}
              </h2>
            </div>
            <Link
              href={localizePath(lang, "/#paket")}
              className="font-mono text-xs font-semibold text-brand-600 hover:underline"
            >
              {isId ? "Lihat seluruh 15 paket →" : "Explore all 15 packages →"}
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {selectedPlans.map((plan) => (
              <div
                key={plan.id}
                className="flex flex-col justify-between border border-line bg-white p-7 transition-all hover:border-brand-600 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-4">
                    <span className="font-display text-2xl font-black text-ink-950">
                      {plan.name}
                    </span>
                    <span className="font-mono text-lg font-bold text-brand-600">
                      {tPrice(lang, fullPrice(plan.build))}
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-mono text-ink-900/50 uppercase">
                    {plan.tagline}
                  </p>
                  <p className="mt-3 text-sm text-ink-900/75 leading-relaxed">
                    {plan.idealFor}
                  </p>
                  <div className="mt-6 border-t border-line/60 pt-4">
                    <p className="font-mono text-[11px] font-semibold text-ink-900/50 uppercase">
                      {isId ? "Spesifikasi Utama:" : "Key Specs:"}
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-ink-900/70">
                      {plan.featureGroups[0]?.items.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-600 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  <Link
                    href={localizePath(lang, `/paket/${plan.id}`)}
                    className="btn btn-outline w-full text-center text-xs"
                  >
                    {isId ? `Detail Paket ${plan.name} →` : `${plan.name} Package Details →`}
                  </Link>
                  <a
                    href={waLink(
                      isId
                        ? `Halo mainweb.id, saya tertarik memesan paket "${plan.name}" (${plan.build}) untuk layanan ${service.title}.`
                        : `Hello mainweb.id, I want to order the "${plan.name}" package for ${service.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full text-center text-xs"
                  >
                    {isId ? "Pesan via WhatsApp" : "Order via WhatsApp"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nilai Lebih mainweb.id */}
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-600">
              {isId ? "MENGAPA MAINWEB.ID" : "WHY MAINWEB.ID"}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              {isId ? "Standar Mutu Rekayasa Web Tanpa Kompromi" : "Uncompromising Web Engineering Standards"}
            </h2>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {service.whyUsPoints.map((point, idx) => (
              <div key={idx} className="border border-line bg-paper/40 p-6">
                <h3 className="font-display text-lg font-bold text-ink-950">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm text-ink-900/70 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-line bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-950">
            {isId ? "Pertanyaan Umum Seputar Layanan Ini (FAQ)" : "Frequently Asked Questions (FAQ)"}
          </h2>
          <div className="mt-8 space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="border border-line bg-white p-5 rounded-lg">
                <h3 className="font-display text-base sm:text-lg font-bold text-ink-950">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm text-ink-900/75 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panduan Edukasi Terkait (Piramida SEO) */}
      {relatedBlogArticles.length > 0 && (
        <section className="border-b border-line bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-950 mb-6">
              {isId ? "Panduan & Artikel Terkait Layanan Ini" : "Related Guides & Insights"}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogArticles.map((art) => (
                <div
                  key={art.slug}
                  className="flex flex-col justify-between border border-line bg-paper/30 p-6 transition-all hover:border-brand-600"
                >
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-600">
                      {art.category}
                    </span>
                    <h4 className="mt-2 font-display text-base font-bold text-ink-950">
                      <Link
                        href={localizePath(lang, `/blog/${art.slug}`)}
                        className="hover:text-brand-600 transition-colors"
                      >
                        {art.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-xs text-ink-900/65 line-clamp-3 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                  <Link
                    href={localizePath(lang, `/blog/${art.slug}`)}
                    className="mt-4 font-mono text-xs font-semibold text-brand-600 hover:underline"
                  >
                    {isId ? "Baca panduan lengkap →" : "Read full guide →"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Box */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
            {isId ? "Mulai Proyek Website Anda Bersama Tim Ahli" : "Start Your Website Project with Our Experts"}
          </h2>
          <p className="mt-4 text-base text-ink-900/75 leading-relaxed">
            {isId
              ? "Diskusikan kebutuhan spesifik bisnis Anda langsung bersama technical lead mainweb.id. Konsultasi awal 100% gratis tanpa komitmen apa pun."
              : "Discuss your project scope directly with our technical lead. Initial consultation is 100% free with zero commitment."}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href={waLink(
                isId
                  ? `Halo mainweb.id, saya ingin konsultasi pemetaan solusi untuk layanan ${service.title}.`
                  : `Hello mainweb.id, I would like to consult about ${service.title}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm"
            >
              {isId ? "Konsultasi Gratis via WhatsApp" : "Free WhatsApp Consultation"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
