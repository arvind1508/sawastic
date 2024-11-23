export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Swastika Fabrication</h3>
            <p>© 2024 Swastika Fabrication. All rights reserved.</p>
            <p className="mt-2">Precision. Quality. Excellence.</p>
          </div>
  
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
  
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>Address: A-20 Panchgini greens Giriraj flat , moraiya, Ta.Sanad, dist. Ahmedabad</p>
            <p>Email: <a href="mailto:info@swastikafabrication.com" className="hover:underline">info@swastikafabrication.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="hover:underline">+91 1234567890</a></p>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-center">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    );
  }
  