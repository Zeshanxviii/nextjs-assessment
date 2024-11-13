"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" text-white md:w-1200 py-8 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/"
            className="flex items-center space-x-2">
              <span className="text-green-500">VYB</span> <span>STORE</span>
          </Link>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center flex-1 mx-4">
          <input
            type="text"
            placeholder="Search Creator/Product"
            className="px-4 py-2 w-full max-w-sm rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#fav-creators" className="hover:text-green-500">Fav Creators</Link>
          <Link href="#merchandise" className="hover:text-green-500">Merchandise</Link>
          <Link href="#brand" className="hover:text-green-500">Brand</Link>
          <Link href="#digital" className="hover:text-green-500">Digital</Link>
        </nav>

        {/* Profile Icon */}
        <div className="hidden md:flex items-center">
          <FaUserCircle size={24} className="text-white" />
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4">
          <Link href="#fav-creators" className="block py-2 px-4 hover:bg-gray-800">Fav Creators
          </Link>
          <Link href="#merchandise" className="block py-2 px-4 hover:bg-gray-800">Merchandise
          </Link>
          <Link href="#brand"
            className="block py-2 px-4 hover:bg-gray-800">Brand
          </Link>
          <Link href="#digital" className="block py-2 px-4 hover:bg-gray-800">Digital
          </Link>
        </nav>
      )}
    </header>
  );
}
