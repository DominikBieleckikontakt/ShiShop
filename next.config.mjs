/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: false,
  images: {
    domains: ["tzsldaeqbxedakdopfvn.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tzsldaeqbxedakdopfvn.supabase.co",
        port: "",
        pathname: "/folder/**",
      },
    ],
  },
};

export default nextConfig;
