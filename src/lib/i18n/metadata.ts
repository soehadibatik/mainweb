import type { Metadata } from "next";
import type { Locale } from "./config";
import { localizePath } from "./config";
import { site } from "@/lib/site";
import { ogMeta } from "@/lib/og";

type Input = {
  locale: Locale;
  /** Path tanpa prefix locale, mis. "/paket/x" atau "/". */
  pathname: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
  type?: "website" | "article";
  keywords?: string[];
};

const ogLocale: Record<Locale, string> = { id: "id_ID", en: "en_US" };

/**
 * Metadata per-locale: canonical menunjuk versi bahasa ini, dan
 * alternates.languages menyediakan id + en + x-default untuk hreflang.
 */
export function pageMetadata({
  locale,
  pathname,
  title,
  description,
  image,
  alt,
  type = "website",
  keywords,
}: Input): Metadata {
  const canonicalPath = localizePath(locale, pathname);
  const idUrl = `${site.url}${localizePath("id", pathname)}`;
  const enUrl = `${site.url}${localizePath("en", pathname)}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: canonicalPath,
      languages: {
        id: idUrl,
        en: enUrl,
        "x-default": idUrl,
      },
    },
    ...ogMeta({
      title: `${title} | ${site.name}`,
      description,
      url: canonicalPath,
      image,
      alt,
      type,
      locale: ogLocale[locale],
    }),
  };
}
