/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "conf.dna.org.tw",
      },
    ],
  },
};

export default nextConfig;
