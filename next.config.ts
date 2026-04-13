/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow local network hosts used during phone/device testing.
  allowedDevOrigins: ["192.168.0.146", "192.168.110.149"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/mudau-1d1cb.firebasestorage.app/o/**",
      },
    ],
  },
  turbopack: {
    root: __dirname, // ✅ force correct project root
    
  },
};

module.exports = nextConfig;