import Link from "next/link";
import { plans } from "@/lib/plans";
import { waLink } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="paket" className="border-y border-line bg-white text-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
              Tarif
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-black tracking-[-0.03em] text-balance sm:text-5xl">
              Sembilan tingkatan.
              <br />
              Satu standar kualitas.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-ink-900/60">
              Biaya pembuatan dibayar di awal. Maintain dirawat bulanan.
              Perpanjangan menjaga situs tetap hidup setiap tahun.
            </p>
            <a
              href="#perbandingan"
              className="mt-3 inline-block font-mono text-[11px] tracking-[0.14em] text-brand-600 uppercase hover:text-ink-950"
            >
              Bandingkan semua paket →
            </a>
          </div>
        </div>

        <ul>
          {plans.map((plan) => (
            <li
              key={plan.id}
              className={`group relative grid gap-4 border-b border-line py-7 transition-colors sm:grid-cols-12 sm:items-center sm:gap-6 ${
                plan.highlight ? "bg-brand-600/[0.06] hover:bg-brand-600/[0.1]" : "hover:bg-paper"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-0 left-0 h-full w-0.5 bg-brand-600" aria-hidden />
              )}

              <div className="sm:col-span-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="bg-brand-600 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.14em] text-white uppercase">
                      Populer
                    </span>
                  )}
                </div>
                <p className="mt-1.5 max-w-[36ch] text-sm leading-relaxed text-ink-900/55">
                  {plan.tagline}
                </p>
              </div>

              <div className="sm:col-span-3">
                <p className="font-mono text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                  {plan.build}
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-ink-900/45 uppercase">
                  biaya pembuatan / awal
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-xs sm:col-span-3 sm:grid-cols-1 sm:gap-y-1.5">
                <div className="flex items-center justify-between gap-3 sm:justify-start">
                  <dt className="tracking-[0.12em] text-ink-900/45 uppercase">Maintain</dt>
                  <dd className="font-semibold text-ink-900 sm:ml-2">{plan.maintain}{plan.renewal ? "/bln" : ""}</dd>
                </div>
                <div className="flex items-center justify-between gap-3 sm:justify-start">
                  <dt className="tracking-[0.12em] text-ink-900/45 uppercase">Perpanjangan</dt>
                  <dd className="font-semibold text-ink-900 sm:ml-2">
                    {plan.renewal ? `${plan.renewal}/th` : "—"}
                  </dd>
                </div>
              </dl>

              <div className="flex items-center gap-3 sm:col-span-2 sm:flex-col sm:items-stretch sm:gap-2">
                <a
                  href={waLink(`Halo mainweb.id, saya tertarik dengan paket ${plan.name} (${plan.build}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 px-4 py-2.5 text-center font-mono text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors ${
                    plan.highlight
                      ? "bg-brand-600 text-white hover:bg-brand-500"
                      : "border border-ink-900/25 text-ink-950 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
                  }`}
                >
                  Pesan
                </a>
                <Link
                  href={`/paket/${plan.id}`}
                  className="flex-1 px-4 py-2.5 text-center font-mono text-[11px] tracking-[0.12em] text-ink-900/50 uppercase transition-colors hover:text-ink-950"
                >
                  Detail →
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-ink-900/45">
          * BASIC — maintain termasuk maks. 1 bulan pertama. Semua paket termasuk SSL,
          desain responsif &amp; SEO dasar.{" "}
          <a
            href={waLink("Halo mainweb.id, saya butuh paket custom.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:text-ink-950"
          >
            Butuh custom? Konsultasi gratis →
          </a>
        </p>
      </div>
    </section>
  );
}
