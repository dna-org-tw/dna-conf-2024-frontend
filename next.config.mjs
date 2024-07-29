/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "conf.dna.org.tw",
      },
      {
        hostname: "drive.dna.org.tw",
      },
    ],
  },
};

export default nextConfig;
