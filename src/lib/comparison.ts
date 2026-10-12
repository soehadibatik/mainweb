import { plans } from "./plans";

export type CompareValue = string | boolean;
export type CompareRow = { label: string; values: Record<string, CompareValue> };
export type CompareSection = { title: string; rows: CompareRow[] };

export const UNIKORN_KEYS = ["x", "y", "z"] as const;

/** Susun record { planId: value } dari array mengikuti urutan plans (termahal → termurah). */
const V = (vals: CompareValue[]): Record<string, CompareValue> =>
  Object.fromEntries(plans.map((p, i) => [p.id, vals[i]]));

const F = false;
const T = true;

export const comparisonSections: CompareSection[] = [
  {
    title: "Biaya",
    rows: [
      {
        label: "Biaya pembuatan",
        values: V([
          "Rp 100 miliar", "Rp 50 miliar", "Rp 20 miliar", "Rp 3 miliar", "Rp 2 miliar",
          "Rp 1 miliar", "Rp 100 jt", "Rp 75 jt", "Rp 50 jt", "Rp 30 jt",
          "Rp 20 jt", "Rp 10 jt", "Rp 5 jt", "Rp 3 jt", "Rp 1,5 jt",
        ]),
      },
      {
        label: "Maintain /bulan",
        values: V([
          "Rp 10 miliar", "Rp 5 miliar", "Rp 2 miliar", "Rp 300 jt", "Rp 200 jt",
          "Rp 100 jt", "Rp 10 jt", "Rp 7,5 jt", "Rp 5 jt", "Rp 3 jt",
          "Rp 1,5 jt", "Rp 750 rb", "Rp 500 rb", "Rp 300 rb", "Termasuk*",
        ]),
      },
      {
        label: "Perpanjangan /tahun",
        values: V([
          "Rp 20 miliar", "Rp 10 miliar", "Rp 4 miliar", "Rp 600 jt", "Rp 400 jt",
          "Rp 200 jt", "Rp 20 jt", "Rp 15 jt", "Rp 10 jt", "Rp 5 jt",
          "Rp 3,5 jt", "Rp 2 jt", "Rp 1 jt", F, F,
        ]),
      },
    ],
  },
  {
    title: "Halaman & Konten",
    rows: [
      {
        label: "Jumlah halaman",
        values: V([
          "Sesuai kebutuhan", "Sesuai kebutuhan", "Sesuai kebutuhan", "Sesuai kebutuhan", "Sesuai kebutuhan",
          "Sesuai kebutuhan", "Custom", "Custom", "Custom", "Custom",
          "12–20", "8–12", "5–8", "3–5", "1",
        ]),
      },
      {
        label: "CMS (kelola sendiri)",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          T, T, F, F, F,
        ]),
      },
      {
        label: "Blog / artikel",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          T, T, T, F, F,
        ]),
      },
      {
        label: "Katalog produk / layanan",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          T, F, F, F, F,
        ]),
      },
    ],
  },
  {
    title: "Fitur Lanjutan",
    rows: [
      {
        label: "Sistem booking / membership",
        values: V([
          T, T, T, F, F,
          F, T, T, T, T,
          F, F, F, F, F,
        ]),
      },
      {
        label: "Dashboard admin",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          T, T, F, F, F,
        ]),
      },
      {
        label: "Integrasi API pihak ketiga",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          "Dasar", F, F, F, F,
        ]),
      },
      {
        label: "Payment gateway",
        values: V([
          T, T, T, T, T,
          T, T, T, T, F,
          F, F, F, F, F,
        ]),
      },
      {
        label: "Multi-bahasa",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          F, F, F, F, F,
        ]),
      },
    ],
  },
  {
    title: "SEO & Email",
    rows: [
      {
        label: "SEO dasar",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          T, T, T, T, T,
        ]),
      },
      {
        label: "SEO lanjutan + schema markup",
        values: V([
          T, T, T, F, F,
          F, T, T, T, T,
          T, T, F, F, F,
        ]),
      },
      {
        label: "Integrasi Google Analytics",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          T, T, T, T, T,
        ]),
      },
      {
        label: "Email profesional",
        values: V([
          "Custom", "Custom", "Custom", F, F,
          F, "Custom", "Custom", "Custom", "Custom",
          "5 akun", "3 akun", "1 akun", F, F,
        ]),
      },
    ],
  },
  {
    title: "Keamanan & Backup",
    rows: [
      {
        label: "SSL (https)",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          T, T, T, T, T,
        ]),
      },
      {
        label: "Firewall & anti-spam",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          T, T, F, F, F,
        ]),
      },
      {
        label: "Backup otomatis",
        values: V([
          "Multi-region + DR", "Rutin", "Rutin", "Harian", "Mingguan",
          "Rutin", "Multi-region + DR", "Multi-region", "Real-time", "Harian",
          "Harian", "Mingguan", "Rutin", F, F,
        ]),
      },
      {
        label: "Monitoring uptime",
        values: V([
          T, T, T, T, T,
          T, T, T, T, T,
          T, F, F, F, F,
        ]),
      },
    ],
  },
  {
    title: "Dukungan",
    rows: [
      {
        label: "Revisi desain",
        values: V([
          "Sesuai kesepakatan", "Sesuai kesepakatan", "Sesuai kesepakatan", "Sesuai kesepakatan", "Sesuai kesepakatan",
          "Sesuai kesepakatan", "Custom", "Custom", "Custom", "Custom",
          "Tanpa batas", "3x", "3x", "2x", "1x",
        ]),
      },
      {
        label: "Update konten",
        values: V([
          "Sesuai kesepakatan", "Sesuai kesepakatan", "Sesuai kesepakatan", "Sesuai kesepakatan", "Sesuai kesepakatan",
          "Sesuai kesepakatan", "Fleksibel", "Fleksibel", "Fleksibel", "Fleksibel",
          "Fleksibel", "4x /bln", "2x /bln", "1x /bln", "Termasuk*",
        ]),
      },
      {
        label: "Dukungan teknis",
        values: V([
          "Prioritas + account manager", "Prioritas", "WhatsApp jam kerja", "Prioritas + review berkala", "Prioritas",
          "WhatsApp jam kerja", "24/7 + squad", "24/7 + tim", "24/7", "SLA cepat",
          "Prioritas + laporan", "Prioritas", "Prioritas", "Jam kerja", "WhatsApp",
        ]),
      },
      {
        label: "Training penggunaan",
        values: V([
          "Online + onsite", "Online", "Panduan awal", "Online", "Online",
          "Panduan awal", "Squad dedikasi", "Di kantor", "Online", "Online",
          "Online", "Online", F, F, F,
        ]),
      },
    ],
  },
];
