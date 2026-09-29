import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: hasil build adalah folder out/ berisi HTML/CSS/JS statis,
  // bisa di-deploy ke shared hosting (Domainesia) tanpa Node.js di server.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
