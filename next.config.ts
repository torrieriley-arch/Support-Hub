import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Support-Hub",
  images: { unoptimized: true },
};

export default nextConfig;
