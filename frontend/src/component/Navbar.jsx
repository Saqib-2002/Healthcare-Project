import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full px-6 sm:px-10 py-5 bg-transparent z-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#00efdf] w-14 h-14 flex items-center justify-center rounded-lg">
            <div className="relative w-6 h-6 border-b-4 border-white rounded-full"></div>
          </div>
          <div className="text-white text-2xl sm:text-3xl font-extrabold">
            THE SMILE SPACE
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link to="/" className="text-white hover:text-[#00efdf] transition duration-200">
            HOME
          </Link>
          <Link to="/services" className="text-white hover:text-[#00efdf] transition duration-200">
            SERVICES
          </Link>
          <Link to="/doctors" className="text-white hover:text-[#00efdf] transition duration-200">
            DOCTORS
          </Link>
          <Link to="/team" className="text-white hover:text-[#00efdf] transition duration-200">
            TEAM
          </Link>
          <Link to="/contact" className="text-white hover:text-[#00efdf] transition duration-200">
            CONTACT US
          </Link>
        </div>

        {/* Appointment Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/appointment"
            className="px-6 py-3 text-lg bg-white text-black font-bold rounded-lg hover:bg-[#00efdf] transition duration-300"
          >
            MAKE APPOINTMENT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-20 left-0 w-full bg-black bg-opacity-90 py-6 flex flex-col items-center space-y-6 text-xl`}
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
          className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-[#00efdf] transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          MAKE APPOINTMENT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
