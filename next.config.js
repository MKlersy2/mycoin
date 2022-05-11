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
      EXTENSION: process.env.NODE_ENV === 'production' ? 'http' : 'http',
      HOSTNAME: process.env.NODE_ENV === 'production' ? 'ec2-35-180-111-196.eu-west-3.compute.amazonaws.com' : 'localhost',
      PORT: process.env.NODE_ENV === 'production' ? '' : '3001',
      BACKEND: process.env.NODE_ENV === 'production' ? 'http://ec2-35-180-111-196.eu-west-3.compute.amazonaws.com/' : 'http://localhost:8888/',
    },
  }
  
  module.exports = nextConfig