/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://sa6588266:rFRjlfI3bCPqFt6s@samshad-cluster.piewjdm.mongodb.net/?retryWrites=true&w=majority",
    BASE_URL: "http://localhost:3000",
    SECRET_KEY: "fdllllll3fdfhoo3o8r3hildhlhoiu8u300ethg",
  },
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.10bestmedia.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.oyoroomscdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.freeiconspng.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
