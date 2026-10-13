import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { localizeCaseStudy } from "@/lib/i18n/case-studies-text";
import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import CaseStudyDetailPage from "@/components/pages/CaseStudyDetailPage";

// Static export: slug yang tidak dikenal harus 404, bukan dirender saat runtime.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raw = getCaseStudy(slug);
  if (!raw) return {};

  const study = localizeCaseStudy("id", raw);
  const p = pages.id.studiDetail;

  return pageMetadata({
    locale: "id",
    pathname: `/studi-kasus/${study.slug}`,
    title: p.metaTitle(study.client, study.category),
    description: study.summary,
    image: `/og/studi-kasus-${study.slug}.png`,
    alt: `${study.client}: ${study.headline}`,
    type: "article",
  });
}

export default async function CaseStudyRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CaseStudyDetailPage lang="id" slug={slug} />;
}
