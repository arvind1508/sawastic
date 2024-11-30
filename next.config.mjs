/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
        domains: ['via.placeholder.com','res.cloudinary.com'], // Add the domain of the external image here
      },
      basePath: '/sawastic', // Replace with your GitHub repository name

};

export default nextConfig;
