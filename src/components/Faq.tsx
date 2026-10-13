import { waLink } from "@/lib/site";
import { ui } from "@/lib/i18n/ui";
import type { Locale } from "@/lib/i18n/config";

export default function Faq({ lang }: { lang: Locale }) {
  const t = ui[lang];

  return (
    <section id="faq" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="reveal-mask">
                <div className="reveal reveal-blur">
                  <p className="eyebrow">
                    <span className="eyebrow-slash" aria-hidden>{"// "}</span>
                    {t.faqSection.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-balance text-ink-950 sm:text-5xl">
                    {t.faqSection.heading}{" "}
                    <span className="text-ink-900/40">{t.faqSection.headingMuted}</span>
                  </h2>
                </div>
              </div>
              <p className="reveal reveal-d2 mt-6 max-w-xs text-sm leading-relaxed text-ink-900/60">
                {t.faqSection.intro}
              </p>
              <a
                href={waLink(t.faqSection.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline reveal reveal-d3 mt-6"
              >
                {t.faqSection.askDirectly}
              </a>
            </div>
          </div>

          <div className="stagger lg:col-span-8">
            {t.faq.map((faq) => (
              <details key={faq.q} className="group reveal border-b border-line open:bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-baseline gap-5 px-2 py-6 transition-colors hover:bg-white">
                  <span className="flex-1 font-display text-lg font-bold tracking-tight text-ink-950">{faq.q}</span>
                  <span aria-hidden className="font-mono text-lg text-ink-900/40 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-[68ch] px-2 pb-6 leading-relaxed text-ink-900/65">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
