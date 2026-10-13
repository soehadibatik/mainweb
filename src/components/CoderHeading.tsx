"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";

/*
 * Judul ala terminal: diketik karakter per karakter, ditahan agar sempat
 * dibaca, dihapus lebih cepat, lalu mengetik kalimat berikutnya.
 * Siklus berulang ini permintaan eksplisit pemilik situs; temponya dibuat
 * santai dan tetap hormat prefers-reduced-motion (fallback: teks statis).
 *
 * SSR dan render awal menampilkan kalimat pertama SECARA PENUH: pembaca
 * tanpa JS (atau yang hydration-nya telat) tetap membaca headline lengkap.
 */
type Phrases = { phrases: string[]; gradient: string[][] };

const COPY: Record<Locale, Phrases> = {
  id: {
    phrases: [
      "Jasa pembuatan website profesional, mulai Rp 1,5 jt, harga tertulis di muka.",
      "Ceritakan usaha Anda lewat WhatsApp, konsultasinya gratis.",
      "Tanpa template: setiap situs digambar dan ditulis khusus untuk Anda.",
    ],
    gradient: [["1,5 jt,"], ["gratis."], ["situs"]],
  },
  en: {
    phrases: [
      "Professional website services, starting at Rp 1.5M, with costs stated up front.",
      "Tell us about your business on WhatsApp — the consultation is free.",
      "No templates: every site is drawn and written just for you.",
    ],
    gradient: [["Rp 1.5M,"], ["free."], ["site"]],
  },
};

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

function TypedSegments({ segs, length }: { segs: Segment[]; length: number }) {
  // Potong daftar segmen secara immutable: helper murni tanpa mutasi binding
  // apa pun selama render (React Compiler melarang reassign saat render).
  const visible = segs.reduce<{ out: Segment[]; left: number }>(
    (acc, s) => {
      if (acc.left <= 0) return acc;
      return {
        out: [...acc.out, { text: s.text.slice(0, acc.left), grad: s.grad }],
        left: acc.left - s.text.length,
      };
    },
    { out: [], left: length },
  ).out;

  return (
    <>
      {visible.map((s, i) =>
        s.grad ? (
          <span key={i} className="brand-wordmark">
            {s.text}
          </span>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

const FIRST_TYPE_MS = 700;
const TYPE_TICK_MS = 85;
const HOLD_MS = 2800;
const REST_MS = 1200;

type Phase = "typing" | "hold" | "erasing" | "rest";

export default function CoderHeading({ lang }: { lang: Locale }) {
  const { phrases, gradient } = COPY[lang];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(phrases[0].length);
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

    const full = phrases[phraseIndex];
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (length < full.length) {
        t = setTimeout(
          () => setLength(length + 1),
          length === 0 ? FIRST_TYPE_MS : TYPE_TICK_MS,
        );
      } else {
        // Transisi fase tidak dipanggil sinkron dari dalam effect: React
        // Compiler melarang setState langsung di effect (cascading render).
        // setTimeout 0 tetap memindahkan fase pada siklus berikutnya tanpa
        // jeda yang terlihat.
        t = setTimeout(() => setPhase("hold"), 0);
      }
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erasing"), HOLD_MS);
    } else if (phase === "erasing") {
      if (length > 0) {
        const tick = Math.round(14 + 26 * (length / full.length));
        t = setTimeout(() => setLength(length - 1), tick);
      } else if (phraseIndex < phrases.length - 1) {
        t = setTimeout(() => {
          setPhraseIndex(phraseIndex + 1);
          setPhase("typing");
        }, 0);
      } else {
        t = setTimeout(() => setPhase("rest"), 0);
      }
    } else {
      t = setTimeout(() => {
        setPhraseIndex(0);
        setPhase("typing");
      }, REST_MS);
    }

    return () => clearTimeout(t);
  }, [reduced, phase, phraseIndex, length, phrases]);

  const text = phrases[phraseIndex];

  if (reduced) {
    return (
      <span className="coder-line-block block">
        <TypedSegments
          segs={segmentsOf(phrases[0], gradient[0] ?? [])}
          length={phrases[0].length}
        />
      </span>
    );
  }

  return (
    <span className="coder-line-block block">
      <span className="coder-ghost" aria-hidden>
        <span className="coder-prompt">~$</span>{" "}
        <TypedSegments
          segs={segmentsOf(phrases[0], gradient[0] ?? [])}
          length={phrases[0].length}
        />
      </span>
      <span aria-hidden>
        <span className="coder-prompt">~$</span>{" "}
        <TypedSegments
          segs={segmentsOf(text, gradient[phraseIndex] ?? [])}
          length={length}
        />
        <span className={`coder-caret${phase === "typing" ? " is-typing" : ""}`} />
      </span>
    </span>
  );
}
