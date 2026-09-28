const steps = [
  { title: "Konsultasi ide", desc: "Ceritakan tujuan bisnis Anda. Kami petakan kebutuhan, tanpa biaya." },
  { title: "Paket & domain", desc: "Tentukan tingkatan paket dan nama domain yang paling menguntungkan." },
  { title: "Pemesanan", desc: "Konfirmasi ruang lingkup dan pembayaran. Pengerjaan dijadwalkan." },
  { title: "Penyerahan konten", desc: "Kirim teks, foto, dan aset brand. Kami menatanya jadi halaman." },
  { title: "Pengerjaan", desc: "Tim mengerjakan desain, kode, dan pengujian dalam satu alur." },
  { title: "Peluncuran", desc: "Situs tayang dan langsung dipantau. Maintenance pun dimulai." },
];

export default function Process() {
  return (
    <section id="proses" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
              Cara kerja
            </p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-ink-950 sm:text-5xl">
              Dari konsultasi sampai peluncuran
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-900/60">
            Prosesnya sama untuk paket Basic maupun Pro Max; yang berubah
            hanya skalanya.
          </p>
        </div>

        <ol className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.title} className="group relative bg-paper p-8 transition-colors hover:bg-white">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/60">{step.desc}</p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-600 transition-all duration-500 group-hover:w-full"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
