import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  outputFileTracingRoot: path.resolve(process.cwd()),
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
