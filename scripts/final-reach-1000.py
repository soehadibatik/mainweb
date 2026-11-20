import json

with open("webmainweb/src/lib/articles.ts") as f:
    text = f.read()

json_text = text.split("export const articles: Article[] = ")[1].split(";\n\nexport function getArticle")[0]
articles = json.loads(json_text)

slugs_to_boost = {
    "biaya-bikin-toko-online-sendiri-vs-developer": {
        "heading": "Katalog Fitur Wajib Toko Online UMKM Siap Ekspor",
        "paragraphs": [
            "Bagi pelaku UMKM yang bercita-cita menjangkau pasar nasional maupun ekspor, toko online Anda harus memiliki kesiapan infrastruktur digital:",
            "• Kemudahan multi-kategori produk: mengelompokkan barang berdasarkan varian rasa, ukuran, atau edisi terbatas secara rapi.",
            "• Tampilan mobile-friendly tanpa patah-patah: navigasi belanja yang sangat lancar saat dibuka calon pembeli dari Instagram Ads atau TikTok Ads.",
            "• Optimasi gambar otomatis berformat WebP: foto katalog produk terlihat tajam dan menggoda selera pembeli, namun ukuran filenya sangat hemat kuota.",
            "• Integrasi sistem pelacakan pixel analitik untuk mempermudah strategi retargeting iklan berbayar Anda."
        ]
    },
    "pentingnya-core-web-vitals-untuk-seo-bisnis": {
        "heading": "Dampak Metrik INP (Interaction to Next Paint) pada Kepuasan Pengguna",
        "paragraphs": [
            "Pembaruan metrik INP oleh Google menggantikan FID (First Input Delay) sebagai tolok ukur responsivitas interaksi pengguna di seluruh siklus kunjungan halaman.",
            "Bukan hanya klik pertama yang dinilai, melainkan setiap interaksi: membuka accordion FAQ, menggulir carousel testimoni, hingga menekan tombol floating WhatsApp.",
            "Dengan arsitektur rekayasa perangkat lunak hand-built yang kami terapkan di mainweb.id, beban thread utama (main-thread task) selalu berada di bawah ambang 50 milidetik, menjamin setiap sentuhan layar pengguna direspons secara instan tanpa jeda."
        ]
    },
    "kapan-bisnis-butuh-website-custom-integrasi-api": {
        "heading": "Keamanan Data Perusahaan & Enkripsi Standar Perbankan",
        "paragraphs": [
            "Ketika sistem web Anda memproses data transaksi keuangan, invoice pembayaran, dan data pribadi ribuan pelanggan, celah keamanan sekecil apa pun dapat berakibat fatal.",
            "Aplikasi web custom di mainweb.id dirancang dengan proteksi keamanan berlapis: sanitasi input ketat terhadap serangan XSS dan SQL Injection, implementasi HTTPS dengan protokol TLS 1.3 terbaru, serta manajemen otentikasi token sesi (JWT) yang aman.",
            "Kami memastikan seluruh data transaksi bisnis Anda terlindungi dengan standar enkripsi industri perbankan modern."
        ]
    },
    "fitur-wajib-website-villa-hotel-resort": {
        "heading": "Pentingnya Narasi Visual Emosional (Storytelling & Experience)",
        "paragraphs": [
            "Tamu yang memesan villa mewah tidak sekadar membeli tempat tidur untuk bermalam, melainkan membeli pengalaman emosional, ketenangan pikiran, dan kenangan liburan bersama keluarga.",
            "Website villa Anda harus mampu menarasikan keindahan suasana: kehangatan cahaya fajar di tepi sawah, keasrian taman tropis, dan aroma sarapan tradisional yang disajikan hangat.",
            "Melalui perpaduan tata letak tipografi elegan dan kompresi visual ultra-cepat buatan mainweb.id, daya tarik magis properti Anda akan memikat hati wisatawan sejak detik pertama mereka membuka situs."
        ]
    },
    "standar-website-perusahaan-manufaktur-ekspor": {
        "heading": "Daftar Periksa Persiapan Materi Website Manufaktur Ekspor",
        "paragraphs": [
            "Untuk mempercepat proses pembuatan website pabrik Anda bersama tim kami, siapkan dokumen dan aset berikut:",
            "• Salinan sertifikat ISO, sertifikat kepatuhan lingkungan, dan penghargaan industri resmi dalam format resolusi tinggi.",
            "• Tabel spesifikasi teknis lini mesin produksi: kapasitas output per jam, toleransi presisi material, dan standar pengemasan ekspor.",
            "• Foto dokumentasi fasilitas pabrik, area pergudangan, proses quality control, dan proses muat barang (stuffing) ke kontainer pelabuhan.",
            "• Kontak langsung perwakilan tim pemasaran ekspor (Export Sales Director) yang fasih berkomunikasi dalam bahasa Inggris."
        ]
    },
    "cara-membuat-website-katalog-properti-yang-ringan-dan-seo-friendly": {
        "heading": "Strategi SEO Konten: Menulis Artikel Panduan Beli Rumah Lokal",
        "paragraphs": [
            "Untuk melipatgandakan kunjungan calon pembeli rumah dari mesin pencari Google, website properti Anda wajib didukung oleh modul artikel edukatif:",
            "• Panduan legalitas: cara mengecek keaslian Sertifikat Hak Milik (SHM) dan Izin Mendirikan Bangunan (PBG/IMB).",
            "• Tips finansial: syarat pengajuan KPR bank syariah maupun konvensional bagi wiraswasta dan generasi muda.",
            "• Ulasan prospek kawasan: fasilitas publik di sekitar perumahan seperti akses gerbang tol terdekat, rumah sakit, dan sekolah favorit.",
            "Modul blog yang terintegrasi pada paket Intermediate mainweb.id memungkinkan tim marketing Anda menerbitkan artikel edukasi dengan sangat mudah."
        ]
    },
    "jasa-pembuatan-website-solo-karanganyar-jawa-tengah": {
        "heading": "Etos Kerja Budaya Jawa Tengah: Kejujuran & Kepercayaan (Amanah)",
        "paragraphs": [
            "Dalam falsafah peradaban masyarakat Jawa, ada ungkapan luhur 'ajining dhiri dumunung aneng lathi' — kehormatan dan martabat seseorang ditentukan oleh apa yang diucapkannya.",
            "Nilai integritas ini kami pegang teguh dalam setiap kontrak pembuatan website di mainweb.id: tidak ada janji manis berlebihan, tidak ada biaya siluman di belakang hari, dan setiap rupiah investasi Anda dipertanggungjawabkan melalui kualitas kode yang prima.",
            "Kami bangga menjadi mitra teknologi tepercaya bagi puluhan pengusaha di Surakarta, Karanganyar, dan seluruh wilayah Jawa Tengah."
        ]
    }
}

for a in articles:
    slug = a["slug"]
    if slug in slugs_to_boost:
        a["sections"].append(slugs_to_boost[slug])

header = """export type TableData = {
  headers: string[];
  rows: string[][];
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  table?: TableData;
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readTime: string;
  primaryKeyword?: string;
  sections: ArticleSection[];
  faqs?: FaqItem[];
};

export const articles: Article[] = """

footer = """;

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
"""

with open("webmainweb/src/lib/articles.ts", "w") as f:
    f.write(header + json.dumps(articles, indent=2, ensure_ascii=False) + footer)

print("Final boost to 1000+ words complete.")
