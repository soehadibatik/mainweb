"use client";

import { useState } from "react";
import Link from "next/link";

type Brief = { id: string; name: string; build: string; tagline: string };

type Option = { label: string; boost: Record<string, number> };

type Question = { key: string; q: string; options: Option[] };

const questions: Question[] = [
  {
    key: "budget",
    q: "1/3 · Patokan biaya pembuatan?",
    options: [
      { label: "≤ Rp 5 jt", boost: { basic: 3, beginner: 3, elementary: 2 } },
      { label: "Rp 5 – 20 jt", boost: { elementary: 1, light: 3, intermediate: 3 } },
      {
        label: "≥ Rp 30 jt",
        boost: { advance: 1, proficient: 3, max: 2, "pro-max": 1 },
      },
    ],
  },
  {
    key: "pages",
    q: "2/3 · Butuh berapa halaman?",
    options: [
      { label: "1 halaman saja", boost: { basic: 5 } },
      { label: "3 – 8 halaman", boost: { beginner: 3, elementary: 4, light: 1 } },
      { label: "Banyak, plus blog / katalog", boost: { light: 3, intermediate: 4, advance: 1 } },
    ],
  },
  {
    key: "need",
    q: "3/3 · Perlu CMS atau fitur custom?",
    options: [
      { label: "Tidak, cukup statis", boost: { basic: 2, beginner: 2, elementary: 2 } },
      { label: "Ya, CMS", boost: { intermediate: 4, advance: 4 } },
      {
        label: "Booking, dashboard, dll",
        boost: { advance: 4, proficient: 3, max: 3, "pro-max": 2 },
      },
    ],
  },
];

export default function PlanChooser({ plans }: { plans: Brief[] }) {
  const [picks, setPicks] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  const step = questions.filter((q) => picks[q.key] !== undefined).length;

  const pick = (key: string, option: number) =>
    setPicks((prev) => ({ ...prev, [key]: option }));

  let best: Brief | null = null;
  if (step === questions.length) {
    const scores: Record<string, number> = {};
    for (const q of questions) {
      for (const [id, w] of Object.entries(q.options[picks[q.key]].boost)) {
        scores[id] = (scores[id] ?? 0) + w;
      }
    }
    // plans urut dari harga termurah, jadi seri otomatis menang yang lebih murah
    for (const p of plans) {
      if (!best || (scores[p.id] ?? 0) > (scores[best.id] ?? 0)) best = p;
    }
  }

  return (
    <div className="mt-8 border border-ink-950 bg-paper">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:bg-white"
      >
        <span>
          <span className="mr-2 text-brand-600">{open ? "×" : "?"}</span>
          {open
            ? "Tutup panduan pilih paket"
            : "Bingung pilih dari 9 paket? Jawab 3 pertanyaan"}
        </span>
        <span aria-hidden className="text-ink-900/40">
          {open ? "↑" : "↓"}
        </span>
      </button>

      {open && (
        <div className="border-t border-line px-5 py-5">
          {questions.slice(0, Math.min(step + 1, questions.length)).map((q, qi) => (
            <div key={q.key} className={qi > 0 ? "fade-rise mt-5" : ""}>
              <p className="font-mono text-[11px] font-semibold tracking-[0.12em] text-ink-950 uppercase">
                {q.q}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {q.options.map((opt, oi) => {
                  const chosen = picks[q.key] === oi;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      aria-pressed={chosen}
                      onClick={() => pick(q.key, oi)}
                      className={`border px-3.5 py-2 font-mono text-[11px] tracking-[0.08em] transition-colors ${
                        chosen
                          ? "border-brand-600 bg-brand-600 text-white"
                          : "border-ink-900/25 bg-white text-ink-900 hover:border-ink-900/70"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {best && (
            <div className="fade-rise mt-6 border border-line bg-white p-5">
              <p className="font-mono text-[10px] tracking-[0.2em] text-brand-600 uppercase">
                Rekomendasi berdasar jawaban Anda
              </p>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-black tracking-tight">
                  Paket {best.name}
                </h3>
                <p className="font-mono text-2xl font-semibold">{best.build}</p>
              </div>
              <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-ink-900/65">
                {best.tagline}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`#paket-${best.id}`}
                  className="bg-brand-600 px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-brand-500"
                >
                  Lihat di daftar ↓
                </a>
                <Link
                  href={`/paket/${best.id}`}
                  className="border border-ink-900/25 px-5 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-white"
                >
                  Detail lengkap →
                </Link>
                <button
                  type="button"
                  onClick={() => setPicks({})}
                  className="font-mono text-[11px] tracking-[0.12em] text-ink-900/50 uppercase hover:text-ink-950"
                >
                  ↺ Ulangi
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
