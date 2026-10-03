import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Gambar OG bawaan. Dipakai beranda dan setiap halaman yang belum punya gambar
 * sendiri, sesuai permintaan: tautan domain utama selalu menampilkan gambar ini
 * di WhatsApp, Telegram, Facebook, maupun X.
 * URL absolut supaya tetap terbaca walau crawler tidak mengikuti metadataBase.
 */
export const OG_FALLBACK_IMAGE =
  "https://s3.nevaobjects.id/batiksoehadi-bucket/og-image/og-image-mainweb.png";

export const OG_SIZE = { width: 1200, height: 630 } as const;

type OgInput = {
  /** Judul yang tampil di kartu. Sudah menyertakan nama situs. */
  title: string;
  description: string;
  /** Path kanonik halaman, mis. "/paket/basic". */
  url: string;
  /** Path gambar khusus halaman ini di public/. Kosong = gambar bawaan. */
  image?: string;
  alt?: string;
  type?: "website" | "article";
};

/**
 * openGraph dan twitter dibangun di satu tempat supaya keduanya tidak bisa
 * berbeda: WhatsApp dan Facebook membaca og:image, X membaca twitter:image.
 * Bila hanya salah satu yang diisi, kartunya akan menampilkan gambar berbeda
 * tergantung platform.
 */
export function ogMeta({
  title,
  description,
  url,
  image,
  alt,
  type = "website",
}: OgInput): Pick<Metadata, "openGraph" | "twitter"> {
  const src = image ?? OG_FALLBACK_IMAGE;
  const label = alt ?? `${site.name} | ${site.tagline}`;

  return {
    openGraph: {
      type,
      locale: "id_ID",
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: src, width: OG_SIZE.width, height: OG_SIZE.height, alt: label }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [src],
    },
  };
}
