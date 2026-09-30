import type { Metadata } from "next";
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
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  description: site.description,
  email: site.contact.email,
  telephone: `+${site.contact.whatsapp}`,
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
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "id-ID",
  description: site.description,
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function Home() {
  return (
    <main className="flex-1">
      <JsonLd data={organization} />
      <JsonLd data={website} />
      <JsonLd data={faqPage} />
      <Hero />
      <Features />
      <Pricing />
      <ComparisonSection />
      <Process />
      <Clients />
      <Faq />
      <BrandStrip />
      <CtaSection />
    </main>
  );
}
