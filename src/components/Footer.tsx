import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper text-ink-900/65">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="mainweb.id"
                width={160}
                height={90}
                className="h-10 w-auto"
              />
              <span className="h-3.5 w-px bg-ink-900/15" aria-hidden />
              <span className="brand-wordmark font-display text-[18px] leading-none font-black tracking-[-0.045em]">MainWeb</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Jasa pembuatan &amp; pengembangan website profesional untuk
              bisnis Anda.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.2em] text-ink-900/45 uppercase">
              Indeks
            </p>
            <ul className="mt-5 space-y-3 font-mono text-xs tracking-[0.1em] uppercase">
              <li><Link className="transition-colors hover:text-brand-600" href="/#keunggulan">Keunggulan</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/#paket">Tarif</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/#perbandingan">Perbandingan</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/#proses">Cara kerja</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/klien">Klien</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/studi-kasus">Studi kasus</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/#faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.2em] text-ink-900/45 uppercase">
              Kontak
            </p>
            <ul className="mt-5 space-y-3 font-mono text-xs tracking-[0.1em] uppercase">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-600"
                >
                  WA {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-brand-600">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 normal-case tracking-normal">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600"
                  aria-hidden
                >
                  <path d="M12 21s-6.5-5.6-6.5-10.2A6.5 6.5 0 0 1 12 4.5a6.5 6.5 0 0 1 6.5 6.3C18.5 15.4 12 21 12 21Z" />
                  <circle cx="12" cy="10.6" r="2.3" />
                </svg>
                <span className="max-w-[24ch] leading-relaxed">{site.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] tracking-[0.16em] text-ink-900/40 uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} mainweb.id, hak cipta dilindungi</p>
          <p className="flex gap-4">
            <Link className="transition-colors hover:text-brand-600" href="/kebijakan-privasi">
              Kebijakan privasi
            </Link>
            <Link className="transition-colors hover:text-brand-600" href="/syarat-layanan">
              Syarat layanan
            </Link>
          </p>
          <p>DOC. {new Date().getFullYear()} / dibuat di Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
