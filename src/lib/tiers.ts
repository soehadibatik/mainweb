import type { Plan } from "@/lib/plans";

/*
 * Tiga kategori paket yang diurutkan menurut kondisi bisnis pembeli,
 * bukan istilah teknis. Urutan planIds = urutan tampil di tiap kategori,
 * featured = paket yang ditonjolkan secara visual di kategorinya
 * (intermediate mengikuti data highlight di plans.ts).
 */
export type Tier = {
  id: "usaha" | "bisnis" | "perusahaan";
  name: string;
  hint: string;
  desc: string;
  planIds: string[];
  featured: string;
};

export const tiers: Tier[] = [
  {
    id: "usaha",
    name: "Usaha",
    hint: "Baru mulai atau usaha sederhana",
    desc: "Untuk usaha yang baru mulai atau membutuhkan kehadiran profesional di internet.",
    planIds: ["basic", "beginner", "elementary"],
    featured: "elementary",
  },
  {
    id: "bisnis",
    name: "Bisnis",
    hint: "Sudah berjalan, butuh lebih lengkap",
    desc: "Untuk bisnis yang sudah berjalan dan membutuhkan website yang lebih lengkap.",
    planIds: ["light", "intermediate", "advance"],
    featured: "intermediate",
  },
  {
    id: "perusahaan",
    name: "Perusahaan",
    hint: "Kebutuhan website dan sistem yang kompleks",
    desc: "Untuk perusahaan yang membutuhkan website, platform, atau sistem digital dengan kebutuhan lebih kompleks.",
    planIds: ["proficient", "max", "pro-max"],
    featured: "max",
  },
];

/**
 * "Rp 1,5 jt" menjadi "Rp1.500.000". Angka penuh lebih mudah dibaca
 * orang awam daripada singkatan jt. Hanya format yang berubah, bukan
 * nominalnya: harga tetap dibaca dari data paket agar tidak bisa beda
 * sumber. Bila format tak dikenali, teks asli dikembalikan apa adanya.
 */
export function fullPrice(build: string): string {
  const m = build.match(/Rp\s*([\d.,]+)\s*jt/i);
  if (!m) return build;
  const n = Number(m[1].replace(/\./g, "").replace(",", "."));
  if (!Number.isFinite(n)) return build;
  return `Rp${new Intl.NumberFormat("id-ID").format(Math.round(n * 1_000_000))}`;
}

/** Susun plans mengikuti urutan planIds pada satu kategori. */
export function plansOfTier(tier: Tier, plans: Plan[]): Plan[] {
  const byId = new Map(plans.map((p) => [p.id, p]));
  return tier.planIds
    .map((id) => byId.get(id))
    .filter((p): p is Plan => Boolean(p));
}
