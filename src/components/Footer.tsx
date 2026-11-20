import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { ui } from "@/lib/i18n/ui";
import { localizePath, type Locale } from "@/lib/i18n/config";

export default function Footer({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const links = t.footer.links.map((l) => ({
    ...l,
    href: localizePath(lang, l.href),
  }));

  return (
    <footer className="border-t border-line bg-paper text-ink-900/65">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={site.name}
                width={160}
                height={90}
                className="h-10 w-auto"
              />
              <span className="h-3.5 w-px bg-ink-900/15" aria-hidden />
              <span className="brand-wordmark font-display text-[18px] leading-none font-black tracking-[-0.045em]">
                {t.brand.wordmark}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs text-ink-900/45">{t.footer.index}</p>
            <ul className="mt-5 space-y-3 text-sm">
              {links.map((l) => (
                <li key={l.href + l.label}>
                  <Link className="transition-colors hover:text-brand-600" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs text-ink-900/45">{t.footer.kontak}</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-brand-600 transition-colors hover:text-ink-950"
                >
                  <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: {site.contact.whatsappDisplay}
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

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-ink-900/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}, {t.footer.copyright}
          </p>
          <p className="flex gap-4">
            <Link
              className="transition-colors hover:text-brand-600"
              href={localizePath(lang, "/kebijakan-privasi")}
            >
              {t.footer.privacy}
            </Link>
            <Link
              className="transition-colors hover:text-brand-600"
              href={localizePath(lang, "/syarat-layanan")}
            >
              {t.footer.terms}
            </Link>
          </p>
          <p>
            Doc. {new Date().getFullYear()} / {t.footer.doc}
          </p>
        </div>
      </div>
    </footer>
  );
}
