import Image from 'next/image';

export default function Gallery() {
  const images = [
    '/gallery/image1.jpeg',
    '/gallery/image2.jpeg',
    '/gallery/image3.jpeg',
    '/gallery/image4.jpeg',
    '/gallery/image5.jpeg',
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
