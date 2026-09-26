import type { MetadataRoute } from "next";
import { plans } from "@/lib/plans";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...plans.map((plan) => ({
      url: `${site.url}/paket/${plan.id}`,
      lastModified: new Date() as Date,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
