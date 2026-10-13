/**
 * Konfigurasi i18n untuk mainweb.id.
 *
 * Situs ini di-build statis (output: "export"), jadi deteksi bahasa otomatis
 * lewat Accept-Language / middleware TIDAK bisa jalan di runtime hosting
 * statis. Sebagai gantinya: Indonesia adalah bahasa bawaan di root (`/`),
 * dan Inggris hidup di bawah prefix `/en/`. Pergantian bahasa dilakukan lewat
 * tautan eksplisit (switcher), yang juga menjamin setiap halaman punya dua
 * URL kanonik jelas untuk hreflang.
 */

export type Locale = "id" | "en";

export const LOCALES: Locale[] = ["id", "en"];

/** Bahasa bawaan — tampil di root tanpa prefix. */
export const DEFAULT_LOCALE: Locale = "id";

export const localeLabel: Record<Locale, string> = {
  id: "Indonesia",
  en: "English",
};

/** Singkatan 2 huruf untuk tombol switcher. */
export const localeShort: Record<Locale, string> = {
  id: "ID",
  en: "EN",
};

export function isLocale(value: string): value is Locale {
  return value === "id" || value === "en";
}

/**
 * Tambahkan prefix locale ke sebuah path internal.
 * locale "id" (bawaan) → path apa adanya (tanpa prefix).
 * locale "en"          → "/en" + path.
 *
 * Contoh: localizePath("en", "/paket/x") = "/en/paket/x"
 *         localizePath("id", "/paket/x") = "/paket/x"
 */
export function localizePath(locale: Locale, path: string): string {
  // Normalisasi: pastikan diawali slash, tanpa trailing slash (kecuali root).
  let p = path === "" ? "/" : path;
  if (!p.startsWith("/")) p = "/" + p;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);

  if (locale === DEFAULT_LOCALE) return p === "" ? "/" : p;
  return p === "/" ? "/en" : `/en${p}`;
}

/**
 * Balik sebuah path yang mungkin sudah ber-prefix menjadi [locale, pathTanpaPrefix].
 * Berguna untuk switcher: dari path sekarang, tentukan locale lain & path-nya.
 */
export function parsePath(path: string): { locale: Locale; pathname: string } {
  let p = path;
  if (!p.startsWith("/")) p = "/" + p;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);

  if (p === "/en" || p.startsWith("/en/")) {
    const rest = p.slice("/en".length);
    return { locale: "en", pathname: rest === "" ? "/" : rest };
  }
  return { locale: DEFAULT_LOCALE, pathname: p === "" ? "/" : p };
}

/**
 * Dua URL kanonik absolut untuk hreflang di sebuah halaman.
 * Dipakai di generateMetadata tiap halaman.
 */
export function alternatesFor(pathname: string, url: string) {
  const { pathname: clean } = parsePath(pathname);
  return {
    canonical: localizePath(DEFAULT_LOCALE, clean),
    languages: {
      id: `${url}${localizePath("id", clean)}`,
      en: `${url}${localizePath("en", clean)}`,
      "x-default": `${url}${localizePath(DEFAULT_LOCALE, clean)}`,
    },
  };
}
