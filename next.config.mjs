/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像の外部ドメイン許可設定 microCMSの画像を許可
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

export default nextConfig;
