"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const MIN_W = 320;

function breakpointOf(w: number) {
  if (w < 512) return "Mobile";
  if (w < 672) return "Tablet";
  return "Desktop";
}

const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * Viewport Hidup — mini-browser yang bisa diseret lebarnya.
 * Layout di dalam me-reflow nyata via container queries (@lg/@2xl).
 * Auto-play menyapu ukuran; berhenti permanen saat pengguna mengambil kendali.
 */
export default function ViewportDemo() {
  const [width, setWidth] = useState(680);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(true);
  const raf = useRef<number | null>(null);
  const last = useRef<number>(0);
  const dir = useRef<1 | -1>(1);
  const zone = useRef<HTMLDivElement | null>(null);
  const root = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);
  const [forced, setForced] = useState(false);

  // prefers-reduced-motion sebagai store eksternal (aman untuk hydration)
  const reducedMotion = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  // Jeda sweep saat demo tidak terlihat (hemat baterai saat scroll)
  useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setInView(e.intersectionRatio >= 0.25), {
      threshold: [0, 0.25],
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-play sweep — hanya berjalan saat terlihat & bukan reduced-motion
  useEffect(() => {
    if (!auto || !inView || (reducedMotion && !forced)) return;
    const tick = (t: number) => {
      if (!last.current) last.current = t;
      const dt = t - last.current;
      last.current = t;
      setWidth((w) => {
        let next = w + (dir.current * dt) / 6;
        if (next >= 920) {
          next = 920;
          dir.current = -1;
        }
        if (next <= MIN_W) {
          next = MIN_W;
          dir.current = 1;
        }
        return next;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      last.current = 0;
    };
  }, [auto, inView, reducedMotion, forced]);

  const stopAuto = useCallback(() => setAuto(false), []);

  // Drag handle
  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    stopAuto();
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !zone.current) return;
    const rect = zone.current.getBoundingClientRect();
    const next = Math.min(920, Math.max(MIN_W, rect.right - e.clientX));
    setWidth(next);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // Keyboard pada handle
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      stopAuto();
      setWidth((w) => Math.max(MIN_W, w - 24));
    } else if (e.key === "ArrowRight") {
      stopAuto();
      setWidth((w) => Math.min(920, w + 24));
    } else {
      return;
    }
    e.preventDefault();
  };

  const bp = breakpointOf(width);

  // Status tombol: sweep berjalan, atau demo sudah diminta manual
  const playing = auto && !(reducedMotion && !forced);

  const preset = (w: number) => {
    stopAuto();
    setWidth(w);
  };

  return (
    <div ref={root} className="w-full">
      {/* Toolbar */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="order-1 font-mono text-[11px] tabular-nums text-ink-900/55">
          {Math.round(width)}px · {bp}
        </span>
        <div className="order-3 flex w-full gap-2 sm:order-2 sm:w-auto">
          {[
            { label: "Mobile", w: 360 },
            { label: "Tablet", w: 600 },
            { label: "Desktop", w: 860 },
          ].map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => preset(p.w)}
              className={`flex min-h-9 flex-1 items-center justify-center px-3 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors sm:flex-none ${
                bp === p.label
                  ? "bg-brand-600 text-white"
                  : "border border-line text-ink-900/60 hover:border-ink-900/40 hover:text-ink-950"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        {!playing ? (
          <button
            type="button"
            onClick={() => {
              setForced(true);
              setAuto(true);
              dir.current = 1;
            }}
            className="order-2 flex min-h-9 items-center font-mono text-[10px] uppercase tracking-[0.08em] text-brand-600 hover:text-ink-950 sm:order-3 sm:ml-auto"
          >
            Putar demo
          </button>
          ) : (
          <span className="order-2 flex min-h-9 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-900/45 sm:order-3 sm:ml-auto">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" />
            Demo
          </span>
        )}
      </div>

      {/* Zona demo */}
      <div
        ref={zone}
        className="relative flex justify-end"
        style={{ maxWidth: 920 }}
      >
        {/* Frame browser */}
        <div
          className="cqw relative w-full border border-ink-900/10 bg-white shadow-[0_40px_80px_-36px_rgb(11_18_32/0.4)] transition-[width] duration-200 ease-out"
          style={{ width: "100%", maxWidth: width }}
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-2 border-b border-line bg-paper px-3 py-2">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            </span>
            <span className="flex-1 truncate bg-white px-3 py-0.5 font-mono text-[9px] text-ink-900/50">
              bisnis-anda.id
            </span>
          </div>

          {/* Mini-site — reflow nyata via container query */}
          <div
            className="@container"
            style={{
              containerType: "inline-size",
            }}
          >
            <div className="bg-white">
              {/* Mini nav — collapse di bawah 512px */}
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5 max-[512px]:flex-col max-[512px]:items-start max-[512px]:gap-2">
                <span className="font-display text-[11px] font-black tracking-tight text-ink-950">
                  bisnis-anda.id
                </span>
                <span className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.1em] text-ink-900/50 max-[512px]:hidden">
                  <span>Tentang</span>
                  <span>Layanan</span>
                  <span>Kontak</span>
                </span>
              </div>

              {/* Mini hero — kolom → stack */}
              <div className="flex gap-5 px-5 py-6 max-[512px]:flex-col">
                <div className="min-w-0 flex-1">
                  <div className="h-2.5 w-4/5 bg-ink-950/90" />
                  <div className="mt-2 h-2.5 w-3/5 bg-ink-950/90" />
                  <div className="mt-3 h-1.5 w-full bg-line" />
                  <div className="mt-1.5 h-1.5 w-5/6 bg-line" />
                  <div className="mt-4 flex gap-2 max-[512px]:flex-col">
                    <span className="h-6 w-20 bg-brand-600" />
                    <span className="h-6 w-16 border border-line" />
                  </div>
                </div>
                <div className="hidden w-24 shrink-0 bg-paper p-2 max-[512px]:block max-[672px]:w-full max-[672px]:h-16 max-[672px]:shrink">
                  <div className="h-full w-full bg-line/60 max-[672px]:hidden" />
                </div>
              </div>

              {/* Mini cards — 3 → 1 kolom */}
              <div className="grid grid-cols-3 gap-2.5 border-t border-line px-5 py-5 max-[512px]:grid-cols-1">
                <div className="border border-line p-2.5">
                  <div className="h-5 w-5 bg-brand-600/15" />
                  <div className="mt-2 h-1.5 w-4/5 bg-line" />
                  <div className="mt-1.5 h-1.5 w-3/5 bg-line" />
                </div>
                <div className="border border-line p-2.5">
                  <div className="h-5 w-5 bg-brand-600/15" />
                  <div className="mt-2 h-1.5 w-4/5 bg-line" />
                  <div className="mt-1.5 h-1.5 w-3/5 bg-line" />
                </div>
                <div className="border border-line p-2.5">
                  <div className="h-5 w-5 bg-brand-600/15" />
                  <div className="mt-2 h-1.5 w-4/5 bg-line" />
                  <div className="mt-1.5 h-1.5 w-3/5 bg-line" />
                </div>
              </div>

              {/* Mini CTA — horizontal → stacked */}
              <div className="flex items-center justify-between gap-3 bg-ink-950 px-5 py-4 max-[512px]:flex-col max-[512px]:items-start">
                <div className="h-2 w-28 bg-white/25" />
                <span className="h-6 w-20 bg-brand-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Handle geser */}
        <div
          role="slider"
          aria-label="Lebar viewport demo"
          aria-valuemin={MIN_W}
          aria-valuemax={920}
          aria-valuenow={Math.round(width)}
          aria-valuetext={`${Math.round(width)} piksel, mode ${bp}`}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onKeyDown={onKeyDown}
          className="absolute top-0 bottom-0 -left-3 z-10 flex w-6 cursor-ew-resize touch-none items-center justify-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <span className="flex h-full w-1 items-center justify-center rounded-full bg-brand-600/0 transition-colors group-hover:bg-brand-600">
            <span className="h-10 w-1 rounded-full bg-brand-600" />
          </span>
        </div>
      </div>

      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-900/45">
        Seret garis biru, layar di dalam ikut berubah
      </p>
    </div>
  );
}
