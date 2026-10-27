import { pageMetadata } from "@/lib/i18n/metadata";
import { site } from "@/lib/site";
import ArticlesPage from "@/components/pages/ArticlesPage";

export function generateMetadata() {
  return pageMetadata({
    locale: "id",
    pathname: "/artikel",
    title: `Artikel & Panduan Website | ${site.name}`,
    description:
      "Panduan praktis seputar biaya wajar pembuatan website, perbedaan jenis web, serta tips meningkatkan penjualan online untuk pemilik usaha.",
    image: "/og/studi-kasus.png",
    alt: `Artikel & Panduan Website ${site.name}`,
  });
}

export default function ArtikelIndexRoute() {
  return <ArticlesPage lang="id" />;
}
