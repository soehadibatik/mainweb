import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";
import { ogMeta } from "@/lib/og";

const desc =
  "Bagaimana mainweb.id menangani data pengunjung situs dan data klien: tanpa cookie pelacak, data klien hanya untuk pengerjaan proyek.";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: desc,
  alternates: { canonical: "/kebijakan-privasi" },
  ...ogMeta({
    title: `Kebijakan Privasi | ${site.name}`,
    description: desc,
    url: "/kebijakan-privasi",
    image: "/og/kebijakan-privasi.png",
    alt: `Kebijakan Privasi ${site.name}: tanpa cookie pelacak, data klien hanya untuk pengerjaan proyek`,
  }),
};

export default function KebijakanPrivasiPage() {
  return (
    <LegalShell title="Kebijakan Privasi" updated="30 September 2026">
      <p>
        Kebijakan ini menjelaskan data apa yang diterima <strong>mainweb.id</strong>{" "}
        (pemilik: {site.contact.address}) saat Anda mengunjungi situs ini atau
        menjadi klien jasa kami, serta apa yang kami lakukan terhadap data itu.
        Intinya singkat: kami tidak mengejar data Anda, dan kami tidak menjual
        data kepada siapa pun.
      </p>

      <h2>1. Data yang kami terima saat Anda mengunjungi situs ini</h2>
      <p>
        Situs ini adalah halaman statis. Kami <strong>tidak memasang cookie
        pelacak, piksel iklan, atau skrip analitik</strong> di situs ini.
        Profil iklan Anda di platform lain tidak dibangun dari kunjungan ke
        mainweb.id.
      </p>
      <p>
        Seperti hampir semua situs, penyedia hosting kami mencatat log teknis
        yang biasanya memuat alamat IP, jenis peramban, dan halaman yang
        diminta. Log ini milik dan dikelola penyedia hosting untuk keperluan
        keamanan dan keandalan layanan; kami tidak memakainya untuk memprofil
        pengunjung.
      </p>
      <p>
        Tautan WhatsApp di situs ini membuka aplikasi WhatsApp dengan pesan yang
        sudah terisi. Korespondensi lewat WhatsApp tunduk pada kebijakan
        privasi WhatsApp, bukan dokumen ini.
      </p>

      <h2>2. Data klien yang kami terima saat mengerjakan proyek</h2>
      <p>
        Untuk keperluan pengerjaan website, kami menerima data yang Anda berikan
        secara langsung, misalnya nama, nomor WhatsApp, email, alamat usaha,
        logo, foto produk, dan materi konten lain. Kami tidak mencari data
        tambahan dari sumber lain tanpa izin Anda.
      </p>

      <h2>3. Cara kami memakai data klien</h2>
      <ul>
        <li>Mengerjakan, merevisi, dan merilis website yang Anda pesan.</li>
        <li>Komunikasi progres proyek dan dukungan teknis setelah rilis.</li>
        <li>
          Administrasi layanan yang Anda aktifkan: domain, hosting, email
          profesional, dan perpanjangan layanan.
        </li>
        <li>
          Penagihan sesuai paket yang Anda pilih. Detail transfer berada di
          rekening bank, bukan di sistem kami.
        </li>
      </ul>

      <h2>4. Layanan pihak ketiga yang menyentuh data proyek Anda</h2>
      <p>
        Mengerjakan website modern pasti melibatkan beberapa layanan pihak
        ketiga. Yang kami pakai dan alasannya:
      </p>
      <ul>
        <li>
          <strong>Penyedia hosting dan domain</strong> untuk menayangkan situs
          Anda.
        </li>
        <li>
          <strong>GitHub</strong> untuk menyimpan kode sumber proyek dan
          menyalinnya otomatis ke hosting saat rilis.
        </li>
        <li>
          <strong>Supabase</strong> untuk autentikasi akun pada panel manajemen
          layanan klien kami.
        </li>
        <li>
          <strong>Google Analytics</strong> dipasang di situs klien{" "}
          <em>hanya jika Anda memintanya</em>, karena termasuk paket. Di situs
          milik kami sendiri (mainweb.id) tidak ada.
        </li>
      </ul>
      <p>
        Setiap layanan di atas memproses data berdasarkan perjanjiannya
        masing-masing. Kami hanya membagikan data seminimal kebutuhan
        pengerjaan.
      </p>

      <h2>5. Berapa lama data disimpan</h2>
      <p>
        Materi proyek dan komunikasi disimpan selama menjadi klien dan selama
        masih diperlukan untuk dukungan, penagihan, atau kewajiban pembukuan.
        Setelah itu dapat dihapus atas permintaan Anda, kecuali data yang wajib
        disimpan oleh hukum.
      </p>

      <h2>6. Hak Anda</h2>
      <p>
        Anda bisa meminta salinan, koreksi, atau penghapusan data Anda dengan
        menghubungi kami lewat WhatsApp {site.contact.whatsappDisplay} atau
        email {site.contact.email}. Kami menanggapi permintaan semaksimal mungkin
        sesuai ketentuan yang berlaku di Indonesia (termasuk UU Perlindungan
        Data Pribadi).
      </p>

      <h2>7. Perubahan kebijakan</h2>
      <p>
        Kalau kebijakan ini berubah, tanggal pembaruan di atas halaman ikut
        berganti. Perubahan yang berdampak ke klien aktif akan kami sampaikan
        langsung.
      </p>
    </LegalShell>
  );
}
