/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ajusta esto al nombre de tu repositorio
  basePath: process.env.NODE_ENV === 'production' ? '/nombre-de-tu-repositorio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nombre-de-tu-repositorio/' : '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Esto es importante para GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
