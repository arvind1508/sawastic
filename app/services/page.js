export default function Services() {
    const services = [
      {
        title: "Catch Column",
        description:
          "Expert design, fabrication, and installation of catch columns that provide reliable support for structural projects.",
        image: "https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732976474/swastik/x6tnvq1nrhgmijplgbcp.png",
      },
      {
        title: "Fabrication & Erection",
        description:
          "Comprehensive fabrication and erection services, ensuring stability and precision for industrial structures.",
        image: "https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732976754/swastik/vtycqlf7xqtwsgud2o81.jpg",
      },
      {
        title: "Sheet Roofing",
        description:
          "Durable and weather-resistant sheet roofing solutions for both commercial and residential projects.",
        image: "https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732975690/swastik/xyozk3j9ulqzlyuzl3io.jpg",
      },
      {
        title: "Rolling Mill",
        description:
          "High-quality fabrication and installation of rolling mill systems tailored to your manufacturing needs.",
        image: "https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732976472/swastik/ggu0padypteqb5pxhigh.jpg",
      },
      {
        title: "Bhatthi (Furnace)",
        description:
          "Design, construction, and installation of efficient furnaces for various industrial applications.",
        image: "https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732976473/swastik/y3hmdxhehg8pvh2r98n0.jpg",
      },
    ];
  
    return (
      <section id="services" className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Our Services</h2>
          <p className="text-lg text-gray-700 mb-12">
            Swastik Fabrication offers a wide range of industrial and construction services, 
            ensuring quality and precision at every step. Here’s what we specialize in:
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  