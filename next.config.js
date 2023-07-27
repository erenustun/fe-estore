/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'localhost'
      },
      {
        hostname: 'i.pravatar.cc'
      }
    ]
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })

    return config
  }
}

module.exports = nextConfig
