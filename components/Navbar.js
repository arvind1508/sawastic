'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // For detecting the current route

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="https://res.cloudinary.com/dlqxpkg7h/image/upload/c_thumb,w_200,g_face/v1732373060/ayrzw5swosfthanstvg6.png"
            alt="Swastika Fabrication Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xl font-bold group-hover:text-teal-400 transition">
            Swastika Fabrication
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {[
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative hover:text-teal-400 transition ${
                isActive(link.href) ? "text-teal-400" : ""
              }`}
            >
              {link.label}
              {/* Animated Underline */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-teal-400 transition-transform duration-300 ease-in-out ${
                  isActive(link.href) ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="block md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
