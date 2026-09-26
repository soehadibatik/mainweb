"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { plans } from "@/lib/plans";
import { comparisonSections, type CompareValue } from "@/lib/comparison";
import { waLink } from "@/lib/site";

function Cell({ value }: { value: CompareValue }) {
  if (value === true) {
    return (
      <span aria-label="termasuk" className="font-mono text-sm font-semibold text-brand-600">
        ✓
      </span>
    );
  }
  if (value === false) {
    return (
      <span aria-label="tidak termasuk" className="font-mono text-sm text-ink-900/20">
        —
      </span>
    );
  }
  return <span className="font-mono text-xs text-ink-900/75">{value}</span>;
}

export default function PricingComparison() {
  const [activeCol, setActiveCol] = useState<string | null>(null);
  const [hidden, setHidden] = useState<Set<string>>(new Set());

  const visiblePlans = plans.filter((p) => !hidden.has(p.id));

  const toggle = (id: string) =>
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const colBg = (id: string, base?: string) => {
    if (activeCol === id) return "bg-brand-600/[0.06]";
    if (base) return base;
    return "bg-white";
  };

  const highlightBase = "bg-brand-600/[0.04]";

  return (
    <div>
      {/* Toggle paket */}
      <div className="mb-6 border border-line bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-ink-900 uppercase">
            Tampilkan paket
          </span>
          <span className="font-mono text-[10px] tracking-[0.12em] text-ink-900/40 uppercase">
            klik untuk sembunyikan / tampilkan
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {plans.map((plan) => {
            const on = !hidden.has(plan.id);
            return (
              <button
                key={plan.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(plan.id)}
                className={`border px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.12em] uppercase transition-all ${
                  on
                    ? plan.highlight
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-ink-900/25 bg-white text-ink-900 hover:border-ink-900/60"
                    : "border-line bg-paper text-ink-900/30 line-through"
                }`}
              >
                {plan.name}
              </button>
            );
          })}
          {hidden.size > 0 && (
            <button
              type="button"
              onClick={() => setHidden(new Set())}
              className="px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-brand-600 uppercase hover:underline"
            >
              ↺ Tampilkan semua
            </button>
          )}
        </div>
        <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-ink-900/40 uppercase">
          Menampilkan {visiblePlans.length} dari {plans.length} paket
        </p>
      </div>

      {visiblePlans.length === 0 ? (
        <div className="border border-dashed border-ink-900/25 bg-white p-12 text-center">
          <p className="font-mono text-xs tracking-[0.14em] text-ink-900/50 uppercase">
            Semua paket sedang disembunyikan
          </p>
          <button
            type="button"
            onClick={() => setHidden(new Set())}
            className="mt-5 bg-brand-600 px-6 py-2.5 font-mono text-[11px] font-semibold tracking-[0.12em] text-white uppercase hover:bg-brand-700"
          >
            Tampilkan semua paket
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto border border-ink-900/12 shadow-[0_24px_48px_-32px_rgb(11_18_32/0.35)]">
          <table className="w-full min-w-[1080px] border-collapse bg-white text-left">
            <thead>
              <tr>
                <th className="sticky left-0 z-20 w-52 min-w-52 border-r border-b border-line bg-paper p-4 align-bottom">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-ink-900/50 uppercase">
                    Fitur / Paket
                  </span>
                </th>
                {visiblePlans.map((plan) => (
                  <th
                    key={plan.id}
                    onMouseEnter={() => setActiveCol(plan.id)}
                    onMouseLeave={() => setActiveCol(null)}
                    className={`relative border-b border-line p-4 text-center align-bottom transition-colors ${colBg(plan.id, plan.highlight ? highlightBase : undefined)}`}
                  >
                    {plan.highlight && (
                      <span className="absolute top-2 right-2 bg-brand-600 px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-[0.12em] text-white uppercase">
                        Populer
                      </span>
                    )}
                    <span className="font-mono text-[10px] font-bold tracking-[0.12em] text-ink-900 uppercase">
                      {plan.name}
                    </span>
                    <p className="mt-1 font-mono text-lg font-semibold text-ink-950">
                      {plan.build}
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.12em] text-ink-900/35 uppercase">
                      pembuatan
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonSections.map((section) => (
                <Fragment key={section.title}>
                  <tr>
                    <td
                      colSpan={visiblePlans.length + 1}
                      className="border-b border-line bg-paper px-4 py-2.5"
                    >
                      <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-brand-700 uppercase">
                        {section.title}
                      </span>
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.label} className="transition-colors hover:bg-paper/80">
                      <th
                        scope="row"
                        className="sticky left-0 z-10 border-r border-b border-line bg-white px-4 py-3 text-xs font-medium text-ink-900/75"
                      >
                        {row.label}
                      </th>
                      {visiblePlans.map((plan) => (
                        <td
                          key={plan.id}
                          onMouseEnter={() => setActiveCol(plan.id)}
                          onMouseLeave={() => setActiveCol(null)}
                          className={`border-b border-line px-3 py-3 text-center transition-colors ${colBg(plan.id, plan.highlight ? highlightBase : undefined)}`}
                        >
                          <Cell value={row.values[plan.id]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}

              {/* Baris CTA */}
              <tr>
                <th
                  scope="row"
                  className="sticky left-0 z-10 border-r border-line bg-white px-4 py-4 font-mono text-[10px] font-semibold tracking-[0.14em] text-ink-900/60 uppercase"
                >
                  Pesan
                </th>
                {visiblePlans.map((plan) => (
                  <td
                    key={plan.id}
                    className={`border-t-2 border-t-ink-950 p-3 text-center ${colBg(plan.id, plan.highlight ? highlightBase : undefined)}`}
                  >
                    <a
                      href={waLink(`Halo mainweb.id, saya tertarik dengan paket ${plan.name} (${plan.build}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-3 py-2 font-mono text-[10px] font-semibold tracking-[0.1em] uppercase transition-colors ${
                        plan.highlight
                          ? "bg-brand-600 text-white hover:bg-brand-700"
                          : "border border-ink-900/25 text-ink-900 hover:bg-ink-950 hover:text-white"
                      }`}
                    >
                      Pesan
                    </a>
                    <Link
                      href={`/paket/${plan.id}`}
                      className="mt-1.5 block font-mono text-[9px] tracking-[0.1em] text-ink-900/35 uppercase hover:text-brand-600"
                    >
                      Detail →
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-4 font-mono text-[11px] leading-relaxed text-ink-900/50">
        * Maintain paket Basic termasuk hingga 1 bulan pertama. Spesifikasi dapat
        disesuaikan —{" "}
        <a
          href={waLink("Halo mainweb.id, saya butuh paket custom.")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-600 hover:underline"
        >
          konsultasikan gratis
        </a>
        .
      </p>
    </div>
  );
}
