import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";
import { ogMeta } from "@/lib/og";

const desc =
  "Syarat penggunaan situs mainweb.id dan ketentuan jasa pembuatan website: cakupan pekerjaan, pembayaran, revisi, dan keberlangsungan layanan.";

export const metadata: Metadata = {
  title: "Syarat Layanan",
  description: desc,
  alternates: { canonical: "/syarat-layanan" },
  ...ogMeta({
    title: `Syarat Layanan | ${site.name}`,
    description: desc,
    url: "/syarat-layanan",
    image: "/og/syarat-layanan.png",
    alt: `Syarat Layanan ${site.name}: cakupan pekerjaan, pembayaran, revisi, dan keberlangsungan layanan`,
  }),
};

export default function SyaratLayananPage() {
  return (
    <LegalShell title="Syarat Layanan" updated="30 September 2026">
      <p>
        Dokumen ini mengatur pemakaian situs <strong>mainweb.id</strong> dan
        ketentuan umum jasa pembuatan website kami. Ketentuan spesifik per
        proyek mengikuti kesepakatan tertulis di WhatsApp atau email; bila ada
        perbedaan, kesepakatan tertulis yang berlaku.
      </p>

      <h2>1. Situs ini dan isinya</h2>
      <p>
        Harga, fitur, dan keterangan paket di situs ini disajikan apa adanya dan
        dapat berubah seiring perkembangan layanan. Harga yang tercantum belum
        termasuk biaya pihak ketiga di luar jasa kami (misalnya pembelian
        domain, langganan hosting, atau layanan premium lain) kecuali dinyatakan
        lain pada paketnya.
      </p>

      <h2>2. Cakupan pekerjaan</h2>
      <p>
        Setiap paket punya batas halaman, daftar fitur, dan jumlah revisi yang
        tertulis pada halaman paketnya. Permintaan di luar cakupan itu dikerjakan
        setelah kesepakatan tambahan biaya dan waktu. Pengerjaan dimulai setelah
        materi konten awal (logo, teks, foto, akses yang diperlukan) diterima.
      </p>

      <h2>3. Pembayaran</h2>
      <ul>
        <li>
          Biaya pembuatan dibayar di muka sesuai harga paket yang tertera.
        </li>
        <li>
          Layanan maintain dibulatkan bulanan sesuai tarif paket, dimulai
          sejak situs tayang.
        </li>
        <li>
          Perpanjangan tahunan (hosting, domain, dan pemeliharaan) dibayar
          sebelum masa aktif berakhir agar situs tetap online.
        </li>
      </ul>
      <p>
        Keterlambatan pembayaran perpanjangan dapat membuat situs sementara
        tidak dapat diakses sampai pembayaran diterima.
      </p>

      <h2>4. Revisi dan penerimaan</h2>
      <p>
        Jumlah revisi desain mengikuti paket; revisi berjalan pada tahap yang
        disepakati, bukan setelah situs dirilis. Situs dianggap diterima ketika
        Anda menyatakan setuju saat serah terima, atau ketika situs sudah
        dipakai aktif tanpa keberatan dalam 14 hari sejak rilis.
      </p>

      <h2>5. Materi yang Anda berikan</h2>
      <p>
        Anda menjamin bahwa logo, teks, foto, dan materi lain yang Anda kirim
        sah untuk dipakai. Kami berhak menolak materi yang melanggar hukum atau
        hak pihak lain. Hak dan kewajiban atas isi situs setelah rilis berada
        pada pemilik situs.
      </p>

      <h2>6. Kepemilikan</h2>
      <p>
        Setelah pelunasan penuh, konten dan desain situs Anda menjadi milik
        Anda. Kami berhak menyebut proyek Anda sebagai portofolio di situs kami,
        kecuali Anda meminta tidak. Kerangka kode internal, alat kerja, dan
        pengetahuan umum tetap milik kami dan boleh dipakai untuk proyek lain.
      </p>

      <h2>7. Jaminan dan batasan</h2>
      <p>
        Kami mengerjakan dengan cara yang wajar dan berpengalaman, tetapi kami
        tidak menjamin hasil tertentu seperti peringkat pencarian, jumlah
        pengunjung, atau omzet. Uptime, keamanan, dan ketersediaan layanan
        pihak ketiga (hosting, domain, CDN) mengikuti syarat penyedianya.
        Tanggung jawab kami atas satu proyek dibatasi maksimal sebesar biaya
        pembuatan yang telah dibayar untuk proyek tersebut.
      </p>

      <h2>8. Penghentian layanan</h2>
      <p>
        Anda bisa menghentikan layanan maintain kapan saja dengan pemberitahuan;
        layanan berhenti di akhir periode berjalan. Kami dapat menghentikan
        layanan bila terjadi pelanggaran syarat, penyalahgunaan, atau tunggakan
        yang lama, dengan pemberitahuan terlebih dahulu.
      </p>

      <h2>9. Hukum yang berlaku</h2>
      <p>
        Ketentuan ini tunduk pada hukum Republik Indonesia. Sengketa
        diupayakan diselesaikan terlebih dahulu lewat musyawarah; bila tidak
        tercapai, diselesaikan di wilayah hukum tempat kami berdomisili
        ({site.contact.address}).
      </p>

      <h2>10. Kontak dan perubahan</h2>
      <p>
        Pertanyaan tentang syarat ini bisa dikirim ke WhatsApp{" "}
        {site.contact.whatsappDisplay} atau email {site.contact.email}. Tanggal
        pembaruan dokumen tercantum di bagian atas halaman.
      </p>
    </LegalShell>
  );
}
