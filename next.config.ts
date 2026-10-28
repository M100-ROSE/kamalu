import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que o Next infira a raiz a partir de lockfiles fora do projeto.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
