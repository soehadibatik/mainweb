import { pageMetadata } from "@/lib/i18n/metadata";
import { site } from "@/lib/site";
import ArticlesPage from "@/components/pages/ArticlesPage";

export function generateMetadata() {
  return pageMetadata({
    locale: "en",
    pathname: "/blog",
    title: `Blog & Web Guides | ${site.name}`,
    description:
      "Practical guides and educational articles on website development, fair pricing, and digital strategy for business owners.",
    image: "/og/en/studi-kasus.png",
    alt: `Blog & Web Guides ${site.name}`,
  });
}

export default function EnBlogIndexRoute() {
  return <ArticlesPage lang="en" />;
}
