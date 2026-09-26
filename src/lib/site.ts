export const site = {
  name: "mainweb.id",
  tagline: "Jasa Pembuatan Website Profesional",
  url: "https://mainweb.id",
  description:
    "Jasa pembuatan & pengembangan website profesional. 9 tingkatan paket dari landing page sederhana hingga platform enterprise — cepat, responsif, dan mudah dikelola.",
  contact: {
    // TODO: ganti dengan nomor WhatsApp & email asli mainweb.id
    whatsapp: "6281234567890",
    whatsappDisplay: "+62 812-3456-7890",
    email: "hello@mainweb.id",
  },
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
