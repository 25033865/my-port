/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.110.149"],
  turbopack: {
    root: __dirname, // ✅ force correct project root
  },
};

module.exports = nextConfig;