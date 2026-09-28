import Link from "next/link";
import type { Metadata } from "next";
import { plans } from "@/lib/plans";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "404: Halaman tidak ditemukan",
};

export default function NotFound() {
  return (
    <main className="flex-1">
      {/* Meta bar dokumen */}
      <div className="border-b border-line pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 font-mono text-[11px] tracking-[0.14em] text-ink-900/50 uppercase sm:px-6 lg:px-8">
          <span>DOC · ERROR</span>
          <span className="hidden sm:block">HALAMAN TIDAK TERDAFTAR</span>
          <span className="text-brand-600">STATUS 404</span>
        </div>
      </div>

      {/* Display error */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid-light pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
            Dokumen tidak ditemukan
          </p>
          <p className="mt-6 font-mono text-[clamp(5rem,18vw,13rem)] leading-none font-semibold tracking-tight text-ink-950">
            404
          </p>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed font-light text-ink-900/70">
            Halaman yang Anda cari mungkin sudah dipindah atau memang belum
            pernah dibuat. Yang tersedia ada di bawah.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="bg-brand-600 px-7 py-4 text-center font-mono text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-brand-700"
            >
              Kembali ke beranda
            </Link>
            <a
              href={waLink("Halo mainweb.id, saya tidak menemukan halaman yang saya cari.")}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink-900/15 px-7 py-4 text-center font-mono text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:border-ink-900/40"
            >
              Tanya kami langsung
            </a>
          </div>
        </div>
      </section>

      {/* Arsip paket */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 border-b border-line pb-8 lg:flex-row lg:items-end">
            <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-ink-950 sm:text-4xl">
              Arsip paket
            </h2>
            <span className="font-mono text-[11px] tracking-[0.16em] text-ink-900/45 uppercase">
              9 dokumen tersedia
            </span>
          </div>

          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <li key={plan.id} className="border-b border-line">
                <Link
                  href={`/paket/${plan.id}`}
                  className="group flex items-baseline justify-between gap-4 py-5 transition-colors hover:bg-white"
                >
                  <span>
                    <span className="block font-display text-lg font-bold tracking-tight text-ink-950 transition-transform duration-300 group-hover:translate-x-1">
                      {plan.name}
                    </span>
                    <span className="mt-0.5 block text-sm text-ink-900/55">
                      {plan.tagline}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-sm font-semibold text-ink-950">
                    {plan.build}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-[11px] leading-relaxed text-ink-900/50">
            Tidak menemukan yang Anda cari? Bicarakan langsung dengan kami
            lewat{" "}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
