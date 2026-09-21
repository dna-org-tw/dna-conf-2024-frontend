/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/2024",
  images: {
    remotePatterns: [
      {
        hostname: "www.taiwandigitalfest.com",
      },
      {
        hostname: "drive.dna.org.tw",
      },
    ],
  },
};

export default nextConfig;
