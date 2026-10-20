import type { NextConfig } from "next";
import { SITE } from "./lib/site";

const nextConfig: NextConfig = {
  // The project's Vercel alias serves the same pages; send it to the real domain so Google indexes one copy.
  async redirects() {
    return [{ source: "/:path*", has: [{ type: "host", value: "fake-fame-ebon.vercel.app" }], destination: `${SITE}/:path*`, permanent: true }];
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
      ],
    }];
  },
};

export default nextConfig;
