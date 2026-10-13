import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import TermsPage from "@/components/pages/TermsPage";

export const metadata = pageMetadata({
  locale: "en",
  pathname: "/syarat-layanan",
  title: pages.en.legal.termsTitle,
  description: pages.en.legal.termsDesc,
  image: "/og/en/syarat-layanan.png",
  alt: pages.en.legal.termsAlt,
});

export default function EnSyaratLayananRoute() {
  return <TermsPage lang="en" />;
}
