const features = [
  {
    title: "Pembuatan cepat & profesional",
    desc: "Timeline jelas di setiap fase — dari blueprint hingga peluncuran. Tanpa molor, tanpa drama.",
    meta: "DELIVERY / TEROBSERVASI",
  },
  {
    title: "Desain elegan & responsif",
    desc: "Diuji di desktop, tablet, dan smartphone. Tampilan yang dirancang, bukan sekadar disusun.",
    meta: "DESIGN SYSTEM",
  },
  {
    title: "Anti lemot & SEO friendly",
    desc: "Core Web Vitals hijau, struktur konten teroptimasi mesin pencari sejak hari pertama.",
    meta: "PERFORMANCE / SEO",
  },
  {
    title: "Mudah dikelola sendiri",
    desc: "CMS lengkap untuk mengubah konten kapan saja — tanpa menyentuh satu baris kode pun.",
    meta: "CMS / AUTONOMI",
  },
  {
    title: "Tim berpengalaman",
    desc: "Developer dan desainer yang sudah menangani berbagai industri, dari UMKM hingga korporasi.",
    meta: "PEOPLE / SENIORITY",
  },
  {
    title: "Konsultasi gratis",
    desc: "Diskusikan kebutuhan Anda dulu — kami bantu memetakan solusi sebelum Anda memutuskan.",
    meta: "COMMENCEMENT / 0 rupiah",
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
              Keunggulan
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-black tracking-[-0.03em] text-ink-950 sm:text-5xl">
              Mengapa mainweb.id
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-900/60">
            Enam alasan yang bisa diverifikasi — bukan klaim, melainkan cara
            kerja yang kami jalankan di setiap proyek.
          </p>
        </div>

        <ol>
          {features.map((f) => (
            <li
              key={f.title}
              className="group grid gap-2 border-b border-line py-7 transition-colors hover:bg-white sm:grid-cols-12 sm:gap-6"
            >
              <h3 className="font-display text-xl font-bold tracking-tight text-ink-950 transition-transform duration-300 group-hover:translate-x-1 sm:col-span-6 sm:text-2xl">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-900/60 sm:col-span-4">
                {f.desc}
              </p>
              <span className="self-center font-mono text-[10px] tracking-[0.14em] text-ink-900/35 uppercase sm:col-span-2 sm:text-right">
                {f.meta}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
