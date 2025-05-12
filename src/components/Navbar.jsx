import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaUserCircle } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext'; // Import the theme context

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function from context

  return (
    <nav className={`p-4 fixed w-full top-0 left-0 z-10 shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold">SoftSell</h1>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="how-it-works" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
              How It Works
            </Link>
          </li>
          <li>
            <Link to="why-choose-us" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Theme Toggle and User Dropdown */}
        <div className="flex items-center space-x-6">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="text-lg focus:outline-none">
            {theme === 'dark' ? '🌙' : '🌞'} {/* Icon based on theme */}
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="focus:outline-none"
            >
              <FaUserCircle className="text-3xl hover:text-yellow-300 transition" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black dark:bg-gray-800 dark:text-white rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
