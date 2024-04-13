/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://sa6588266:rFRjlfI3bCPqFt6s@samshad-cluster.piewjdm.mongodb.net/?retryWrites=true&w=majority",
  },
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img1.10bestmedia.com',
        pathname: '**',
      },
      {
        protocol:'https',
        hostname:'images.oyoroomscdn.com'
      },
      {
        protocol:'https',
        hostname:'www.freeiconspng.com'
      },   {
        protocol:'https',
        hostname:'w7.pngwing.com'
      },
      {
        protocol:"https",
        hostname:'e7.pngegg.com'
      }
    ],
  },
};

export default nextConfig;
