import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import TermsPage from "@/components/pages/TermsPage";

export const metadata = pageMetadata({
  locale: "id",
  pathname: "/syarat-layanan",
  title: pages.id.legal.termsTitle,
  description: pages.id.legal.termsDesc,
  image: "/og/syarat-layanan.png",
  alt: pages.id.legal.termsAlt,
});

export default function SyaratLayananRoute() {
  return <TermsPage lang="id" />;
}
