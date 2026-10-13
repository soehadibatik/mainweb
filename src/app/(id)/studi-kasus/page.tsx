import { caseStudies } from "@/lib/case-studies";
import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import CaseStudiesIndexPage from "@/components/pages/CaseStudiesIndexPage";

export function generateMetadata() {
  const p = pages.id.studiIndex;

  return pageMetadata({
    locale: "id",
    pathname: "/studi-kasus",
    title: p.metaTitle,
    description: p.metaDesc(caseStudies.length),
    image: "/og/studi-kasus.png",
    alt: p.ogAlt(caseStudies.length),
  });
}

export default function StudiKasusIndexRoute() {
  return <CaseStudiesIndexPage lang="id" />;
}
