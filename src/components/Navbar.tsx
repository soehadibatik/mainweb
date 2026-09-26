"use client";

import { useState } from "react";
import Image from "next/image";
import { waLink } from "@/lib/site";

const navItems = [
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#paket", label: "Paket" },
  { href: "#perbandingan", label: "Perbandingan" },
  { href: "#proses", label: "Cara Kerja" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 text-ink-950 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo-mainweb.png"
            alt="mainweb.id — web consultancy"
            width={160}
            height={90}
            priority
            className="h-8 w-auto"
          />
          <span className="hidden h-3.5 w-px bg-ink-900/15 sm:block" />
          <span className="font-display text-[18px] leading-none font-extrabold tracking-[-0.035em] text-ink-950">
            Main<span className="text-brand-600">Web</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.14em] text-ink-900/65 uppercase transition-colors hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-ink-900/55">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
            OPEN FOR PROJECTS
          </span>
          <a
            href={waLink("Halo mainweb.id, saya ingin konsultasi pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-600 px-4 py-2 font-mono text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-brand-500"
          >
            Konsultasi →
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center border border-ink-900/20 text-ink-950 lg:hidden"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-4 pb-5 pt-2 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line py-3 font-mono text-xs tracking-[0.14em] text-ink-900/70 uppercase transition-colors hover:text-brand-600"
            >
              {item.label}
              <span className="text-ink-900/30">→</span>
            </a>
          ))}
          <a
            href={waLink("Halo mainweb.id, saya ingin konsultasi pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block bg-brand-600 px-4 py-3 text-center font-mono text-xs font-semibold tracking-[0.12em] text-white uppercase"
          >
            Konsultasi Gratis →
          </a>
          <div className="mt-4">
            <Image
              src="/logo-mainweb.png"
              alt="mainweb.id"
              width={120}
              height={68}
              className="h-6 w-auto opacity-80"
            />
          </div>
        </div>
      )}
    </header>
  );
}
