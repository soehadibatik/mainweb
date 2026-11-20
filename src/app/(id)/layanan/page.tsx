import { pageMetadata } from "@/lib/i18n/metadata";
import { site } from "@/lib/site";
import ServicesIndexPage from "@/components/pages/ServicesIndexPage";

export function generateMetadata() {
  return pageMetadata({
    locale: "id",
    pathname: "/layanan",
    title: `Layanan Pembuatan Website Profesional & Hand-Built | ${site.name}`,
    description:
      "Daftar lengkap layanan pembuatan website mainweb.id: landing page iklan, company profile perusahaan, toko online mandiri, web app kustom, dan solusi lokal Solo Raya.",
    image: "/og/studi-kasus.png",
    alt: `Layanan Pembuatan Website ${site.name}`,
  });
}

export default function LayananIndexRoute() {
  return <ServicesIndexPage lang="id" />;
}
