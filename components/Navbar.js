import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="https://res.cloudinary.com/dlqxpkg7h/image/upload/c_thumb,w_200,g_face/v1732373060/ayrzw5swosfthanstvg6.png"
            alt="Swastika Fabrication Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-lg font-bold">Swastika Fabrication</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
