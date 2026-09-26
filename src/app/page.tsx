import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ComparisonSection from "@/components/ComparisonSection";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import BrandStrip from "@/components/BrandStrip";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Marquee />
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
