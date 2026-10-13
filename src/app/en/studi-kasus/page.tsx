import { caseStudies } from "@/lib/case-studies";
import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import CaseStudiesIndexPage from "@/components/pages/CaseStudiesIndexPage";

export function generateMetadata() {
  const p = pages.en.studiIndex;

  return pageMetadata({
    locale: "en",
    pathname: "/studi-kasus",
    title: p.metaTitle,
    description: p.metaDesc(caseStudies.length),
    image: "/og/en/studi-kasus.png",
    alt: p.ogAlt(caseStudies.length),
  });
}

export default function EnStudiKasusIndexRoute() {
  return <CaseStudiesIndexPage lang="en" />;
}
