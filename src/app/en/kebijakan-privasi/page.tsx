import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import PrivacyPage from "@/components/pages/PrivacyPage";

export const metadata = pageMetadata({
  locale: "en",
  pathname: "/kebijakan-privasi",
  title: pages.en.legal.privacyTitle,
  description: pages.en.legal.privacyDesc,
  image: "/og/kebijakan-privasi.png",
  alt: pages.en.legal.privacyAlt,
});

export default function EnKebijakanPrivasiRoute() {
  return <PrivacyPage lang="en" />;
}
