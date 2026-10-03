const swatches = [
  { hex: "#0047D2", name: "Brand utama", note: "diekstrak dari logo" },
  { hex: "#00A1F8", name: "Sky aksen", note: "ekstraksi logo" },
  { hex: "#7127E9", name: "Violet aksen", note: "ekstraksi logo" },
  { hex: "#060B18", name: "Ink", note: "teks & panel gelap" },
  { hex: "#FAFAFA", name: "Paper", note: "latar halaman" },
];

export default function BrandStrip() {
  return (
    <section className="border-b border-line py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div className="reveal-mask">
            <div className="reveal reveal-blur">
              <p className="eyebrow">
                <span className="eyebrow-slash" aria-hidden>{"// "}</span>
                Identitas
              </p>
              <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-ink-950 sm:text-5xl">
                Satu identitas, semua halaman.{" "}
                <span className="text-ink-900/40">
                  Warna dan hurufnya diambil dari logo.
                </span>
              </h2>
            </div>
          </div>
          <p className="reveal reveal-d2 max-w-sm text-sm leading-relaxed text-ink-900/60">
            Warna dan tipografi di bawah diambil langsung dari logo utama
            mainweb.id, lalu dipakai konsisten di setiap halaman.
          </p>
        </div>

        <div className="stagger grid gap-px bg-line lg:grid-cols-12">
          {/* Spesimen logo */}
          <div className="reveal bg-paper p-8 lg:col-span-5">
            <p className="font-mono text-xs text-ink-900/50">
              Logotype / logo.png
            </p>
            <div className="mt-6 flex items-center gap-6">
              <div className="border border-line bg-white p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="Logo utama mainweb.id"
                  className="h-16 w-auto"
                />
              </div>
              <div className="bg-ink-950 p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-white.png"
                  alt="Logo mainweb.id versi putih di latar gelap"
                  className="h-16 w-auto"
                />
              </div>
            </div>
            <p className="mt-5 font-mono text-xs leading-relaxed text-ink-900/45">
              Dua varian, orisinal dan putih, 1670×942 px, RGBA
            </p>
          </div>

          {/* Swatch warna */}
          <div className="reveal bg-paper p-8 lg:col-span-4">
            <p className="font-mono text-xs text-ink-900/50">
              Palet / hasil ekstraksi logo
            </p>
            <ul className="mt-6 space-y-3">
              {swatches.map((s) => (
                <li key={s.hex} className="flex items-center gap-4">
                  <span
                    className="h-10 w-14 shrink-0 border border-ink-900/10"
                    style={{ backgroundColor: s.hex }}
                    aria-hidden
                  />
                  <span className="min-w-0">
                    <span className="block font-mono text-xs font-semibold text-ink-950">
                      {s.name}{" "}
                      <span className="font-normal text-ink-900/45">{s.hex}</span>
                    </span>
                    <span className="block font-mono text-[11px] text-ink-900/45">
                      {s.note}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Spesimen tipografi */}
          <div className="reveal bg-paper p-8 lg:col-span-3">
            <p className="font-mono text-xs text-ink-900/50">
              Tipografi
            </p>
            <p className="mt-6 font-display text-6xl font-black tracking-[-0.04em] text-ink-950">
              Aa
            </p>
            <p className="mt-2 font-mono text-xs text-ink-900/60">Inter Tight</p>
            <p className="mt-6 font-mono text-4xl font-semibold text-ink-950">09</p>
            <p className="mt-2 font-mono text-xs text-ink-900/60">
              IBM Plex Mono, harga &amp; metadata
            </p>
            <p className="mt-6 text-sm font-light text-ink-900/60">
              IBM Plex Sans untuk body teks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
