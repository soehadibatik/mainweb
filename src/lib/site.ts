export const site = {
  name: "mainweb.id",
  tagline: "Jasa Pembuatan Website Profesional",
  url: "https://mainweb.id",
  description:
    "Jasa pembuatan & pengembangan website profesional. 9 tingkatan paket, dari landing page sampai platform enterprise, dengan harga yang tertulis di muka.",
  contact: {
    whatsapp: "6281234561663",
    whatsappDisplay: "+62 812-3456-1663",
    email: "hello@mainweb.id",
    address:
      "Jl. Kediri Utara 1 No. 21A RT 05 RW 15, Bonorejo Nusukan Banjarsari, Surakarta, Indonesia, 57135",
  },
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
