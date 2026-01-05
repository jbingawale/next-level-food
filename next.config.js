/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.AWS_S3_BUCKET_NAME_WITH_SERVER_REGION,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
