import type { Metadata } from "next";
import { interTight, plexSans, plexMono } from "@/lib/fonts";
import "@/app/globals.css";
import { site } from "@/lib/site";
import { OG_FALLBACK_IMAGE, OG_SIZE } from "@/lib/og";
import { pages } from "@/lib/i18n/pages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FloatingWa from "@/components/FloatingWa";

const p = pages.en;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${p.site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: p.site.description,
  keywords: p.site.keywords,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${site.url}/en`,
    siteName: site.name,
    title: `${site.name} | ${p.site.tagline}`,
    description: p.site.description,
    images: [{ url: OG_FALLBACK_IMAGE, width: OG_SIZE.width, height: OG_SIZE.height, alt: `${site.name} | ${p.site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${p.site.tagline}`,
    description: p.site.description,
    images: [OG_FALLBACK_IMAGE],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {/* Safety net for failed hydration: if the Reveal.tsx observer never
            runs, .reveal content is force-shown after 2 seconds so it is never
            stuck hidden. The hidden state is decided by the (scripting: enabled)
            media query in globals.css, so without JS content shows from the
            moment the HTML arrives. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "setTimeout(function(){" + "if(document.documentElement.classList.contains('js-ready'))return;" + "document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('is-visible')});" + "},2000);",
          }}
        />
        <Navbar lang="en" />
        {children}
        <Footer lang="en" />
        <Reveal />
        <FloatingWa lang="en" />
      </body>
    </html>
  );
}
