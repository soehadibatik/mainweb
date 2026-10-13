import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import PrivacyPage from "@/components/pages/PrivacyPage";

export const metadata = pageMetadata({
  locale: "id",
  pathname: "/kebijakan-privasi",
  title: pages.id.legal.privacyTitle,
  description: pages.id.legal.privacyDesc,
  image: "/og/kebijakan-privasi.png",
  alt: pages.id.legal.privacyAlt,
});

export default function KebijakanPrivasiRoute() {
  return <PrivacyPage lang="id" />;
}
