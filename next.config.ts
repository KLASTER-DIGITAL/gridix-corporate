import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/cases',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
