import Link from "next/link";
import { getPlans } from "@/lib/catalog";
import type { Plan } from "@/lib/plans";
import { waLink } from "@/lib/site";
import PlanChooser from "@/components/PlanChooser";

const included = ["SSL (https)", "Desain responsif", "SEO dasar", "Google Analytics"];

const BAND_SIZES = [3, 2, Number.POSITIVE_INFINITY];
const BAND_LABELS = ["Mulai", "Tumbuh", "Skala"];

/** Band harga disusun dari urutan paket — paket baru dari back office otomatis masuk. */
function buildBands(list: Plan[]) {
  const bands: { label: string; from: string; to: string; range: string; ids: string[] }[] = [];
  let i = 0;
  for (let b = 0; b < BAND_LABELS.length && i < list.length; b++) {
    const take = Math.min(BAND_SIZES[b], list.length - i);
    const slice = list.slice(i, i + take);
    const first = slice[0];
    const last = slice[slice.length - 1];
    bands.push({
      label: BAND_LABELS[b],
      from: String(i + 1).padStart(2, "0"),
      to: String(i + take).padStart(2, "0"),
      range: slice.length > 1 ? `${first.build} \u2013 ${last.build}` : first.build,
      ids: slice.map((p) => p.id),
    });
    i += take;
  }
  return bands;
}

export default async function Pricing() {
  const plans = await getPlans();
  const bands = buildBands(plans);

  const chooserPlans = plans.map(({ id, name, build, tagline }) => ({
    id,
    name,
    build,
    tagline,
  }));

  const idxOf = (id: string) =>
    String(plans.findIndex((p) => p.id === id) + 1).padStart(2, "0");

  return (
    <section id="paket" className="border-y border-line bg-white text-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
              Tarif
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-black tracking-[-0.03em] text-balance sm:text-5xl">
              Semua biaya ada di sini.
              <br />
              Bandingkan dulu, baru pesan.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-ink-900/60">
              Biaya pembuatan dibayar di awal, maintain dibayar tiap bulan, dan
              perpanjangan tahunan agar situs tetap online.
            </p>
            <a
              href="#perbandingan"
              className="mt-3 inline-block font-mono text-[11px] tracking-[0.14em] text-brand-600 uppercase hover:text-ink-950"
            >
              Bandingkan semua paket →
            </a>
          </div>
        </div>

        {/* Termasuk di semua paket — dipindah dari footnote ke posisi terlihat */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[10px] tracking-[0.18em] text-ink-900/45 uppercase">
            Termasuk semua paket:
          </span>
          {included.map((item) => (
            <span
              key={item}
              className="border border-line bg-paper px-3 py-1.5 font-mono text-[10px] tracking-[0.1em] text-ink-900/70 uppercase"
            >
              {item}
            </span>
          ))}
        </div>

        <PlanChooser plans={chooserPlans} />

        {/* Sembilan tingkatan, dikelompokkan jadi tiga band harga */}
        <div className="mt-8">
          {bands.map((band) => (
            <div key={band.label} className="mt-6 first:mt-0">
              <h3 className="flex items-baseline justify-between gap-4 border-b border-line bg-paper py-3 font-mono text-[10px] tracking-[0.18em] uppercase">
                <span className="text-brand-600">
                  Tingkat {band.from}–{band.to} · {band.label}
                </span>
                <span className="text-ink-900/45">{band.range}</span>
              </h3>
              <ul>
                {plans
                  .filter((p) => band.ids.includes(p.id))
                  .map((plan) => (
                    <li
                      key={plan.id}
                      id={`paket-${plan.id}`}
                      className={`plan-row group relative grid grid-cols-2 gap-4 border-b border-line py-7 transition-colors sm:grid-cols-12 sm:items-center sm:gap-6 ${
                        plan.highlight
                          ? "bg-brand-600/[0.06] hover:bg-brand-600/[0.1]"
                          : "hover:bg-paper"
                      }`}
                    >
                      {plan.highlight && (
                        <span
                          className="absolute top-0 left-0 h-full w-0.5 bg-brand-600"
                          aria-hidden
                        />
                      )}

                      <div className="order-1 col-span-2 flex items-baseline gap-3 sm:col-span-4">
                        <span className="font-mono text-[11px] tracking-[0.1em] text-ink-900/35 tabular-nums">
                          {idxOf(plan.id)}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <h4 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                              {plan.name}
                            </h4>
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
                      </div>

                      <div className="order-2 col-span-1 sm:col-span-3">
                        <p className="font-mono text-2xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                          {plan.build}
                        </p>
                        <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-ink-900/45 uppercase">
                          biaya pembuatan / awal
                        </p>
                      </div>

                      <dl className="order-4 col-span-2 grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-xs sm:order-3 sm:col-span-3 sm:grid-cols-1 sm:gap-y-1.5">
                        <div className="flex items-center justify-between gap-3 sm:justify-start">
                          <dt className="tracking-[0.12em] text-ink-900/45 uppercase">
                            Maintain
                          </dt>
                          <dd className="font-semibold text-ink-900 sm:ml-2">
                            {plan.maintain}
                            {plan.renewal ? "/bln" : ""}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-3 sm:justify-start">
                          <dt className="tracking-[0.12em] text-ink-900/45 uppercase">
                            Perpanjangan
                          </dt>
                          <dd className="font-semibold text-ink-900 sm:ml-2">
                            {plan.renewal ? `${plan.renewal}/th` : "—"}
                          </dd>
                        </div>
                      </dl>

                      <div className="order-3 col-span-1 flex flex-col gap-2 sm:order-4 sm:col-span-2 sm:items-stretch">
                        <a
                          href={waLink(
                            `Halo mainweb.id, saya tertarik dengan paket ${plan.name} (${plan.build}).`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2.5 text-center font-mono text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors ${
                            plan.highlight
                              ? "bg-brand-600 text-white hover:bg-brand-500"
                              : "border border-ink-900/25 text-ink-950 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
                          }`}
                        >
                          Pesan
                        </a>
                        <Link
                          href={`/paket/${plan.id}`}
                          className="px-4 py-2.5 text-center font-mono text-[11px] tracking-[0.12em] text-ink-900/50 uppercase transition-colors hover:text-ink-950"
                        >
                          Detail →
                        </Link>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-ink-900/45">
          * BASIC: maintain termasuk maks. 1 bulan pertama. Semua paket termasuk SSL,
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
