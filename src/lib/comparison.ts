import { plans } from "./plans";

export type CompareValue = string | boolean;
export type CompareRow = { label: string; values: Record<string, CompareValue> };
export type CompareSection = { title: string; rows: CompareRow[] };

/** Susun record { planId: value } dari array mengikuti urutan plans */
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
        values: V(["Rp 1,5 jt", "Rp 3 jt", "Rp 5 jt", "Rp 10 jt", "Rp 20 jt", "Rp 30 jt", "Rp 50 jt", "Rp 75 jt", "Rp 100 jt"]),
      },
      {
        label: "Maintain /bulan",
        values: V(["Termasuk*", "Rp 300 rb", "Rp 500 rb", "Rp 750 rb", "Rp 1,5 jt", "Rp 3 jt", "Rp 5 jt", "Rp 7,5 jt", "Rp 10 jt"]),
      },
      {
        label: "Perpanjangan /tahun",
        values: V([F, F, "Rp 1 jt", "Rp 2 jt", "Rp 3,5 jt", "Rp 5 jt", "Rp 10 jt", "Rp 15 jt", "Rp 20 jt"]),
      },
    ],
  },
  {
    title: "Halaman & Konten",
    rows: [
      {
        label: "Jumlah halaman",
        values: V(["1", "3–5", "5–8", "8–12", "12–20", "Custom", "Custom", "Custom", "Custom"]),
      },
      { label: "CMS (kelola sendiri)", values: V([F, F, F, T, T, T, T, T, T]) },
      { label: "Blog / artikel", values: V([F, F, T, T, T, T, T, T, T]) },
      { label: "Katalog produk / layanan", values: V([F, F, F, F, T, T, T, T, T]) },
    ],
  },
  {
    title: "Fitur Lanjutan",
    rows: [
      { label: "Sistem booking / membership", values: V([F, F, F, F, F, T, T, T, T]) },
      { label: "Dashboard admin", values: V([F, F, F, T, T, T, T, T, T]) },
      { label: "Integrasi API pihak ketiga", values: V([F, F, F, F, "Dasar", T, T, T, T]) },
      { label: "Payment gateway", values: V([F, F, F, F, F, F, T, T, T]) },
      { label: "Multi-bahasa", values: V([F, F, F, F, F, T, T, T, T]) },
    ],
  },
  {
    title: "SEO & Email",
    rows: [
      { label: "SEO dasar", values: V([T, T, T, T, T, T, T, T, T]) },
      { label: "SEO lanjutan + schema markup", values: V([F, F, F, T, T, T, T, T, T]) },
      { label: "Integrasi Google Analytics", values: V([T, T, T, T, T, T, T, T, T]) },
      {
        label: "Email profesional",
        values: V([F, F, "1 akun", "3 akun", "5 akun", "Custom", "Custom", "Custom", "Custom"]),
      },
    ],
  },
  {
    title: "Keamanan & Backup",
    rows: [
      { label: "SSL (https)", values: V([T, T, T, T, T, T, T, T, T]) },
      { label: "Firewall & anti-spam", values: V([F, F, F, T, T, T, T, T, T]) },
      {
        label: "Backup otomatis",
        values: V([F, F, "Rutin", "Mingguan", "Harian", "Harian", "Real-time", "Multi-region", "Multi-region + DR"]),
      },
      { label: "Monitoring uptime", values: V([F, F, F, F, T, T, T, T, T]) },
    ],
  },
  {
    title: "Dukungan",
    rows: [
      {
        label: "Revisi desain",
        values: V(["1x", "2x", "3x", "3x", "Tanpa batas", "Custom", "Custom", "Custom", "Custom"]),
      },
      {
        label: "Update konten",
        values: V(["Termasuk*", "1x /bln", "2x /bln", "4x /bln", "Fleksibel", "Fleksibel", "Fleksibel", "Fleksibel", "Fleksibel"]),
      },
      {
        label: "Dukungan teknis",
        values: V(["WhatsApp", "Jam kerja", "Prioritas", "Prioritas", "Prioritas + laporan", "SLA cepat", "24/7", "24/7 + tim", "24/7 + squad"]),
      },
      {
        label: "Training penggunaan",
        values: V([F, F, F, "Online", "Online", "Online", "Online", "Di kantor", "Squad dedikasi"]),
      },
    ],
  },
];
