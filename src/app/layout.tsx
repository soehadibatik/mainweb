import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";
import { OG_FALLBACK_IMAGE, OG_SIZE } from "@/lib/og";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FloatingWa from "@/components/FloatingWa";

const interTight = localFont({
  src: [
    { path: "../fonts/inter-tight-var.woff2", weight: "400 900", style: "normal" },
  ],
  variable: "--font-inter-tight",
  display: "swap",
});

const plexSans = localFont({
  src: [
    { path: "../fonts/plex-sans-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/plex-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/plex-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/plex-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../fonts/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/plex-mono-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "jasa pembuatan website",
    "buat website profesional",
    "web developer indonesia",
    "jasa website murah",
    "company profile",
    "toko online",
    "mainweb.id",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: OG_FALLBACK_IMAGE,
        width: OG_SIZE.width,
        height: OG_SIZE.height,
        alt: `${site.name} | ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [OG_FALLBACK_IMAGE],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${interTight.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Jaring pengaman untuk kasus hydration gagal: kalau observer di
            Reveal.tsx tidak pernah jalan, konten .reveal dibuka paksa setelah
            2 detik supaya tidak pernah terkunci tersembunyi. Status sembunyi
            sendiri ditentukan media query (scripting: enabled) di globals.css,
            jadi tanpa JS konten tampil sejak HTML datang. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "setTimeout(function(){" +
              "if(document.documentElement.classList.contains('js-ready'))return;" +
              "document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('is-visible')});" +
              "},2000);",
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <Reveal />
        <FloatingWa />
      </body>
    </html>
  );
}
