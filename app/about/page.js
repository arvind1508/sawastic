import SEO from '../../components/SEO';

export default function About() {
  return (
    <>

      <div className="p-10">
        <h1 className="text-3xl font-bold text-primary">About Us</h1>
        
        <p className="mt-4 text-lg text-gray-700">
          At Swastik Fabrication, we bring over 10 years of experience in providing top-notch fabrication services across Ahmedabad.
          Our expertise and commitment to quality have made us a trusted name in the industry. We specialize in a wide range of services
          aimed at meeting the diverse needs of our clients.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary mt-8">Our Services</h2>
        
        <ul className="mt-4 space-y-3">
          <li className="text-lg text-gray-700">
            <strong>Catch Column:</strong> We specialize in the design, fabrication, and installation of catch columns that are essential for the support of various structures.
          </li>
          <li className="text-lg text-gray-700">
            <strong>Fabrication & Erection:</strong> Our skilled team provides fabrication and erection services for industrial structures, ensuring stability and precision in every project.
          </li>
          <li className="text-lg text-gray-700">
            <strong>Sheet Roofing:</strong> We offer reliable sheet roofing solutions for commercial and residential projects, ensuring long-lasting and weather-resistant roofing.
          </li>
          <li className="text-lg text-gray-700">
            <strong>Rolling Mill:</strong> We are experts in the fabrication and installation of rolling mill systems, providing efficient solutions for the manufacturing industry.
          </li>
          <li className="text-lg text-gray-700">
            <strong>Bhatthi (Furnace):</strong> Our Bhatthi (furnace) services include the design, construction, and installation of high-quality furnaces for various industrial applications.
          </li>
        </ul>

        <p className="mt-6 text-lg text-gray-700">
          We are committed to delivering the highest quality of service and excellence in all of our projects. Whether it’s for industrial applications or specialized construction needs, Swastik Fabrication is your go-to partner for reliable and efficient fabrication services.
        </p>
      </div>
    </>
  );
}
