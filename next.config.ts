import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 1080, 1200, 1470, 1920, 2560],
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 512],
    // Allow-list for the `quality` prop. Next 16 silently drops values
    // not in this list, which was downgrading our `quality={100}` props
    // to the default 75 — soft rendering on 2x Retina displays.
    qualities: [78, 88, 92, 100],
    minimumCacheTTL: 31536000, // Cache for 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
