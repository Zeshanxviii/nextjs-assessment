"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {

    const [current , setCurrent] = useState("")

    // State to manage dropdown visibility
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown visibility on click
    const toggleDropdown = () => {
      setDropdownVisible((prev) => !prev);
    };
      // Create a reference for the dropdown menu

  

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  

    return (
      <header className="px-4 text-white md:w-1200 ">
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
              value={current}
              onChange={(e)=>setCurrent(e.target.value)}
              className="px-4 py-2 w-full max-w-sm rounded-full bg-white text-black placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex  space-x-16 mx-8">
            <Link href="#fav-creators" className="hover:text-green-500">Fav Creators</Link>
            <Link href="#merchandise" className="hover:text-green-500">Merchandise</Link>
            <Link href="#brand" className="hover:text-green-500">Brand</Link>
            <Link href="#digital" className="hover:text-green-500">Digital</Link>
          </nav>
          {/* Profile Icon */}
          <div className="relative">
            {/* Icon container */}
            <div
              className="hidden md:flex items-center ml-4 space-x-4 bg-white w-[100px] h-[40px] rounded-3xl p-4 cursor-pointer"
              onClick={toggleDropdown}  // Toggling the dropdown on click
            >
              <FaUserCircle size={20} className="text-black text-center" />
              <RiArrowDropDownLine size={20} className="text-black" />
            </div>

            {/* Dropdown menu, conditionally rendered */}
            {isDropdownVisible && (
              <div className="absolute top-full mt-2 right-0 bg-black rounded-2xl shadow-lg w-40 p-2">
                <ul className=''>
                  <li className="px-4 py-4 cursor-pointer">Profile</li>
                  <li className="px-4 py-4 cursor-pointer">Dashboard</li>
                  <li className="px-4 py-4 cursor-pointer">My store</li>
                </ul>
              </div>
            )}
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
