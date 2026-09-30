"use client";

import { useState } from "react";

type Brief = { id: string; name: string; build: string; tagline: string };
type TierBrief = { id: string; name: string; hint: string; plans: Brief[] };

/*
 * Pertanyaan yang dijawab komponen ini: "bisnis saya masuk kategori mana?"
 * Klik salah satu kategori melompatkan halaman ke kelompok paketnya.
 * Kartu paket tetap dirender server-side (terbaca crawler & tanpa JS);
 * komponen ini hanya alat bantu navigasi, bukan gerbang konten.
 */
export default function CategoryChooser({ tiers }: { tiers: TierBrief[] }) {
  const [picked, setPicked] = useState<string | null>(null);

  const choose = (id: string) => {
    setPicked(id);
    const target = document.getElementById(`kategori-${id}`);
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  const chosen = tiers.find((t) => t.id === picked);

  return (
    <div className="mt-10">
      <p className="font-display text-lg font-bold tracking-tight">
        Bisnis saya masuk kategori mana?
      </p>

      <div
        role="group"
        aria-label="Kategori berdasarkan kondisi bisnis"
        className="mt-4 grid gap-3 sm:grid-cols-3"
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
                <span
                  aria-hidden
                  className={`font-mono text-sm ${active ? "text-brand-600" : "text-ink-900/35"}`}
                >
                  ↓
                </span>
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-ink-900/60">
                {tier.hint}
              </span>
            </button>
          );
        })}
      </div>

      {chosen && (
        <p
          role="status"
          className="fade-rise mt-4 font-mono text-[11px] tracking-[0.1em] text-ink-900/60 uppercase"
        >
          Kategori {chosen.name}: {chosen.plans.length} paket, mulai{" "}
          {chosen.plans[0]?.build}.{" "}
          <button
            type="button"
            onClick={() => setPicked(null)}
            className="text-brand-600 uppercase hover:text-ink-950"
          >
            Hapus pilihan
          </button>
        </p>
      )}
    </div>
  );
}
