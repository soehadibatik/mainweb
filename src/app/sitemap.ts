import type { MetadataRoute } from "next";
import { getPlans } from "@/lib/catalog";
import { site } from "@/lib/site";

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
    ...plans.map((plan) => ({
      url: `${site.url}/paket/${plan.id}`,
      lastModified: new Date() as Date,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
