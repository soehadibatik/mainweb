import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";

/*
 * Syarat layanan. Teks Indonesia dipertahankan apa adanya dari halaman
 * asli; teks Inggris adalah terjemahan setia. Konten identik secara fakta.
 */
export default function TermsPage({ lang }: { lang: Locale }) {
  return (
    <LegalShell
      lang={lang}
      title={lang === "id" ? "Syarat Layanan" : "Terms of Service"}
      updated="30 September 2026"
    >
      {lang === "id" ? <TermsId /> : <TermsEn />}
    </LegalShell>
  );
}

function TermsId() {
  return (
    <>
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
    </>
  );
}

function TermsEn() {
  return (
    <>
      <p>
        This document governs the use of the <strong>mainweb.id</strong> site
        and the general terms of our website services. Specific terms per
        project follow the written agreement via WhatsApp or email; if there is
        a difference, the written agreement applies.
      </p>

      <h2>1. This site and its contents</h2>
      <p>
        Prices, features, and package details on this site are presented as they
        are and may change as the service develops. The listed prices do not
        include third-party costs outside our services (for example domain
        purchase, hosting subscription, or other premium services) unless
        stated otherwise on the package.
      </p>

      <h2>2. Scope of work</h2>
      <p>
        Every package has page limits, feature lists, and revision counts written
        on its package page. Requests outside that scope are carried out after
        an agreement on additional cost and time. Work begins after the initial
        content material (logo, text, photos, required access) is received.
      </p>

      <h2>3. Payment</h2>
      <ul>
        <li>
          The build cost is paid upfront according to the listed package price.
        </li>
        <li>
          Maintenance service is billed monthly at the package rate, starting
          when the site goes live.
        </li>
        <li>
          Annual renewal (hosting, domain, and maintenance) is paid before the
          active period ends so the site stays online.
        </li>
      </ul>
      <p>
        Late renewal payment may temporarily make the site inaccessible until
        payment is received.
      </p>

      <h2>4. Revisions and acceptance</h2>
      <p>
        The number of design revisions follows the package; revisions happen at
        the agreed stage, not after the site is released. The site is considered
        accepted when you state your agreement at handover, or when the site has
        been actively used without objection within 14 days of release.
      </p>

      <h2>5. Material you provide</h2>
      <p>
        You guarantee that the logo, text, photos, and other material you send
        is lawful to use. We may refuse material that violates the law or the
        rights of others. Rights and obligations over the site content after
        release belong to the site owner.
      </p>

      <h2>6. Ownership</h2>
      <p>
        After full payment, the content and design of your site become yours. We
        have the right to mention your project as a portfolio on our site,
        unless you ask us not to. Internal code frameworks, tools, and general
        knowledge remain ours and may be used for other projects.
      </p>

      <h2>7. Warranties and limitations</h2>
      <p>
        We work in a reasonable and experienced manner, but we do not guarantee
        specific outcomes such as search rankings, visitor numbers, or revenue.
        Uptime, security, and availability of third-party services (hosting,
        domain, CDN) follow their providers&apos; terms. Our liability for one
        project is limited to a maximum of the build cost paid for that project.
      </p>

      <h2>8. Service termination</h2>
      <p>
        You may stop maintenance service at any time with notice; service ends
        at the end of the running period. We may stop service in case of term
        violations, misuse, or prolonged arrears, with prior notice.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are subject to the law of the Republic of Indonesia.
        Disputes are first attempted through discussion; if not resolved, they
        are settled in the legal jurisdiction where we are domiciled (
        {site.contact.address}).
      </p>

      <h2>10. Contact and changes</h2>
      <p>
        Questions about these terms can be sent to WhatsApp{" "}
        {site.contact.whatsappDisplay} or email {site.contact.email}. The
        document update date is listed at the top of the page.
      </p>
    </>
  );
}
