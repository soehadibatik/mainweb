import { existsSync } from "node:fs";
import path from "node:path";
import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import { OG_FALLBACK_IMAGE } from "@/lib/og";
import { site } from "@/lib/site";
import HomePage from "@/components/pages/HomePage";

const p = pages.en;

// Kartu OG khusus versi Inggris (public/og/en/home.png); bila belum ada,
// jatuh ke gambar bawaan.
const ogHome = existsSync(path.join(process.cwd(), "public", "og", "en", "home.png"))
  ? "/og/en/home.png"
  : OG_FALLBACK_IMAGE;

export const metadata = pageMetadata({
  locale: "en",
  pathname: "/",
  title: `${site.name} | ${p.site.tagline}`,
  description: p.site.description,
  image: ogHome,
  alt: `${site.name} | ${p.site.tagline}`,
  keywords: p.site.keywords,
});

export default function EnHome() {
  return <HomePage lang="en" />;
}
