/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://sa6588266:rFRjlfI3bCPqFt6s@samshad-cluster.piewjdm.mongodb.net/?retryWrites=true&w=majority",
  },
  images: {
    disableStaticImages: true,
    domains: ["img1.10bestmedia.com"],
  },
};

export default nextConfig;
