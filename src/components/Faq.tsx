import { waLink } from "@/lib/site";

const faqs = [
  {
    q: "Mengapa bisnis saya harus punya website?",
    a: "Website adalah etalase yang bekerja 24 jam. Pelanggan mencari layanan Anda lewat mesin pencari — tanpa website, mereka menemukan kompetitor Anda lebih dulu.",
  },
  {
    q: "Apa bedanya paket Basic dengan yang lain?",
    a: "Basic adalah landing page satu halaman — paling hemat, biaya maintain sudah termasuk hingga satu bulan pertama. Paket di atasnya menambah jumlah halaman, CMS, dan layanan maintenance bulanan berkelanjutan.",
  },
  {
    q: "Apa itu biaya maintain dan perpanjangan?",
    a: "Maintain adalah layanan bulanan: pembaruan konten, monitoring, dan dukungan teknis. Perpanjangan adalah biaya tahunan agar website Anda tetap online, terawat, dan mendapat pembaruan keamanan.",
  },
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Tergantung kompleksitas. Landing page bisa selesai dalam hitungan hari; platform dengan fitur custom memerlukan waktu lebih panjang. Estimasi detail diberikan saat konsultasi gratis.",
  },
  {
    q: "Apakah saya bisa membawa desain sendiri?",
    a: "Tentu. Bawa referensi, mockup, atau identitas brand Anda — tim kami mewujudkannya apa adanya, atau menyempurnakannya jika diminta.",
  },
  {
    q: "Bagaimana jika terjadi kendala setelah tayang?",
    a: "Semua paket mendapat dukungan teknis. Paket ber-maintenance bulanan mendapat dukungan berkelanjutan; Basic mendapat dukungan penuh selama satu bulan pertama.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-[11px] tracking-[0.22em] text-brand-600 uppercase">
                FAQ
              </p>
              <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-ink-950 sm:text-5xl">
                Pertanyaan
                <br />
                yang sering
                <br />
                diajukan
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-900/60">
                Tidak menemukan jawaban Anda? Tim kami merespons cepat di jam
                kerja.
              </p>
              <a
                href={waLink("Halo mainweb.id, saya punya pertanyaan seputar jasa pembuatan website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block border border-ink-900/15 px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-ink-900 uppercase transition-colors hover:border-ink-900/40"
              >
                Tanya langsung →
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-line open:bg-white [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-baseline gap-5 px-2 py-6 transition-colors hover:bg-white">
                  <span className="flex-1 font-display text-lg font-bold tracking-tight text-ink-950">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-lg text-ink-900/40 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[68ch] px-2 pb-6 leading-relaxed text-ink-900/65">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
