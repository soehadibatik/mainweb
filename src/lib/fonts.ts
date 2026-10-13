import localFont from "next/font/local";

export const interTight = localFont({
  src: [
    { path: "../fonts/inter-tight-var.woff2", weight: "400 900", style: "normal" },
  ],
  variable: "--font-inter-tight",
  display: "swap",
});

export const plexSans = localFont({
  src: [
    { path: "../fonts/plex-sans-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/plex-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/plex-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/plex-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
});

export const plexMono = localFont({
  src: [
    { path: "../fonts/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/plex-mono-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = `${interTight.variable} ${plexSans.variable} ${plexMono.variable}`;
