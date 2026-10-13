import type { MetadataRoute } from "next";
import { getPlans } from "@/lib/catalog";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";
import { localizePath, LOCALES } from "@/lib/i18n/config";

// Wajib untuk output: "export" — route metadata harus statis.
export const dynamic = "force-static";

type ChangeFrequency = "weekly" | "monthly" | "yearly";

/**
 * Dua entri per path (id + en), masing-masing membawa hreflang id + en +
 * x-default supaya mesin pencari tahu kedua versi bahasa saling terkait.
 * path ditulis tanpa prefix locale ("/klien"), lokal dilakukan localizePath.
 */
function entriesFor(path: string, changeFrequency: ChangeFrequency, priority: number) {
  const idUrl = `${site.url}${localizePath("id", path)}`;
  const enUrl = `${site.url}${localizePath("en", path)}`;

  return LOCALES.map((locale) => ({
    url: locale === "id" ? idUrl : enUrl,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        id: idUrl,
        en: enUrl,
        "x-default": idUrl,
      },
    },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const plans = await getPlans();

  return [
    ...entriesFor("/", "weekly", 1),
    ...entriesFor("/klien", "monthly", 0.7),
    ...entriesFor("/studi-kasus", "monthly", 0.7),
    ...entriesFor("/kebijakan-privasi", "yearly", 0.3),
    ...entriesFor("/syarat-layanan", "yearly", 0.3),
    ...caseStudies.flatMap((c) => entriesFor(`/studi-kasus/${c.slug}`, "monthly", 0.7)),
    ...plans.flatMap((plan) => entriesFor(`/paket/${plan.id}`, "monthly", 0.8)),
  ];
}
