/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ["res.cloudinary.com"], // 👈 Cloudinary allow
  },
};

export default nextConfig;
