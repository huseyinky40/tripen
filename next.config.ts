import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Birden fazla lockfile bulunan ortamlarda doğru proje kökünü sabitler.
  turbopack: {
    root: path.resolve("."),
  },
};

export default nextConfig;
