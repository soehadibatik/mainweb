import { pageMetadata } from "@/lib/i18n/metadata";
import { site } from "@/lib/site";
import ServicesIndexPage from "@/components/pages/ServicesIndexPage";

export function generateMetadata() {
  return pageMetadata({
    locale: "en",
    pathname: "/layanan",
    title: `Hand-Built Web Development Services | ${site.name}`,
    description:
      "Explore mainweb.id web services: conversion-focused landing pages, corporate company profiles, independent online stores, custom web applications, and local business solutions.",
    image: "/og/en/studi-kasus.png",
    alt: `Web Development Services ${site.name}`,
  });
}

export default function EnLayananIndexRoute() {
  return <ServicesIndexPage lang="en" />;
}
