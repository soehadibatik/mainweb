<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Konvensi proyek mainweb.id

## Jangan pakai nomor indeks di tampilan (01, 1, dsb.)

Jangan pernah menampilkan nomor urut/indeks seperti `01`, `1`, `No. 1` di UI —
baik di homepage, kartu, daftar paket, kelompok, maupun label section
(contoh yang dilarang: "Tingkat 01–02", "Kelompok 01", nomor kecil di pojok kartu).

- Nomor tidak membantu pembeli memutuskan apa pun; yang dibutuhkan adalah
  nama, harga, dan bukti — bukan urutan.
- Pembeda antar item cukup dengan nama, garis pemisah, atau label bermakna
  (mis. band "Mulai / Tumbuh / Skala").
- Pengecualian: data terstruktur untuk mesin (JSON-LD `position`, sitemap)
  dan urutan langkah proses yang benar-benar berurutan (langkah 1 → 2 → 3).
  Itu bukan dekorasi dan tetap boleh.

## Mobile adalah pasar utama, desktop kedua

Mayoritas pengunjung (pemilik UMKM) membuka situs dari WhatsApp di HP.
Setiap section — terutama hero — harus menjual sendirian di layar ≤ 412px:

- CTA utama harus terlihat tanpa scroll, berukuran nyaman disentuh (min. 44px),
  dan menyebut kanalnya (WhatsApp).
- Bukti (angka klien, harga mulai) harus muncul sebelum elemen yang butuh
  interaksi panjang (demo, animasi).
- Sembunyikan chrome dekoratif di mobile (toolbar, handle, caption) —
  jangan dipindahkan, cukup `hidden` di breakpoint kecil.

## Filter antislop

Untuk pekerjaan UI, copy, mobile layout, atau komentar kode, baca dulu
`antislop.md` (core) lalu skill-nya sesuai tugas:
- UI/visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People (kontras, keyboard, states): `skills/antislop-human/SKILL.md`
- Mobile/responsive: `skills/antislop-layoutmobile/SKILL.md`
- Komentar kode: `skills/antislop-code/SKILL.md`

Aturan cepat yang paling sering dilanggar di project ini:
- **Tanpa em dash (—)** di semua copy UI. Pakai koma, titik, atau titik dua.
- **Tanpa loop animasi abadi** (pulse, float, sheen, marquee). Animasi hanya
  untuk pembuka halaman atau respons aksi user, dan hormati
  `prefers-reduced-motion`.
- **Tanpa angka/klaim tanpa sumber.** Angka klien harus bisa dihitung dari
  data di repo (`clients.ts`, `plans.ts`); metrik hasil klien tidak boleh
  dikarang.
- **Arrow (→ ↗) bukan default tiap tombol.** Pakai hanya saat memberi arah
  yang benar-benar berguna.

Sebelum mulai kerja UI, tanyakan ke user: antislop dijalankan *saat mengerjakan*
atau *audit setelah selesai*.

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People: `skills/antislop-human/SKILL.md`
- Mobile / responsive: `skills/antislop-layoutmobile/SKILL.md`
- Code comments: `skills/antislop-code/SKILL.md`
Before starting, ask the user when antislop applies: during the work, or after it is done.
To update antislop later: download `antislop.md` again, or run `npx antislop-ai --update` if it was installed as skill folders.
<!-- antislop:end -->
