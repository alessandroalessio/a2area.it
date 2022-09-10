/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.a2area.it']
  },
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
  reactStrictMode: true,
}

module.exports = nextConfig
