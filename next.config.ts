import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverExternalPackages: ["nodemailer"],
  },
};

export default nextConfig;
