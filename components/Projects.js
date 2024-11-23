import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Steel Structure Fabrication",
    description:
      "Completed a large-scale steel structure fabrication project for an industrial plant in Ahmedabad.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Rolling Mill Installation",
    description:
      "Delivered a high-precision rolling mill project for a leading manufacturing client.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Sheet Roofing",
    description:
      "Successfully executed roofing solutions for a commercial warehouse.",
    image: "https://via.placeholder.com/300x200",
  },
];

export default function PreviousProjects() {
  return (
    <section className=" py-16 px-6">
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
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
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
