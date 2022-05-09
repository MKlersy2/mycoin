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
    HOSTNAME: process.env.NODE_ENV === 'production' ? 'mycoin-liart.vercel.app' : 'localhost',
    PORT: process.env.NODE_ENV === 'production' ? '' : '3001',
    BACKEND: process.env.NODE_ENV === 'production' ? 'https://myserver.com/' : 'http://localhost:8888/',
    SLACK_BOT_TOKEN: 'xoxb-3366149681558-3456956778162-hNYojMFlj1t3F8lyYtzuYvy3',
  },
}

module.exports = nextConfig
