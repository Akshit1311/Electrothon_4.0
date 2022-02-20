/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ["cdn.iconscout.com", "ipfs.infura.io"],
  },
};

module.exports = nextConfig;
