'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // For detecting the current route
import { useState } from "react"; // For managing mobile menu state

export default function Navbar() {
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile drawer menu

  const isActive = (path) => pathname === path;

  // Toggle drawer menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="https://res.cloudinary.com/dlqxpkg7h/image/upload/v1732976900/swastik/wkqvyx2aynsjzketfnph.jpg"
            alt="Swastik Fabrication Logo"
            width={100}
            height={100}
            className="rounded"
          />
          <span className="text-xl font-bold group-hover:text-teal-400 transition">
            Swastik Fabrication
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
          onClick={toggleMenu} // Toggle mobile drawer on click
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

      {/* Drawer Menu - Sliding Effect on Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu} // Close drawer when clicking outside
      ></div>

      <div
        className={`fixed top-0 right-0 bg-gray-900 text-white w-64 h-full transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links in Drawer */}
        <div className="space-y-6 px-4 py-8">
          {[
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-lg ${isActive(link.href) ? "text-teal-400" : "text-white"}`}
              onClick={toggleMenu} // Close menu when link is clicked
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
