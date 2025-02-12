import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Change navbar background based on the page
  const isHomePage = location.pathname === '/';
  const navBg = isHomePage ? 'bg-transparent' : 'bg-white shadow-md';
  const linkColor = isHomePage ? 'text-white' : 'text-black';
  const hoverColor = isHomePage ? 'hover:text-[#00efdf]' : 'hover:text-[#00efdf]';

  return (
    <nav className={`fixed top-0 left-0 w-full px-4 sm:px-8 py-4 z-20 transition duration-300 ${navBg}`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-[#00efdf] w-10 h-10 flex items-center justify-center rounded-lg">
            <div className="relative w-5 h-5 border-b-4 border-white rounded-full"></div>
          </div>
          <div className={`text-lg sm:text-xl font-bold ${linkColor}`}>
            THE SMILE SPACE
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5 text-sm font-medium">
          <Link to="/" className={`${linkColor} ${hoverColor} transition duration-200`}>
            HOME
          </Link>
          <Link to="/services" className={`${linkColor} ${hoverColor} transition duration-200`}>
            SERVICES
          </Link>
          <Link to="/doctors" className={`${linkColor} ${hoverColor} transition duration-200`}>
            DOCTORS
          </Link>
          <Link to="/team" className={`${linkColor} ${hoverColor} transition duration-200`}>
            TEAM
          </Link>
          <Link to="/Contact" className={`${linkColor} ${hoverColor} transition duration-200`}>
            CONTACT US
          </Link>
        </div>

        {/* Appointment Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/appointment"
            className="px-4 py-2 text-sm bg-black text-white font-semibold rounded-lg hover:bg-[#00efdf] transition duration-300"
          >
            MAKE APPOINTMENT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-xl focus:outline-none ${linkColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-black bg-opacity-90 py-4 flex flex-col items-center space-y-4 text-base`}
      >
        <Link to="/" className="text-white hover:text-[#00efdf]" onClick={() => setIsOpen(false)}>
          HOME
        </Link>
        <Link to="/services" className="text-white hover:text-[#00efdf]" onClick={() => setIsOpen(false)}>
          SERVICES
        </Link>
        <Link to="/doctors" className="text-white hover:text-[#00efdf]" onClick={() => setIsOpen(false)}>
          DOCTORS
        </Link>
        <Link to="/team" className="text-white hover:text-[#00efdf]" onClick={() => setIsOpen(false)}>
          TEAM
        </Link>
        <Link to="/contact" className="text-white hover:text-[#00efdf]" onClick={() => setIsOpen(false)}>
          CONTACT US
        </Link>
        <Link
          to="/appointment"
          className="px-5 py-2 bg-white text-black font-semibold rounded-lg hover:bg-[#00efdf] transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          MAKE APPOINTMENT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
