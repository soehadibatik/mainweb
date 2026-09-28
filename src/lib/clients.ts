export type Client = {
  name: string;
  domain: string;
  logo: string;
  w: number;
  h: number;
};

const featuredList: Client[] = [
  { name: "CISC Solo", domain: "ciscsolo.com", logo: "/clients/cisc-solo.png", w: 2172, h: 724 },
  { name: "Batik Soehadi", domain: "batiksoehadi.com", logo: "/clients/batik-soehadi.png", w: 2194, h: 717 },
  { name: "Bikin Batik", domain: "bikinbatik.com", logo: "/clients/bikin-batik.png", w: 1064, h: 256 },
  { name: "Daster Murah", domain: "dastermurah.com", logo: "/clients/daster-murah.png", w: 1120, h: 440 },
  { name: "Bahan Kain", domain: "bahankain.id", logo: "/clients/bahan-kain.webp", w: 640, h: 320 },
  { name: "Monitoring Batik", domain: "batiksoehadi.my.id", logo: "/clients/monitoring-batik.png", w: 800, h: 168 },
];

const ecosystem: Client[] = [
  { name: "Batik Solo", domain: "batik-solo.com", logo: "/clients/batik-solo.svg", w: 560, h: 220 },
  { name: "Batik Bagoes Solo", domain: "batikbagoessolo.com", logo: "/clients/batik-bagoes-solo.svg", w: 560, h: 220 },
  { name: "Batik Printing", domain: "batikprinting.id", logo: "/clients/batik-printing.svg", w: 560, h: 220 },
  { name: "Batik Tulis", domain: "batiktulis.id", logo: "/clients/batik-tulis.svg", w: 560, h: 220 },
  { name: "Cetak Batik", domain: "cetakbatik.id", logo: "/clients/cetak-batik.svg", w: 560, h: 220 },
  { name: "Custom Batik", domain: "custombatik.id", logo: "/clients/custom-batik.svg", w: 560, h: 220 },
  { name: "Grosir Batik", domain: "grosirbatik.id", logo: "/clients/grosir-batik.svg", w: 560, h: 220 },
  { name: "Jual Batik", domain: "jualbatik.id", logo: "/clients/jual-batik.svg", w: 560, h: 220 },
  { name: "Seragam Batik", domain: "seragambatik.id", logo: "/clients/seragam-batik.svg", w: 560, h: 220 },
  { name: "Motif Batik", domain: "motifbatik.id", logo: "/clients/motif-batik.svg", w: 560, h: 220 },
  { name: "Tentang Batik", domain: "tentangbatik.com", logo: "/clients/tentang-batik.svg", w: 560, h: 220 },
  { name: "Grosir Batik Solo", domain: "grosirbatiksolo.com", logo: "/clients/grosir-batik-solo.svg", w: 560, h: 220 },
  { name: "Grosir Kain Batik", domain: "grosirkainbatik.com", logo: "/clients/grosir-kain-batik.svg", w: 560, h: 220 },
  { name: "Grosir Batik Pekalongan", domain: "grosirbatikpekalongan.com", logo: "/clients/grosir-batik-pekalongan.svg", w: 560, h: 220 },
  { name: "Kemeja Batik", domain: "kemejabatik.id", logo: "/clients/kemeja-batik.svg", w: 560, h: 220 },
  { name: "Kustom Batik", domain: "kustombatik.id", logo: "/clients/kustom-batik.svg", w: 560, h: 220 },
  { name: "Pabrik Batik", domain: "pabrikbatik.id", logo: "/clients/pabrik-batik.svg", w: 560, h: 220 },
  { name: "Produsen Batik", domain: "produsenbatik.id", logo: "/clients/produsen-batik.svg", w: 560, h: 220 },
  { name: "Produksi Batik", domain: "produksibatik.id", logo: "/clients/produksi-batik.svg", w: 560, h: 220 },
  { name: "Printing Batik", domain: "printingbatik.com", logo: "/clients/printing-batik.svg", w: 560, h: 220 },
  { name: "Pengrajin Batik", domain: "pengrajinbatik.id", logo: "/clients/pengrajin-batik.svg", w: 560, h: 220 },
  { name: "Juragan Batik", domain: "juraganbatik.com", logo: "/clients/juragan-batik.svg", w: 560, h: 220 },
];

const atah: Client[] = [
  { name: "Merpatiku", domain: "merpatiku-github-io.vercel.app", logo: "/clients/merpatiku.png", w: 909, h: 521 },
  { name: "My Pigeon", domain: "mypigeon-two.vercel.app", logo: "/clients/my-pigeon.png", w: 512, h: 512 },
  { name: "Makelar", domain: "makelar.vercel.app", logo: "/clients/makelar.png", w: 512, h: 512 },
];

export const featured = featuredList;
export const clients: Client[] = [...featuredList, ...ecosystem, ...atah];

export const groups: { id: string; label: string; items: Client[] }[] = [
  { id: "unggulan", label: "Unggulan", items: featuredList },
  { id: "ekosistem", label: "Ekosistem batik", items: ecosystem },
  { id: "lainnya", label: "Proyek lain", items: atah },
];
