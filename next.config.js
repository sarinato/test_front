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