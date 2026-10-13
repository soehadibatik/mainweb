import { existsSync } from "node:fs";
import path from "node:path";
import { getPlan, getPlans } from "@/lib/catalog";
import { localizePlan } from "@/lib/i18n/plans-text";
import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import PlanDetailPage from "@/components/pages/PlanDetailPage";

type Params = { params: Promise<{ id: string }> };

// Static export: id yang tidak dikenal harus 404, bukan dirender saat runtime.
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  const plans = await getPlans();
  return plans.map((plan) => ({ id: plan.id }));
}

/** Gambar OG per paket ada sebagai berkas statis di public/og/. */
function ogImage(id: string): string | undefined {
  const file = `/og/paket-${id}.png`;
  return existsSync(path.join(process.cwd(), "public", file)) ? file : undefined;
}

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  const raw = await getPlan(id);
  if (!raw) return {};

  const plan = localizePlan("en", raw);
  const p = pages.en.paket;
  const special = pages.en.paketSpecial[id];

  const title = special ? special.title : p.metaTitleFallback(plan.name, plan.build);
  const description = special
    ? special.desc
    : p.metaDescFallback(plan.name, plan.tagline);

  return pageMetadata({
    locale: "en",
    pathname: `/paket/${plan.id}`,
    title,
    description,
    image: ogImage(plan.id),
    alt: special ? `${special.ogTitle} | ${plan.build}` : p.metaDescNoTagline(plan.name, plan.build),
  });
}

export default async function EnPlanDetailRoute({ params }: Params) {
  const { id } = await params;
  return <PlanDetailPage lang="en" id={id} />;
}
