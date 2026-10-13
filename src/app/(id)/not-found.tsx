import type { Metadata } from "next";
import { pages } from "@/lib/i18n/pages";
import NotFoundPage from "@/components/pages/NotFoundPage";

export const metadata: Metadata = {
  title: pages.id.notfound.metaTitle,
};

export default async function NotFound() {
  return <NotFoundPage lang="id" />;
}
