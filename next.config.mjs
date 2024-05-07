/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "logos-world.net",
        "avatars.githubusercontent.com",
        "lh3.googleusercontent.com",
        "piyush-twitter-new.s3.ap-south-1.amazonaws.com",
        "i.imgur.com",
      ],
    },
  };

export default nextConfig;
