/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {},
  images: {
    domains: ['picsum.photos'],
    deviceSizes: [640, 1080, 1920, 3840],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/my-account/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/my-account/**',
      },
    ],
  },
};

module.exports = nextConfig;
