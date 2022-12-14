/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;

module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
}