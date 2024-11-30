/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
        domains: ['via.placeholder.com','res.cloudinary.com'], // Add the domain of the external image here
      },
};

export default nextConfig;
