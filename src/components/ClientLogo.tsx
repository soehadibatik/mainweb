import Image from "next/image";

/**
 * Logo klien. Aset lama dilayani dari folder public situs ini; logo yang
 * diunggah lewat back office berupa URL absolut BO, jadi dipasang sebagai
 * <img> biasa karena tidak melewati optimizer next/image.
 */
export default function ClientLogo({
  src,
  alt,
  w,
  h,
  className,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
}) {
  if (/^https?:\/\//.test(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        loading="lazy"
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading="lazy"
      unoptimized={src.endsWith(".svg")}
      className={className}
    />
  );
}
