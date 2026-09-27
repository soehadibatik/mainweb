import Image from "next/image";
import Link from "next/link";
import { featured } from "@/lib/clients";

export default function Clients() {
  return (
    <section id="klien" className="border-b border-line bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
              Klien
            </p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-ink-950 sm:text-5xl">
              Situs yang sudah kami rilis
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="max-w-sm text-sm leading-relaxed text-ink-900/60">
              Logo resmi masing-masing klien. Klik salah satu untuk membuka
              situsnya langsung.
            </p>
            <Link
              href="/klien"
              className="inline-flex items-center gap-2 border border-ink-900/25 px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-ink-950 uppercase transition-colors hover:border-ink-900 hover:bg-ink-950 hover:text-white"
            >
              Lihat semua klien <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 border-t border-l border-line sm:grid-cols-3 lg:grid-cols-6">
          {featured.map((c) => (
            <li key={c.domain}>
              <a
                href={`https://${c.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center gap-5 border-r border-b border-line px-4 py-8 text-center transition-colors hover:bg-paper sm:py-10"
              >
                <span className="flex h-12 w-full items-center justify-center sm:h-14">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={c.w}
                    height={c.h}
                    loading="lazy"
                    className="max-h-10 w-auto max-w-full object-contain opacity-85 transition duration-300 group-hover:opacity-100 sm:max-h-11"
                  />
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-ink-900/55 uppercase transition-colors group-hover:text-ink-950">
                  {c.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 font-mono text-[11px] tracking-[0.14em] text-ink-900/45 uppercase">
          {featured.length} situs tampil · klik logo untuk membuka
        </p>
      </div>
    </section>
  );
}
