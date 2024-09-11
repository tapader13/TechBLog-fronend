/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc', // This is the external domain for your image
        pathname: '/**', // Allow all paths from the domain
      },
    ],
  },
};

export default nextConfig;
