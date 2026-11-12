import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The old site's header linked to a résumé filename that never existed.
      { source: "/Harshdeep-Singh-Resume.pdf", destination: "/Harshdeep_Singh_Resume.pdf", permanent: true },
      { source: "/resume", destination: "/Harshdeep_Singh_Resume.pdf", permanent: false },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
