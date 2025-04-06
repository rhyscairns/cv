/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "degrees-rhys-cairns.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "experience-rhys-cairns.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "aboutme-rhys-cairns.s3.us-east-1.amazonaws.com",
      },
    ],
  },

  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=86400, stale-while-revalidate'
          }
        ],
      }
    ];
  }
};

export default nextConfig;
