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
}

module.exports = nextConfig
