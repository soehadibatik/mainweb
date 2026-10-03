"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global reveal-on-scroll: mengamati elemen .reveal dan menandai
 * .is-visible saat masuk viewport. Dipasang sekali di layout, tapi
 * dipasang ulang tiap pathname berubah supaya isi halaman hasil
 * navigasi klien ikut teramati, bukan tersangkup tak pernah terlihat.
 *
 * Elemen di dalam .reveal-mask tidak bisa diamati langsung: ia sudah
 * diturunkan 140% di bawah tepi clip milik pembungkusnya, jadi luas
 * irisannya nol dan IntersectionObserver tak akan pernah memicu. Yang
 * diamati adalah pembungkusnya (yang selalu utuh), lalu statusnya
 * diteruskan ke anak-anak di dalamnya.
 *
 * Delay per-item ditangani CSS lewat wadah .stagger dan kelas .reveal-d*.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Penanda bahwa observer sudah jalan. Dipakai jaring pengaman di layout:
    // kalau hydration gagal, konten tidak boleh terkunci tersembunyi.
    document.documentElement.classList.add("js-ready");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
    );
    if (els.length === 0) return;

    // Kelompokkan per target pengamatan: satu mask bisa memuat beberapa
    // anak reveal, dan satu elemen biasa adalah targetnya sendiri.
    const byTarget = new Map<Element, HTMLElement[]>();
    for (const el of els) {
      const parent = el.parentElement;
      const target =
        parent && parent.classList.contains("reveal-mask") ? parent : el;
      const list = byTarget.get(target);
      if (list) list.push(el);
      else byTarget.set(target, [el]);
    }

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // threshold 0, bukan 0.12: elemen yang lebih tinggi dari viewport
    // bisa jadi tidak pernah mencapai rasio 0.12 dan tak pernah muncul.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          byTarget.get(entry.target)?.forEach((el) => {
            el.classList.add("is-visible");
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    for (const target of byTarget.keys()) observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
