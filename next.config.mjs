/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
      {
        hostname: "uoaffijfmvqkaxipkwem.supabase.co",
      },
    ],
  },
};

export default nextConfig;
