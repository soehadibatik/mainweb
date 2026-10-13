import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ComparisonSection from "@/components/ComparisonSection";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import BrandStrip from "@/components/BrandStrip";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { ui } from "@/lib/i18n/ui";
import { pages } from "@/lib/i18n/pages";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";

export default function HomePage({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const p = pages[lang];
  const ogLocale = lang === "id" ? "id_ID" : "en_US";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: p.site.description,
    email: site.contact.email,
    telephone: `+${(site.contact.whatsapp as string).replace(/\D/g, "")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Kediri Utara 1 No. 21A RT 05 RW 15, Bonorejo Nusukan Banjarsari",
      addressLocality: "Surakarta",
      addressCountry: "ID",
      postalCode: "57135",
    },
    areaServed: "ID",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.contact.email,
      availableLanguage: ["id", "en"],
    },
    inLanguage: ogLocale,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: ogLocale,
    description: p.site.description,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="flex-1">
      <JsonLd data={organization} />
      <JsonLd data={website} />
      <JsonLd data={faqPage} />
      <Hero lang={lang} />
      <Features lang={lang} />
      <Pricing lang={lang} />
      <ComparisonSection lang={lang} />
      <Process lang={lang} />
      <Clients lang={lang} />
      <Faq lang={lang} />
      <BrandStrip lang={lang} />
      <CtaSection lang={lang} />
    </main>
  );
}
