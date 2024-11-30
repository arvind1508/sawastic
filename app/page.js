import Gallery from '@/components/Gallery';
import SEO from '../components/SEO';
import PreviousProjects from '@/components/Projects';
import Link from 'next/link';
import OfferTypes from '@/components/OfferTypes';

export default function Home() {
  return (
    <>
      <div className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side - Text */}
          <div className="md:w-1/2 text-left md:pr-10 space-y-4">
            <h1 className="text-4xl font-bold text-black leading-tight animate-fadeIn">
              Welcome to Swastik Fabrication
            </h1>
            <p className="text-lg text-gray-700">
              At Swastik Fabrication, we specialize in providing high-quality, precision-driven steel fabrication services. Our team is dedicated to delivering custom solutions tailored to meet the unique requirements of every project, whether it's for commercial, industrial, or personal needs. We work with a variety of premium materials, including steel, aluminum, stainless steel, and custom alloys, to create durable and reliable products.
            </p>
            <p className="text-lg text-gray-700">
              With years of experience and advanced technology, we excel in custom fabrication, welding, repair services, and large-scale industrial projects. Our commitment to excellence ensures that every project is completed with the highest standards of craftsmanship and attention to detail.
              Explore our diverse services and discover how we can bring your vision to life with precision, quality, and reliability.
            </p>
            <p className="text-lg text-gray-700 font-semibold mt-4">
              <span className="text-blue-600">Need Assistance? </span>Call us now at{' '}
              <a href="tel:+919824896162" className="text-blue-600 hover:underline font-semibold">
                +91 9824896162
              </a>{' '}
              <span className="text-lg text-gray-700">or</span>{' '}
              <a href="tel:+916354999576" className="text-blue-600 hover:underline font-semibold">
                +91 6354999576
              </a>
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
              src="/gallery/Hero.webp"
              alt="Fabrication Services"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <OfferTypes />
        <Gallery />
        <PreviousProjects />
      </div>
    </>
  );
}
