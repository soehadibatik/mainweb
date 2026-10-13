import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";

/*
 * Kebijakan privasi. Teks Indonesia dipertahankan apa adanya dari halaman
 * asli; teks Inggris adalah terjemahan setia. Konten identik secara fakta:
 * hanya bahasa yang berubah, tidak ada klaim tambahan.
 */
export default function PrivacyPage({ lang }: { lang: Locale }) {
  return (
    <LegalShell
      lang={lang}
      title={lang === "id" ? "Kebijakan Privasi" : "Privacy Policy"}
      updated="30 September 2026"
    >
      {lang === "id" ? <PrivacyId /> : <PrivacyEn />}
    </LegalShell>
  );
}

function PrivacyId() {
  return (
    <>
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
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <p>
        This policy explains what data <strong>mainweb.id</strong> receives
        (owner: {site.contact.address}) when you visit this site or become a
        client of our services, and what we do with that data. The short
        version: we do not chase your data, and we do not sell data to anyone.
      </p>

      <h2>1. Data we receive when you visit this site</h2>
      <p>
        This site is a static page. We do <strong>not install tracking
        cookies, ad pixels, or analytics scripts</strong> on this site. Your ad
        profile on other platforms is not built from visits to mainweb.id.
      </p>
      <p>
        Like almost every site, our hosting provider records technical logs
        that usually contain IP addresses, browser types, and requested pages.
        These logs belong to and are managed by the hosting provider for
        security and service reliability purposes; we do not use them to
        profile visitors.
      </p>
      <p>
        WhatsApp links on this site open the WhatsApp app with a pre-filled
        message. Correspondence via WhatsApp is subject to WhatsApp&apos;s
        privacy policy, not this document.
      </p>

      <h2>2. Client data we receive when working on a project</h2>
      <p>
        For website work, we receive data you provide directly, such as your
        name, WhatsApp number, email, business address, logo, product photos,
        and other content material. We do not seek additional data from other
        sources without your permission.
      </p>

      <h2>3. How we use client data</h2>
      <ul>
        <li>Building, revising, and launching the website you ordered.</li>
        <li>Project progress communication and technical support after launch.</li>
        <li>
          Administration of the services you activate: domain, hosting,
          professional email, and service renewals.
        </li>
        <li>
          Billing according to the package you chose. Transfer details are in
          the bank account, not in our systems.
        </li>
      </ul>

      <h2>4. Third-party services that touch your project data</h2>
      <p>
        Building a modern website inevitably involves several third-party
        services. What we use and why:
      </p>
      <ul>
        <li>
          <strong>Hosting and domain providers</strong> to put your site
          online.
        </li>
        <li>
          <strong>GitHub</strong> to store the project&apos;s source code and
          deploy it automatically to hosting on release.
        </li>
        <li>
          <strong>Supabase</strong> for account authentication on our client
          service management panel.
        </li>
        <li>
          <strong>Google Analytics</strong> is installed on client sites{" "}
          <em>only if you ask for it</em>, since it is part of packages. On our
          own site (mainweb.id) there is none.
        </li>
      </ul>
      <p>
        Each service above processes data based on its own agreement. We only
        share data to the minimum extent the work requires.
      </p>

      <h2>5. How long data is kept</h2>
      <p>
        Project material and communication are kept for as long as you are a
        client and as long as they are needed for support, billing, or
        bookkeeping obligations. After that, they can be deleted upon your
        request, except for data that must be retained by law.
      </p>

      <h2>6. Your rights</h2>
      <p>
        You can request a copy, correction, or deletion of your data by
        contacting us via WhatsApp {site.contact.whatsappDisplay} or email{" "}
        {site.contact.email}. We respond to requests to the fullest extent
        possible under the provisions applicable in Indonesia (including the
        Personal Data Protection Law).
      </p>

      <h2>7. Policy changes</h2>
      <p>
        If this policy changes, the update date at the top of the page changes
        as well. Changes that affect active clients will be communicated
        directly.
      </p>
    </>
  );
}
