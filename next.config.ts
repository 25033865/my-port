/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow local network hosts used during phone/device testing.
  allowedDevOrigins: ["192.168.0.146", "192.168.110.149"],
  turbopack: {
    root: __dirname, // ✅ force correct project root
  },
};

module.exports = nextConfig;