import { services, getService } from "@/lib/services";
import { pageMetadata } from "@/lib/i18n/metadata";
import { site } from "@/lib/site";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const srv = getService(slug);
  if (!srv) return {};

  return pageMetadata({
    locale: "id",
    pathname: `/layanan/${srv.slug}`,
    title: `${srv.metaTitle} | ${site.name}`,
    description: srv.metaDesc,
    image: "/og/studi-kasus.png",
    alt: srv.title,
    type: "website",
  });
}

export default async function ServiceDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} lang="id" />;
}
