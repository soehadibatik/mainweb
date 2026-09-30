import type { MetadataRoute } from "next";
import { getPlans } from "@/lib/catalog";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

// Wajib untuk output: "export" — route metadata harus statis.
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const plans = await getPlans();
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/klien`,
      lastModified: new Date() as Date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...caseStudies.map((c) => ({
      url: `${site.url}/studi-kasus/${c.slug}`,
      lastModified: new Date() as Date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...plans.map((plan) => ({
      url: `${site.url}/paket/${plan.id}`,
      lastModified: new Date() as Date,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
