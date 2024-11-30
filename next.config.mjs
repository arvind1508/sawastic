/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com','res.cloudinary.com'], // Add the domain of the external image here
      },
      basePath: process.env.NODE_ENV === 'production' ? '/sawastic' : '',
};

export default nextConfig;
