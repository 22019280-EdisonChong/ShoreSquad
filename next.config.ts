import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: isProd ? '/ShoreSquad' : '',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
