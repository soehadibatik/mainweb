#!/usr/bin/env node
/**
 * Generator gambar Open Graph 1200x630 untuk tiap halaman.
 *
 *   node scripts/generate-og.mjs        (atau: npm run og)
 *
 * Hasilnya ditulis ke public/og/*.png dan di-commit bersama kode, jadi
 * `next build` tidak perlu generator ini. Jalankan ulang bila judul, harga,
 * atau daftar klien berubah.
 *
 * Kenapa Chrome dan bukan ImageResponse: font situs semuanya .woff2, sedangkan
 * satori (di balik next/og) menolak wOF2. Chrome memakai font yang sama
 * persis dengan situsnya, jadi hasilnya sebidang dengan tampilan halaman.
 *
 * Semua font dan logo di-embed sebagai base64, sehingga render deterministik:
 * tanpa jaringan, tanpa server, tanpa dependensi npm tambahan.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { plans } from "../src/lib/plans.ts";
import { tiers } from "../src/lib/tiers.ts";
import { caseStudies } from "../src/lib/case-studies.ts";
import { clients, featured } from "../src/lib/clients.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "public", "og");
const W = 1200;
const H = 630;

const read = (p) => readFileSync(join(root, p));
const fontUrl = (p) => `url(data:font/woff2;base64,${read(p).toString("base64")})`;

const MIME = {
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};
const imageUrl = (p) => {
  const ext = p.slice(p.lastIndexOf(".")).toLowerCase();
  return `data:${MIME[ext]};base64,${read(`public${p}`).toString("base64")}`;
};

/* ------------------------------------------------------------------ *
 * Isi panel kanan (mockup browser) per jenis halaman
 * ------------------------------------------------------------------ */

function paketScreen(plan) {
  const rows = [["maintain", plan.maintain]];
  if (plan.renewal) rows.push(["perpanjangan", `${plan.renewal}/th`]);

  return `<div class="pad">
      ${rows
        .map(
          ([k, v], i) => `${i ? '<div class="hr"></div>' : ""}
      <div class="key">${k}</div>
      <div class="val">${v}</div>`
        )
        .join("")}
      <div class="hr"></div>
      <div class="key">spesifikasi</div>
      <div class="pills">${plan.featureGroups.map((g) => `<span class="pill">${g.title}</span>`).join("")}</div>
      <div class="hr"></div>
      <div class="key">ideal untuk</div>
      <div class="note" data-fit="15,4">${plan.idealFor}</div>
    </div>`;
}

function klienScreen() {
  return `<div class="pad">
      <div class="lgrid">
        ${featured
          .map(
            (c) =>
              `<div class="lcell"><img src="${imageUrl(c.logo)}" alt="${c.name}"></div>`
          )
          .join("")}
      </div>
      <div class="more">+ ${clients.length - featured.length} situs lainnya</div>
    </div>`;
}

function studiesScreen() {
  return `<div class="pad rows">
      ${caseStudies
        .map(
          (s) =>
            `<div class="row"><span class="rn">${s.client}</span><span class="rc">${s.category}</span></div>`
        )
        .join("")}
    </div>`;
}

function studyScreen(study, plan) {
  return `<div class="pad center">
      <div class="logo-box"><img src="${imageUrl(study.logo)}" alt="${study.client}"></div>
      <div class="dom">${study.domain}</div>
      <div class="hr"></div>
      <div class="key">paket rekomendasi</div>
      <div class="val sm">${plan ? plan.name : ""}</div>
      <div class="note" data-fit="15,3">${plan ? plan.tagline : ""}</div>
    </div>`;
}

/** Halaman hukum tidak punya produk yang bisa dipreteli, jadi wireframe dokumen. */
function docScreen() {
  const lines = [96, 88, 93, 70, 0, 91, 84, 60, 0, 95, 87];
  return `<div class="pad">
      <div class="w-head"></div>
      ${lines
        .map((w) =>
          w === 0 ? '<div class="w-block"></div>' : `<div class="w-line" style="width:${w}%"></div>`
        )
        .join("")}
    </div>`;
}

/* ------------------------------------------------------------------ *
 * Daftar kartu
 * ------------------------------------------------------------------ */

const planById = new Map(plans.map((p) => [p.id, p]));

const cards = [
  {
    file: "klien.png",
    eyebrow: `Portofolio · ${clients.length} situs tayang`,
    titleTop: "Portofolio situs",
    titleBottom: "yang sudah tayang",
    sub: "Dari company profile dan toko online sampai dashboard internal.",
    url: "mainweb.id/klien",
    screen: klienScreen(),
  },
  {
    file: "studi-kasus.png",
    eyebrow: `Studi kasus · ${caseStudies.length} proyek`,
    titleTop: "Proyek nyata",
    titleBottom: "yang sudah kami rilis",
    sub: "Komunitas dengan toko, katalog B2B batik, toko grosir, sampai sistem internal.",
    url: "mainweb.id/studi-kasus",
    screen: studiesScreen(),
  },
  {
    file: "syarat-layanan.png",
    eyebrow: "Dokumen resmi · mainweb.id",
    titleTop: "Syarat Layanan",
    titleBottom: "Jasa pembuatan website",
    sub: "Syarat penggunaan situs dan ketentuan jasa: cakupan pekerjaan, pembayaran, revisi, dan keberlangsungan layanan.",
    url: "mainweb.id/syarat-layanan",
    screen: docScreen(),
  },
  {
    file: "kebijakan-privasi.png",
    eyebrow: "Dokumen resmi · mainweb.id",
    titleTop: "Kebijakan Privasi",
    titleBottom: "Situs mainweb.id",
    sub: "Cara situs ini menangani data pengunjung dan data klien: tanpa cookie pelacak, data klien hanya untuk pengerjaan proyek.",
    url: "mainweb.id/kebijakan-privasi",
    screen: docScreen(),
  },
];

for (const plan of plans) {
  const tier = tiers.find((t) => t.planIds.includes(plan.id));
  cards.push({
    file: `paket-${plan.id}.png`,
    eyebrow: `Paket · kategori ${tier ? tier.name : ""}`,
    titleTop: `Paket ${plan.name}`,
    titleBottom: plan.build,
    sub: plan.tagline,
    url: `mainweb.id/paket/${plan.id}`,
    screen: paketScreen(plan),
  });
}

for (const study of caseStudies) {
  cards.push({
    file: `studi-kasus-${study.slug}.png`,
    eyebrow: `Studi kasus · ${study.category}`,
    titleTop: "Studi kasus",
    titleBottom: study.client,
    sub: study.headline,
    url: `mainweb.id/studi-kasus/${study.slug}`,
    screen: studyScreen(study, planById.get(study.planId)),
  });
}

/* ------------------------------------------------------------------ *
 * Template
 * ------------------------------------------------------------------ */

const fonts = `
@font-face{font-family:"InterTight";src:${fontUrl("src/fonts/inter-tight-var.woff2")} format("woff2");font-weight:400 900;font-style:normal;font-display:block}
@font-face{font-family:"PlexSans";src:${fontUrl("src/fonts/plex-sans-400.woff2")} format("woff2");font-weight:400;font-style:normal;font-display:block}
@font-face{font-family:"PlexSans";src:${fontUrl("src/fonts/plex-sans-500.woff2")} format("woff2");font-weight:500;font-style:normal;font-display:block}
@font-face{font-family:"PlexSans";src:${fontUrl("src/fonts/plex-sans-600.woff2")} format("woff2");font-weight:600;font-style:normal;font-display:block}
@font-face{font-family:"PlexMono";src:${fontUrl("src/fonts/plex-mono-400.woff2")} format("woff2");font-weight:400;font-style:normal;font-display:block}
@font-face{font-family:"PlexMono";src:${fontUrl("src/fonts/plex-mono-500.woff2")} format("woff2");font-weight:500;font-style:normal;font-display:block}
`;

const css = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{font-family:"PlexSans",sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}

.card{position:relative;width:${W}px;height:${H}px;overflow:hidden;color:#0b1220;
  background:
    radial-gradient(760px 460px at 92% 4%, rgba(0,161,248,.26), transparent 68%),
    radial-gradient(620px 420px at 104% 92%, rgba(113,39,233,.24), transparent 66%),
    radial-gradient(560px 400px at -6% 104%, rgba(0,71,210,.14), transparent 68%),
    radial-gradient(rgba(11,18,32,.1) 1.3px, transparent 1.3px) 0 0/26px 26px,
    #fbfbfe;
}

.left{position:absolute;left:72px;top:50px;bottom:52px;width:548px;display:flex;flex-direction:column;
  justify-content:space-between}
/* Semua anak dikunci ukurannya: kalau ada yang boleh menyusut, pengukuran
   di skrip fit jadi salah dan teks malah meluber. */
.left>*{flex-shrink:0}
.brand{font-family:"InterTight",sans-serif;font-weight:800;font-size:35px;line-height:1;letter-spacing:-.025em}
.brand i{font-style:normal;color:#0047d2}
.eyebrow{font-family:"PlexMono",monospace;font-weight:500;font-size:15px;
  line-height:1.3;letter-spacing:.13em;text-transform:uppercase;color:#0047d2}
h1{margin-top:18px;font-family:"InterTight",sans-serif;font-weight:800;font-size:64px;
  line-height:1.05;letter-spacing:-.03em}
h1 .a,h1 .b{display:block}
h1 .b{color:#0047d2}
.sub{margin-top:26px;max-width:520px;font-size:25px;line-height:1.5;color:#4b5563}
.foot{font-family:"PlexMono",monospace;font-weight:500;font-size:16px;letter-spacing:.01em;color:#1f2937}

.mock{position:absolute;left:672px;top:70px;width:476px;height:490px;background:#fff;
  border:1px solid rgba(11,18,32,.08);border-radius:16px;overflow:hidden;
  box-shadow:0 26px 60px rgba(11,18,32,.16),0 3px 10px rgba(11,18,32,.06)}
.mbar{height:46px;background:#f4f5f8;border-bottom:1px solid #e7e9ef;display:flex;align-items:center;gap:7px;padding:0 14px}
.dot{width:10px;height:10px;border-radius:50%}
.dot.r{background:#ff5f57}.dot.y{background:#febc2e}.dot.g{background:#28c840}
.addr{flex:1;height:26px;margin-left:6px;border:1px solid #e7e9ef;border-radius:13px;background:#fff;
  display:flex;align-items:center;justify-content:center;font-family:"PlexMono",monospace;
  font-size:12px;color:#6b7280;white-space:nowrap;overflow:hidden}
.screen{height:444px}
.pad{padding:26px 28px;height:100%;display:flex;flex-direction:column;justify-content:center}
.pad.center{align-items:center;text-align:center}

.key{font-family:"PlexMono",monospace;font-weight:500;font-size:13px;letter-spacing:.1em;
  text-transform:uppercase;color:#8b94a8}
.val{font-family:"InterTight",sans-serif;font-weight:800;font-size:36px;line-height:1.15;
  letter-spacing:-.02em;color:#0b1220;margin-top:6px}
.val.sm{font-size:26px}
.hr{height:1px;background:#e7e9ef;margin:16px 0}
.note{margin-top:8px;font-size:16px;line-height:1.5;color:#4b5563;overflow:hidden}
.more{margin-top:16px;font-family:"PlexMono",monospace;font-size:14px;color:#6b7280}

.pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.pill{font-family:"PlexMono",monospace;font-size:13px;color:#1f2937;background:#eff4ff;
  border:1px solid rgba(0,71,210,.24);border-radius:6px;padding:6px 10px;white-space:nowrap}

.lgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.lcell{height:84px;background:#fff;border:1px solid rgba(11,18,32,.09);border-radius:10px;
  display:flex;align-items:center;justify-content:center;padding:14px}
.lcell img{max-width:100%;max-height:100%;object-fit:contain}

.rows{gap:0}
.row{padding:14px 0;border-bottom:1px solid #eef0f4;display:flex;align-items:baseline;
  justify-content:space-between;gap:14px}
.row:last-child{border-bottom:0}
.rn{font-weight:600;font-size:18px;color:#0b1220;white-space:nowrap}
.rc{font-family:"PlexMono",monospace;font-size:13px;color:#6b7280;text-align:right;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

.logo-box{width:100%;height:140px;background:#fff;border:1px solid rgba(11,18,32,.09);
  border-radius:12px;display:flex;align-items:center;justify-content:center;padding:26px}
.logo-box img{max-width:100%;max-height:100%;object-fit:contain}
.dom{margin-top:16px;font-family:"PlexMono",monospace;font-size:15px;color:#0047d2}
.pad.center .hr{width:100%;margin:22px 0 18px}
.pad.center .val{text-align:center}

.w-head{width:52%;height:26px;border-radius:6px;background:#0047d2;margin-bottom:26px}
.w-line{height:12px;border-radius:6px;background:#e7e9ef;margin-bottom:14px}
.w-block{height:74px;border-radius:10px;background:#eff4ff;border:1px solid rgba(0,71,210,.22);margin:12px 0 22px}
`;

/**
 * Susutkan judul lalu deskripsi sampai muat di kolom kiri, dan elemen bertanda
 * data-fit ("min,step") sampai tidak meluber dari kotaknya. Tanpa ini satu
 * judul panjang bisa menabrak URL di bawah.
 */
const fitScript = `
(function(){
  var left=document.querySelector('.left'),brand=document.querySelector('.brand'),
      mid=document.querySelector('.mid'),foot=document.querySelector('.foot'),
      h1=document.querySelector('h1'),sub=document.querySelector('.sub');
  // Sisa ruang setelah wordmark dan URL, dikurangi 40px jarak minimum.
  var avail=left.clientHeight-brand.offsetHeight-foot.offsetHeight-40;
  var s=parseFloat(getComputedStyle(h1).fontSize);
  while(s>34&&mid.offsetHeight>avail){s-=2;h1.style.fontSize=s+'px';}
  var t=parseFloat(getComputedStyle(sub).fontSize);
  while(t>16&&mid.offsetHeight>avail){t-=1;sub.style.fontSize=t+'px';}
  document.querySelectorAll('[data-fit]').forEach(function(el){
    var cfg=(el.dataset.fit||'15,4').split(','),
        min=parseFloat(cfg[0]),step=parseFloat(cfg[1]),
        size=parseFloat(getComputedStyle(el).fontSize);
    while(size>min&&el.scrollHeight>el.clientHeight+1){size-=step;el.style.fontSize=size+'px';}
  });

  // Laporan: dipakai generator untuk menandai kartu yang teksnya meluber.
  var bad=[];
  if(mid.offsetHeight>avail) bad.push('judul');
  document.querySelectorAll('[data-fit]').forEach(function(el){
    if(el.scrollHeight>el.clientHeight+1) bad.push('catatan');
  });
  var screen=document.querySelector('.screen');
  if(screen.scrollHeight>screen.clientHeight+1) bad.push('panel');
  var m=document.createElement('meta');
  m.name='fit';
  m.setAttribute('content', bad.length?bad.join(','):'ok');
  document.head.appendChild(m);
})();
`;

function html(c) {
  return `<!doctype html>
<html lang="id">
<head><meta charset="utf-8"><style>${fonts}${css}</style></head>
<body>
<div class="card">
  <div class="left">
    <div class="brand">mainweb<i>.id</i></div>
    <div class="mid">
      <div class="eyebrow">${c.eyebrow}</div>
      <h1><span class="a">${c.titleTop}</span>${c.titleBottom ? `<span class="b">${c.titleBottom}</span>` : ""}</h1>
      <p class="sub">${c.sub}</p>
    </div>
    <div class="foot">${c.url}</div>
  </div>
  <div class="mock">
    <div class="mbar">
      <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
      <div class="addr">${c.url}</div>
    </div>
    <div class="screen">${c.screen}</div>
  </div>
</div>
<script>${fitScript}</script>
</body>
</html>`;
}

/* ------------------------------------------------------------------ *
 * Render
 * ------------------------------------------------------------------ */

const BROWSERS = [
  process.env.OG_BROWSER,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

function findBrowser() {
  for (const b of BROWSERS) {
    try {
      execFileSync(b, ["--version"], { stdio: "ignore" });
      return b;
    } catch {
      /* coba kandidat berikutnya */
    }
  }
  throw new Error(
    "Chrome/Chromium tidak ditemukan. Set OG_BROWSER ke path binarinya, misal:\n" +
      "  OG_BROWSER=\"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome\" npm run og"
  );
}

/** Lebar-tinggi PNG dibaca langsung dari header IHDR, tanpa dependensi. */
function pngSize(buf) {
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

const browser = findBrowser();
console.log(`browser: ${browser}`);

mkdirSync(OUT, { recursive: true });
const work = join(tmpdir(), "mainweb-og");
rmSync(work, { recursive: true, force: true });
mkdirSync(work, { recursive: true });

let failed = 0;
const chromeArgs = [
  "--headless",
  "--disable-gpu",
  "--no-sandbox",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--force-color-profile=srgb",
  "--disable-lcd-text",
  "--window-size=" + W + "," + H,
  "--virtual-time-budget=8000",
];

for (const c of cards) {
  const page = join(work, c.file.replace(/\.png$/, ".html"));
  const out = join(OUT, c.file);
  writeFileSync(page, html(c));

  // Baca DOM setelah skrip fit jalan: 'ok' berarti tidak ada yang meluber.
  // maxBuffer dinaikkan karena DOM di sini membawa font & logo base64 (~1,3 MB).
  let fit = "tak terukur";
  try {
    const dom = execFileSync(browser, [...chromeArgs, "--dump-dom", "file://" + page], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 64 * 1024 * 1024,
    });
    fit = /<meta name="fit" content="([^"]*)"/.exec(dom)?.[1] ?? "tak terukur";
  } catch (e) {
    console.error(String(e.message || e).slice(0, 300));
    if (e.stderr) console.error(String(e.stderr).slice(0, 400));
    process.exit(1);
  }

  try {
    execFileSync(browser, [...chromeArgs, "--screenshot=" + out, "file://" + page], {
      stdio: ["ignore", "ignore", "pipe"],
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch (e) {
    // Chrome menulis pesan sokong (display, task policy) ke stderr; tampilkan
    // hanya kalau render-nya benar-benar gagal.
    console.error(String(e.message || e).slice(0, 300));
    if (e.stderr) console.error(String(e.stderr).slice(0, 400));
    process.exit(1);
  }

  const buf = readFileSync(out);
  const { w, h } = pngSize(buf);
  const ok = w === W && h === H && fit === "ok";
  if (!ok) failed++;
  console.log(
    `${ok ? "ok  " : "GAGAL"}  ${c.file.padEnd(34)} ${w}x${h}  ` +
      `${String(Math.round(buf.length / 1024)).padStart(3)} KB  fit=${fit}`
  );
}

console.log(`\n${cards.length} gambar -> public/og/  (gagal: ${failed})`);
process.exit(failed ? 1 : 0);
