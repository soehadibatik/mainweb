import type { Locale } from "./config";
import type { TierId } from "@/lib/tiers";
import { tPrice } from "./price";

/**
 * Terjemahan untuk data konten yang hidup di src/lib tapi bukan chrome:
 * kategori paket (tiers) dan label tabel perbandingan. Harga dan nilai
 * numerik TIDAK diterjemahkan (angka tetap angka); hanya teks makna.
 */

export const tierText: Record<
  Locale,
  Record<TierId, { name: string; hint: string; desc: string }>
> = {
  id: {
    unicorn: {
      name: "Unicorn",
      hint: "Sistem digital sebagai infrastruktur bisnis",
      desc: "Untuk perusahaan yang mengoperasikan sistem digital sebagai tulang punggung: website yang terintegrasi dengan sistem internal, alur kerja, dan operasional skala besar.",
    },
    startup: {
      name: "Startup",
      hint: "Startup berpendanaan yang butuh sistem pertama",
      desc: "Untuk startup yang baru punya pendanaan atau pengguna aktif, dan butuh sistem pertama yang rapi — website produk, akun pengguna, dashboard, hingga platform siap skala.",
    },
    perusahaan: {
      name: "Perwujudan",
      hint: "Kebutuhan website dan sistem yang kompleks",
      desc: "Untuk perusahaan yang membutuhkan website, platform, atau sistem digital dengan kebutuhan lebih kompleks.",
    },
    bisnis: {
      name: "UMKM",
      hint: "Sudah berjalan, butuh lebih lengkap",
      desc: "Untuk bisnis yang sudah berjalan dan membutuhkan website yang lebih lengkap.",
    },
    usaha: {
      name: "Babad Alas",
      hint: "Baru mulai atau usaha sederhana",
      desc: "Untuk usaha yang baru mulai atau membutuhkan kehadiran profesional di internet.",
    },
  },
  en: {
    unicorn: {
      name: "Unicorn",
      hint: "Digital systems as business infrastructure",
      desc: "For companies that run digital systems as their backbone: websites integrated with internal systems, workflows, and large-scale operations.",
    },
    startup: {
      name: "Startup",
      hint: "Funded startups that need their first system",
      desc: "For startups that have just secured funding or active users, and need a solid first system — product website, user accounts, dashboard, up to a scale-ready platform.",
    },
    perusahaan: {
      name: "Perwujudan",
      hint: "Complex website and system needs",
      desc: "For companies that need a website, platform, or digital system with more complex requirements.",
    },
    bisnis: {
      name: "UMKM",
      hint: "Already running, needs more",
      desc: "For businesses that are already operating and need a more complete website.",
    },
    usaha: {
      name: "Babad Alas",
      hint: "Just starting out or a simple business",
      desc: "For businesses that are just starting or need a professional presence online.",
    },
  },
};

/** Judul bagian perbandingan (per urutan di comparison.ts). */
export const comparisonSectionTitles: Record<Locale, string[]> = {
  id: ["Biaya", "Halaman & Konten", "Fitur Lanjutan", "SEO & Email", "Keamanan & Backup", "Dukungan"],
  en: ["Cost", "Pages & Content", "Advanced Features", "SEO & Email", "Security & Backup", "Support"],
};

/**
 * Label baris perbandingan. Dipetakan dari teks Indonesia → Inggris.
 * Nilai boolean dan harga tidak perlu; hanya label serta nilai teks makna.
 */
export const comparisonRowLabels: Record<string, string> = {
  "Biaya pembuatan": "Build cost",
  "Maintain /bulan": "Maintenance /month",
  "Perpanjangan /tahun": "Renewal /year",
  "Jumlah halaman": "Number of pages",
  "CMS (kelola sendiri)": "CMS (manage it yourself)",
  "Blog / artikel": "Blog / articles",
  "Katalog produk / layanan": "Product / service catalog",
  "Sistem booking / membership": "Booking / membership system",
  "Dashboard admin": "Admin dashboard",
  "Integrasi API pihak ketiga": "Third-party API integration",
  "Payment gateway": "Payment gateway",
  "Multi-bahasa": "Multi-language",
  "SEO dasar": "Basic SEO",
  "SEO lanjutan + schema markup": "Advanced SEO + schema markup",
  "Integrasi Google Analytics": "Google Analytics integration",
  "Email profesional": "Professional email",
  "SSL (https)": "SSL (https)",
  "Firewall & anti-spam": "Firewall & anti-spam",
  "Backup otomatis": "Automatic backup",
  "Monitoring uptime": "Uptime monitoring",
  "Revisi desain": "Design revisions",
  "Update konten": "Content updates",
  "Dukungan teknis": "Technical support",
  "Training penggunaan": "Usage training",
};

/** Nilai teks (bukan boolean, bukan harga) di tabel perbandingan. */
export const comparisonValues: Record<string, string> = {
  "Sesuai kebutuhan": "As needed",
  Custom: "Custom",
  Termasuk: "Included",
  "Termasuk*": "Included*",
  Dasar: "Basic",
  "1 akun": "1 account",
  "3 akun": "3 accounts",
  "5 akun": "5 accounts",
  Rutin: "Regular",
  Mingguan: "Weekly",
  Harian: "Daily",
  "Real-time": "Real-time",
  "Multi-region": "Multi-region",
  "Multi-region + DR": "Multi-region + DR",
  "1x": "1×",
  "2x": "2×",
  "3x": "3×",
  "Tanpa batas": "Unlimited",
  "Sesuai kesepakatan": "By agreement",
  "1x /bln": "1× /mo",
  "2x /bln": "2× /mo",
  "4x /bln": "4× /mo",
  Fleksibel: "Flexible",
  WhatsApp: "WhatsApp",
  "Jam kerja": "Business hours",
  Prioritas: "Priority",
  "Prioritas + laporan": "Priority + reports",
  "SLA cepat": "Fast SLA",
  "24/7": "24/7",
  "24/7 + tim": "24/7 + team",
  "24/7 + squad": "24/7 + squad",
  "WhatsApp jam kerja": "WhatsApp business hours",
  "Prioritas + account manager": "Priority + account manager",
  "Prioritas + review berkala": "Priority + periodic review",
  Online: "Online",
  "Di kantor": "On-site",
  "Squad dedikasi": "Dedicated squad",
  "Panduan awal": "Initial guide",
  "Online + onsite": "Online + on-site",
  "Online + review": "Online + review",
};

/** Terjemahkan nilai perbandingan. Nilai yang tidak ada di peta teks (mis.
 * harga "Rp 100 miliar") diteruskan ke tPrice agar satuannya ikut
 * diterjemahkan. Boolean dikembalikan apa adanya. */
export function tComparisonValue(locale: Locale, value: unknown): unknown {
  if (locale === "id") return value;
  if (typeof value === "string") {
    const mapped = comparisonValues[value];
    return mapped ?? tPrice(locale, value);
  }
  return value;
}

export function tComparisonLabel(locale: Locale, label: string): string {
  if (locale === "id") return label;
  return comparisonRowLabels[label] ?? label;
}

/**
 * Judul section perbandingan diterjemahkan lewat index (urutan section
 * identik di kedua locale, lihat comparisonSectionTitles). Judul yang tidak
 * dikenal jatuh ke teks asli.
 */
export function tComparisonSectionTitle(
  locale: Locale,
  index: number,
  fallback: string,
): string {
  if (locale === "id") return fallback;
  return comparisonSectionTitles[locale][index] ?? fallback;
}
