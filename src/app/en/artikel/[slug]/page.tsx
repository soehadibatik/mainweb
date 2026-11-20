import { articles, getArticle } from "@/lib/articles";
import { pageMetadata } from "@/lib/i18n/metadata";
import { site } from "@/lib/site";
import ArticleDetailPage from "@/components/pages/ArticleDetailPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return pageMetadata({
    locale: "en",
    pathname: `/artikel/${article.slug}`,
    title: `${article.title} | ${site.name}`,
    description: article.summary,
    image: article.image || "/og/en/studi-kasus.png",
    alt: article.title,
    type: "article",
  });
}

export default async function EnArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleDetailPage slug={slug} lang="en" />;
}
