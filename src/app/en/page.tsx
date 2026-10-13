import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import { OG_FALLBACK_IMAGE } from "@/lib/og";
import { site } from "@/lib/site";
import HomePage from "@/components/pages/HomePage";

const p = pages.en;

export const metadata = pageMetadata({
  locale: "en",
  pathname: "/",
  title: `${site.name} | ${p.site.tagline}`,
  description: p.site.description,
  image: OG_FALLBACK_IMAGE,
  alt: `${site.name} | ${p.site.tagline}`,
  keywords: p.site.keywords,
});

export default function EnHome() {
  return <HomePage lang="en" />;
}
