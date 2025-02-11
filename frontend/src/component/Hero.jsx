import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../images/rectangle_4.jpg';

function Hero() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center px-6 sm:px-12 lg:px-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl text-left">
        <p className="text-[#00efdf] font-bold text-lg sm:text-xl md:text-2xl tracking-[4px] mb-4 sm:mb-6">
          24/7 EMERGENCY SERVICE
        </p>

        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 sm:mb-8">
          Caring for <span className="text-[#00efdf]">Dental</span> <br />
          Caring for You
        </h1>

        <p className="text-white font-medium text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-[600px] leading-relaxed">
          A brief statement outlining the purpose and mission of the clinic.
          This can include the commitment to patient care and community dental
          care.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            to="/appointment"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-[#00efdf] text-white font-bold rounded-lg text-lg sm:text-xl hover:bg-[#00cfcf] transition-all duration-300"
          >
            Book Appointment
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-bold rounded-lg text-lg sm:text-xl hover:bg-[#00efdf] transition-all duration-300"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
