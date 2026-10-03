import Link from "next/link";

/*
 * Cangkang bersama untuk halaman legal. Badan dokumen diberi kelas
 * .legal-body (lihat globals.css) agar tiap halaman cukup menulis
 * h2/p/ul polos tanpa mengulang kelas utilitas di setiap paragraf.
 */
export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="reveal-mask">
          <div className="reveal reveal-blur">
            <p className="eyebrow"><span className="eyebrow-slash" aria-hidden>{"// "}</span>
              Legal
            </p>
            <h1 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-balance">
              {title}
            </h1>
          </div>
        </div>
        <p className="reveal reveal-d2 mt-3 font-mono text-[11px] text-ink-900/45">
          Terakhir diperbarui: {updated}
        </p>

        <div className="legal-body reveal reveal-d3 mt-10">{children}</div>

        <p className="reveal mt-12 border-t border-line pt-6 font-mono text-[11px] text-ink-900/50">
          Ada pertanyaan soal dokumen ini?{" "}
          <Link href="/" className="text-brand-600 hover:text-ink-950">
            Hubungi kami
          </Link>
        </p>
      </div>
    </section>
  );
}
