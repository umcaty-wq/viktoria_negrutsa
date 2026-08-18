/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/viktoria_negrutsa",
  assetPrefix: "/viktoria_negrutsa/",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
