import json
import urllib.parse
import boto3

endpoint = "https://s3.nevaobjects.id"
access_key = "KXLIH4DJLGLEN7EJS3VQ"
secret_key = "iWNAotuIqiSCOkARMPyfbx4Uo3U0aI3VxJygm9LW"
bucket = "batiksoehadi-bucket"

s3 = boto3.client(
    "s3",
    endpoint_url=endpoint,
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    region_name="us-east-1"
)

res = s3.list_objects_v2(Bucket=bucket, Prefix="mainweb")
s3_files = [obj["Key"] for obj in res.get("Contents", []) if obj["Key"] != "mainweb/"]

base_url = "https://s3.nevaobjects.id/batiksoehadi-bucket/"

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
    title_words = set(title.lower().replace("?", "").replace(":", "").replace("&", "").replace("-", " ").split())
    
    for f in s3_files:
        fn = f.replace("mainweb/", "").replace(".jpg", "").lower().replace("?", "").replace(":", "").replace("&", "").replace("-", " ")
        f_words = set(fn.split())
        overlap = len(title_words.intersection(f_words))
        if overlap > best_score:
            best_score = overlap
            best_file = f
    
    if best_score >= 3 and best_file:
        encoded_url = base_url + urllib.parse.quote(best_file)
        a["image"] = encoded_url
        matched_count += 1
        print(f"[MATCHED 100%] {slug} -> {best_file}")
    else:
        if "image" in a:
            del a["image"]
        empty_count += 1
        print(f"[UNMATCHED] {slug}")

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

print(f"\nFinal Result: Total Articles: {len(articles)}, Matched: {matched_count}, Unmatched: {empty_count}")
