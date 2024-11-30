import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 text-center md:text-left">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Swastik Fabrication</h3>
          <p>© 2024 Swastik Fabrication. All rights reserved.</p>
          <p className="mt-2">Precision. Quality. Excellence.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p>Address: A-20 Panchgini greens Giriraj flat , moraiya, Ta.Sanad, dist. Ahmedabad</p>
          <p>Email: <a href="mailto:info@Swastikfabrication.com" className="hover:underline">info@Swastikfabrication.com</a></p>
          <p>Phone:
            {" "}<a href="tel:+919824896162" className="hover:underline">+91 9824896162</a>
            <span className="mx-2">|</span>
            <a href="tel:+919510020421" className="hover:underline">+91 9510020421</a>
            <span className="mx-2">|</span>
            <a href="tel:+916354999576" className="hover:underline">+91 6354999576</a>
          </p>   </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-center">
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a> */}
          <a href="https://www.instagram.com/swastikfabricatorsconstruction/?igsh=YTd4c2IxaW83MDR1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
