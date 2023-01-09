/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   pageExtensions: ['tsx', 'ts'],
   experimental: {
      appDir: true,
      transpilePackages: [
         // '@fenxing/utils',
      ],
   },
}

module.exports = nextConfig
