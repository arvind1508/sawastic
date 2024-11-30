import Image from 'next/image';

export default function Gallery() {
  const images = [
    'https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732975680/swastik/jfkxxzgb95owrs5zrdwy.jpg',
    'https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732975682/swastik/datjfqsf8qt8lbliouso.jpg',
    'https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732975683/swastik/qf8ccxk0w08upfrejkil.jpg',
    'https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732975689/swastik/yjeeirgx7vrbvui1rfyz.jpg',
    'https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732975690/swastik/gtr4rhofea3utqupdar3.jpg',
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Our Fabrication Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
