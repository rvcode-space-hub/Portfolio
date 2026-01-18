'use client';

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-[#0B0F19]/90 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-60 rounded-full"></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="60"
            viewBox="0 0 256 256"
            className="fill-white relative z-10"
          >
            <path d="M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90" />
            <path d="M145.3 145.1l36-31.6c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7H7.2L29.4 38.6h111.4c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90z" />
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-semibold text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white z-20 hover:text-blue-500 transition"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0B0F19]
        transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col text-gray-300 font-semibold text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-4 hover:bg-gray-800 hover:text-blue-500 transition border-b border-gray-800"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
