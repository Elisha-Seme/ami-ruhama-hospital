/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local assets only for now; add remote patterns here when a CMS/CDN is introduced.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
