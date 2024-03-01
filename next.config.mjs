/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tzsldaeqbxedakdopfvn.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
