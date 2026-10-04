import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/` so any static host (Cloudflare Pages) can serve it.
  output: "export",
  // Image resizing needs a server; photos in public/ are pre-compressed instead.
  images: { unoptimized: true },
};

export default nextConfig;
