import nextMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = nextMDX({ extension: /\.(md|mdx)$/ });

const nextConfig: NextConfig = {
  output: "export",                 // 关键：静态站
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
