import Gallery from '@/components/Gallery';
import SEO from '../components/SEO';
import PreviousProjects from '@/components/Projects';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className=" py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side - Text */}
          <div className="md:w-1/2 text-left md:pr-10 space-y-4">
            <h1 className="text-4xl font-bold text-black leading-tight animate-fadeIn">
              Welcome to Swastika Fabrication
            </h1>
            <p className="text-lg text-gray-700">
              At Swastika Fabrication, we specialize in offering high-quality fabrication services
              tailored to meet the unique needs of each client. With a commitment to precision and
              excellence, we ensure that every project exceeds expectations.
            </p>
            <p className="text-lg text-gray-700">
              Whether it’s custom parts, large-scale industrial projects, or repair services, our
              skilled team uses the latest technology to deliver exceptional results with a focus
              on quality and efficiency.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mt-6"
            >
              Get a Quote
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://www.venwiz.com/wp-content/uploads/2024/07/Hero-Image.jpg"
              alt="Fabrication Services"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <Gallery/>
        <PreviousProjects/>
      </div>
    </>
  );
}
