/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/retr0lbb.png"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**"
      }
    ]
  }
};

export default nextConfig;
