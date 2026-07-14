/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Agrega aquí los dominios remotos si las fotos se sirven desde un CMS o CDN externo
    remotePatterns: [],
  },
};

module.exports = nextConfig;
