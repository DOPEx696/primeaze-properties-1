/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: '*.insforge.app',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Ensure ESLint doesn't fail the build on warnings
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Compress responses
  compress: true,
  // Power by header removed for security
  poweredByHeader: false,
};

export default nextConfig;
