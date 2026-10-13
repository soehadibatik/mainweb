import { ui } from "@/lib/i18n/ui";
import type { Locale } from "@/lib/i18n/config";

export default function Features({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const features = t.features.items;

  return (
    <section id="keunggulan" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div className="reveal-mask">
            <div className="reveal reveal-blur">
              <p className="eyebrow">
                <span className="eyebrow-slash" aria-hidden>{"// "}</span>
                {t.features.eyebrow}
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-black tracking-[-0.03em] text-balance text-ink-950 sm:text-5xl">
                {t.features.heading}{" "}
                <span className="text-ink-900/40">{t.features.headingMuted}</span>
              </h2>
            </div>
          </div>
          <p className="reveal reveal-d2 max-w-sm text-sm leading-relaxed text-ink-900/60">
            {t.features.intro}
          </p>
        </div>

        <ol className="stagger">
          {features.map((f) => (
            <li
              key={f.title}
              className="group reveal grid gap-2 border-b border-line py-7 transition-colors hover:bg-white sm:grid-cols-12 sm:gap-6"
            >
              <h3 className="font-display text-xl font-bold tracking-tight text-ink-950 transition-transform duration-300 group-hover:translate-x-1 sm:col-span-6 sm:text-2xl">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-900/60 sm:col-span-4">{f.desc}</p>
              <span className="self-center font-mono text-xs text-ink-900/45 sm:col-span-2 sm:text-right">
                {f.meta}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
