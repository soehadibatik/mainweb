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
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-ink-900/45 uppercase">
              Indeks
            </h3>
            <ul className="mt-5 space-y-3 font-mono text-xs tracking-[0.1em] uppercase">
              <li><Link className="transition-colors hover:text-brand-600" href="/#keunggulan">Keunggulan</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/#paket">Tarif</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/#perbandingan">Perbandingan</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/#proses">Cara kerja</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/klien">Klien</Link></li>
              <li><Link className="transition-colors hover:text-brand-600" href="/#faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-ink-900/45 uppercase">
              Kontak
            </h3>
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
              <li>Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] tracking-[0.16em] text-ink-900/40 uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} mainweb.id, hak cipta dilindungi</p>
          <p>DOC. 2026 / dibuat di Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
