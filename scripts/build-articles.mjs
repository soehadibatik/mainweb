import fs from "fs";
import path from "path";
import { articlesData } from "./articles-content.js";

const targetPath = path.resolve("src/lib/articles.ts");

const header = `export type TableData = {
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

export const articles: Article[] = `;

const footer = `;

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
`;

fs.writeFileSync(targetPath, header + JSON.stringify(articlesData, null, 2) + footer, "utf-8");
console.log("Successfully wrote articles.ts with", articlesData.length, "articles.");
