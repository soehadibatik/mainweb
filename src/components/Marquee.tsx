const items = [
  "ANTI LEMOT",
  "SEO FRIENDLY",
  "RESPONSIF PENUH",
  "CMS MUDAH DIKELOLA",
  "KONSULTASI GRATIS",
  "TIM BERPENDALAM",
  "SUPPORT PRIORITAS",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-white py-3" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-[11px] tracking-[0.22em] whitespace-nowrap uppercase"
          >
            <span className="text-ink-950/80">{item}</span>
            <span className="text-brand-600">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
