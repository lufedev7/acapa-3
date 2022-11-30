/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.futbolred.com",
      "i.ytimg.com",
      "img.a.transfermarkt.technology",
      "docplayer.es",
      "e7.pngegg.com",
      "img.nauticexpo.es",
      "parasenderismo.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig
