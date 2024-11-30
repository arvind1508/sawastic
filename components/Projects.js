import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Delta Steel Re-Rolling Mills: Premier Solutions for Steel Fabrication",
    description:
      "Completed a large-scale steel structure fabrication project for an industrial plant in Ahmedabad.",
    image: "/gallery/image7.webp",
  },
  {
    id: 2,
    title: "Rolling Mill Installation",
    description:
      "Delivered a high-precision rolling mill project for a leading manufacturing client.",
    image: "/gallery/25808.jpg",
  },
  {
    id: 3,
    title: "Sheet Roofing",
    description:
      "Successfully executed roofing solutions for a commercial warehouse.",
    image: "/gallery/image4.jpeg",
  },
];

export default function PreviousProjects() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Previous Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link href={`/projects/${project.id}`} className="hover:text-blue-600">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </Link>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  <Link href={`/projects/${project.id}`} className="hover:text-blue-600">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
