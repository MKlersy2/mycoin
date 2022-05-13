/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    i18n: {
      // providing the locales supported by your application
      locales: ["en", "fr"],
      //  default locale used when the non-locale paths are visited
      defaultLocale: "en"
    },
    env: {
      EXTENSION: process.env.NODE_ENV === 'production' ? 'https' : 'http',
      HOSTNAME: process.env.NODE_ENV === 'production' ? 'api.cloverlist' : 'localhost',
      PORT: process.env.NODE_ENV === 'production' ? '' : '3001',
      BACKEND: process.env.NODE_ENV === 'production' ? 'https://api.cloverlist.com/' : 'https://api.cloverlist.com/',
    },
  }
  
  module.exports = nextConfig