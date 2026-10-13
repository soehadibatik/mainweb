"use client";

import { useState } from "react";
import type { TierId } from "@/lib/tiers";
import { ui } from "@/lib/i18n/ui";
import type { Locale } from "@/lib/i18n/config";

type Brief = { id: string; name: string; build: string; tagline: string };
type TierBrief = { id: TierId; name: string; hint: string; plans: Brief[] };

export default function CategoryChooser({
  tiers,
  lang = "id",
}: {
  tiers: TierBrief[];
  lang?: Locale;
}) {
  const [picked, setPicked] = useState<TierId | null>(null);
  const t = ui[lang];

  const choose = (id: TierId) => {
    setPicked(id);
    const target = document.getElementById(`kategori-${id}`);
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  const chosen = tiers.find((x) => x.id === picked);

  return (
    <div className="mt-10">
      <p className="font-display text-lg font-bold tracking-tight">{t.chooser.question}</p>

      <div
        role="group"
        aria-label={t.chooser.groupLabel}
        className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
      >
        {tiers.map((tier) => {
          const active = picked === tier.id;
          return (
            <button
              key={tier.id}
              type="button"
              aria-pressed={active}
              onClick={() => choose(tier.id)}
              className={`group min-h-11 px-5 py-4 text-left transition-colors ${
                active
                  ? "border-2 border-brand-600 bg-brand-600/[0.06]"
                  : "border border-line bg-paper hover:border-ink-900/50"
              }`}
            >
              <span className="flex items-center justify-between gap-3">
                <span className="font-display text-lg font-black tracking-tight text-ink-950">
                  {tier.name}
                </span>
                <span aria-hidden className={`font-mono text-sm ${active ? "text-brand-600" : "text-ink-900/35"}`}>
                  ↓
                </span>
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-ink-900/60">
                {tier.hint}
                {tier.id === "unicorn" && (
                  <span className="block mt-0.5 text-[10px] leading-snug text-ink-900/45 uppercase tracking-wider">
                    {t.chooser.unicornNote}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {chosen && (
        <p role="status" className="fade-rise mt-4 font-mono text-xs text-ink-900/60">
          {/* plans diurutkan termahal dulu; "mulai" = harga termurah. */}
          {t.chooser.status(
            chosen.name,
            chosen.plans.length,
            chosen.plans[chosen.plans.length - 1]?.build ?? "",
          )}{" "}
          <button
            type="button"
            onClick={() => setPicked(null)}
            className="text-brand-600 underline-offset-4 hover:text-ink-950 hover:underline"
          >
            {t.chooser.clear}
          </button>
        </p>
      )}
    </div>
  );
}
