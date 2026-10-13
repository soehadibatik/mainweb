import type { Locale } from "./config";

/**
 * Terjemahan satuan harga untuk tampilan. Angka tetap angka dan tidak
 * dikonversi; hanya kata satuan (miliar/jt/rb) yang berganti bahasa supaya
 * tabel perbandingan dan kartu paket tetap terbaca pembaca EN.
 * "Rp 100 miliar" → "Rp 100 billion", "Rp 750 rb" → "Rp 750K".
 */
export function tPrice(locale: Locale, value: string): string {
  if (locale === "id") return value;
  return value
    .replace(/Termasuk/g, "Included")
    .replace(/\bmaks\./g, "max")
    .replace(/\bbln\b/g, "mo")
    .replace(/(\d+(?:[.,]\d+)?)\s*miliar/g, "$1 billion")
    .replace(/(\d+(?:[.,]\d+)?)\s*jt\b/g, "$1M")
    .replace(/(\d+(?:[.,]\d+)?)\s*rb\b/g, "$1K");
}
