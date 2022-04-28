/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // providing the locales supported by your application
    locales: ["en", "fr"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en"
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://slack.com" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key:"Access-Control-Allow-Headers",  value: "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"},

        ]
      },
    ]
  },

  
}

module.exports = nextConfig
