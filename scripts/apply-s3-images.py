import json
import urllib.parse

base_url = "https://s3.nevaobjects.id/batiksoehadi-bucket/"

s3_files = [
  "mainweb/Biaya Bikin Toko Online Sendiri vs Sewa Developer Mana Lebih Untung untuk UMKM?.jpg",
  "mainweb/Company Profile, Landing Page atau Web App Mana yang Tepat untuk Bisnis Anda.jpg",
  "mainweb/Fitur Wajib Website Villa, Hotel dan Resort untuk Meningkatkan Direct Booking.jpg",
  "mainweb/Jasa Pembuatan Website Profesional di Solo Karanganyar & Jawa Tengah.jpg",
  "mainweb/Jasa Website Murah vs Profesional Hitung-Hitungan Kerugian Jika Salah Pilih Vendor.jpg",
  "mainweb/Kapan Bisnis Anda Butuh Website Custom dengan Integrasi API & Dashboard Admin?.jpg",
  "mainweb/Kenapa Core Web Vitals Hijau Menentukan Peringkat Website Bisnis di Google?.jpg",
  "mainweb/Kenapa Kecepatan Website Sangat Berpengaruh pada Penjualan di WhatsApp?.jpg",
  "mainweb/Landing Page vs Website Lengkap Mana yang Lebih Cocok untuk Bisnis Anda?.jpg",
  "mainweb/Panduan Lengkap Biaya Pembuatan Website Bisnis & Perusahaan (Update 2026).jpg",
  "mainweb/Rincian Biaya Maintenance Website Apa Saja yang Dikerjakan dan Kenapa Penting?.jpg",
  "mainweb/Standar Website Perusahaan Manufaktur & Ekspor agar Dipercaya Buyer Luar Negeri.jpg",
  "mainweb/Template Instan vs Website Hand-Built Dampak ke Kecepatan dan SEO Google.jpg"
]

with open("webmainweb/src/lib/articles.ts") as f:
    text = f.read()

json_text = text.split("export const articles: Article[] = ")[1].split(";\n\nexport function getArticle")[0]
articles = json.loads(json_text)

matched_count = 0
empty_count = 0

for a in articles:
    slug = a["slug"]
    title = a["title"]
    best_file = None
    best_score = 0
    title_words = set(title.lower().replace("?", "").replace(":", "").replace("&", "").split())
    for f in s3_files:
        fn = f.replace("mainweb/", "").replace(".jpg", "").lower().replace("?", "").replace(":", "").replace("&", "")
        f_words = set(fn.split())
        overlap = len(title_words.intersection(f_words))
        if overlap > best_score:
            best_score = overlap
            best_file = f
    
    if best_score >= 4 and best_file:
        encoded_url = base_url + urllib.parse.quote(best_file)
        a["image"] = encoded_url
        matched_count += 1
        print(f"[MATCHED] {slug} -> {best_file}")
    else:
        # Leave empty / undefined
        if "image" in a:
            del a["image"]
        empty_count += 1
        print(f"[EMPTY] {slug}")

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
  image?: string;
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

print(f"\nDone! Matched: {matched_count}, Empty: {empty_count}")
