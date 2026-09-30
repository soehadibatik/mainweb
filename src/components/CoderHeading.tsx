"use client";

import { useEffect, useState } from "react";

/*
 * Judul ala terminal: diketik karakter per karakter, ditahan agar sempat
 * dibaca, dihapus lebih cepat, lalu mengetik kalimat berikutnya.
 * Siklus berulang ini permintaan eksplisit pemilik situs; temponya dibuat
 * santai dan tetap hormat prefers-reduced-motion (fallback: teks statis).
 *
 * SSR dan render awal menampilkan kalimat pertama SECARA PENUH: pembaca
 * tanpa JS (atau yang hydration-nya telat) tetap membaca headline lengkap,
 * bukan baris kosong dengan caret menyala. Siklus ketik baru mulai setelah
 * fase hold pertama, jadi tidak ada kilatan teks hilang saat hydration.
 */
const PHRASES = [
  "Jasa pembuatan website profesional, mulai Rp 1,5 jt, harga tertulis di muka.",
  "Desain digambar tangan, kode ditulis satu per satu, tanpa template.",
  "31 situs klien sudah tayang, dikerjakan dari Solo untuk bisnis Anda.",
];

/* Tempo santai: ketik pelan, tahan lama, hapus cepat, tarik napas. */
const FIRST_TYPE_MS = 700; // jeda sebelum karakter pertama tiap kalimat
const TYPE_TICK_MS = 85; // kecepatan ketik per karakter
const HOLD_MS = 6500; // kalimat dibaca penonton sebelum dihapus
const ERASE_TICK_MS = 22; // penghapusan lebih cepat dari ketik
const REST_MS = 1200; // baris kosong sesaat sebelum siklus baru

type Phase = "typing" | "hold" | "erasing" | "rest";

export default function CoderHeading() {
  // Mulai dari kalimat pertama penuh (fase hold): identik dengan SSR.
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(PHRASES[0].length);
  const [phase, setPhase] = useState<Phase>("hold");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const full = PHRASES[phraseIndex];
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (length < full.length) {
        t = setTimeout(
          () => setLength(length + 1),
          length === 0 ? FIRST_TYPE_MS : TYPE_TICK_MS,
        );
      } else {
        setPhase("hold");
      }
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erasing"), HOLD_MS);
    } else if (phase === "erasing") {
      if (length > 0) {
        t = setTimeout(() => setLength(length - 1), ERASE_TICK_MS);
      } else if (phraseIndex < PHRASES.length - 1) {
        setPhraseIndex(phraseIndex + 1);
        setPhase("typing");
      } else {
        // satu putaran penuh selesai: rehat, lalu ulangi dari awal
        setPhase("rest");
      }
    } else {
      t = setTimeout(() => {
        setPhraseIndex(0);
        setPhase("typing");
      }, REST_MS);
    }

    return () => clearTimeout(t);
  }, [reduced, phase, phraseIndex, length]);

  const text = PHRASES[phraseIndex];

  // Reduced motion: satu kalimat statis, tanpa caret, tanpa sr-only ganda
  if (reduced) {
    return (
      <span className="coder-line-block block">{PHRASES[0]}</span>
    );
  }

  return (
    <span className="coder-line-block block">
      {/* Salinan tersembunyi kalimat terpanjang: mengunci tinggi baris agar
          konten di bawah tidak melompat tiap fase ketik/hapus */}
      <span className="coder-ghost" aria-hidden>
        <span className="coder-prompt">~$</span> {PHRASES[0]}
      </span>
      {/* Teks SEO lengkap ada di sr-only milik h1 di Hero; blok ini murni visual */}
      <span aria-hidden>
        <span className="coder-prompt">~$</span> {text.slice(0, length)}
        <span className="coder-caret" />
      </span>
    </span>
  );
}
