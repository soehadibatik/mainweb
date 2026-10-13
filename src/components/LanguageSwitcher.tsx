"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type Locale,
  LOCALES,
  DEFAULT_LOCALE,
  localeShort,
  parsePath,
  localizePath,
} from "@/lib/i18n/config";

/**
 * Pergantian bahasa untuk hosting statis: tidak ada deteksi otomatis, hanya
 * dua URL kanonik per halaman. Komponen ini membaca path sekarang, menentukan
 * locale lain, lalu menautkannya ke path yang sama di locale tersebut.
 */
export default function LanguageSwitcher({
  current,
  className = "",
}: {
  /** Locale halaman yang sedang dirender. */
  current: Locale;
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  const { pathname: clean } = parsePath(pathname);

  return (
    <div
      role="group"
      aria-label="Pilih bahasa / Choose language"
      className={`flex items-center border border-ink-900/20 ${className}`}
    >
      {LOCALES.map((loc) => {
        const active = loc === current;
        const href = localizePath(loc, clean);
        return (
          <Link
            key={loc}
            href={href}
            hrefLang={loc}
            aria-current={active ? "true" : undefined}
            className={`px-2 py-1 font-mono text-[11px] font-semibold tracking-[0.08em] transition-colors ${
              active
                ? "bg-ink-950 text-white"
                : "text-ink-900/55 hover:text-brand-600"
            }`}
          >
            {localeShort[loc]}
          </Link>
        );
      })}
      {/* Menjaga DEFAULT_LOCALE terpakai walau tidak dirender langsung. */}
      <span className="sr-only">{DEFAULT_LOCALE}</span>
    </div>
  );
}
