import type { Plan } from "@/lib/plans";

/*
 * Lima kategori paket, diurutkan dari yang termahal ke termahal:
 * Unicorn (Rp 20–100 miliar) → Startup (Rp 1–3 miliar) → Perwujudan
 * (Rp 50–100 jt) → UMKM (Rp 10–30 jt) → Babad Alas (Rp 1,5–5 jt).
 * Nama tampil (name) berbeda dari id: id dipakai sebagai jangkar
 * `kategori-{id}` dan di CategoryChooser, jadi jangan diubah sembarangan.
 * Urutan planIds = urutan tampil di tiap kategori (termahal dulu);
 * featured = paket yang ditonjolkan secara visual di kategorinya.
 */
export type TierId = "usaha" | "bisnis" | "perusahaan" | "startup" | "unicorn";

export type Tier = {
  id: TierId;
  name: string;
  hint: string;
  desc: string;
  planIds: string[];
  featured: string;
};

export const tiers: Tier[] = [
  {
    id: "unicorn",
    name: "Unicorn",
    hint: "Sistem digital sebagai infrastruktur bisnis",
    desc: "Untuk perusahaan yang mengoperasikan sistem digital sebagai tulang punggung: website yang terintegrasi dengan sistem internal, alur kerja, dan operasional skala besar.",
    planIds: ["z", "y", "x"],
    featured: "z",
  },
  {
    id: "startup",
    name: "Startup",
    hint: "Startup berpendanaan yang butuh sistem pertama",
    desc: "Untuk startup yang baru punya pendanaan atau pengguna aktif, dan butuh sistem pertama yang rapi — website produk, akun pengguna, dashboard, hingga platform siap skala.",
    planIds: ["alpha", "theta", "beta"],
    featured: "alpha",
  },
  {
    id: "perusahaan",
    name: "Perwujudan",
    hint: "Kebutuhan website dan sistem yang kompleks",
    desc: "Untuk perusahaan yang membutuhkan website, platform, atau sistem digital dengan kebutuhan lebih kompleks.",
    planIds: ["pro-max", "max", "proficient"],
    featured: "max",
  },
  {
    id: "bisnis",
    name: "UMKM",
    hint: "Sudah berjalan, butuh lebih lengkap",
    desc: "Untuk bisnis yang sudah berjalan dan membutuhkan website yang lebih lengkap.",
    planIds: ["advance", "intermediate", "light"],
    featured: "intermediate",
  },
  {
    id: "usaha",
    name: "Babad Alas",
    hint: "Baru mulai atau usaha sederhana",
    desc: "Untuk usaha yang baru mulai atau membutuhkan kehadiran profesional di internet.",
    planIds: ["elementary", "beginner", "basic"],
    featured: "elementary",
  },
];

/**
 * "Rp 1,5 jt" menjadi "Rp1.500.000". "Rp 1 miliar" menjadi "Rp1.000.000.000".
 * Angka penuh lebih mudah dibaca orang awam daripada singkatan jt/miliar.
 * Hanya format yang berubah, bukan nominalnya: harga tetap dibaca dari data
 * paket agar tidak bisa beda sumber. Bila format tak dikenali, teks asli
 * dikembalikan apa adanya.
 */
export function fullPrice(build: string): string {
  // Konversi khusus dari format BO: "Rp 1000 jt" -> "Rp 1 miliar", dst.
  const jtToMiliar = build.match(/Rp\s*([\d.,]+)\s*jt/i);
  if (jtToMiliar) {
    const n = Number(jtToMiliar[1].replace(/\./g, "").replace(",", "."));
    if (Number.isFinite(n)) {
      const inMiliar = n / 1000;
      if (Number.isFinite(inMiliar) && inMiliar >= 1 && Number.isInteger(inMiliar)) {
        return `Rp ${new Intl.NumberFormat("id-ID").format(inMiliar)} miliar`;
      }
    }
  }
  return build;
}

/** Susun plans mengikuti urutan planIds pada satu kategori. */
export function plansOfTier(tier: Tier, plans: Plan[]): Plan[] {
  const byId = new Map(plans.map((p) => [p.id, p]));
  return tier.planIds
    .map((id) => byId.get(id))
    .filter((p): p is Plan => Boolean(p));
}
