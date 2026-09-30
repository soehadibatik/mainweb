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
  "Ceritakan usaha Anda lewat WhatsApp, konsultasinya gratis.",
  "Tanpa template: setiap situs digambar dan ditulis khusus untuk Anda.",
];

/*
 * Kata yang dicetak gradasi 3 warna logo (brand-wordmark) di tiap kalimat.
 * Satu-dua kata cukup: gradien di semua kata kehilangan penekanannya.
 * Kata harus muncul persis di kalimatnya; kalau tidak ketemu, kata itu
 * saja yang tidak bergradasi, animasi tetap aman.
 */
const GRADIENT_WORDS: string[][] = [
  ["1,5 jt,"],
  ["gratis."],
  ["situs"],
];

type Segment = { text: string; grad: boolean };

function segmentsOf(text: string, gradWords: string[]): Segment[] {
  const segs: Segment[] = [];
  let rest = text;
  for (const w of gradWords) {
    const i = rest.indexOf(w);
    if (i === -1) continue;
    if (i > 0) segs.push({ text: rest.slice(0, i), grad: false });
    segs.push({ text: w, grad: true });
    rest = rest.slice(i + w.length);
  }
  if (rest) segs.push({ text: rest, grad: false });
  return segs;
}

/* Potongan yang sudah terketik, dengan kata gradien tetap bergradasi. */
function TypedSegments({ segs, length }: { segs: Segment[]; length: number }) {
  let left = length;
  return (
    <>
      {segs.map((s, i) => {
        if (left <= 0) return null;
        const t = s.text.slice(0, left);
        left -= s.text.length;
        return s.grad ? (
          <span key={i} className="brand-wordmark">
            {t}
          </span>
        ) : (
          <span key={i}>{t}</span>
        );
      })}
    </>
  );
}

/* Tempo santai: ketik pelan, tahan lama, hapus cepat, tarik napas. */
const FIRST_TYPE_MS = 700; // jeda sebelum karakter pertama tiap kalimat
const TYPE_TICK_MS = 85; // kecepatan ketik per karakter
const HOLD_MS = 2800; // kalimat dibaca penonton sebelum dihapus
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

  // Reduced motion: satu kalimat statis penuh (dengan kata gradien),
  // tanpa caret, tanpa sr-only ganda
  if (reduced) {
    return (
      <span className="coder-line-block block">
        <TypedSegments
          segs={segmentsOf(PHRASES[0], GRADIENT_WORDS[0] ?? [])}
          length={PHRASES[0].length}
        />
      </span>
    );
  }

  return (
    <span className="coder-line-block block">
      {/* Salinan tersembunyi kalimat terpanjang: mengunci tinggi baris agar
          konten di bawah tidak melompat tiap fase ketik/hapus */}
      <span className="coder-ghost" aria-hidden>
        <span className="coder-prompt">~$</span>{" "}
        <TypedSegments
          segs={segmentsOf(PHRASES[0], GRADIENT_WORDS[0] ?? [])}
          length={PHRASES[0].length}
        />
      </span>
      {/* Teks SEO lengkap ada di sr-only milik h1 di Hero; blok ini murni visual */}
      <span aria-hidden>
        <span className="coder-prompt">~$</span>{" "}
        <TypedSegments
          segs={segmentsOf(text, GRADIENT_WORDS[phraseIndex] ?? [])}
          length={length}
        />
        <span className="coder-caret" />
      </span>
    </span>
  );
}
