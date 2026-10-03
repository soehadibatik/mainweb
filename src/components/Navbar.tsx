"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/site";

const navItems = [
  { href: "/#keunggulan", label: "Keunggulan" },
  { href: "/#paket", label: "Paket" },
  { href: "/#perbandingan", label: "Perbandingan" },
  { href: "/#proses", label: "Cara Kerja" },
  { href: "/klien", label: "Klien" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-enter fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 text-ink-950 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="mainweb.id, beranda">
          <Image
            src="/logo.png"
            alt="mainweb.id, jasa pembuatan website"
            width={160}
            height={90}
            priority
            className="h-8 w-auto"
          />
          <span className="hidden h-3.5 w-px bg-ink-900/15 sm:block" />
          <span className="brand-wordmark font-display text-[18px] leading-none font-black tracking-[-0.045em]">MainWeb</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-ink-900/70 transition-colors hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={waLink("Halo mainweb.id, saya ingin konsultasi pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Konsultasi
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
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line py-3 text-sm text-ink-900/75 transition-colors hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={waLink("Halo mainweb.id, saya ingin konsultasi pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-4 w-full"
          >
            Konsultasi Gratis
          </a>
          <div className="mt-4">
            <Image
              src="/logo.png"
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
