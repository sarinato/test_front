/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    
  },

  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  
  images: {
    domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/HVjKLSq/image-Feed.png',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/cKBKCfP/mall.png',
      },

    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig



