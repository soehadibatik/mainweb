"use client";

import { useEffect } from "react";

/**
 * Global reveal-on-scroll: mengamati semua elemen .reveal dan menandai
 * .is-visible saat masuk viewport. Dipasang sekali di layout.
 * Delay per-item ditangani via style transitionDelay dari pemanggil.
 */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
