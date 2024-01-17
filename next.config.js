/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ccodscp2xrh7gkay.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
