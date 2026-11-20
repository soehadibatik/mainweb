import json

with open("webmainweb/src/lib/articles.ts") as f:
    text = f.read()

json_text = text.split("export const articles: Article[] = ")[1].split(";\n\nexport function getArticle")[0]
articles = json.loads(json_text)

# Comprehensive deep dive additions to ensure all articles firmly exceed 1,000 words
deep_dives = {
    "rincian-biaya-maintenance-website": {
        "heading": "Panduan Menghitung Alokasi Budget Maintenance Tahunan",
        "paragraphs": [
            "Bagi tim manajemen keuangan perusahaan, menganggarkan biaya pemeliharaan website idealnya mengikuti persentase standar industri teknologi informasi, yaitu berkisar antara 15% hingga 20% dari total nilai investasi pembuatan website awal per tahun.",
            "Sebagai ilustrasi: jika Anda membangun website Company Profile korporasi di paket Light seharga Rp 10.000.000, maka anggaran pemeliharaan tahunan wajar adalah sekitar Rp 1.500.000 hingga Rp 2.000.000 per tahun.",
            "Alokasi dana preventif ini jauh lebih terukur dibandingkan menghadapi situasi darurat ketika sistem mengalami kegagalan teknis di tengah kampanye promosi penting, di mana biaya pemulihan insidental dapat melonjak tanpa kendali.",
            "Di mainweb.id, kami selalu menyajikan rincian skema pemeliharaan secara transparan di awal kontrak kerja, memberi Anda kepastian angka tanpa fluktuasi biaya tak terduga."
        ]
    },
    "jasa-website-murah-vs-profesional": {
        "heading": "Perbedaan Etika Bisnis: Vendor Kemitraan vs Vendor Transaksional",
        "paragraphs": [
            "Salah satu perbedaan paling mencolok yang sering tidak disadari oleh pengusaha adalah pola pikir vendor. Vendor murahan bekerja dengan pendekatan transaksional instan: begitu uang muka diterima dan template dipasang, tujuan mereka adalah sesegera mungkin menutup komunikasi.",
            "Sebaliknya, agensi rekayasa perangkat lunak profesional seperti mainweb.id memandang setiap proyek sebagai kemitraan jangka panjang. Kami memahami bahwa kesuksesan website Anda dalam mendatangkan prospek penjualan baru adalah tolok ukur reputasi kami.",
            "Oleh karena itu, kami meluangkan waktu berdiskusi di tahap briefing, merancang alur pesan yang menjual, memastikan Core Web Vitals berada di zona hijau, dan mendampingi Anda pasca-peluncuran dengan jaminan teknis nyata."
        ]
    },
    "biaya-bikin-toko-online-sendiri-vs-developer": {
        "heading": "Mengapa Alur Direct WhatsApp Lebih Menghasilkan bagi Pasar Indonesia?",
        "paragraphs": [
            "Banyak platform e-commerce luar negeri dirancang untuk kebiasaan konsumen di negara barat yang terbiasa memasukkan nomor kartu kredit secara otomatis. Di Indonesia, budaya berbelanja sangat mengedepankan aspek interaksi sosial dan konfirmasi personal.",
            "Calon pembeli sering ingin memastikan ketersediaan warna barang, menanyakan estimasi tiba kurir, atau meminta rekomendasi ukuran sebelum memutuskan transfer dana. Sistem toko online kami menjembatani kebiasaan ini secara elegan:",
            "Katalog produk menampilkan visual memukau dan tombol beli instan yang secara otomatis menyusun ringkasan pesanan ke dalam chat WhatsApp admin toko Anda, mempercepat alur transaksi dari menit menjadi hitungan detik."
        ]
    },
    "perbedaan-company-profile-landing-page-web-app": {
        "heading": "Evaluasi Skalabilitas Sistem Digital dalam 3 Tahun ke Depan",
        "paragraphs": [
            "Ketika merencanakan aset digital, penting bagi direktur perusahaan untuk memproyeksikan kebutuhan operasional 3 tahun ke depan. Memilih jenis website yang tepat bukan berarti harus langsung memesan sistem termahal, melainkan memilih fondasi arsitektur yang dapat bertumbuh.",
            "Jika bisnis Anda berencana menambah banyak cabang atau lini produk baru di tahun depan, memilih arsitektur modular Next.js sejak awal pada paket Company Profile (seperti Elementary atau Light) akan menghemat puluhan juta rupiah biaya pembangunan ulang di kemudian hari.",
            "Sistem modular memungkinkan modul katalog, blog berita, formulir karir, hingga portal transaksi ditambahkan secara bertahap seiring membesarnya skala bisnis Anda."
        ]
    },
    "template-instan-vs-website-hand-built": {
        "heading": "Perlindungan Nilai Investasi Jangka Panjang Aset Digital",
        "paragraphs": [
            "Website adalah properti digital perusahaan Anda. Menggunakan template pasaran bajakan sama dengan membangun kantor di atas tanah sengketa dengan material rapuh. Kapan pun pembuat tema menghentikan pembaruan atau celah keamanan dieksploitasi, kantor digital Anda terancam runtuh.",
            "Dengan pendekatan hand-built di mainweb.id, seluruh berkas kode sumber adalah aset murni milik perusahaan Anda. Bebas dari ketergantungan lisensi tahunan tema pihak ketiga, kebal dari serangan malware massal, dan memiliki nilai valuasi teknologi yang nyata saat bisnis Anda diaudit oleh calon investor."
        ]
    },
    "pentingnya-core-web-vitals-untuk-seo-bisnis": {
        "heading": "Strategi Menjaga Performa Core Web Vitals Tetap Hijau Selamanya",
        "paragraphs": [
            "Mendapatkan skor Core Web Vitals hijau saat website baru dirilis adalah langkah awal yang hebat, namun mempertahankannya membutuhkan kedisiplinan operasional:",
            "• Hindari memasang terlalu banyak script analitik pelacak pihak ketiga (third-party tracking tags) yang tidak memberikan nilai data nyata pada bisnis Anda.",
            "• Terapkan standarisasi format gambar WebP/AVIF untuk setiap materi promosi atau artikel berita baru yang diunggah staf Anda.",
            "• Lakukan audit berkala di Google Search Console setiap bulan untuk mendeteksi potensi anomali rendering pada perangkat seluler pengguna.",
            "Dengan kombinasi fondasi kode bersih mainweb.id dan panduan pemeliharaan rutin, status hijau Core Web Vitals situs Anda akan terus terjaga kokoh."
        ]
    },
    "kapan-bisnis-butuh-website-custom-integrasi-api": {
        "heading": "Tahapan Transisi Mulus dari Sistem Manual ke Web Application",
        "paragraphs": [
            "Banyak perusahaan ragu beralih ke aplikasi web custom karena takut staf internal kesulitan beradaptasi dengan sistem baru. Di mainweb.id, kami menerapkan metodologi transisi bertahap:",
            "Kami merancang antarmuka pengguna (UI) dashboard admin yang ramah dan intuitif, mengadopsi alur kerja yang sudah familiar bagi tim Anda tanpa jargon teknologi yang membingungkan.",
            "Selain itu, kami menyertakan sesi demo dan pelatihan langsung serta dokumentasi panduan operasional lengkap, menjamin seluruh divisi kantor dapat langsung merasakan efisiensi kerja sejak hari pertama peluncuran."
        ],
        "table": {
            "headers": ["Aspek Operasional", "Sistem Manual (Spreadsheet/WA)", "Web Application Terintegrasi"],
            "rows": [
                ["Waktu Rekonsiliasi Pesanan", "2 - 4 jam per hari oleh staf", "Otomatis instan real-time (< 1 detik)"],
                ["Tingkat Risiko Human Error", "Tinggi (salah input alamat / nomor)", "Nol (validasi data sistem otomatis)"],
                ["Laporan Penjualan & Stok", "Harus dirangkum manual akhir bulan", "Dashboard analitik langsung live 24/7"],
                ["Kapasitas Skala Transaksi", "Maksimal puluhan order per hari", "Sanggup menampung ribuan order simultan"]
            ]
        }
    },
    "fitur-wajib-website-villa-hotel-resort": {
        "heading": "Optimalisasi Pengalaman Pengguna (UX) Seluler Tamu Wisatawan",
        "paragraphs": [
            "Riset industri pariwisata menunjukkan lebih dari 75% wisatawan mencari akomodasi villa dan resort langsung melalui gawai smartphone mereka saat sedang merencanakan liburan.",
            "Pengalaman sentuhan di layar ponsel (mobile touch ergonomics) harus menjadi prioritas mutlak: tombol navigasi yang mudah dijangkau jempol satu tangan, galeri foto tipe kamar yang dapat digeser secara halus tanpa freeze, dan akses cepat ke petunjuk arah Google Maps.",
            "Setiap detail antarmuka website perhotelan yang kami kembangkan dirancang untuk memberikan kenyamanan maksimal bagi calon tamu sebelum mereka menginjakkan kaki di properti Anda."
        ]
    },
    "standar-website-perusahaan-manufaktur-ekspor": {
        "heading": "Pentingnya Kecepatan dan Ketersediaan Unduhan Dokumen Teknis",
        "paragraphs": [
            "Buyer B2B industri manufaktur tidak mengambil keputusan pembelian secara spontan. Mereka membutuhkan dokumen spesifikasi teknis untuk dibagikan kepada tim insinyur dan manajemen mutu internal mereka.",
            "Sediakan tautan unduhan katalog lembar data (Technical Data Sheet) dalam format PDF yang ringan dan terkompresi dengan baik di setiap halaman kategori produk.",
            "Pastikan server web Anda memiliki kecepatan transmisi tinggi sehingga dokumen berukuran 5-10 MB dapat diunduh tanpa kendala koneksi terputus dari belahan dunia mana pun."
        ]
    },
    "cara-membuat-website-katalog-properti-yang-ringan-dan-seo-friendly": {
        "heading": "Fitur Formulir Lead Generation Cerdas per Unit Properti",
        "paragraphs": [
            "Kelemahan terbesar website agen properti lama adalah formulir kontak umum yang tidak menangkap konteks minat calon pembeli. Pengunjung mengisi formulir kontak, namun agen sales tidak tahu unit tipe mana yang mereka minati.",
            "Dengan sistem katalog properti modern mainweb.id, setiap tombol kontak secara otomatis menyertakan parameter judul listing, harga unit, dan lokasi cluster secara terprogram.",
            "Ketika pesan masuk ke nomor WhatsApp agen pemasaran Anda, agen dapat langsung menyapa pembeli dengan informasi yang relevan dan personal, melipatgandakan peluang kesepakatan survei lokasi (site visit)."
        ]
    },
    "jasa-pembuatan-website-solo-karanganyar-jawa-tengah": {
        "heading": "Membangun Ekosistem Digital Lokal yang Berkelanjutan di Surakarta",
        "paragraphs": [
            "Sebagai sesama entitas bisnis yang berakar di Jawa Tengah, misi mainweb.id bukan sekadar menjual jasa pembuatan website, melainkan mengangkat derajat daya saing produk lokal Solo Raya ke pentas nasional dan global.",
            "Dengan memiliki website berkecepatan tinggi, berdesain elegan, dan transparan dalam pengelolaan biaya, pelaku UMKM dan industri manufaktur di Solo Raya dapat berdiri sejajar dengan korporasi raksasa di kota metropolitan.",
            "Kami berkomitmen memberikan pendampingan teknologi terbaik, mengedukasi literasi digital, dan menjadi rekanan terpercaya bagi pertumbuhan usaha Anda di masa depan."
        ]
    }
}

for a in articles:
    slug = a["slug"]
    if slug in deep_dives:
        a["sections"].append(deep_dives[slug])

# Re-write articles.ts
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

print("Boost complete.")
