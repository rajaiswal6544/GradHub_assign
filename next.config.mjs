/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        },
        {
          protocol: "https",
          hostname: "s3-alpha-sig.figma.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  