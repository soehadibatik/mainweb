import Image from "next/image";
import Link from "next/link";
import { clients, totalProjects } from "@/lib/clients";

function LogoRow({ items, reverse }: { items: typeof clients; reverse: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="group mask-fade-x overflow-hidden">
      <div
        className={`flex w-max items-center gap-8 pr-8 sm:gap-14 sm:pr-14 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee-slow"
        }`}
      >
        {row.map((c, i) => {
          const dup = i >= items.length;
          return (
            <Link
              key={`${c.domain}-${i}`}
              href="/klien"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={dup ? -1 : 0}
              aria-hidden={dup || undefined}
              title={`Lihat semua klien — ${c.name}`}
              className="flex shrink-0 items-center py-4"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={c.w}
                height={c.h}
                loading="lazy"
                className="h-9 w-auto max-w-[140px] object-contain grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100 sm:h-10"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Clients() {
  const half = Math.ceil(clients.length / 2);

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
              Logo diambil langsung dari situs masing-masing klien. Klik salah
              satu untuk membuka halaman klien lengkap.
            </p>
            <Link
              href="/klien"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink-900/25 px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-ink-950 uppercase transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-white"
            >
              Lihat semua klien <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-2 space-y-2">
        <LogoRow items={clients.slice(0, half)} reverse={false} />
        <LogoRow items={clients.slice(half)} reverse={true} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-6 font-mono text-[11px] tracking-[0.14em] text-ink-900/45 uppercase">
          {clients.length} situs tampil · {totalProjects} proyek tercatat
        </p>
      </div>
    </section>
  );
}
