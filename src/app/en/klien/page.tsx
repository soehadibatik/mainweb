import { getClients } from "@/lib/catalog";
import { pageMetadata } from "@/lib/i18n/metadata";
import { pages } from "@/lib/i18n/pages";
import ClientsPage from "@/components/pages/ClientsPage";

export async function generateMetadata() {
  const { clients } = await getClients();
  const p = pages.en.klien;

  return pageMetadata({
    locale: "en",
    pathname: "/klien",
    title: p.metaTitle,
    description: p.metaDesc(clients.length),
    image: "/og/klien.png",
    alt: p.ogAlt(clients.length),
  });
}

export default function EnKlienRoute() {
  return <ClientsPage lang="en" />;
}
