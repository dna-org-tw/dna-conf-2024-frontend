/** @type {import('next').NextConfig} */

const nextConfig = {
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
