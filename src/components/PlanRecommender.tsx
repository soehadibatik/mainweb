"use client";

import { useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/site";
import { localizePath, type Locale } from "@/lib/i18n/config";

type QuestionOption = {
  id: string;
  label: string;
  desc: string;
};

type Recommendation = {
  planId: string;
  name: string;
  price: string;
  tagline: string;
  idealFor: string;
  features: string[];
};

export default function PlanRecommender({ lang = "id" }: { lang?: Locale }) {
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [scale, setScale] = useState<string | null>(null);

  const isId = lang === "id";

  const reset = () => {
    setStep(1);
    setBusinessType(null);
    setGoal(null);
    setScale(null);
  };

  const businessOptions: QuestionOption[] = isId
    ? [
        {
          id: "baru",
          label: "Usaha Baru / Jasa Pribadi",
          desc: "Baru merintis, butuh kehadiran online profesional agar dipercaya calon klien.",
        },
        {
          id: "toko",
          label: "UMKM / Toko Produk",
          desc: "Sudah berjalan, punya ragam produk atau varian untuk diarahkan ke WhatsApp.",
        },
        {
          id: "perusahaan",
          label: "Perusahaan / Brand Berkembang",
          desc: "Membutuhkan profil resmi multi-halaman dengan fitur kelola konten mandiri.",
        },
        {
          id: "sistem",
          label: "Startup / Kebutuhan Sistem Khusus",
          desc: "Membutuhkan platform digital terintegrasi, akun pengguna, atau dashboard.",
        },
      ]
    : [
        {
          id: "baru",
          label: "New Business / Freelance Service",
          desc: "Just starting out, need a credible online presence to build client trust.",
        },
        {
          id: "toko",
          label: "SME / Product Business",
          desc: "Active business with products or variants to direct orders to WhatsApp.",
        },
        {
          id: "perusahaan",
          label: "Growing Company / Brand",
          desc: "Needs an official multi-page website with a self-managed CMS.",
        },
        {
          id: "sistem",
          label: "Startup / Custom System",
          desc: "Requires an integrated digital platform, user accounts, or custom dashboard.",
        },
      ];

  const goalOptions: QuestionOption[] = isId
    ? [
        {
          id: "landing",
          label: "Landing Page Cepat (1 Halaman)",
          desc: "Fokus pada pengenalan singkat dan satu tombol WhatsApp untuk tanya jawab.",
        },
        {
          id: "katalog",
          label: "Katalog Produk & Galeri Lengkap",
          desc: "Menampilkan foto produk, spesifikasi, dan daftar harga terstruktur.",
        },
        {
          id: "company",
          label: "Profil Perusahaan & Artikel Berita",
          desc: "Halaman tentang kami, layanan, legalitas, tim, dan artikel berkala.",
        },
        {
          id: "custom",
          label: "Sistem Khusus / Alur Otomatis",
          desc: "Fitur alur kerja kustom atau integrasi database internal bisnis.",
        },
      ]
    : [
        {
          id: "landing",
          label: "Fast Landing Page (Single Page)",
          desc: "Focused on concise introduction and direct WhatsApp contact button.",
        },
        {
          id: "katalog",
          label: "Product Catalog & Full Gallery",
          desc: "Showcasing product photos, specifications, and structured pricing.",
        },
        {
          id: "company",
          label: "Company Profile & Articles",
          desc: "About page, services, legal information, team, and regular articles.",
        },
        {
          id: "custom",
          label: "Custom System / Automated Workflow",
          desc: "Custom workflow features or internal business database integration.",
        },
      ];

  const scaleOptions: QuestionOption[] = isId
    ? [
        {
          id: "hemat",
          label: "Anggaran Mulai (Rp 1,5 jt – Rp 3 jt)",
          desc: "Solusi cepat dan hemat untuk memulai tanpa biaya bulanan yang memberatkan.",
        },
        {
          id: "standar",
          label: "Anggaran Menengah (Rp 5 jt – Rp 20 jt)",
          desc: "Kebutuhan lengkap untuk operasional bisnis yang sudah berjalan aktif.",
        },
        {
          id: "skala",
          label: "Anggaran Skala Besar (Rp 30 jt ke atas)",
          desc: "Solusi komprehensif untuk perusahaan atau kebutuhan sistem digital mendalam.",
        },
      ]
    : [
        {
          id: "hemat",
          label: "Entry Budget (Rp 1.5M – Rp 3M IDR)",
          desc: "Fast and cost-effective solution to get online without heavy maintenance fees.",
        },
        {
          id: "standar",
          label: "Mid Budget (Rp 5M – Rp 20M IDR)",
          desc: "Complete features for active businesses needing comprehensive structure.",
        },
        {
          id: "skala",
          label: "Scale Budget (Rp 30M+ IDR)",
          desc: "Comprehensive solution for corporate needs or deep custom platforms.",
        },
      ];

  // Logika rekomendasi berbasis jawaban
  const getRecommendation = (): Recommendation => {
    if (scale === "skala" || businessType === "sistem" || goal === "custom") {
      return isId
        ? {
            planId: "proficient",
            name: "Proficient",
            price: "Rp 50 jt",
            tagline: "Platform web khusus untuk perusahaan dengan arsitektur sistem kompleks.",
            idealFor: "Perusahaan yang membutuhkan integrasi sistem, dashboard, atau alur kerja digital kustom.",
            features: [
              "Halaman custom sesuai kebutuhan bisnis",
              "CMS lengkap dan hak akses berjenjang",
              "Integrasi basis data dan API eksternal",
              "Dukungan teknis intensif",
            ],
          }
        : {
            planId: "proficient",
            name: "Proficient",
            price: "Rp 50,000,000",
            tagline: "Custom web platform for enterprises requiring complex system architecture.",
            idealFor: "Companies needing system integration, dashboards, or custom digital workflows.",
            features: [
              "Custom pages tailored to business requirements",
              "Comprehensive CMS with tiered access roles",
              "Database and external API integration",
              "Intensive technical support",
            ],
          };
    }

    if (scale === "standar" || businessType === "perusahaan" || goal === "company") {
      return isId
        ? {
            planId: "light",
            name: "Light",
            price: "Rp 10 jt",
            tagline: "Website bisnis lengkap 8 sampai 12 halaman untuk kredibilitas tingkat tinggi.",
            idealFor: "Bisnis yang membutuhkan profil resmi, daftar layanan lengkap, dan CMS untuk artikel.",
            features: [
              "8 sampai 12 halaman terstruktur",
              "CMS mandiri untuk update teks dan foto",
              "SEO terarah untuk pencarian Google",
              "Formulir kontak dan tombol WhatsApp",
            ],
          }
        : {
            planId: "light",
            name: "Light",
            price: "Rp 10,000,000",
            tagline: "Complete business website with 8 to 12 pages for high brand credibility.",
            idealFor: "Businesses requiring an official profile, full service catalog, and CMS for articles.",
            features: [
              "8 to 12 structured pages",
              "Self-managed CMS for text and photo updates",
              "Targeted SEO for Google search",
              "Contact form and direct WhatsApp buttons",
            ],
          };
    }

    if (goal === "katalog" || businessType === "toko") {
      return isId
        ? {
            planId: "elementary",
            name: "Elementary",
            price: "Rp 5 jt",
            tagline: "Website 5 sampai 8 halaman dengan katalog produk dan alur order WhatsApp.",
            idealFor: "Usaha dagang, grosir, atau brand lokal yang ingin menampilkan ragam produk secara rapi.",
            features: [
              "5 sampai 8 halaman (Beranda, Katalog, Tentang Kami, Cara Pesan, Kontak)",
              "Galeri katalog dengan rincian spesifikasi",
              "Tombol pemesanan langsung terhubung ke WhatsApp admin",
              "Desain responsif ringan dibuka di smartphone",
            ],
          }
        : {
            planId: "elementary",
            name: "Elementary",
            price: "Rp 5,000,000",
            tagline: "5 to 8 page website with product catalog and WhatsApp checkout flow.",
            idealFor: "Retail, wholesale, or local brands wanting to showcase product varieties clearly.",
            features: [
              "5 to 8 pages (Home, Catalog, About, Ordering Guide, Contact)",
              "Catalog gallery with specification details",
              "Order buttons connected directly to WhatsApp admin",
              "Fast responsive design optimized for smartphones",
            ],
          };
    }

    if (goal === "landing" && scale === "hemat") {
      return isId
        ? {
            planId: "basic",
            name: "Basic",
            price: "Rp 1,5 jt",
            tagline: "Landing page 1 halaman profesional untuk mulai tampil online dengan cepat dan hemat.",
            idealFor: "Usaha baru, personal branding, atau promosi satu produk/layanan yang butuh kehadiran online instan.",
            features: [
              "1 halaman landing page terfokus",
              "Section Hero, Layanan, Keunggulan, dan Kontak",
              "Tombol WhatsApp terhubung langsung sekali klik",
              "Domain sendiri dan sertifikat keamanan SSL gratis",
            ],
          }
        : {
            planId: "basic",
            name: "Basic",
            price: "Rp 1,500,000",
            tagline: "Professional 1-page landing page to launch online quickly and cost-effectively.",
            idealFor: "New businesses, personal branding, or single product campaigns needing instant presence.",
            features: [
              "1 focused landing page",
              "Hero, Services, Advantages, and Contact sections",
              "Direct WhatsApp connection with single click",
              "Custom domain and free SSL security certificate",
            ],
          };
    }

    // Default rekomendasi UMKM paling populer: Beginner
    return isId
      ? {
          planId: "beginner",
          name: "Beginner",
          price: "Rp 3 jt",
          tagline: "Website 3 sampai 5 halaman untuk profil usaha yang lebih komprehensif.",
          idealFor: "Usaha yang membutuhkan pemisahan jelas antara profil perusahaan, produk, dan kontak.",
          features: [
            "3 sampai 5 halaman terstruktur",
            "Profil usaha, galeri produk, dan formulir kontak",
            "SEO dasar ramah pencarian Google",
            "Dukungan bantuan WhatsApp",
          ],
        }
      : {
          planId: "beginner",
          name: "Beginner",
          price: "Rp 3,000,000",
          tagline: "3 to 5 page website for a more comprehensive business profile.",
          idealFor: "Businesses needing distinct sections for company profile, products, and contact.",
          features: [
            "3 to 5 structured pages",
            "Company profile, product gallery, and contact form",
            "Foundational SEO for Google search",
            "WhatsApp support assistance",
          ],
        };
  };

  const rec = getRecommendation();
  const waMsg = isId
    ? `Halo mainweb.id, hasil kalkulator merekomendasikan paket ${rec.name} (${rec.price}) untuk kebutuhan saya. Bisakah konsultasi lebih lanjut?`
    : `Hello mainweb.id, the plan recommender suggested the ${rec.name} plan (${rec.price}) for my needs. Can we discuss this?`;

  return (
    <div className="reveal mt-10 overflow-hidden border-2 border-brand-600/30 bg-paper p-5 sm:p-7">
      <div className="flex flex-col justify-between gap-3 border-b border-line pb-4 sm:flex-row sm:items-center">
        <div>
          <span className="font-mono text-[11px] font-semibold text-brand-600 uppercase tracking-wider">
            {isId ? "Kalkulator Kebutuhan" : "Plan Recommender"}
          </span>
          <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-ink-950 sm:text-2xl">
            {isId ? "Bingung memilih dari 15 paket? Temukan dalam 3 klik." : "Unsure which of the 15 plans fits? Find it in 3 clicks."}
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-ink-900/50">
          <span>{isId ? `Langkah ${step} dari 3` : `Step ${step} of 3`}</span>
          {step > 1 && (
            <button
              type="button"
              onClick={reset}
              className="text-brand-600 underline-offset-4 hover:underline"
            >
              {isId ? "Ulangi" : "Reset"}
            </button>
          )}
        </div>
      </div>

      {step === 1 && (
        <div className="mt-6">
          <p className="font-display text-base font-semibold text-ink-950">
            {isId ? "1. Apa jenis usaha atau organisasi Anda?" : "1. What type of business or organization are you?"}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {businessOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setBusinessType(opt.id);
                  setStep(2);
                }}
                className="group flex min-h-[4.5rem] flex-col justify-center border border-line bg-white p-4 text-left transition-colors hover:border-brand-600 hover:bg-brand-600/[0.03] focus-visible:outline-2 focus-visible:outline-brand-600"
              >
                <span className="font-display text-sm font-bold text-ink-950 group-hover:text-brand-600">
                  {opt.label}
                </span>
                <span className="mt-1 text-xs text-ink-900/60 leading-relaxed">
                  {opt.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-6">
          <p className="font-display text-base font-semibold text-ink-950">
            {isId ? "2. Apa tujuan utama website Anda?" : "2. What is the primary purpose of your website?"}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {goalOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setGoal(opt.id);
                  setStep(3);
                }}
                className="group flex min-h-[4.5rem] flex-col justify-center border border-line bg-white p-4 text-left transition-colors hover:border-brand-600 hover:bg-brand-600/[0.03] focus-visible:outline-2 focus-visible:outline-brand-600"
              >
                <span className="font-display text-sm font-bold text-ink-950 group-hover:text-brand-600">
                  {opt.label}
                </span>
                <span className="mt-1 text-xs text-ink-900/60 leading-relaxed">
                  {opt.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-6">
          <p className="font-display text-base font-semibold text-ink-950">
            {isId ? "3. Berapa kisaran alokasi anggaran pembuatan Anda?" : "3. What is your expected budget range?"}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {scaleOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setScale(opt.id);
                  setStep(4);
                }}
                className="group flex min-h-[4.5rem] flex-col justify-center border border-line bg-white p-4 text-left transition-colors hover:border-brand-600 hover:bg-brand-600/[0.03] focus-visible:outline-2 focus-visible:outline-brand-600"
              >
                <span className="font-display text-sm font-bold text-ink-950 group-hover:text-brand-600">
                  {opt.label}
                </span>
                <span className="mt-1 text-xs text-ink-900/60 leading-relaxed">
                  {opt.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="mt-6 rounded-none border border-brand-600 bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-mono text-[10px] font-semibold text-brand-600 uppercase tracking-wider">
                {isId ? "Hasil Rekomendasi Paling Sesuai" : "Recommended Plan"}
              </span>
              <h4 className="font-display text-2xl font-black text-ink-950">
                {rec.name}
              </h4>
            </div>
            <div className="text-right">
              <span className="font-mono text-[11px] text-ink-900/50 block">
                {isId ? "Biaya Pembuatan" : "Build Cost"}
              </span>
              <span className="font-display text-2xl font-black text-brand-600">
                {rec.price}
              </span>
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-ink-900/70">
            {rec.tagline} {rec.idealFor}
          </p>

          <div className="mt-4 border-t border-line pt-3">
            <p className="font-mono text-xs font-semibold text-ink-950">
              {isId ? "Fitur Utama yang Termasuk:" : "Key Features Included:"}
            </p>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {rec.features.map((f) => (
                <li key={f} className="flex items-center gap-2 font-mono text-xs text-ink-900/75">
                  <span className="text-brand-600 font-bold">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary min-h-11 flex-1 text-center justify-center"
            >
              {isId ? `Konsultasi Paket ${rec.name} via WhatsApp` : `Consult for ${rec.name} via WhatsApp`}
            </a>
            <Link
              href={localizePath(lang, `/paket/${rec.planId}`)}
              className="btn btn-outline min-h-11 flex-1 text-center justify-center"
            >
              {isId ? "Lihat Rincian Paket Lengkap" : "View Full Plan Details"}
            </Link>
            <button
              type="button"
              onClick={reset}
              className="px-4 py-2 font-mono text-xs text-ink-900/60 hover:text-ink-950 transition-colors"
            >
              {isId ? "Hitung Ulang" : "Start Over"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
