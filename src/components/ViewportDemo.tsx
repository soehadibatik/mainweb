"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const MIN_W = 320;
const MAX_W = 920;

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

/* Util ukuran fluid — skala mengikuti lebar frame (cqw), di-clamp agar tidak ekstrem */
const fs = (minRem: number, prefCqw: number, maxPx: number) => ({
  fontSize: `clamp(${minRem}rem, ${prefCqw}cqw, ${maxPx}px)`,
});
const h = (minPx: number, prefCqw: number, maxPx: number) => ({
  height: `clamp(${minPx}px, ${prefCqw}cqw, ${maxPx}px)`,
});

/* ── 1. Sedasa Resort — villa pegunungan: gerbang lengkung + widget booking ── */

/** Pemandangan vila saat fajar: tiga gerbang lengkung berlapis dengan matahari
 * di belakangnya — geometri arsitektur murni CSS, pengganti foto hero. */
function SedasaFajar() {
  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden"
      style={{
        ...h(88, 23, 168),
        borderRadius: "clamp(8px,2cqw,14px)",
        background: "linear-gradient(180deg, #F7E8D0 0%, #EDC390 55%, #D99A62 100%)",
      }}
    >
      {/* matahari */}
      <span
        className="absolute rounded-full"
        style={{
          width: "38%",
          aspectRatio: "1",
          left: "31%",
          top: "12%",
          background: "radial-gradient(circle at 42% 38%, #FFF7E6 0%, #FBD98E 55%, #F2B95F 100%)",
          boxShadow: "0 0 clamp(12px,4cqw,30px) rgb(251 217 142 / 0.9)",
        }}
      />
      {/* tiga gerbang lengkung — belakang, tengah, depan */}
      {[
        { l: "6%", w: "30%", top: "30%", bg: "linear-gradient(180deg,#EBD6B4,#CFA878)", o: 0.85 },
        { l: "38%", w: "30%", top: "22%", bg: "linear-gradient(180deg,#F2E3C6,#D6B183)", o: 0.95 },
        { l: "70%", w: "30%", top: "34%", bg: "linear-gradient(180deg,#E8D2AE,#C29B6A)", o: 0.9 },
      ].map((a, i) => (
        <span
          key={i}
          className="absolute bottom-0"
          style={{
            left: a.l,
            width: a.w,
            top: a.top,
            background: a.bg,
            opacity: a.o,
            borderTopLeftRadius: "999px",
            borderTopRightRadius: "999px",
          }}
        />
      ))}
      {/* garis tanah */}
      <span className="absolute inset-x-0 bottom-0 h-[7%] bg-[#8A6238]/45" />
    </div>
  );
}

function MiniSedasa() {
  return (
    <div className="bg-[#FBF7EE] text-[#22301F]" style={{ minHeight: "100%" }}>
      {/* Nav tenang */}
      <div className="flex items-center justify-between px-[clamp(12px,3.4cqw,22px)] py-[clamp(7px,2cqw,13px)]">
        <span className="font-display text-[clamp(0.85rem,2.6cqw,1.15rem)] font-normal tracking-[0.2em] uppercase">
          Sedasa
        </span>
        <span className="hidden gap-5 text-[clamp(0.58rem,1.6cqw,0.74rem)] font-medium text-[#22301F]/60 @min-[512px]:flex">
          <span>Vila</span>
          <span>Fasilitas</span>
          <span>Tawangmangu</span>
        </span>
        <span className="bg-[#A8833B] px-[clamp(7px,2cqw,12px)] py-[clamp(3px,0.9cqw,6px)] text-[clamp(0.55rem,1.55cqw,0.72rem)] font-semibold tracking-wide text-white">
          Reservasi
        </span>
      </div>

      {/* Hero: teks kiri, fajar vila kanan */}
      <div className="flex items-center gap-[clamp(10px,3cqw,26px)] px-[clamp(12px,3.4cqw,22px)] py-[clamp(8px,2.2cqw,18px)] @max-[672px]:flex-col @max-[672px]:items-stretch">
        <div className="min-w-0 flex-1">
          <p className="text-[clamp(0.55rem,1.55cqw,0.7rem)] font-medium tracking-[0.16em] text-[#A8833B] uppercase">
            Tawangmangu · 900 mdpl
          </p>
          <p className="mt-[clamp(4px,1.2cqw,9px)] font-display text-[clamp(1.4rem,5.4cqw,2.5rem)] leading-[1.03] font-semibold tracking-tight">
            Pagi di atas kabut,
            <br />
            hening sepanjang hari.
          </p>
          <p className="mt-[clamp(4px,1.3cqw,9px)] text-[clamp(0.6rem,1.7cqw,0.78rem)] leading-relaxed text-[#22301F]/60">
            Enam vila kayu di tepi hutan pinus. Sarapan dari dapur resor,
            disajikan di beranda masing-masing.
          </p>
          <p className="mt-[clamp(5px,1.6cqw,12px)] text-[clamp(0.64rem,1.85cqw,0.85rem)] font-semibold text-[#A8833B]">
            Rp 850rb <span className="font-normal text-[#22301F]/50">/ malam · sarapan termasuk</span>
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-[clamp(0.52rem,1.5cqw,0.68rem)] font-semibold text-[#22301F]/60">
            <span className="text-[#CA8A04]">★★★★★</span> 4,9 · 218 ulasan tamu
          </p>
        </div>
        <div className="shrink-0 @max-[672px]:w-full" style={{ width: "clamp(140px,34cqw,230px)" }}>
          <SedasaFajar />
        </div>
      </div>

      {/* Widget booking — baris sel seperti situs resor nyata */}
      <div className="mx-[clamp(12px,3.4cqw,22px)] mb-[clamp(10px,2.6cqw,18px)] flex items-stretch divide-x divide-[#22301F]/12 border border-[#22301F]/15 bg-white @max-[420px]:grid @max-[420px]:grid-cols-2 @max-[420px]:divide-x-0">
        {[
          ["Check-in", "Kam, 12 Des"],
          ["Check-out", "Min, 15 Des"],
          ["Tamu", "2 dewasa"],
        ].map(([k, v]) => (
          <div key={k} className="min-w-0 flex-1 px-[clamp(8px,2.2cqw,16px)] py-[clamp(6px,1.7cqw,12px)] @max-[420px]:border-b @max-[420px]:border-[#22301F]/10">
            <p className="text-[clamp(0.5rem,1.45cqw,0.66rem)] font-medium tracking-wide text-[#22301F]/45 uppercase">{k}</p>
            <p className="mt-0.5 truncate text-[clamp(0.6rem,1.75cqw,0.8rem)] font-semibold tabular-nums">{v}</p>
          </div>
        ))}
        <div className="flex items-center bg-[#22301F] px-[clamp(10px,2.6cqw,20px)] @max-[420px]:col-span-2 @max-[420px]:justify-center">
          <span className="text-[clamp(0.6rem,1.75cqw,0.8rem)] font-semibold text-[#FBF7EE]">Cek ketersediaan</span>
        </div>
      </div>

      {/* Pilihan vila — dua kartu foto gradient */}
      <div className="grid grid-cols-2 gap-[clamp(6px,1.8cqw,12px)] px-[clamp(12px,3.4cqw,22px)] pb-[clamp(12px,3cqw,22px)]">
        {[
          { name: "Vila Kayu", meta: "2 kamar · 42 m²", price: "Rp 1,2jt", g: "linear-gradient(165deg,#E7D3B0,#B98D5C)" },
          { name: "Suite Batu", meta: "1 kamar · 30 m²", price: "Rp 950rb", g: "linear-gradient(165deg,#DDE3D3,#9FAF92)" },
        ].map((r) => (
          <div key={r.name} className="border border-[#22301F]/12 bg-white">
            <div style={{ ...h(52, 14, 104), background: r.g }} />
            <div className="flex items-center justify-between gap-2 px-[clamp(7px,1.9cqw,13px)] py-[clamp(5px,1.4cqw,10px)]">
              <div className="min-w-0">
                <p className="truncate text-[clamp(0.6rem,1.7cqw,0.8rem)] font-semibold">{r.name}</p>
                <p className="text-[clamp(0.5rem,1.45cqw,0.66rem)] text-[#22301F]/50">{r.meta}</p>
              </div>
              <p className="shrink-0 text-[clamp(0.58rem,1.65cqw,0.78rem)] font-bold tabular-nums">{r.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 2. Arus — dompet digital: dashboard app murni UI ─────────────── */

function MiniArus() {
  const trx: [string, string, string, string][] = [
    ["Kopi Toko Kopi", "Hari ini, 07.41", "-Rp 24.000", "K"],
    ["Gaji freelance", "Kemarin", "+Rp 2.750.000", "G"],
    ["Token listrik", "Sen, 09.12", "-Rp 120.000", "T"],
  ];
  const bars = [34, 52, 28, 66, 45, 88, 30];
  const hari = ["S", "S", "R", "K", "J", "S", "M"];
  return (
    <div className="bg-[#12172B] text-[#EEF0FA]" style={{ minHeight: "100%" }}>
      {/* Header app */}
      <div className="flex items-center justify-between px-[clamp(12px,3.4cqw,22px)] py-[clamp(8px,2.2cqw,15px)]">
        <div>
          <p className="text-[clamp(0.55rem,1.55cqw,0.7rem)] text-[#EEF0FA]/55">Selamat pagi,</p>
          <p className="text-[clamp(0.72rem,2.1cqw,0.95rem)] font-bold">Dana Prasetya</p>
        </div>
        <span className="flex h-[clamp(20px,5.5cqw,34px)] w-[clamp(20px,5.5cqw,34px)] items-center justify-center rounded-full bg-[#4F46E5] text-[clamp(0.55rem,1.6cqw,0.78rem)] font-bold text-white">
          DP
        </span>
      </div>

      {/* Kartu saldo */}
      <div className="mx-[clamp(12px,3.4cqw,22px)] rounded-[clamp(8px,2.2cqw,16px)] p-[clamp(10px,2.8cqw,20px)] text-white"
        style={{ background: "linear-gradient(135deg,#4F46E5 0%,#7C3AED 60%,#9333EA 100%)" }}
      >
        <div className="flex items-center justify-between">
          <p className="text-[clamp(0.52rem,1.5cqw,0.68rem)] font-medium text-white/70">Saldo utama</p>
          <p className="font-display text-[clamp(0.52rem,1.5cqw,0.68rem)] font-bold tracking-widest text-white/70 tabular-nums">•••• 4821</p>
        </div>
        <p className="mt-[clamp(4px,1.3cqw,10px)] font-display text-[clamp(1.3rem,4.6cqw,2.1rem)] leading-none font-black tabular-nums">
          Rp 12.480.500
        </p>
        <div className="mt-[clamp(6px,1.8cqw,14px)] flex gap-1.5">
          {["Transfer", "Top up", "Tagihan", "QRIS"].map((a) => (
            <span key={a} className="rounded-full bg-white/15 px-[clamp(6px,1.8cqw,12px)] py-[clamp(2px,0.8cqw,6px)] text-[clamp(0.5rem,1.45cqw,0.66rem)] font-semibold">
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Grafik pengeluaran mingguan */}
      <div className="mx-[clamp(12px,3.4cqw,22px)] mt-[clamp(8px,2.2cqw,16px)] rounded-[clamp(8px,2.2cqw,16px)] bg-[#1A2040] p-[clamp(9px,2.5cqw,18px)]">
        <div className="flex items-center justify-between">
          <p className="text-[clamp(0.58rem,1.65cqw,0.76rem)] font-bold">Pengeluaran minggu ini</p>
          <p className="text-[clamp(0.55rem,1.55cqw,0.72rem)] font-semibold text-[#A5B4FC] tabular-nums">Rp 1.284rb</p>
        </div>
        <div className="mt-[clamp(6px,1.8cqw,14px)] flex items-end justify-between gap-[clamp(3px,1cqw,8px)]" style={{ ...h(34, 9, 64) }}>
          {bars.map((v, i) => (
            <div key={i} className="flex h-full flex-1 flex-col justify-end gap-1">
              <span
                className={`w-full rounded-[clamp(2px,0.6cqw,5px)] ${i === 5 ? "" : "bg-white/10"}`}
                style={{ height: `${v}%`, background: i === 5 ? "linear-gradient(180deg,#7C3AED,#4F46E5)" : undefined }}
              />
              <span className={`text-center text-[clamp(0.42rem,1.2cqw,0.58rem)] font-semibold ${i === 5 ? "text-[#4F46E5]" : "text-[#EEF0FA]/40"}`}>
                {hari[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Transaksi terakhir */}
      <div className="mx-[clamp(12px,3.4cqw,22px)] mt-[clamp(8px,2.2cqw,16px)] mb-[clamp(12px,3cqw,22px)] rounded-[clamp(8px,2.2cqw,16px)] bg-[#1A2040] p-[clamp(9px,2.5cqw,18px)]">
        <div className="flex items-center justify-between">
          <p className="text-[clamp(0.58rem,1.65cqw,0.76rem)] font-bold">Transaksi terakhir</p>
          <p className="text-[clamp(0.52rem,1.5cqw,0.68rem)] font-semibold text-[#A5B4FC]">Lihat semua</p>
        </div>
        <div className="mt-1 divide-y divide-white/10">
          {trx.map(([name, time, amount, initial]) => (
            <div key={name} className="flex items-center gap-2.5 py-[clamp(5px,1.5cqw,11px)]">
              <span className="flex h-[clamp(18px,5cqw,32px)] w-[clamp(18px,5cqw,32px)] shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/25 text-[clamp(0.5rem,1.45cqw,0.68rem)] font-bold text-[#C4B5FD]">
                {initial}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[clamp(0.58rem,1.65cqw,0.78rem)] font-semibold">{name}</p>
                <p className="text-[clamp(0.48rem,1.4cqw,0.64rem)] text-[#EEF0FA]/45">{time}</p>
              </div>
              <p className={`shrink-0 text-[clamp(0.58rem,1.65cqw,0.78rem)] font-bold tabular-nums ${amount.startsWith("+") ? "text-[#4ADE80]" : ""}`}>
                {amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 3. Studio Kencang — gym: poster gelap, jadwal, satu aksen lime ── */

function MiniKencang() {
  const kelas: [string, string, string][] = [
    ["06.00", "Bodyweight Camp", "Pemula"],
    ["09.30", "HIIT 45", "Semua level"],
    ["17.30", "Strength Club", "Lanjutan"],
    ["19.00", "Mobility & Stretch", "Semua level"],
  ];
  return (
    <div className="bg-[#0D0D0C] text-[#F2F2EE]" style={{ minHeight: "100%" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-[clamp(12px,3.4cqw,22px)] py-[clamp(6px,1.8cqw,12px)]">
        <span className="font-display text-[clamp(0.8rem,2.4cqw,1.1rem)] font-black tracking-tight uppercase">
          Kencang<span className="text-[#FF6B35]">*</span>
        </span>
        <span className="text-[clamp(0.52rem,1.5cqw,0.7rem)] font-medium text-white/45">Studio Solo · Manahan</span>
      </div>

      {/* Poster headline */}
      <div className="px-[clamp(12px,3.4cqw,22px)] pt-[clamp(10px,2.8cqw,22px)] pb-[clamp(8px,2.2cqw,18px)]">
        <p className="font-display text-[clamp(1.7rem,7.2cqw,3.4rem)] leading-[0.92] font-black uppercase tracking-tight">
          Kuat. Kencang.
          <br />
          <span className="text-[#FF6B35]">Konsisten.</span>
        </p>
        <p className="mt-[clamp(6px,1.8cqw,14px)] max-w-[36ch] text-[clamp(0.6rem,1.7cqw,0.8rem)] leading-relaxed text-white/55">
          Kelas berpelatih, kap 12 orang, dibina sampai target tercapai.
          Bukan sekadar tembok cermin.
        </p>
      </div>

      {/* Jadwal hari ini */}
      <div className="px-[clamp(12px,3.4cqw,22px)]">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <p className="text-[clamp(0.52rem,1.5cqw,0.68rem)] font-bold tracking-[0.14em] text-white/40 uppercase">
            Jadwal hari ini
          </p>
          <p className="text-[clamp(0.52rem,1.5cqw,0.68rem)] font-semibold text-[#FF6B35]">4 kelas</p>
        </div>                        <div className="space-y-[clamp(3px,1cqw,8px)]">
                          {kelas.map(([jam, nama, level]) => (
                            <div key={nama} className="flex items-center justify-between gap-2 rounded-[clamp(3px,0.9cqw,7px)] bg-white/[0.05] px-[clamp(6px,1.6cqw,12px)] py-[clamp(5px,1.5cqw,11px)]">
              <span className="shrink-0 font-display text-[clamp(0.66rem,1.95cqw,0.9rem)] font-black text-[#FF6B35] tabular-nums">{jam}</span>
              <span className="min-w-0 flex-1 truncate text-[clamp(0.6rem,1.75cqw,0.82rem)] font-semibold">{nama}</span>
              <span className="shrink-0 border border-white/20 px-[clamp(4px,1.3cqw,9px)] py-[clamp(1px,0.5cqw,4px)] text-[clamp(0.46rem,1.35cqw,0.62rem)] font-semibold text-white/60">
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Membership + CTA */}
      <div className="flex items-center justify-between gap-3 px-[clamp(12px,3.4cqw,22px)] py-[clamp(10px,2.8cqw,22px)] @max-[420px]:flex-col @max-[420px]:items-start">
        <div>
          <p className="font-display text-[clamp(0.85rem,2.5cqw,1.15rem)] font-black">
            Rp 299rb <span className="font-medium text-white/50">/ bulan · semua kelas</span>
          </p>
          <p className="mt-0.5 text-[clamp(0.5rem,1.45cqw,0.66rem)] text-white/45">Tanpa kontrak. Kelas pertama gratis.</p>
        </div>
        <span className="shrink-0 bg-[#FF6B35] px-[clamp(10px,2.8cqw,18px)] py-[clamp(5px,1.6cqw,11px)] text-center text-[clamp(0.6rem,1.75cqw,0.8rem)] font-black uppercase text-[#0D0D0C] @max-[420px]:w-full">
          Amankan tempat
        </span>
      </div>
    </div>
  );
}

/* ── 4. Dapur Nawa — katering sehat: strip menu harian + paket ────── */

function MiniNawa() {
  const menu: [string, string][] = [
    ["Sen", "Nasi merah, ayam kecap"],
    ["Sel", "Bubur protein jagung"],
    ["Rab", "Mie shirataki lada"],
    ["Kam", "Nasi tim ayam jamur"],
    ["Jum", "Quinoa tempe panggang"],
    ["Sab", "Pumpkin soup roti gandum"],
  ];
  return (
    <div className="bg-[#FDF8EE] text-[#1E2A1F]" style={{ minHeight: "100%" }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-[clamp(12px,3.4cqw,22px)] py-[clamp(7px,2cqw,13px)]">
        <span className="font-display text-[clamp(0.85rem,2.6cqw,1.15rem)] font-black tracking-tight">
          Dapur<span className="text-[#2F7D46]">Nawa</span>
        </span>
        <span className="hidden gap-4 text-[clamp(0.58rem,1.6cqw,0.74rem)] font-medium text-[#1E2A1F]/55 @min-[512px]:flex">
          <span>Menu</span>
          <span>Paket</span>
          <span>Cara kerja</span>
        </span>
        <span className="rounded-full bg-[#E14E38] px-[clamp(8px,2.2cqw,14px)] py-[clamp(3px,1cqw,7px)] text-[clamp(0.55rem,1.55cqw,0.72rem)] font-bold text-white">
          Mulai langganan
        </span>
      </div>

      {/* Headline */}
      <div className="px-[clamp(12px,3.4cqw,22px)] pb-[clamp(8px,2.2cqw,18px)]">
        <p className="font-display text-[clamp(1.35rem,5.4cqw,2.5rem)] leading-[1.02] font-black tracking-tight">
          Makan sehat,
          <br />
          <span className="text-[#2F7D46]">enam hari seminggu.</span>
        </p>
        <p className="mt-[clamp(4px,1.3cqw,10px)] max-w-[36ch] text-[clamp(0.6rem,1.7cqw,0.78rem)] leading-relaxed text-[#1E2A1F]/60">
          Bergizi seimbang oleh ahli gizi, dimasak pagi itu juga, diantar
          sebelum jam 07.00.
        </p>
      </div>

      {/* Strip menu harian — 6 hari */}
      <div className="mx-[clamp(12px,3.4cqw,22px)] mb-[clamp(8px,2.2cqw,16px)] grid grid-cols-3 gap-[clamp(4px,1.3cqw,9px)] @max-[512px]:grid-cols-2">
        {menu.map(([hri, hid]) => (
          <div key={hri} className="rounded-[clamp(5px,1.5cqw,11px)] bg-white p-[clamp(5px,1.6cqw,12px)] shadow-[0_1px_3px_rgb(30_42_31/0.07)]">
            <span className="rounded-full bg-[#EAF4E7] px-1.5 py-0.5 text-[clamp(0.42rem,1.25cqw,0.58rem)] font-black text-[#2F7D46]">
              {hri}
            </span>
            <p className="mt-[clamp(2px,0.8cqw,6px)] text-[clamp(0.52rem,1.55cqw,0.72rem)] font-semibold leading-snug">{hid}</p>
          </div>
        ))}
      </div>

      {/* Dua paket */}
      <div className="grid grid-cols-2 gap-[clamp(6px,1.8cqw,12px)] px-[clamp(12px,3.4cqw,22px)] pb-[clamp(12px,3.2cqw,24px)] @max-[420px]:grid-cols-1">
        {[
          { name: "Reguler", price: "Rp 450rb", per: "/ minggu · 12 makan", tag: null as string | null, hi: false },
          { name: "Protein+", price: "Rp 525rb", per: "/ minggu · 12 makan", tag: "Terlaris", hi: true },
        ].map((p) => (
          <div
            key={p.name}
            className={`relative rounded-[clamp(6px,1.7cqw,13px)] p-[clamp(8px,2.3cqw,16px)] ${
              p.hi ? "border-2 border-[#2F7D46] bg-white" : "border border-[#1E2A1F]/12 bg-white"
            }`}
          >
            {p.tag && (
              <span className="absolute -top-2 right-[clamp(7px,2cqw,14px)] rounded-full bg-[#E14E38] px-1.5 py-0.5 text-[clamp(0.42rem,1.2cqw,0.58rem)] font-black text-white">
                {p.tag}
              </span>
            )}
            <p className="text-[clamp(0.6rem,1.7cqw,0.8rem)] font-bold">{p.name}</p>
            <p className="mt-0.5 font-display text-[clamp(0.85rem,2.6cqw,1.25rem)] font-black tabular-nums">{p.price}</p>
            <p className="text-[clamp(0.48rem,1.4cqw,0.64rem)] text-[#1E2A1F]/50">{p.per}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 5. Arunika — wedding organizer: editorial tengah, garis emas ─── */

function MiniArunika() {
  const langkah: [string, string][] = [
    ["Konsultasi", "Ceritakan konsep dan keduanya kami dengar baik-baik."],
    ["Rencana", "Venue, vendor, dan jadwal kami rangkai satu per satu."],
    ["Hari-H", "Tim kami berjaga. Anda cukup datang dan menikmati."],
  ];
  return (
    <div className="bg-[#FAF6EE] text-[#2A2118]" style={{ minHeight: "100%" }}>
      {/* Wordmark tengah */}
      <div className="flex flex-col items-center px-4 pt-[clamp(10px,2.8cqw,22px)] pb-[clamp(4px,1.2cqw,10px)]">
        <span className="font-display text-[clamp(0.95rem,3cqw,1.4rem)] font-normal tracking-[0.34em] uppercase">
          Arunika
        </span>
        <span className="mt-1 text-[clamp(0.5rem,1.45cqw,0.66rem)] font-medium tracking-[0.22em] text-[#A8833B] uppercase">
          Wedding &amp; Event
        </span>
        <span aria-hidden className="mt-[clamp(6px,1.8cqw,14px)] h-px w-[clamp(40px,11cqw,72px)] bg-[#A8833B]/50" />
      </div>

      {/* Headline editorial tengah */}
      <p
        className="mx-auto max-w-[26ch] px-6 pt-[clamp(4px,1.2cqw,10px)] text-center font-normal leading-[1.14] tracking-tight"
        style={fs(1.1, 4.2, 32)}
      >
        Hari besar yang tenang, dirancang sampai detail terkecil.
      </p>
      <p className="mx-auto mt-[clamp(5px,1.5cqw,12px)] max-w-[36ch] px-6 text-center text-[clamp(0.58rem,1.65cqw,0.76rem)] leading-relaxed text-[#2A2118]/55">
        84 pernikahan kami rancang di Jawa Tengah sejak 2021 — masing-masing
        terasa berbeda, karena memang bukan paket jadi.
      </p>

      {/* Tiga langkah — benar-benar urutan, maka boleh bernomor */}
      <div className="mx-[clamp(14px,4cqw,36px)] mt-[clamp(8px,2.2cqw,18px)] divide-y divide-[#2A2118]/10 border-y border-[#2A2118]/10">
        {langkah.map(([nama, desc], i) => (
          <div key={nama} className="flex items-start gap-3 py-[clamp(6px,1.8cqw,14px)]">
            <span className="shrink-0 pt-0.5 text-[clamp(0.52rem,1.5cqw,0.7rem)] font-semibold tracking-[0.12em] text-[#A8833B]">
              0{i + 1}
            </span>
            <div className="min-w-0">
              <p className="text-[clamp(0.62rem,1.8cqw,0.84rem)] font-semibold tracking-wide">{nama}</p>
              <p className="mt-0.5 text-[clamp(0.54rem,1.55cqw,0.72rem)] leading-relaxed text-[#2A2118]/55">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Kutipan */}
      <div className="flex flex-col items-center px-[clamp(16px,5cqw,48px)] pt-[clamp(8px,2.2cqw,20px)]">
        <p
          className="max-w-[30ch] rounded-[clamp(6px,1.6cqw,12px)] bg-[#F6E0E6]/70 px-[clamp(10px,3cqw,22px)] py-[clamp(6px,1.8cqw,14px)] text-center font-normal leading-snug text-[#2A2118]/80"
          style={fs(0.72, 2.2, 17)}
        >
          “Kami cukup datang. Semua berjalan rapi, semua terasa kami.”
        </p>
        <p className="mt-[clamp(3px,1cqw,8px)] text-[clamp(0.5rem,1.45cqw,0.66rem)] font-medium tracking-[0.14em] text-[#2A2118]/45 uppercase">
          Tirza &amp; Bagas · Juni 2026
        </p>
      </div>

      {/* CTA outline emas */}
      <div className="flex justify-center px-4 pb-[clamp(12px,3.2cqw,26px)] pt-[clamp(6px,1.8cqw,16px)]">
        <span className="border border-[#A8833B] px-[clamp(12px,3.4cqw,24px)] py-[clamp(5px,1.5cqw,10px)] text-[clamp(0.56rem,1.6cqw,0.74rem)] font-semibold tracking-[0.12em] text-[#A8833B] uppercase">
          Jadwalkan konsultasi
        </span>
      </div>
    </div>
  );
}

/* ── Katalog demo ──────────────────────────────────────────────────── */

type DemoTheme = {
  key: string;
  pill: string;
  domain: string;
  render: () => ReactNode;
};

const themes: DemoTheme[] = [
  { key: "resort", pill: "Resor vila", domain: "sedasa.id", render: () => <MiniSedasa /> },
  { key: "fintech", pill: "Dompet digital", domain: "arus.id", render: () => <MiniArus /> },
  { key: "gym", pill: "Studio fitness", domain: "kencang.fit", render: () => <MiniKencang /> },
  { key: "katering", pill: "Katering sehat", domain: "dapurnawa.id", render: () => <MiniNawa /> },
  { key: "wedding", pill: "Wedding organizer", domain: "arunika.id", render: () => <MiniArunika /> },
];

/**
 * Viewport Hidup — mini-browser yang bisa diseret lebarnya.
 * Isi frame: lima mini-site klien fiktif dengan bahasa desain yang berbeda
 * total (resor elegan, app fintech, poster gym gelap, katering segar,
 * editorial pernikahan). Visual dibangun dari geometri, gradient, dan UI
 * nyata — tanpa clipart, tanpa emoji.
 * Berganti otomatis tiap satu siklus sweep, atau dipilih manual.
 * Semua ukuran memakai satuan cqw — skala mengikuti lebar frame.
 * Reflow struktur memakai container query (@max-512px, @max-672px).
 */
export default function ViewportDemo() {
  const [width, setWidth] = useState(680);
  const [avail, setAvail] = useState<number | null>(null);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(true);
  const [themeIdx, setThemeIdx] = useState(0);
  const raf = useRef<number | null>(null);
  const last = useRef<number>(0);
  const dir = useRef<1 | -1>(1);
  const zone = useRef<HTMLDivElement | null>(null);
  const root = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);
  const [forced, setForced] = useState(false);

  const reducedMotion = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  // Ruang horizontal yang benar-benar tersedia untuk frame
  useEffect(() => {
    const el = zone.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([e]) => setAvail(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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

  const effMin = Math.min(MIN_W, avail ?? MIN_W);
  const effMax = Math.min(MAX_W, avail ?? MAX_W);
  const rangeOk = effMax - effMin > 60;

  // Auto-play sweep — hanya saat terlihat, bukan reduced-motion, dan ada ruang
  useEffect(() => {
    if (!auto || !inView || !rangeOk || (reducedMotion && !forced)) return;
    const tick = (t: number) => {
      if (!last.current) last.current = t;
      const dt = t - last.current;
      last.current = t;
      setWidth((w) => {
        let next = w + (dir.current * dt) / 6;
        if (next >= effMax) {
          next = effMax;
          dir.current = -1;
          // Satu siklus selesai — lanjut ke klien berikutnya
          setThemeIdx((i) => (i + 1) % themes.length);
        }
        if (next <= effMin) {
          next = effMin;
          dir.current = 1;
        }
        return next;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (!raf.current) return;
      cancelAnimationFrame(raf.current);
      last.current = 0;
    };
  }, [auto, inView, reducedMotion, forced, rangeOk, effMin, effMax]);

  const stopAuto = useCallback(() => setAuto(false), []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    stopAuto();
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !zone.current) return;
    const rect = zone.current.getBoundingClientRect();
    const next = Math.min(effMax, Math.max(effMin, rect.right - e.clientX));
    setWidth(next);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      stopAuto();
      setWidth((w) => Math.max(effMin, w - 24));
    } else if (e.key === "ArrowRight") {
      stopAuto();
      setWidth((w) => Math.min(effMax, w + 24));
    } else {
      return;
    }
    e.preventDefault();
  };

  const t = themes[themeIdx];
  const shown = Math.round(Math.min(width, avail ?? width));
  const bp = breakpointOf(shown);

  const playing = auto && rangeOk && !(reducedMotion && !forced);

  const preset = (w: number) => {
    stopAuto();
    setWidth(Math.min(w, effMax));
  };

  const pickTheme = (i: number) => {
    stopAuto();
    setThemeIdx(i);
  };

  return (
    <div ref={root} className="w-full">
      {/* Toolbar */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="order-1 font-mono text-[11px] tabular-nums text-ink-900/55">
          {shown}px · {bp}
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
              aria-pressed={bp === p.label}
              className={`flex min-h-9 flex-1 cursor-pointer items-center justify-center px-3 text-[11px] font-medium transition-colors sm:flex-none ${
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
            className="order-2 flex min-h-9 cursor-pointer items-center text-[11px] font-medium text-brand-600 hover:text-ink-950 sm:order-3 sm:ml-auto"
          >
            Putar demo
          </button>
        ) : (
          <span className="order-2 flex min-h-9 items-center gap-2 text-[11px] font-medium text-ink-900/45 sm:order-3 sm:ml-auto">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" />
            Demo
          </span>
        )}
      </div>

      {/* Pilih contoh klien */}
      <div className="mb-3 flex flex-wrap items-center gap-1.5" aria-label="Contoh klien">
        {themes.map((th, i) => (
          <button
            key={th.key}
            type="button"
            onClick={() => pickTheme(i)}
            aria-pressed={i === themeIdx}
            className={`min-h-7 cursor-pointer px-2.5 text-[11px] font-medium transition-colors ${
              i === themeIdx
                ? "bg-ink-950 text-white"
                : "border border-line text-ink-900/60 hover:border-ink-900/40 hover:text-ink-950"
            }`}
          >
            {th.pill}
          </button>
        ))}
      </div>

      {/* Zona demo */}
      <div ref={zone} className="relative flex justify-end" style={{ maxWidth: MAX_W }}>
        {/* Frame browser */}
        <div
          className="relative w-full border border-ink-900/10 bg-white shadow-[0_40px_80px_-36px_rgb(11_18_32/0.4)] transition-[width] duration-200 ease-out"
          style={{ width: "100%", maxWidth: Math.min(width, avail ?? MAX_W) }}
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-2 border-b border-line bg-paper px-3 py-2">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            </span>
            <span className="flex-1 truncate bg-white px-3 py-0.5 font-mono text-[9px] text-ink-900/50">
              {t.domain}
            </span>
          </div>

          {/* Mini-site — masing-masing konsep berbeda total */}
          <div className="@container" style={{ containerType: "inline-size" }}>
            {t.render()}
          </div>
        </div>

        {/* Handle geser — selalu terlihat: hairline penuh + pil biru ber-halo putih */}
        <div
          role="slider"
          aria-label="Lebar viewport demo"
          aria-valuemin={effMin}
          aria-valuemax={effMax}
          aria-valuenow={shown}
          aria-valuetext={`${shown} piksel, mode ${bp}`}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onKeyDown={onKeyDown}
          className="group/handle absolute inset-y-0 -left-3 z-10 flex w-6 cursor-ew-resize touch-none items-center justify-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <span aria-hidden className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-brand-600/25" />
          <span
            aria-hidden
            className="h-12 w-1.5 rounded-full bg-brand-600 shadow-[0_0_0_3px_rgb(250_250_250/0.95)] transition-[height] duration-150 group-hover/handle:h-14"
          />
        </div>
      </div>

      <p className="mt-4 text-[13px] text-ink-900/55">
        Seret garis biru — tata letak situs di dalam ikut menyesuaikan.
      </p>
    </div>
  );
}
