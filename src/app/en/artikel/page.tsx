import { pageMetadata } from "@/lib/i18n/metadata";
import { site } from "@/lib/site";
import ArticlesPage from "@/components/pages/ArticlesPage";

export function generateMetadata() {
  return pageMetadata({
    locale: "en",
    pathname: "/artikel",
    title: `Articles & Web Guides | ${site.name}`,
    description:
      "Practical guides on fair web development costs, website types, and tips to increase online sales for business owners.",
    image: "/og/en/studi-kasus.png",
    alt: `Articles & Web Guides ${site.name}`,
  });
}

export default function EnArtikelIndexRoute() {
  return <ArticlesPage lang="en" />;
}
