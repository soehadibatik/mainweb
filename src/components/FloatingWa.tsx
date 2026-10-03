"use client";

import { waLink } from "@/lib/site";

const MESSAGE =
  "Halo mainweb.id, saya mau konsultasi soal pembuatan website.";

function WaIcon() {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 110.9L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.6-44.2-27.3-16.4-14.6-27.4-32.6-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.5 8.4-9.8 2.7-3.3 3.6-5.6 5.4-9.4 1.8-3.7.9-6.9-.5-9.7-1.3-2.8-12.5-30.1-17.1-41.2-4.5-10.6-9.1-9.2-12.5-9.4-.3-.1-6.5-1-9.5-1-3.1 0-8.1 1.1-12.4 5.8-4.2 4.7-16.2 16.3-16.2 39.5 0 23.1 16.6 45.4 18.9 48.5 2.3 3.1 32.7 49.9 79.1 70.1 11 4.8 19.6 7.6 26.4 9.8 11.1 3.5 21.2 3 29.2 1.9 8.9-1.4 27.3-11.2 31.1-22 3.8-10.8 3.8-20.1 2.7-22-1.3-1.9-4.7-3.1-9.8-5.2z" />
    </svg>
  );
}

/**
 * Tombol WhatsApp mengambang, permanen agar selalu terjangkau satu tangan.
 * Warna diambil dari logo (gradasi biru tua ke sky ke violet); label muncul
 * saat hover/fokus, bukan berulang sendiri.
 */
export default function FloatingWa() {
  return (
    <div className="fixed right-4 bottom-5 z-50 sm:right-7 sm:bottom-8">
      <a
        href={waLink(MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp mainweb.id"
        className="group brand-gradient relative flex h-14 w-14 items-center gap-3 overflow-hidden rounded-full pl-[15px] pr-4 text-white shadow-[0_14px_30px_-14px_rgb(0_71_210/0.55)] ring-1 ring-ink-950/5 transition-all duration-200 hover:w-[184px] focus-visible:w-[184px] focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-paper focus-visible:outline-none"
      >
        <WaIcon />
        <span className="max-w-0 overflow-hidden font-mono text-xs whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-[120px] group-hover:opacity-100 group-focus-visible:max-w-[120px] group-focus-visible:opacity-100">
          Chat WhatsApp
        </span>
      </a>
    </div>
  );
}
