import { notFound } from 'next/navigation';
import Image from 'next/image';

// Static list of projects for demonstration
const projects = [
  {
    id: 1,
    title: "Delta Steel Re-Rolling Mills: Premier Solutions for Steel Fabrication",
    description:
      "Completed a large-scale steel structure fabrication project for an industrial plant in Ahmedabad.",
    image: "/gallery/image7.webp",
    details: `At Delta Steel Re-Rolling Mills, we specialize in providing top-tier steel fabrication solutions for industries across various sectors. Our team is equipped with cutting-edge technology to deliver high-quality products that meet precise specifications. From raw steel processing to the final re-rolled product, we ensure every step in the manufacturing process adheres to rigorous industry standards. We are proud to have completed a large-scale steel structure fabrication project for an industrial plant in Ahmedabad. The project involved the fabrication and installation of complex steel structures, including beams, columns, and support frames, all tailored to the client’s exact requirements. Throughout the project, we maintained a commitment to quality, safety, and efficiency, ensuring timely delivery and minimal disruption to ongoing operations. Our expertise in steel fabrication and re-rolling, combined with our dedication to excellence, makes us a trusted partner in the steel industry.`,
  },
  {
    id: 2,
    title: "Rolling Mill Installation",
    description:
      "Delivered a high-precision rolling mill project for a leading manufacturing client.",
    image: "/gallery/25808.jpg",
    details: "The project involved the installation of state-of-the-art rolling mill machinery and provided high-level precision for steel production. The machinery was integrated into the client's existing manufacturing process, ensuring smooth and efficient operation from day one.",
  },
  {
    id: 3,
    title: "Sheet Roofing",
    description:
      "Successfully executed roofing solutions for a commercial warehouse.",
    image: "/gallery/image4.jpeg",
    details: "This project included the installation of durable sheet roofing designed to withstand extreme weather conditions. We focused on ensuring that the roofing material was both cost-effective and highly durable, providing long-term protection for the warehouse.",
  },
];

// Generate static params to pre-render dynamic pages
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(), // Ensure the ID is a string
  }));
}

export default function ProjectDetail({ params }) {
  const { id } = params;

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound(); // Return a 404 if the project is not found
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
          {project.title}
        </h2>

        {/* Project Overview */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Project Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative h-80 w-full">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h3>
            <p className="text-lg text-gray-700">{project.details}</p>

            {/* Call to Action */}
            <a href="/contact">
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
                Get in Touch
              </button>
            </a>
          </div>
        </div>

        {/* Additional Project Information */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Project Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example Section for More Details */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project Timeline</h4>
              <p className="text-gray-700">
                This project was completed within 6 months, from design to final installation. We ensured timely delivery through effective project management and clear communication with the client.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Safety & Quality Assurance</h4>
              <p className="text-gray-700">
                All fabrication and installation processes followed stringent safety protocols, and quality checks were conducted at every stage of the project to ensure compliance with industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
